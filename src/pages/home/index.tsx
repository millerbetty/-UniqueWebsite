import React, {useEffect } from "react";
import Head from "./Head";
import Content from "./content";
const Home= () => {

  useEffect(() => {
    return () => {};
  }, []);

  return <div>
    <Head/>
    <Content/>
  </div>;
};

Home.displayName = "Home";
export default Home;

