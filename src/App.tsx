import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './components/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <Container maxWidth="xl">
    <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            AYA APP MANGER
          </Typography>
        </Toolbar>
      </AppBar>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </Container>);
  }
export default App;