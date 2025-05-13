import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";
import Cursor from "./Cursor";

const Layout = ({ children }) => {
 

  return (
    <div className=" min-h-screen flex flex-col ">
      <Preloader />
      {/* <Cursor /> */}
      <Header />
      <main className="flex-grow h-full  mx-auto  flex flex-col justify-start w-full ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;