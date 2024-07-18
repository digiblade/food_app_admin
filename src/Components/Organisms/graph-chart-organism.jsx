// import React from "react";
// import HighchartsReact from "highcharts-react-official";
// import Highcharts from "highcharts";

// function GraphChartOrganism({ chartType }) {
//   const [chartOptions, setChartOptions] = React.useState({});

//   React.useEffect(() => {
//     const generateChartData = () => {
//       const categories = ["Jan", "Feb", "Mar", "Apr", "May"];
//       switch (chartType) {
//         case "bar":
//           return {
//             chart: {
//               type: "column",
//             },
//             title: {
//               text: "Bar Chart",
//             },
//             xAxis: {
//               categories,
//             },
//             yAxis: {
//               title: {
//                 text: "Values",
//               },
//             },
//             series: [
//               {
//                 name: "Data",
//                 data: [8, 12, 10, 15, 9],
//               },
//             ],
//           };
//         case "line":
//           return {
//             chart: {
//               type: "line",
//             },
//             title: {
//               text: "Line Chart",
//             },
//             xAxis: {
//               categories,
//             },
//             yAxis: {
//               title: {
//                 text: "Values",
//               },
//             },
//             series: [
//               {
//                 name: "Data",
//                 data: [4, 7, 2, 8, 5],
//               },
//             ],
//           };
//         case "pie":
//           return {
//             chart: {
//               type: "pie",
//             },
//             title: {
//               text: "Pie Chart",
//             },
//             series: [
//               {
//                 name: "Data",
//                 colorByPoint: true,
//                 data: [
//                   { name: "Category 1", y: 60 },
//                   { name: "Category 2", y: 25 },
//                   { name: "Category 3", y: 15 },
//                 ],
//               },
//             ],
//           };
//         case "scatter":
//           return {
//             chart: {
//               type: "scatter",
//             },
//             title: {
//               text: "Scatter Chart",
//             },
//             xAxis: {
//               title: {
//                 text: "X-axis",
//               },
//             },
//             yAxis: {
//               title: {
//                 text: "Y-axis",
//               },
//             },
//             series: [
//               {
//                 name: "Data",
//                 data: [
//                   [1, 5],
//                   [2, 3],
//                   [4, 8],
//                   [5, 2],
//                 ],
//               },
//             ],
//           };

//         default:
//           return null;
//       }
//     };

//     setChartOptions(generateChartData());
//   }, [chartType]);

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-1">
//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//     </div>
//   );
// }

// export default GraphChartOrganism;
