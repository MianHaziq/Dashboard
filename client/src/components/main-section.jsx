
import RightSection from "./right-section";
import { Separator } from "./ui/separator";
import Home from "./home";

const MainSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-full border-b px-4">
      <div className="w-full md:w-3/4">
        <Home />
      </div>

      <Separator
        orientation="vertical"
        className="hidden md:block mx-4"
      />

    
      <div className="w-full md:w-1/4">
        <RightSection />
      </div>
    </div>
  );
};

export default MainSection;
