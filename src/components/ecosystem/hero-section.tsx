import { images } from "../../assets";
import { FileSpreadsheet } from "lucide-react";
import Bubbles from "../../components/ui/bubbles";

const EcosystemHeroSection = () => {
  return (
    <div className="relative">
      <Bubbles className="w-full h-full absolute" />
      <section className="relative md:pt-28 pt-20 overflow-hidden md:px-0 px-6 z-10">
        <div className="mb-7 text-center flex flex-col items-center z-10">
          <div className="w-fit self-center flex flex-col items-center justify-center space-y-2">
            <img
              src={images.GlueXMainLogo}
              alt="GlueX Isotope Logo"
              className={`object-cover w-[80%]`}
            />
            <h1 className="text-[36px] mb-4 md:text-[50px] lg:text-[76px] leading-none transition-all duration-300 font-bold">
              Ecosystem
            </h1>
          </div>

          <p className="text-sm md:text-lg lg:text-xl font-darker transition-opacity duration-300 mb-1">
            Explore the GlueX Ecosystem
            <br className="hidden md:block" />
            Discover 100+ dApps, tools, and services across GlueX.
          </p>
        </div>
        <div className="flex self-center space-x-5 justify-center">
          <div className="flex justify-center mb-10">
            <button className="flex flex-row justify-center items-center md:m-0 sm:mx-auto sm:mb-8 hover:scale-105 transition-transform duration-300 brand-button verde">
              <FileSpreadsheet className="mr-1" color="black" />
              Read More
            </button>
          </div>
          <div className="flex justify-center mb-10">
            <button className="btn2 verde mx-auto md:m-0">
              Add Your Protocol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcosystemHeroSection;
