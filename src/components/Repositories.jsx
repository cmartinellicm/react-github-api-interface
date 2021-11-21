import { useContext, useEffect } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Button, Stack } from '@mui/material';
import RepositoryItem from './RepositoryItem';

export default function Repositories() {
    const { githubState, getUserRepos, getUserStarred } = useContext(GithubContext);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
    }, [githubState.user.login]);

    return (
        <section>
            {githubState.hasUser && (
                <>
                    <Stack direction='row' spacing={2}>
                        <Button variant='outlined' size='small' type='sumbit'>
                            Repositories
                        </Button>
                        <Button variant='outlined' size='small' type='sumbit'>
                            Starred
                        </Button>
                    </Stack>
                    {githubState.repositories.map((item) => (
                        <RepositoryItem
                            key={item.id}
                            name={item.name}
                            fullName={item.full_name}
                            description={item.description}
                            linkToRepo={item.html_url}
                        />
                    ))}
                </>
            )}
        </section>
    );
}
