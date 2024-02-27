import CarouselImageOne from "../assets/carousel-image-1.png";
import CarouselImageTwo from "../assets/carousel-image-2.png";
import CarouselImageThree from "../assets/carousel-image-3.png";
import LogoIconWhite from "../assets/logo-icon-white.png";

export default function GameCarouselSection() {
  return (
    <div>
      <div className="lg:h-[906px] bg-[#2D1E6B]">
        <div className="text-center w-1/2 mx-auto">
          <h1 className="font-bold text-[66px] text-white leading-[76.96px] uppercase tracking-[4px]">
            choose your <span className="banner-gradient-text">FAvorite</span>
            games
          </h1>
          <p className="text-[16px] mx-auto lg:w-3/4 text-white leading-[29.62px] lato-normal mt-5 mb-12">
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </p>
        </div>

        <div className="flex gap-4 lg:pb-20">
          <img
            src={CarouselImageOne}
            alt="board carousel item"
            className="lg:w-[251.14px] lg:h-[366.97px] lg:my-auto object-cover"
          />
          <div className="flex-1 relative">
            <div className="relative w-full">
              <img
                src={LogoIconWhite}
                alt="board white logo"
                className="absolute h-[24.74px] w-[32.54px] w-full left-0 right-0 mx-auto"
              />
            </div>
            <img
              src={CarouselImageTwo}
              alt="board carousel item w-full"
              className="lg:w-[708.5px] lg:h-[494.04px] object-contain -mt-7 mx-auto"
            />
            <p className="uppercase lg:-mt-10 font-extrabold text-[28.06px] leading-[31.03px] tracking-[4px] text-white absolute text-center w-full">
              sneak peeks
            </p>
          </div>
          <img
            src={CarouselImageThree}
            alt="board carousel item w-full"
            className="lg:w-[251.14px] lg:h-[366.97px] lg:my-auto justify-self-end object-cover"
          />
        </div>
        <div className="text-center w-full">
          <button
            className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px]
            "
          >
            <span className="slanted-inner-text font-extrabold text-white text-[20px] uppercase">
              View All
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
      </div>
    </div>
  );
}
