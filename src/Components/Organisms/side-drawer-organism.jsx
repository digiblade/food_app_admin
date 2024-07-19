import React from "react";
import ListItemMolecule from "../Molecules/list-item-molecule";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReceiptIcon from "@mui/icons-material/Receipt";

export default function SideDrawerOrganism(props) {
  let { activePage } = props;
  let listItems = [
    {
      leading: <DashboardIcon />,
      active: true,
      label: "Dashboard",
      navigateTo: "/dashboard",
    },

    {
      leading: <CalendarMonthIcon />,
      active: true,
      label: "Restaurant",
      navigateTo: "/restaurant",
    },
    {
      leading: <GroupIcon />,
      active: true,
      label: "Users",
      navigateTo: "/users",
    },
    
   
    {
      leading: <AssessmentIcon />,
      active: true,
      label: "Reports",
      navigateTo: "/reports",
    },
    {
      leading: <FeedbackIcon />,
      active: true,
      label: "Feedbacks",
      navigateTo: "/feedbacks",
    },

    {
      leading: <ReceiptIcon />,
      active: true,
      label: "Payments",
      navigateTo: "/payments",
    },
  ];
  return (
    <div className="h-full overflow-auto lg:flex hidden lg:w-80 ">
      <div className="flex justify-center flex-col items-center w-full">
        <div className="h-full w-full bg-white shadow-lg">
          <div className="text-sm font-semibold h-20  bg-white w-full flex justify-center items-center">
            Logo admin
          </div>
          <hr />
          <div className="p-2">
            <span className="text-gray-400 uppercase mb-2">Menu</span>
            {listItems.map((item) => (
              <ListItemMolecule
                leading={item.leading}
                label={item.label}
                navigateTo={item.navigateTo}
                active={
                  activePage &&
                  item.label.toLocaleLowerCase() ===
                    activePage.toLocaleLowerCase()
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
