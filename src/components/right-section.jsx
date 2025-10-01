import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

const RightSection = () => {
  const Streak = [
    {
      title: "4 days in a row!",
      description: "You’re doing great Micheal!",
      image: "/fire.png",
    },
  ];

  const data = [
    {
      title: "Article\nCompleted",  
      total: "233",
      image: "/article.png",
    },
    {
      title: "Vocabulary\nLearned", 
      total: "12344",
      image: "/dictionary.png",
    },
    {
      title: "Speaking\nActivities",
      total: "678",
      image: "/speaking.png",
    },
  ];

  return (
    <>
      <div className="mx-2 sm:mx-2 md:mx-2 my-6">
        {Streak.map((item, index) => (
          <Card key={index} className=" border">
            <CardHeader className="flex justify-center pt-4">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain bg-gray-100 rounded-full p-3"
              />
            </CardHeader>

            <CardContent>
              <div className="flex flex-col items-center text-center px-2 gap-1">
                <CardTitle className="text-sm sm:text-xl md:text-xl font-medium leading-tight">
                  {item.title}
                </CardTitle>
                <p className="text-sm sm:text-sm md:text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

     <div className="mx-2 sm:mx-2 md:mx-2 space-y-4 sm:space-y-6">
  {data.map((item, index) => (
    <Card key={index} className="shadow-sm border">
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
