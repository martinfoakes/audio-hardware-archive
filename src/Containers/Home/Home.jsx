import React from "react";

import HomeLink from "../../Components/HomeLink/HomeLink";
import RolandTr909 from "../../Img/device-images/roland-tr-909.jpg";
import { UList } from "./styles/styles";

const Home = () => (
  <>
    <UList>
      <HomeLink link="/tr-909" text="Roland TR-909" img={RolandTr909} alt="" />
    </UList>
  </>
);

export default Home;
