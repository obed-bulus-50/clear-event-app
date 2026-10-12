import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";


const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet/>
      </main>
      <footer>
        &copy;{new Date().getFullYear()} My App. All rights reserved.
      
      </footer>
    
      
    </div>
  );
};

export default RootLayout;
