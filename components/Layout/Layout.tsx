import React from "react";
import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-2 lg:px-4">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
