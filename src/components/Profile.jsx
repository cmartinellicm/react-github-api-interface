import { useContext } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Avatar, Link, Stack } from '@mui/material';

export default function Profile() {
    const { githubState } = useContext(GithubContext);

    return (
        <section>
            <Stack direction='row' spacing={3}>
                <Avatar alt='User Avatar' src={githubState.user.avatar} sx={{ width: 200, height: 200 }} />
                <Stack spacing={2}>
                    <h1>{githubState.user.name}</h1>
                    <Stack direction='row' spacing={1}>
                        <h3>Username:</h3>
                        <Link href={githubState.user.html_url} target='_blank' rel='noreferrer'>
                            {githubState.user.login}
                        </Link>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                        <h3>Company:</h3>
                        <span>{githubState.user.company}</span>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                        <h3>Blog:</h3>
                        <Link href={githubState.user.blog} target='_blank' rel='noreferrer'>
                            {githubState.user.blog}
                        </Link>
                    </Stack>

                    <Stack direction='row' spacing={2}>
                        <Stack spacing={1}>
                            <h4>Followers</h4>
                            <span>{githubState.user.followers}</span>
                        </Stack>
                        <Stack spacing={1}>
                            <h4>Followings</h4>
                            <span>{githubState.user.following}</span>
                        </Stack>
                        <Stack spacing={1}>
                            <h4>Gists</h4>
                            <span>{githubState.user.public_gists}</span>
                        </Stack>
                        <Stack spacing={1}>
                            <h4>Repos</h4>
                            <span>{githubState.user.public_repos}</span>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </section>
    );
}
