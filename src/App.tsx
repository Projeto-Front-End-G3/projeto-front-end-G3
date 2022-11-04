import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import AppRouter from "./routes/routes";
import Providers from "./contexts";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Providers>
        <AppRouter />
      </Providers>
    </>
  );
};

export default App;
