import React from "react";

function MTableSkeleton() {
  return (
    <div
      role="status"
      className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse  md:p-6 "
    >
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 " />
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 " />
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 " />
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 " />
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 " />
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 " />
      <div className="flex items-center justify-between my-4">
        <div className="w-full flex flex-col gap-2">
          <div className="h-2.5 bg-gray-300 rounded-full  w-1/2 pb-2.5"></div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
     

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default MTableSkeleton;
