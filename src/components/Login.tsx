import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';

type User = {
    username: string;
    password: string;
}

function Login() {
    const [user, setUser] = useState<User>({
        username: '',
        password: ''
        });

    const [isAuthenticated, setAuth] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
    setUser({...user,
    [event.target.name] : event.target.value
            });
    }
    const handleLogin = () => {
        axios.post(import.meta.env.VITE_API_URL + "authenticate", user, {
        headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            console.log(res);
            const jwtToken = res.data.accessToken;
        if (jwtToken !== null) {
            console.log(res.data.accessToken)
            sessionStorage.setItem("jwt", jwtToken);
            setAuth(true);
        } })
        .catch(err => console.error(err));
    }


        if (isAuthenticated) {
            return "List";
                            }
        else {
            return(<Stack spacing={2} alignItems="center" mt={2}>
            <TextField  name="username" label="Username" onChange={handleChange} />
            <TextField type="password" name="password" label="Password" onChange={handleChange} />
            <Button variant="outlined" color="primary" onClick={handleLogin}>
                Login
            </Button>
                    </Stack>);
        }
        }
export default Login;