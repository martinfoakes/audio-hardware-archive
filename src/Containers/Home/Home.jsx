import React from "react";

import { HomeLink } from "../../Components";
import RolandTr909 from "../../Img/device-images/roland-tr-909.jpeg";
import RolandTr808 from "../../Img/device-images/roland-tr-808.png";
import RolandTr707 from "../../Img/device-images/roland-tr-707.jpeg";
import { UList } from "./styles/styles";

const Home = () => (
  <>
    <UList>
      <HomeLink link="/tr-707" text="Roland TR-707" img={RolandTr707} alt="" />
      <HomeLink link="/tr-808" text="Roland TR-808" img={RolandTr808} alt="" />
      <HomeLink link="/tr-909" text="Roland TR-909" img={RolandTr909} alt="" />
    </UList>
  </>
);

export default Home;
