import React from "react";
import MainScreenOrganism from "../Organisms/main-screen-organism";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import KPICardMolecule from "../Molecules/kpi-card-molecule";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import MapIcon from "@mui/icons-material/Map";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import GraphChartOrganism from "../Organisms/graph-chart-organism";
export default function DashboardPage() {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    category:[],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  let KPIList = [
    {
      icon: <LocalTaxiIcon fontSize="large" />,
      label: "Total Rides",
      value: 174,
    },
    {
      icon: <DoDisturbAltIcon fontSize="large" />,
      label: "Canceled Rides",
      value: 20,
    },
    {
      icon: <MapIcon fontSize="large" />,
      label: "Active Rides",
      value: 154,
    },
    {
      icon: <AccountBalanceWalletIcon fontSize="large" />,
      label: "Total Earning",
      value: "₹ 6573.8 /-",
    },
  ];
  return (
    <div>
      <MainScreenOrganism activePage="Dashboard">
        <div className="grid grid-cols-4 gap-4">
          {KPIList.map((kpi) => (
            <KPICardMolecule
              icon={kpi.icon}
              label={kpi.label}
              value={kpi.value}
            ></KPICardMolecule>
          ))}
          {/* <GraphChartOrganism chartType="bar"/>
          <GraphChartOrganism chartType="line"/>
          <GraphChartOrganism chartType="pie"/>
          <GraphChartOrganism chartType="scatter"/> */}

        </div>
      </MainScreenOrganism>
    </div>
  );
}
