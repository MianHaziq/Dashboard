import * as React from "react"

import { VersionSwitcher } from "./version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar"

const data = {
  navMain: [
    {
      items: [
        {
          title: "Home",
          url: "#home",
          image: "/Home.png",
        },
        {
          title: "Learn",
          url: "#",
          image: "/Learn.png",
        },
        {
          title: "Progress Tracker",
          url: "#",
          image: "/Learn.png",
        },
        {
          title: "Profile",
          url: "#",
          image: "/Learn.png",
        },
        {
          title: "Settings",
          url: "#",
          image: "/Learn.png",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  const [activeItem, setActiveItem] = React.useState("Home") 

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item, idx) => (
          <SidebarGroup key={idx}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((navItem) => {
                  const isActive = activeItem === navItem.title
                  return (
                   <SidebarMenuItem key={navItem.title}>
  <div
    className={`flex justify-start items-center rounded-md cursor-pointer px-2 py-1
      ${isActive ? "bg-[#E3EEE4] font-bold text-black" : "text-gray-500"}
    `}
    onClick={() => setActiveItem(navItem.title)}
  >
    <img src={navItem.image} className="w-6 h-6 mr-2" />
    <SidebarMenuButton asChild isActive={isActive}>
      <a 
        href={navItem.url} 
        className={` ${isActive ? "text-black" : "text-gray-500"}`} 
      >
        {navItem.title}
      </a>
    </SidebarMenuButton>
  </div>
</SidebarMenuItem>

                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
