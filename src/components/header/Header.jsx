import React from "react";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
import "./header.css";
import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container header_container" id="home">
        <FaLaptopCode fontSize={"3rem"} />

        <h1>Ifeoluwa Dele-Oyero</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">{/* <img src={myPic} alt="Myself" /> */}</div>
      </div>
    </header>
  );
};

export default Header;
