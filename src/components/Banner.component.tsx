import BannerImage from "../assets/banner-image.png";
import StarGradientImage from "../assets/star-gradient.png";
import Navigation from "./layout/Navigaion.component";

export default function Banner() {
  return (
    <div className="">
      <Navigation />
      <div className="h-screen banner-image w-screen px-7 lg:px-28 max-w-[1440px] lg:h-[984px] mx-auto relative w-full overflow-hidden isolate">
        {/* <img src={BannerImage} className="absolute w-screen h-screen" /> */}
        <div className="grid lg:grid-cols-2 w-full gap-4 h-full">
          <div className="my-auto">
            <h1 className="font-bold text-[68.94px] text-white leading-[76.24px] uppercase tracking-[4px]">
              Let your
              <br />
              mind <span className="banner-gradient-text">explore</span> <br />
              new world
            </h1>
            <p className="text-[18.72px] text-white leading-[34.64px] lato-normal mt-5 mb-12">
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
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

            <div className="grid grid-cols-4 gap-2 mt-16 ml-[-4rem]">
              <div className="text-center">
                <p className="text-[30px] font-extrabold text-white mb-2">
                  300+
                </p>
                <p className="text-[18.72px] text-white lato-normal">
                  Unique Style
                </p>
              </div>
              <div className="text-center">
                <p className="text-[30px] font-extrabold banner-gradient-text mb-2">
                  200+
                </p>
                <p className="text-[18.72px] text-white lato-normal">
                  Project finished
                </p>
              </div>
              <div className="text-center">
                <p className="text-[30px] font-extrabold text-white mb-2">
                  500+
                </p>
                <p className="text-[18.72px] text-white lato-normal">
                  Happy Customer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sm:w-full flex absolute bottom-[23px] text-[30px] font-extrabold h-[90px] align-middle text-white tracking-[4px] uppercase
        backdrop-blur-md bg-white/5 
        border-y-2 border-[#d9d9d940] -ml-7 lg:ml-[-7rem] rotate-[-1.30deg]"
        >
          <div className="flex my-auto h-fit scroll-text">
            Gaming spaning
            <img
              src={StarGradientImage}
              alt="star gradient board"
              className="mx-6 my-auto star-image"
            />
            Action Packed
            <img
              src={StarGradientImage}
              height="36"
              width="36"
              alt="star gradient board"
              className="mx-6 my-auto star-image"
            />
            mind - bending
            <img
              src={StarGradientImage}
              height="36"
              width="36"
              alt="star gradient board"
              className="mx-6 my-auto star-image"
            />
            collection og games
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-[100px] sm:-top-28"
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
