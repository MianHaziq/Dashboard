import  { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const TopBar = ({ className }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmOGJiYjg1LThmZmMtNDAwYi1iZmJkLWJmZWQ1YTAxZDcxNiIsImVtYWlsIjoiaGF6aXFuYXplZXJAZ21haWwuY29tIiwiaWF0IjoxNzU5NDk5ODE1LCJleHAiOjE3NjAxMDQ2MTV9.4aoLcr5yRbhsgmf52BkOclfYm-_UbJ--x-M2aXflRAU";
    localStorage.setItem("token", token);

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between text-sm sm:gap-2.5",
        className
      )}
    >
      <div className="font-medium sm:text-xl">
        <span className="font-semibold">
          Welcome back, {user ? user.firstName : "Guest"} 👋🏻
        </span>
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
            {user ? `${user.firstName} ${user.lastName}` : "Guest"}
          </div>
          <div className="text-xs md:text-xs text-gray-600">
            {user ? user.email : "guest@gmail.com"}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
