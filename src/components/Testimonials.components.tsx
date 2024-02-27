import StarGradientImage from "../assets/star-gradient.png";
import Quotes from "../assets/quotes.png";
import StarRating from "../assets/star-rating.png";
import Verified from "../assets/verified.png";
import TestimonialNavigation from "../assets/testimonial-navigation.png";
import TestimonialImage_1 from "../assets/testimonial-avatar-1.png";
import TestimonialImage_2 from "../assets/testimonial-avatar-2.png";

export default function TestimonialsSection() {
  return (
    <div>
      <div className="lg:h-[636px] h-full bg-[#2D1E6B] overflow-hidden px-7 lg:px-20">
        <div
          className="sm:w-full flex bottom-0 text-[18.02px] lg:text-[30px] font-extrabold h-[49.79px] lg:h-[90px] align-middle text-white tracking-[4px] uppercase
         "
        >
          <div className="flex my-auto h-fit scroll-text">
            Gaming spaning
            <img
              src={StarGradientImage}
              alt="star gradient board"
              className="mx-6 my-auto  h-[19.91px] w-[19.91px] lg:h-[36px] lg:w-[36px]"
            />
            Action Packed
            <img
              src={StarGradientImage}
              alt="star gradient board"
              className="mx-6 my-auto  h-[19.91px] w-[19.91px] lg:h-[36px] lg:w-[36px]"
            />
            mind - bending
            <img
              src={StarGradientImage}
              alt="star gradient board"
              className="mx-6 my-auto  h-[19.91px] w-[19.91px] lg:h-[36px] lg:w-[36px]"
            />
            collection og games
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-4 mt-10 lg:mt-20">
          <div className="p-5 lg:p-10 rounded-[10px] w-full lg:w-[607px] shrink-0 h-full lg:h-[388px] backdrop-blur-md bg-white/5 border-2 border-[#d9d9d940] mb-5 mx-auto relative">
            <img
              src={Quotes}
              alt="testimonial quotes"
              className="w-[63.24px] lg:w-[100.25px] h-[49.55px] lg:h-[78.55px] absolute right-8 -top-7 lg:-top-12"
            />

            <img
              src={StarRating}
              alt="testimonial rating"
              className="w-[129px] h-[25px] mt-7 mx-auto lg:mx-0"
            />

            <p className="font-normal text-[16px] leading-[29.62px] tracking-[1px] text-white my-3 lato-normal text-center lg:text-left">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>
            <div className="w-full h-[1px] bg-gradient-to-r from-white my-7"></div>
            <div className="flex gap-4 mb-7">
              <img
                src={TestimonialImage_1}
                alt="user avatar"
                className="h-[51.21px] lg:h-[53px] w-[51.21px] lg:w-[53px] object-contain"
              />
              <div className="my-auto">
                <p className="text-[17.39px] lg:text-[20.97px] leading-[19.24px] lg:leading-[23.19px] text-nowrap tracking-[2px] text-white mb-3 lato-normal">
                  Arlene McCoy
                </p>
                <p className="font-medium text-[9.66px] lg:text-[11.65px] leading-[12.88px] tracking-[2px] text-white lato-normal">
                  McDonald's
                </p>
              </div>
              <div className="my-auto flex flex-1 justify-end">
                <img
                  src={Verified}
                  alt="user verified"
                  className="h-[17.55px] lg:h-[23.7px] w-[18.35px] lg:w-[24.77px] object-contain mr-2"
                />
                <p className="text-[10.85px] lg:text-[14.65px] leading-[16.2px] tracking-[2px] text-white lato-normal my-auto">
                  Verified
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 lg:p-10 hidden lg:grid rounded-[10px] w-full lg:w-[607px] shrink-0 h-full lg:h-[388px] backdrop-blur-md bg-white/5 border-2 border-[#d9d9d940] mb-5 mx-auto relative">
            <img
              src={Quotes}
              alt="testimonial quotes"
              className="w-[100.25px] h-[78.55px] absolute right-8 -top-12"
            />

            <img
              src={StarRating}
              alt="testimonial rating"
              className="w-[129px] h-[25px] mt-0"
            />

            <p className="font-normal text-[16px] leading-[29.62px] tracking-[1px] text-white my-3 lato-normal">
              Another aspect that sets this website apart is its vibrant and
              passionate community. The forum section provides a platform for
              gamers from all walks of life to connect, share their experiences,
              and discuss their favorite titles. I've made valuable friendships
              and found like-minded individuals who share my enthusiasm for
              gaming.
            </p>
            <div className="w-full h-[1px] bg-gradient-to-r from-white my-7"></div>
            <div className="flex gap-4 mb-7">
              <img
                src={TestimonialImage_2}
                alt="user avatar"
                className="h-[53px] w-[53px] object-contain"
              />
              <div className="my-auto">
                <p className="text-[20.97px] leading-[23.19px] tracking-[2px] text-white mb-3 lato-normal">
                  Kathryn Murphy
                </p>
                <p className="font-medium text-[11.65px] leading-[12.88px] tracking-[2px] text-white lato-normal">
                  General Electric
                </p>
              </div>
              <div className="my-auto flex flex-1 justify-end">
                <img
                  src={Verified}
                  alt="user verified"
                  className="h-[23.7px] w-[24.77px] object-contain mr-2"
                />
                <p className="text-[14.65px] leading-[16.2px] tracking-[2px] text-white lato-normal my-auto">
                  Verified
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src={TestimonialNavigation}
            alt="navigation"
            className="w-auto lg:w-[162px] h-[22.5px] lg:h-[28.93px] mx-auto mt-7"
          />
        </div>
      </div>
    </div>
  );
}
