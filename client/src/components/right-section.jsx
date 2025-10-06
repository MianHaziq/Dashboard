import { useState, useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import axios from "axios";

const RightSection = () => {
  const [streakCount, setStreakCount] = useState(null);
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState([]); 

  const token = localStorage.getItem("token");

  useEffect(() => {
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
  }, [token]);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/streaks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) {
          setStreakCount(response.data);
        }
      } catch (error) {
        console.error("Error fetching streak:", error);
      }
    };

    fetchStreak();
  }, [token]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data) {
          setStats(res.data);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [token]);

  return (
    <>
      <div className="mx-2 sm:mx-2 md:mx-2 my-6">
        <Card className="border">
          <CardHeader className="flex justify-center pt-4">
            <img
              src="/fire.png"
              alt="streak"
              loading="lazy"
              decoding="async"
              className="h-16 w-16 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain bg-gray-100 rounded-full p-3"
            />
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center text-center px-2 gap-1">
              <CardTitle className="text-sm sm:text-xl md:text-xl font-medium leading-tight">
                {streakCount ?? 0} days in a row!
              </CardTitle>
              <p className="text-sm text-gray-400">
                You’re doing great {user ? user.firstName : "Guest"}!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

    
      <div className="mx-2 sm:mx-2 md:mx-2 space-y-4 sm:space-y-6">
        {stats.map((item) => (
          <Card key={item.id} className="shadow-sm border">
            <CardHeader className="flex items-center justify-between">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 object-contain"
                />
              </div>

              <div className="ml-auto">
                <CardAction />
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-3 min-w-0">
                  <CardTitle className="text-sm sm:text-sm md:text-sm font-medium leading-tight whitespace-pre-line overflow-hidden truncate">
                    {item.title}
                  </CardTitle>
                </div>

                <div className="ml-2 flex-shrink-0 w-14 sm:w-16 md:w-20 text-right">
                  <CardTitle className="text-2xl sm:text-2xl md:text-xl lg:text-2xl font-extrabold leading-none">
                    {item.total}
                  </CardTitle>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RightSection;
