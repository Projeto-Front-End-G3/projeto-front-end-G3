import AnnouncementContext from "./contexts/AnnouncementContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import AppRouter from "./routes/routes";
import Providers from "./contexts";
import GlobalLoading from "./components/GlobalLoading";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
      <AnnouncementContext>
        <Providers>
          <GlobalLoading>
            <AppRouter />
          </GlobalLoading>
        </Providers>
      </AnnouncementContext>
    </>
  );
};

export default App;
