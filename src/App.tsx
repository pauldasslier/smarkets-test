import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './components';
import RootRouter from './RootRouter';
import theme from './theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AppLayout>
                <RootRouter />
            </AppLayout>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
