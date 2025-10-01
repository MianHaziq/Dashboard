import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

const ArticleCard = ({
  item,
  showProgress = false,
  buttonLabel = "Start Assessment",
}) => {
  return (
    <Card className="w-full mx-auto h-auto flex flex-col justify-between p-2 sm:p-2">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <img
              src={item.cimage}
              alt={item.channel}
              className="w-8 h-8 sm:w-8 sm:h-8 rounded-full object-cover border"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full">
              <span className="font-semibold text-sm sm:text-base">
                {item.channel}
              </span>                   
              <span className="text-[11px] sm:text-xs text-gray-500">
                {item.time}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row  sm:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-black sm:ml-auto">
            <div className="inline-flex items-center gap-2 h-auto bg-[#EFF5EF] rounded-full p-2 ">
              {item.catImage && (
                <img
                  src={item.catImage}
                  alt={`${item.category}-icon`}
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded object-cover"
                />
              )}
              <span className=" text-[11px] sm:text-xs">
                {item.category}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#FFD16666] rounded-full p-2">
             
              <span className="text-[11px] sm:text-xs">
                {item.level}
              </span>
            </div>
          </div>
        </div>

        {showProgress && (
          <div className="w-full sm:w-2/5 flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
            <div className="w-full bg-[#EFF5EF] rounded-full h-2">
              <div
                className="bg-[#CADECB] h-2 rounded-full"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-gray-600">
              {item.progress}%
            </span>
          </div>
        )}

        <div className="w-full h-px bg-gray-200 mt-3" />
      </CardHeader>

      <CardContent>
        <h2 className="mb-2 text-lg sm:text-lg md:text-2xl font-bold leading-tight text-right">
          {item.title}
        </h2>
        <p className="whitespace-pre-line text-xs sm:text-sm md:text-base leading-tight text-right text-neutral-500">
          {item.content}
        </p>
      </CardContent>

      <CardFooter className="flex justify-end">
        <button
          type="button"
          className="py-1 px-2 sm:py-1.5 sm:px-3  font-semibold text-black text-xs sm:text-sm border-2 border-black rounded-md inline-flex items-center bg-[#C9DECB] hover:bg-green-200 focus:ring-2 focus:outline-none focus:ring-blue-200"
        >
          {buttonLabel}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
