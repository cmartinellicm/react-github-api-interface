import { useContext, useState, useEffect } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Button, Stack, Grid } from '@mui/material';
import RepositoryItem from './RepositoryItem';

export default function Repositories() {
    const { githubState, getUserRepos, getUserStarred } = useContext(GithubContext);
    const [showRepositories, setShowRepositories] = useState(false);
    const [showStarred, setShowStarred] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
    }, [githubState.user.login]);

    const submitGetRepositories = () => {
        setShowStarred(false);
        setShowRepositories(true);
    };

    const submitGetStarred = () => {
        setShowRepositories(false);
        setShowStarred(true);
    };

    return (
        <section>
            {githubState.hasUser && (
                <>
                    <Stack direction='row' spacing={2}>
                        <Button variant='outlined' size='small' type='sumbit' onClick={submitGetRepositories}>
                            Repositories
                        </Button>
                        <Button variant='outlined' size='small' type='sumbit' onClick={submitGetStarred}>
                            Starred
                        </Button>
                    </Stack>

                    <Grid container spacing={2} mt={2}>
                        {showRepositories &&
                            githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    fullName={item.full_name}
                                    description={item.description}
                                    linkToRepo={item.html_url}
                                />
                            ))}
                    </Grid>

                    <Grid container spacing={2} mt={2}>
                        {showStarred &&
                            githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    fullName={item.full_name}
                                    description={item.description}
                                    linkToRepo={item.html_url}
                                />
                            ))}
                    </Grid>
                </>
            )}
        </section>
    );
}
