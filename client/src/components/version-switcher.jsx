

import {
  SidebarMenu,
  SidebarMenuItem,
} from "./ui/sidebar"

export function VersionSwitcher() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col gap-0.5 leading-none  sm:text-2xl md:text-3xl lg:text-4xl ">
                <span className="font-extrabold font-in text-3xl sm:text-xl md:text-2xl lg:text-3xl">LinguLeap</span>
                
              </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
