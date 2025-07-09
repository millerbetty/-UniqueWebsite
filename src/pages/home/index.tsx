import React, {useEffect } from "react";

const Home= () => {

  useEffect(() => {
    return () => {};
  }, []);

  return <div>'content'</div>;
};

Home.displayName = "Home";
export default Home;

