import { useEffect, useState } from "react";

import DefaultHeader from "../../components/DefaultHeader";
import DefaultHeader2 from "../../components/DefaultHeader/DefaultHeader2";
import DefaultMenu from "../../components/DefaultMenu";
import DefaultMain from "../../components/DefaultMain";

const DefaultHome = () => {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreen = () => setScreen(window.innerWidth);
    window.addEventListener("resize", handleScreen);

    return () => window.removeEventListener("resize", handleScreen);
  }, []);

  return (
    <>
      {screen >= 1024 ? <DefaultHeader2 /> : <DefaultHeader />}
      <DefaultMenu />
      <DefaultMain />
    </>
  );
};

export default DefaultHome;
