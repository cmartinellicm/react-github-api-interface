import { useContext } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Button, Stack } from '@mui/material';

export default function Repositories() {
    const { githubState, getUserRepos, getUserStarred } = useContext(GithubContext);
    console.log(githubState);
    return (
        <section>
            {githubState.hasUser && (
                <Stack direction='row' spacing={2}>
                    <Button variant='outlined' size='small' type='sumbit'>
                        Repositories
                    </Button>
                    <Button variant='outlined' size='small' type='sumbit'>
                        Starred
                    </Button>
                </Stack>
            )}
        </section>
    );
}
