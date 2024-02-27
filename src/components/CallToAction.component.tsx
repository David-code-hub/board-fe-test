import StarGradientImage from "../assets/star-gradient.png";
import CallToActionImage from "../assets/CallToActionImage.png";

export default function CallToActionSection() {
  return (
    <div>
      <div className="h-[768px] bg-[#2D1E6B] py-20 relative overflow-hidden">
        <div className="backdrop-blur-md bg-white/5 border-2 border-[#d9d9d940] lg:h-[556px] lg:w-[1240px] rounded-[10px] mx-auto lg:p-10">
          <div className="grid grid-cols-2 gap-10 h-full relative">
            <img
              src={CallToActionImage}
              alt="woman wearning vr headset"
              className="h-[639px] absolute -bottom-10 -left-10 w-[725px]"
            />
            <div></div>
            <div className="my-auto">
              <p className="text-[48px] uppercase font-extrabold leading-[55.97px] tracking-[-0.5px] text-white">
                Discover the
                <span className="banner-gradient-text"> Virtual</span> Reality
                Gaming
              </p>
              <p className="text-[16px] tracking-[1px] leading-[29.62px] text-white mt-5 lato-normal">
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </p>

              <button
                className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px] button-outlined mt-8
            "
              >
                <span className="slanted-inner-text font-extrabold text-[20px] uppercase banner-gradient-text">
                  Play Now
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="sm:w-full flex absolute bottom-0 text-[30px] font-extrabold h-[90px] align-middle text-white tracking-[4px] uppercase
         "
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
      </div>
    </div>
  );
}
