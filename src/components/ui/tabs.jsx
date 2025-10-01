import React from "react";
import Tab from "./tab";

const Tabs = () => {
  const data = [
    {
      title: "",
      url: "#",
      image: "/Learn.png",
    },
    {
      title: "Economy",
      url: "#",
      image: "/Learn.png",
    },
    {
      title: "Politics",
      url: "#",
      image: "/Learn.png",
    },
    {
      title: "World News",
      url: "#",
      image: "/Learn.png",
    },
    {
      title: "Culture & Lifestyle",
      url: "#",
      image: "/Learn.png",
    },
    {
      title: "Security & Defense",
      url: "#",
      image: "/Learn.png",
    },
  ];

  return (
    <div>
      <Tab tabList={data} />
    </div>
  );
};

export default Tabs;
