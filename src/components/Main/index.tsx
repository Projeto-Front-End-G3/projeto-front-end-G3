import { MainContainer } from "./style";
import DefaultStart from "./DefaultStart";
import DefaultAboutUs from "./DefaultAboutUs";
import DefaultDoubts from "./DefaultDoubts";
import DefaultServices from "./DefaultServices";

const Main = () => {
  return (
    <>
      <MainContainer>
        <DefaultStart />
        <DefaultServices />
        <DefaultAboutUs />
        <DefaultDoubts />
      </MainContainer>
    </>
  );
};

export default Main;
