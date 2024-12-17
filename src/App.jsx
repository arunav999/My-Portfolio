import React from "react";

import Header from "./Components/Header component/Header";
import Main from "./Components/Main component/Main";
import Footer from "./Components/Footer Component/Footer";

import "./index.css";
import "./colors.css";
import "./responsive.css";
import MetaTags from "./Components/Meta tags/MetaTags";

function App() {
  return (
    <>
      <MetaTags />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
