import React, { useState } from "react";

const Tab = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (title) => {
    if (activeTab === title) {
      setActiveTab(null); 
    } else {
      setActiveTab(title); 
    }
  };

  return (
    <div className="m-3">
      <div className="flex flex-col text-xl font-bold mb-3">Your Topics</div>
      <div className="flex flex-wrap gap-3">
        {tabList.map((tab) => (
          <div
            key={tab.title}
            onClick={() => handleTabClick(tab.title)}
            className={`flex items-center gap-1 cursor-pointer rounded-sm py-1 px-2 border-2 transition ${
              activeTab === tab.title
                ? "bg-black text-white border-black"
                : "bg-gray-100 text-black border-black"
            }`}
          >
            <img
              src={tab.image}
              alt={tab.title}
              className="h-5"
            />
            <span className="text-xs">{tab.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
