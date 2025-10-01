import React from "react";
import ArticleCard from "./ui/articleCard";

const Reading = () => {
  const today = [
    {
      channel: "Al Jazeera",
      url: "#",
      cimage: "/jazeera.png",
      time: "• 7 min read",
      category: "🏛️ Politics",
      catImage:"",
      level: "ILR Level: 2-Moderate",
      levImage:"",
      title:
        "جدعون ليفي: إسرائيل ليست أسدا صاعدا وإنما هي أسد مريض",
      content:"يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها \n. يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق",
    },
  ];

  const progress = [
    {
      progress: 47,
      channel: "Al Jazeera",
      url: "#",
      cimage: "/jazeera.png",
      time: "• 7 min read",
      catImage:"",
      category: "🏛️ Politics",
      level: "ILR Level: 2-Moderate",
      levImage:"",
      title:
        "جدعون ليفي: إسرائيل ليست أسدا صاعدا وإنما هي أسد مريض",
      content:
"يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها \n. يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق",    },
  ];

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div className="text-xl sm:text-2xl font-semibold">Today's article</div>
        <div className="text-lg sm:text-xl font-semibold cursor-pointer hover:underline">
          View all
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {today.map((item, index) => (
          <ArticleCard key={index} item={item} buttonLabel="Start Assessment" />
        ))}
      </div>

      <div className="my-6 text-xl sm:text-2xl font-semibold">In progress</div>
      <div className="flex flex-col gap-8 w-full">
        {progress.map((item, index) => (
          <ArticleCard
            key={index}
            item={item}
            showProgress={true}
            buttonLabel="Continue"
          />
        ))}
      </div>
    </>
  );
};

export default Reading;
