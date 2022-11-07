import { useEffect, useState } from "react";

import DefaultHeader from "../../components/DefaultHeader";
import DefaultMenu from "../../components/DefaultMenu";
import DefaultMain from "../../components/DefaultMain";
import Header from "../../components/Header";

const DefaultHome = () => {
  return (
    <>
      <DefaultHeader />
      <DefaultMenu />
      <DefaultMain />
    </>
  );
};

export default DefaultHome;
