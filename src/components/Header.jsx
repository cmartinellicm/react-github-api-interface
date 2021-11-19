import { useContext, useState } from 'react';
import { GithubContext } from '../providers/github-provider';
import { Button, Input } from '@mui/material';

export default function Header() {
    const { getUser } = useContext(GithubContext);
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <Input placeholder='Digite o username' onChange={(event) => setUsernameForSearch(event.target.value)} />
            <Button variant='outlined' type='sumbit' onClick={submitGetUser}>
                Pesquisar
            </Button>
        </header>
    );
}
