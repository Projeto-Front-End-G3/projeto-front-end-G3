import { ToastContainer } from "react-toastify";

import GlobalStyle from "./styles/global";
import Providers from "./contexts";
import Loading from "./components/Loading";
import AppRouter from "./routes/routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
        <Providers>
          <Loading>
            <AppRouter />
          </Loading>
        </Providers>
    </>
  );
};

export default App;
