import React from "react";
import MainScreenOrganism from "../Organisms/main-screen-organism";
import TableChartMolecule from "../Molecules/table-chart-molecule";
import SimpleModalOrganism from "../Organisms/Modal/simple-modal-organism";
import MTableSkeleton from "../Molecules/m-table-skeleton";
import { apiHelper } from "../../utils";
import MManageRestaurantForm from "../Molecules/m-manage-restaurant-form";
import ASolidButton from "../Atoms/Button/a-solid-button";
export default function PRestaurantManagement() {
  let bookingTableHeaders = [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "description",
      label: "Description",
      className: "w-1/4",
    },
    {
      id: "address",
      label: "Location",
    },
    {
      id: "phone",
      label: "Phone",
    },
    {
      showInMobileOnly: true,
      id: "email",
      label: "Email",
    },
    {
      showInMobileOnly: true,
      id: "tags",
      label: "Tags",
    },
    {
      showInMobileOnly: true,
      id: "delivery",
      label: "Delivery Options",
    },
    {
      showInMobileOnly: false,
      id: "payment",
      label: "Payment Methods",
    },
  ];
  const requiredFormFields = ["name", "phone", "address"];
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [restaurantData, setRestaurantData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [addFormData, setAddFormData] = React.useState({});
  const [editFormData, setEditFormData] = React.useState({});
  const [invalidError, setInvalidError] = React.useState(false);
  const [filterParams, setFilterParams] = React.useState({});

  const fetchRestaurantData = async () => {
    setLoading(true);
    try {
      let responseData = await apiHelper("/restaurants");
      setRestaurantData(responseData.data || []);
    } catch (error) {
      console.log("error:", error);
    }
    setLoading(false);
  };
  const addRestaurantData = async () => {
    // setLoading(true);
    if (!validationCheck(addFormData)) {
      setInvalidError(true);
      return;
    }
    setInvalidError(false);
    try {
      await apiHelper("/restaurants", "POST", addFormData);
      fetchRestaurantData();
      setAddFormData({});
      setInvalidError(false);
      setIsAddOpen(false);
    } catch (error) {
      console.log("error:", error);
    }
    // setLoading(false);
  };
  const deleteRestaurantData = async (userData) => {
    setLoading(true);
    setRestaurantData([]);
    setInvalidError(false);
    let { id } = userData;
    try {
      await apiHelper(`/restaurants/${id}`, "DELETE");
      fetchRestaurantData();
    } catch (error) {
      console.log("error:", error);
    }
  };
  const editRestaurantData = async () => {
    // setLoading(true);
    if (!validationCheck(editFormData)) {
      setInvalidError(true);
      return;
    }
    setInvalidError(false);
    let { id, ...restPayload } = editFormData;
    try {
      await apiHelper(`/restaurants/${id}`, "PUT", restPayload);
      fetchRestaurantData();
      setEditFormData({});
      setInvalidError(false);
      setIsEditOpen(false);
    } catch (error) {
      console.log("error:", error);
    }
    // setLoading(false);
  };
  const handleValueChange = (event) => {
    let { id, value } = event.target;
    let tempFormData = {
      ...addFormData,
      [id]: value,
    };
    setAddFormData(tempFormData);
  };
  const handleEditValueChange = (event) => {
    let { id, value } = event.target;
    let tempFormData = {
      ...editFormData,
      [id]: value,
    };
    setEditFormData(tempFormData);
  };
  const validationCheck = (formData) => {
    let isValid = true;
    for (let field of requiredFormFields) {
      if (!formData || !formData[field]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  const handleFilters = (event) => {
    let { id, value } = event.target;
    let tempFormData = {
      ...filterParams,
      [id]: value,
    };
    setFilterParams(tempFormData);
  };

  React.useEffect(() => {
    fetchRestaurantData();
  }, []);

  return (
    <div>
      <MainScreenOrganism activePage="Restaurant">
        <button
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          className="mb-4 block text-white font-medium bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-100  rounded-lg text-sm px-5 py-2.5 text-center "
          type="button"
          onClick={() => {
            setIsAddOpen(true);
          }}
        >
          Add Restaurant +
        </button>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <form className=" mx-auto w-full">
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
                className="block w-full p-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Name, Tags..."
                onChange={handleFilters}
              />
            </div>
          </form>

          <form className="grid-cols-4 mx-auto w-full h-full ">
            <select
              id="delivery"
              className="block w-full py-4 px-4 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              onChange={handleFilters}
              value={filterParams.delivery}
            >
              <option selected value={""}>
                Choose Delivery
              </option>
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Pickup/Takeout">Pickup/Takeout</option>
              <option value="Contactless">Contactless</option>
            </select>
          </form>
          <form className=" mx-auto w-full h-full ">
            <select
              id="payment"
              className="block w-full py-4 px-4 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              onChange={handleFilters}
            >
              <option selected value="">
                Choose Payment
              </option>
              <option value="Online">Online</option>
              <option value="Cash">Cash</option>
              <option value="Highbred">Highbred</option>
            </select>
          </form>
          <button
            onClick={() => setFilterParams({})}
            className="flex justify-center items-center bg-orange-500 text-white font-medium rounded-lg py-2"
          >
            Clear Filter
          </button>
        </div>

        {loading ? (
          <div className="bg-white mt-2 shadow-sm rounded-lg">
            <MTableSkeleton></MTableSkeleton>
          </div>
        ) : (
          <TableChartMolecule
            headers={bookingTableHeaders}
            handleEditFormOpen={setIsEditOpen}
            handleEditFormData={setEditFormData}
            onDelete={deleteRestaurantData}
            content={restaurantData.filter((item) => {
              let isValid = true;
              if (
                (filterParams.search &&
                  !item.name
                    .toLowerCase()
                    .includes(filterParams.search.toLowerCase()) &&
                  !item.description
                    .toLowerCase()
                    .includes(filterParams.search.toLowerCase())) ||
                (filterParams.delivery &&
                  filterParams.delivery !== item.delivery) ||
                (filterParams.payment && filterParams.payment !== item.payment)
              ) {
                isValid = false;
              }
              return isValid;
            })}
          />
        )}

        {/* Add form */}
        <div className="h-1/2 overflow-auto p-4 w-2/3">
          <SimpleModalOrganism
            isOpen={isAddOpen}
            title={"Create new product"}
            content={
              <>
                <div className="px-4 py-2 font-medium text-sm text-red-500">
                  {invalidError && "Please fill all required fields"}
                </div>
                <MManageRestaurantForm
                  handleValueChange={handleValueChange}
                ></MManageRestaurantForm>
              </>
            }
            footer={
              <ASolidButton
                onClick={() => {
                  addRestaurantData();
                }}
                prefix={
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
                }
              >
                Add new restaurant
              </ASolidButton>
            }
            handleOpen={(value) => {
              setIsAddOpen(value);
              setAddFormData({});
              setInvalidError(false);
            }}
          ></SimpleModalOrganism>
        </div>

        {/* Edit form */}
        <div className="h-1/2 overflow-auto p-4 w-2/3">
          <SimpleModalOrganism
            isOpen={isEditOpen}
            title={"Create new product"}
            content={
              <>
                {" "}
                <div className="px-4 py-2 font-medium text-sm text-red-500">
                  {invalidError && "Please fill all required fields"}
                </div>
                <MManageRestaurantForm
                  handleValueChange={handleEditValueChange}
                  formData={editFormData}
                ></MManageRestaurantForm>{" "}
              </>
            }
            footer={
              <ASolidButton
                onClick={() => {
                  editRestaurantData();
                }}
                prefix={
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
                }
              >
                Edit new restaurant
              </ASolidButton>
            }
            handleOpen={(value) => {
              setIsEditOpen(value);
              setEditFormData({});
              setInvalidError(false);
            }}
          ></SimpleModalOrganism>
        </div>
      </MainScreenOrganism>
    </div>
  );
}
