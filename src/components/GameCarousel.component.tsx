import CarouselImageOne from "../assets/carousel-image-1.png";
import CarouselImageTwo from "../assets/carousel-image-2.png";
import CarouselImageThree from "../assets/carousel-image-3.png";
import LogoIconWhite from "../assets/logo-icon-white.png";

export default function GameCarouselSection() {
  return (
    <div>
      <div className="lg:h-[906px] bg-[#2D1E6B] lg:px-0 px-7">
        <div className="text-center w-full lg:w-1/2 mx-auto mt-7">
          <h1 className="font-bold text-[34.29px] lg:text-[66px] text-white leading-[37.92px] lg:leading-[76.96px] uppercase tracking-[1px]">
            choose your <span className="banner-gradient-text">FAvorite</span>{" "}
            games
          </h1>
          <p className="text-[16px] mx-auto lg:w-3/4 text-white leading-[29.62px] lato-normal mt-3 lg:mt-5 mb-12">
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </p>
        </div>

        <div className="flex gap-4 lg:pb-20 pb-10 overflow-x-clip lg:overflow-visible">
          <img
            src={CarouselImageOne}
            alt="board carousel item"
            className="lg:w-[251.14px] lg:h-[366.97px] lg:my-auto object-cover -ml-[55%] lg:ml-0 h-[188.97px]"
          />
          <div className="flex-1 relative">
            <div className="relative w-full">
              <img
                src={LogoIconWhite}
                alt="board white logo"
                className="absolute h-[12.61px] w-[16.54px] lg:h-[24.74px] lg:w-[32.54px] left-0 right-0 mx-auto -top-4 lg:top-0"
              />
            </div>
            <img
              src={CarouselImageTwo}
              alt="board carousel item w-full"
              className="lg:w-[708.5px] lg:h-[494.04px] object-contain -mt-7 mx-auto"
            />
            <p className="uppercase lg:-mt-10 -bottom-1 lg:bottom-2 font-extrabold text-[11.07px] lg:text-[28.06px] leading-[31.03px] tracking-[4px] text-white absolute text-center w-full">
              sneak peeks
            </p>
          </div>
          <img
            src={CarouselImageThree}
            alt="board carousel item w-full"
            className="lg:w-[251.14px] lg:h-[366.97px] lg:my-auto justify-self-end object-cover -mr-[55%] lg:mr-0 h-[188.97px]"
          />
        </div>
        <div className="text-center w-full">
          <button
            className="h-[44.02px] lg:h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[138px] lg:w-[232px]
            "
          >
            <span className="slanted-inner-text font-extrabold text-white text-[11.9px] lg:text-[20px] uppercase">
              View All
            </span>
          </button>
          <button
            className="h-[44.02px] lg:h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[138px] lg:w-[232px] ml-3 button-outlined
            "
          >
            <span className="slanted-inner-text font-extrabold text-[11.9px] lg:text-[20px] uppercase banner-gradient-text">
              Play Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
