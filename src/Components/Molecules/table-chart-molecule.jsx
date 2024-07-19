import React from "react";

function TableChartMolecule(props) {
  let { headers, content, handleEditFormOpen, handleEditFormData, onDelete } =
    props;
  const [pageIndex, setPageIndex] = React.useState(0);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 overflow-auto bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-1 py-2 w-8">
              Sr.
            </th>

            {headers &&
              headers.map((header) => (
                <th
                  scope="col"
                  className={`px-1 lg:px-4 py-3 ${header.style || ""} ${
                    header.showInMobileOnly ? "hidden md:table-cell " : ""
                  }  ${header.className} `}
                >
                  <div className="flex">
                    <span className="text-ellipsis overflow-hidden ">
                      {header.label}
                    </span>
                    {header.filter && (
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    )}
                  </div>
                </th>
              ))}

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {content && content.length > 0 ? (
            content
              .filter(
                (item, index) =>
                  index < (pageIndex + 1) * 10 &&
                  index > (pageIndex + 1) * 10 - 11
              )
              .map((item, index) => (
                <tr className="bg-white border-b ">
                  <td className="w-4 p-4">{pageIndex * 10 + index + 1}</td>

                  {headers &&
                    headers.map((header) => (
                      <td
                        className={`px-2 lg:px-4 py-4 text-ellipsis overflow-hidden  ${
                          header.showInMobileOnly ? "hidden md:table-cell" : ""
                        } ${header.className} `}
                      >
                        {item[header.id || header.label]}
                      </td>
                    ))}

                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        handleEditFormOpen(true);
                        handleEditFormData(item);
                      }}
                      className="font-medium text-blue-600 "
                    >
                      Edit
                    </button>{" "}
                    ||{" "}
                    <button
                      onClick={() => {
                        onDelete(item);
                      }}
                      className="font-medium text-blue-600 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={headers.length + 2} className="text-center p-4">
                No content available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <nav
        className="flex items-center   flex-wrap  justify-between p-4 bg-gray-50 w-full"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block  md:inline ">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">
            {pageIndex * 10 + 1}-
            {pageIndex * 10 + 10 < content.length
              ? pageIndex * 10 + 10
              : content.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 ">{content.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-2">
          <li>
            <button
              onClick={() => {
                if (pageIndex > 0) setPageIndex(pageIndex - 1);
              }}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Previous
            </button>
          </li>

          <li>
            <span
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-white border rounded-lg border-gray-300 bg-orange-500 hover:bg-blue-100 hover:text-blue-700 "
            >
              {pageIndex + 1}
            </span>
          </li>

          <li>
            <button
              onClick={() => {
                if (content.length / 10 > pageIndex + 1) {
                  setPageIndex(pageIndex + 1);
                }
              }}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TableChartMolecule;
