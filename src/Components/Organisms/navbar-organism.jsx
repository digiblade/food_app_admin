import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
function NavbarOrganism() {
  return (
    <div className="w-full bg-white shadow-md relative flex justify-between items-center p-3 h-20">
      <div className="text-xl font-medium flex items-center gap-6">
       <span className="hidden lg:inline">Welcome Back, Akash.</span> 
        <form className="w-32 md:w-64 lg:w-96">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full max-w-lg p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex gap-3">
        <span className="font-medium text-sm flex gap-1 items-center">
          Akash <KeyboardArrowDownOutlinedIcon />
        </span>
        <NotificationsNoneOutlinedIcon color="disabled"></NotificationsNoneOutlinedIcon>
      </div>
    </div>
  );
}

export default NavbarOrganism;
