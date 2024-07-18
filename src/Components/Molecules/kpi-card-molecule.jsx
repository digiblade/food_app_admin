import React from "react";

function KPICardMolecule(props) {
  let { icon, label, value } = props;
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className=" text-orange-500 mb-4">{icon}</div>
      <div className="text-gray-500 font-medium">{label}</div>
      <div className="text-3xl font-semibold">{value}</div>
    </div>
  );
}

export default KPICardMolecule;
