import React from "react";

function SimpleModalOrganism(props) {
  const { isOpen = false, handleOpen, content, title } = props;
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`${
          !isOpen && "hidden"
        } flex bg-gray-500/50 overflow-y-auto overflow-x-hidden fixed bottom-0 z-50 right-0 justify-center items-center w-full md:inset-0 h-screen max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">{title}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="crud-modal"
                onClick={() => {
                  handleOpen(false);
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleModalOrganism;
