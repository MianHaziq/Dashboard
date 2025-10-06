import { useState, useEffect } from "react";
import ArticleCard from "./ui/articleCard";
import axios from "axios";

const Reading = () => {
  const [articles, setArticles] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/articles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data) {
          setArticles(res.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [token]);

  const today = articles.filter((a) => Number(a.progress) === 0);
  const progress = articles.filter((a) => Number(a.progress) > 0);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div className="text-xl sm:text-2xl font-semibold">Today's article</div>
        <div className="text-lg sm:text-xl font-semibold cursor-pointer hover:underline">
          View all
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {today.length > 0
          ? today.map((item, index) => (
              <ArticleCard key={item.id ?? index} item={item} buttonLabel="Start Assessment" />
            ))
          : (
            // keep it simple — same feel as your RightSection design
            <div className="text-sm text-gray-500">No articles for today.</div>
          )}
      </div>

      <div className="my-6 text-xl sm:text-2xl font-semibold">In progress</div>
      <div className="flex flex-col gap-8 w-full">
        {progress.length > 0
          ? progress.map((item, index) => (
              <ArticleCard
                key={item.id ?? index}
                item={item}
                showProgress={true}
                buttonLabel="Continue"
              />
            ))
          : <div className="text-sm text-gray-500">No in-progress articles.</div>}
      </div>
    </>
  );
};

export default Reading;
