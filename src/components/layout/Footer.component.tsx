import StarGradientImage from "../../assets/star-gradient.png";
import LogoFooter from "../../assets/footer-logo.png";

export default function FooterSection() {
  return (
    <div className="relative overflow-hidden bg-[#2D1E6B] pt-5 lg:h-[587px] h-full footer-image">
      <div
        className="sm:w-full flex top-0 text-[30px] font-extrabold h-[90px] align-middle text-white tracking-[4px] uppercase backdrop-blur-md bg-white/5 
        border-y-2 border-[#d9d9d940] mt-7
        absolute
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
      <div className="grid grid-cols-4 gap-7 mx-auto h-full px-20">
        <div className="my-auto">
          <img
            src={LogoFooter}
            alt="logo board"
            className="w-[195.3px] h-[45.07px] mb-10"
          />

          <p className="lato-normal text-[16px] leading-[29.62px] tracking-[1px] text-white">
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            .
          </p>
        </div>
        <div className="my-auto ml-20">
          <p className="text-[18px] lato-black leading-[19.91px] uppercase text-white mb-7">
            Company
          </p>

          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            products
          </p>
          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            apps & games
          </p>
          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            features
          </p>
        </div>

        <div className="my-auto">
          <p className="text-[18px] lato-black leading-[19.91px] uppercase text-white mb-7">
            Help
          </p>

          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            Support
          </p>
          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            about
          </p>
          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            contact us
          </p>
        </div>

        <div className="my-auto -ml-20">
          <p className="text-[18px] lato-black leading-[19.91px] uppercase text-white mb-7">
            resources
          </p>

          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            youtube playlist
          </p>
          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            how to - blog
          </p>
          <p className="text-[18px] lato-normal leading-[19.91px] capitalize text-white mb-6">
            terms & conditions
          </p>
        </div>
      </div>
      <p className="text-[14px] lato-normal text-white pl-20 -mt-20">
        © Copyright 2023, All Rights Reserved by board
      </p>
    </div>
  );
}
