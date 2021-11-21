import { useContext, useState } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Button, TextField, Stack } from '@mui/material';

export default function Header() {
    const { getUser } = useContext(GithubContext);
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (usernameForSearch) return getUser(usernameForSearch);
    };

    return (
        <header>
            <Stack spacing={2} direction='row'>
                <TextField
                    label='Type username'
                    variant='outlined'
                    size='small'
                    onChange={(event) => setUsernameForSearch(event.target.value)}
                />
                <Button variant='outlined' size='small' type='sumbit' onClick={submitGetUser}>
                    Search
                </Button>
            </Stack>
        </header>
    );
}
