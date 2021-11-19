import { useContext } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Avatar, Stack } from '@mui/material';

export default function Profile() {
    const { githubState } = useContext(GithubContext);

    return (
        <Stack direction='row' spacing={2}>
            <Avatar alt='User Avatar' src={githubState.user.avatar} />
        </Stack>
    );
}
