import React from "react";
import MainScreenOrganism from "../Organisms/main-screen-organism";
import TableChartMolecule from "../Molecules/table-chart-molecule";

export default function BookingsPage() {
  let bookingTableHeaders = [
    {
      label: "Rider",
    },
    {
      label: "Booking Date",
    },
    {
      label: "Driver",
    },
    {
      label: "Vehicle Type",
    },
    {
      label: "Payment Type",
    },
    {
      label: "Status",
    },
  ];
  let bookingData = [
    {
      Rider: "Jane Doe", // Existing entry
      "Booking Date": "10/12/2023",
      Driver: "Michael Thompson", // Existing entry
      "Vehicle Type": "Wagon R",
      "Payment Type": "UPI",
      Status: "Active"
    },
    {
      Rider: "Olivia Rodriguez",
      "Booking Date": "01/01/2024",
      Driver: "Charles Anderson",
      "Vehicle Type": "Sedan",
      "Payment Type": "Cash",
      Status: "Pending"
    },
    {
      Rider: "William Miller",
      "Booking Date": "01/01/2024",
      Driver: "Sarah Lee",
      "Vehicle Type": "SUV",
      "Payment Type": "Card",
      Status: "Completed"
    },
    {
      Rider: "Elizabeth Moore",
      "Booking Date": "01/02/2024",
      Driver: "David Young",
      "Vehicle Type": "Hatchback",
      "Payment Type": "UPI",
      Status: "Confirmed"
    },
    {
      Rider: "Benjamin Jones",
      "Booking Date": "01/02/2024",
      Driver: "Emily Garcia",
      "Vehicle Type": "Luxury Car",
      "Payment Type": "Wallet",
      Status: "Cancelled"
    },
    {
      Rider: "Sophia Garcia",
      "Booking Date": "01/03/2024",
      Driver: "Matthew Walker",
      "Vehicle Type": "Van",
      "Payment Type": "Cash",
      Status: "Pending"
    },
    {
      Rider: "Noah Brown",
      "Booking Date": "01/03/2024",
      Driver: "Amanda Hernandez",
      "Vehicle Type": "Motorcycle",
      "Payment Type": "Card",
      Status: "Completed"
    },
    {
      Rider: "Mia Hernandez",
      "Booking Date": "01/04/2024",
      Driver: "Christopher King",
      "Vehicle Type": "Sedan",
      "Payment Type": "UPI",
      Status: "Active"
    },
    {
      Rider: "Daniel Davis",
      "Booking Date": "01/04/2024",
      Driver: "Jennifer Miller",
      "Vehicle Type": "SUV",
      "Payment Type": "Wallet",
      Status: "Confirmed"
    }
  ];
  return (
    <div>
      <MainScreenOrganism activePage="Bookings">
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
      </MainScreenOrganism>
    </div>
  );
}
