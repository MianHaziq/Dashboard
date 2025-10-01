import React from "react"
import { cn } from "@/lib/utils"

const TopBar = ({ className }) => {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between text-sm sm:gap-2.5",
        className
      )}
    >
    
      <div className=" font-medium  sm:text-xl ">
      <span className="font-semibold">  Welcome back,&nbsp; Micheal 👋🏻  </span>
      </div>


   <div className="flex items-center gap-2 px-8">
      
  <div>
    <img
      src="/dp1.jpg"
      alt="Profile"
      className="h-8 w-8 rounded-full border object-cover"
    />
  </div>

  <div className="hidden sm:flex flex-col mr-2 md:mr-0">
    <div className="font-medium sm:text-xs md:text-sm lg:text-sm">
      Muhammad Haziq
    </div>
    <div className="text-xs md:text-xs text-gray-600">
      haziqnazeer@gmail.com
    </div>
  </div>
</div>

    </nav>
  )
}

export default TopBar
