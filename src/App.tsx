import { ToastContainer } from "react-toastify";

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
