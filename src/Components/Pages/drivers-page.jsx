import React from "react";
import MainScreenOrganism from "../Organisms/main-screen-organism";
import TableChartMolecule from "../Molecules/table-chart-molecule";
import SimpleModalOrganism from "../Organisms/Modal/simple-modal-organism";

export default function DriverPage() {
  let bookingTableHeaders = [
    {
      label: "Driver Id",
    },
    {
      label: "Name",
    },
    {
      label: "Mobile Number",
    },
    {
      label: "Rating",
    },
    {
      label: "Tips",
    },
    {
      label: "Total Earning",
    },
  ];
  let bookingData = [
    {
      "Driver Id": "DVR001",
      Name: "William Rob",
      "Mobile Number": "+91-1234567890",
      Rating: "5",
      Tips: "500",
      "Total Earning": "₹ 1000/-",
    },
    {
      "Driver Id": "DVR002",
      Name: "Emma Watson",
      "Mobile Number": "+91-9876543210",
      Rating: "4.8",
      Tips: "250",
      "Total Earning": "₹ 700/-",
    },
    {
      "Driver Id": "DVR003",
      Name: "David Lee",
      "Mobile Number": "+91-8765432190",
      Rating: "4.7",
      Tips: "300",
      "Total Earning": "₹ 850/-",
    },
    {
      "Driver Id": "DVR004",
      Name: "Olivia Jones",
      "Mobile Number": "+91-7654321089",
      Rating: "4.9",
      Tips: "150",
      "Total Earning": "₹ 600/-",
    },
    {
      "Driver Id": "DVR005",
      Name: "Noah Brown",
      "Mobile Number": "+91-6543210789",
      Rating: "4.6",
      Tips: "400",
      "Total Earning": "₹ 900/-",
    },
    {
      "Driver Id": "DVR006",
      Name: "Sophia Garcia",
      "Mobile Number": "+91-5432109876",
      Rating: "4.8",
      Tips: "200",
      "Total Earning": "₹ 650/-",
    },
    {
      "Driver Id": "DVR007",
      Name: "Mia Hernandez",
      "Mobile Number": "+91-4321087654",
      Rating: "4.7",
      Tips: "350",
      "Total Earning": "₹ 800/-",
    },
    {
      "Driver Id": "DVR008",
      Name: "Daniel Davis",
      "Mobile Number": "+91-3210765432",
      Rating: "4.9",
      Tips: "100",
      "Total Earning": "₹ 550/-",
    },
    {
      "Driver Id": "DVR009",
      Name: "Emily Garcia",
      "Mobile Number": "+91-2109876543",
      Rating: "4.6",
      Tips: "280",
      "Total Earning": "₹ 750/-",
    },
  ];

  const [isAddOpen, setIsAddOpen] = React.useState(false);

  return (
    <div>
      <MainScreenOrganism activePage="Drivers">
        <button
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          className="mb-4 block text-white font-medium bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-100  rounded-lg text-sm px-5 py-2.5 text-center "
          type="button"
          onClick={() => {
            setIsAddOpen(true);
          }}
        >
          Add Driver+
        </button>
        <div className="grid grid-cols-4 gap-4">
          <form className="max-w-md mx-auto w-full">
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
                id="default-search"
                className="block w-full p-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>

          <form className="max-w-sm mx-auto w-full h-full">
            <select
              id="categories"
              className="block w-full py-4 px-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option selected>Choose Vehicle Type</option>
              <option value="US">2 Wheeler</option>
              <option value="CA">3 Wheeler</option>
              <option value="FR">4 Wheeler</option>
              <option value="DE">4 Wheeler electric</option>
            </select>
          </form>
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker
              id="default-datepicker"
              type="text"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Booking date"
            />
          </div>
          <div className="flex justify-center items-center bg-orange-500 text-white font-medium rounded-lg">
            Clear Filter
          </div>
        </div>
        <TableChartMolecule
          headers={bookingTableHeaders}
          content={bookingData}
        />

        <SimpleModalOrganism
          isOpen={isAddOpen}
          title={"Create new product"}
          content={
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="+91-xxxxx xxxxx"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option selected="">Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add new Driver
              </button>
            </form>
          }
          handleOpen={(value) => {
            setIsAddOpen(value);
          }}
        ></SimpleModalOrganism>
      </MainScreenOrganism>
    </div>
  );
}
