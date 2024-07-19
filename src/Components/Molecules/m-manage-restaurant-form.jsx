import React from "react";

function MManageRestaurantForm(props) {
  let { handleValueChange, formData } = props;
  return (
    <div className="">
      <form className="p-4 md:p-5 overflow-auto ">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Type restaurant name"
              required=""
              onChange={handleValueChange}
              value={formData && formData['name']}
            />
          </div>
          <div className="col-span-2">
            <label
              for="address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address *
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Type address"
              required=""
              onChange={handleValueChange}
              value={formData && formData['address']}
            />
          </div>
          <div className="col-span-2">
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone *
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="+91-xxxxx xxxxx"
              required=""
              onChange={handleValueChange}
              value={formData && formData['phone']}
            />
          </div>
          <div className="col-span-2">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="name@example.com"
              required=""
              onChange={handleValueChange}
              value={formData && formData['email']}
            />
          </div>
          <div className="col-span-2">
            <label
              for="tags"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Italian, chinese"
              required=""
              onChange={handleValueChange}
              value={formData && formData['tags']}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label
              for="delivery"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Delivery Options
            </label>
            <select
              id="delivery"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              onChange={handleValueChange}
              value={formData && formData['delivery']}
            >
              <option selected="">Select options</option>
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Pickup/Takeout">Pickup/Takeout</option>
              <option value="Contactless">Contactless</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              for="payment"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Payment mode
            </label>
            <select
              id="payment"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              onChange={handleValueChange}
              value={formData && formData['payment']}
            >
              <option selected="">Select mode</option>
              <option value="Online">Online</option>
              <option value="Cash">Cash</option>
              <option value="Highbred">Highbred</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Restaurant Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Write restaurant description here"
              onChange={handleValueChange}
              value={formData && formData['description']}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MManageRestaurantForm;
