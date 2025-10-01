import React from "react";
import Tab from "./tab";

const Tabs = () => {
  const data = [
    {
      title: "",
      url: "#",
      image: "/filter.png",
    },
    {
      title: "💰 Economy",
      url: "#",
      image: "",
    },
    {
      title: "🏛️ Politics ",       
      url: "#",
      image: "",
    },
    {
      title: "🌍 World News",
      url: "#",
      image: "",
    },
    {
      title: "🎭 Culture & Lifestyle",
      url: "#",
      image: "",
    },
    {
      title: "🔒 Security & Defense",
      url: "#",
      image: "",
    },
  ];

  return (
    <div>
      <Tab tabList={data} />
    </div>
  );
};

export default Tabs;
