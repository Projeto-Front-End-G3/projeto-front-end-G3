import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';
import AppRouter from './routes/routes';
import Providers from './contexts';
import UserProviderNormal from './contexts/UserContextNormal';

const App = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <UserProviderNormal>
      <Providers>
        <AppRouter />
      </Providers>
    </UserProviderNormal>
  </>
);

export default App;
