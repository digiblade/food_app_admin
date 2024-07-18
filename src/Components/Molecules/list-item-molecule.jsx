import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
function ListItemMolecule(props) {
  const { active, label = "Default", leading, navigateTo } = props;
  const navigate = useNavigate();
  return (
    <div
      className="py-1 px-2 cursor-pointer"
      onClick={() => {
        if (navigateTo) navigate(navigateTo);
      }}
    >
      <div
        className={`flex justify-between items-center  ${
          active && "bg-gray-100"
        } rounded-md`}
      >
        <div
          className={`flex items-center gap-4 font-medium p-2 ${
            !active && "text-gray-500 text-md"
          }  `}
        >
          <span
            className={` ${
              active ? "text-white bg-orange-500" : "border"
            } py-1 px-2 rounded-lg `}
          >
            {leading}
          </span>
          {label}
        </div>
        {active && (
          <div className="relative w-8 overflow-hidden">
            <div className="rounded-full bg-orange-500 h-8 w-8 ml-4"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListItemMolecule;
