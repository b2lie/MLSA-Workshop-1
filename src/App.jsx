/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 * and if you dont have a resume just use the sample for now
 * but its stupid that you dont have a resume make one ASAP
 */
const siteProps = {
  name: "Syeda Batool Kazmi",
  title: "Student",
  email: "batoolmao@gmail.com",
  gitHub: "b2lie",
  instagram: "bbatol.k",
  linkedIn: "",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#FFB6C1";
const secondaryColor = "#CBC3E3";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
