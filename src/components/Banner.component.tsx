import StarGradientImage from "../assets/star-gradient.png";
import Navigation from "./layout/Navigaion.component";

export default function Banner() {
  return (
    <div className="">
      <Navigation />
      <div className="h-full mt-5 lg:mt-0 lg:h-[984px] banner-image w-screen px-7 lg:px-28 max-w-[1440px]  mx-auto relative w-full overflow-hidden isolate">
        {/* <img src={BannerImage} className="absolute w-screen h-screen" /> */}
        <div className="grid lg:grid-cols-2 w-full gap-4 h-full">
          <div className="my-auto">
            <h1 className="font-bold lg:text-[68.94px] text-[40.29px] text-white lg:leading-[76.24px] leading-[44.56px] uppercase tracking-[1px] lg:tracking-[4px]">
              Let your
              <br />
              mind <span className="banner-gradient-text">explore</span> <br />
              new world
            </h1>
            <p className="text-[16px] lg:text-[18.72px] text-white leading-[34.64px] lato-normal mt-5 mb-0 lg:mb-12 z-10 relative">
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
            {/* desktop buttons */}
            <div className="hidden lg:block">
              <button
                className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px]
            "
              >
                <span className="slanted-inner-text font-extrabold text-white text-[20px] uppercase">
                  Buy Now
                </span>
              </button>
              <button
                className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px] ml-5 button-outlined
            "
              >
                <span className="slanted-inner-text font-extrabold text-[20px] uppercase banner-gradient-text">
                  Play Now
                </span>
              </button>
            </div>
            {/* desktop statistics */}
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-2 mt-16 lg:ml-[-4rem] hidden lg:grid">
              <div className="text-center">
                <p className="text-[21.28px] lg:text-[30px] font-extrabold text-white mb-2">
                  300+
                </p>
                <p className="text-[13.28px] lg:text-[18.72px] text-white lato-normal">
                  Unique Style
                </p>
              </div>
              <div className="text-center">
                <p className="text-[21.28px] lg:text-[30px]  font-extrabold banner-gradient-text mb-2">
                  200+
                </p>
                <p className="text-[13.28px] lg:text-[18.72px] text-white lato-normal">
                  Project finished
                </p>
              </div>
              <div className="text-center">
                <p className="text-[21.28px] lg:text-[30px] font-extrabold text-white mb-2">
                  500+
                </p>
                <p className="text-[13.28px] lg:text-[18.72px] text-white lato-normal">
                  Happy Customer
                </p>
              </div>
            </div>
          </div>
          {/* mobile banner image */}
          <div className="h-[527px] mobile-banner w-screen lg:hidden block -ml-7 -mr-7 -mt-20 z-3"></div>
        </div>
        <div
          className="sm:w-full flex lg:absolute sticky bottom-[23px] text-[16.6px] lg:text-[30px] font-extrabold h-[49.79px] lg:h-[90px] align-middle text-white tracking-[4px] uppercase
        backdrop-blur-md bg-white/5 
        border-y-2 border-[#d9d9d940] -ml-7 -mr-7 -mt-7 lg:mt-0 lg:ml-[-7rem] rotate-[-1.30deg]"
        >
          <div className="flex my-auto h-fit scroll-text">
            Gaming spaning
            <img
              src={StarGradientImage}
              alt="star gradient board"
              className="mx-6 my-auto lg:star-image h-[19.91px] w-[19.91px]"
            />
            Action Packed
            <img
              src={StarGradientImage}
              height="36"
              width="36"
              alt="star gradient board"
              className="mx-6 my-auto lg:star-image h-[19.91px] w-[19.91px]"
            />
            mind - bending
            <img
              src={StarGradientImage}
              height="36"
              width="36"
              alt="star gradient board"
              className="mx-6 my-auto lg:star-image h-[19.91px] w-[19.91px]"
            />
            collection og games
          </div>
        </div>
        {/* mobile buttons */}
        <div className="block lg:hidden mt-10 w-full text-center">
          <button
            className="!h-[44.02px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098]
            button-slanted w-[138px]
            "
          >
            <span className="slanted-inner-text font-extrabold text-white text-[11.9px] uppercase">
              Buy Now
            </span>
          </button>
          <button
            className="!h-[44.02px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098]
            button-slanted w-[138px] ml-3 button-outlined
            "
          >
            <span className="slanted-inner-text font-extrabold text-[11.9px] uppercase banner-gradient-text">
              Play Now
            </span>
          </button>
        </div>

        {/* mobile statistics */}
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-2 mt-7 lg:ml-[-4rem]">
          <div className="text-center">
            <p className="text-[21.28px] lg:text-[30px] font-extrabold text-white mb-2">
              300+
            </p>
            <p className="text-[13.28px] lg:text-[18.72px] text-white lato-normal">
              Unique Style
            </p>
          </div>
          <div className="text-center">
            <p className="text-[21.28px] lg:text-[30px]  font-extrabold banner-gradient-text mb-2">
              200+
            </p>
            <p className="text-[13.28px] lg:text-[18.72px] text-white lato-normal">
              Project finished
            </p>
          </div>
          <div className="text-center">
            <p className="text-[21.28px] lg:text-[30px] font-extrabold text-white mb-2">
              500+
            </p>
            <p className="text-[13.28px] lg:text-[18.72px] text-white lato-normal">
              Happy Customer
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-[100px] sm:-top-28 hidden lg:block"
          aria-hidden="true"
        >
          <div
            className="relative 
            left-[calc(50%-11rem)] aspect-[20/10] w-[36.125rem]
             -translate-x-1/3 bg-[#DD00B8] opacity-20 
              sm:left-[calc(-5rem)] sm:w-[90.1875rem] sm:top-[calc(-100px)]"
            style={{
              clipPath: "circle()",
            }}
          />
        </div>
      </div>
    </div>
  );
}
