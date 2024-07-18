import React from "react";
import SideDrawerOrganism from "./side-drawer-organism";
import NavbarOrganism from "./navbar-organism";

function MainScreenOrganism(props) {
  let { activePage, children } = props;
  return (
    <div className="h-screen bg-gray-100 overflow-auto flex">
      <SideDrawerOrganism activePage={activePage}></SideDrawerOrganism>
      <div className="w-full overflow-auto">
        <NavbarOrganism></NavbarOrganism>
        <main className="overflow-auto p-4">
          <div className="font-semibold text-3xl mb-4">{activePage}</div>
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainScreenOrganism;
