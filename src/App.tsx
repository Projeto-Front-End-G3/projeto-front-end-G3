import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import AppRouter from "./routes/routes";
import Providers from "./contexts";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer />
      <Providers>
        <AppRouter />
      </Providers>
    </div>
  );
};

export default App;
