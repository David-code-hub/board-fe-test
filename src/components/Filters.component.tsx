import Filter_1 from "../assets/filter-1.png";
import Avatar_1 from "../assets/avatar-1.png";
import Filter_2 from "../assets/filter-2.png";
import Avatar_2 from "../assets/avatar-2.png";
import Filter_3 from "../assets/filter-3.png";
import Avatar_3 from "../assets/avatar-3.png";
import Filter_4 from "../assets/filter-4.png";
import Avatar_4 from "../assets/avatar-4.png";
import Filter_5 from "../assets/filter-5.png";
import Avatar_5 from "../assets/avatar-5.png";
import Filter_6 from "../assets/filter-6.png";
import Avatar_6 from "../assets/avatar-6.png";

const cardItems = [
  {
    title: "core philosophies",
    username: "Cameron Williamson",
    subtext: "Gillette",
    avatar: Avatar_1,
    image: Filter_1,
  },
  {
    title: "core philosophies",
    username: "Dianne Russell",
    subtext: "Louis Vuitton",
    avatar: Avatar_2,
    image: Filter_2,
  },
  {
    title: "core philosophies",
    username: "Jane Cooper",
    subtext: "MasterCard",
    avatar: Avatar_3,
    image: Filter_3,
  },
  {
    title: "core philosophies",
    username: "Cody Fisher",
    subtext: "The Walt Disney Company",
    avatar: Avatar_4,
    image: Filter_4,
  },
  {
    title: "core philosophies",
    username: "Wade Warren",
    subtext: "Gillette",
    avatar: Avatar_5,
    image: Filter_5,
  },
  {
    title: "core philosophies",
    username: "Robert Fox",
    subtext: "L'Oréal",
    avatar: Avatar_6,
    image: Filter_6,
  },
];

export default function FiltersSection() {
  return (
    <div>
      <div className="h-[1447px] bg-[#2D1E6B] px-20">
        <p className="text-[66px] uppercase font-extrabold leading-[76.96px] tracking-[4px] text-white text-center lg:w-1/2 mx-auto pb-10">
          Welcome to the top{" "}
          <span className="banner-gradient-text"> games</span>
        </p>

        <div className="flex justify-center gap-0">
          <button
            className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px]
            "
          >
            <span className="slanted-inner-text lato-bold text-white text-[20px] uppercase">
              Newest games
            </span>
          </button>
          <button
            className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px] ml-5 button-outlined
            "
          >
            <span className="slanted-inner-text lato-normal text-[20px] uppercase text-white">
              Latest games
            </span>
          </button>
          <button
            className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px] ml-5 button-outlined
            "
          >
            <span className="slanted-inner-text lato-normal text-[20px] uppercase text-white">
              Fight games
            </span>
          </button>
          <button
            className="h-[74px] banner-gradient-button
            bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
            button-slanted w-[232px] ml-5 button-outlined
            "
          >
            <span className="slanted-inner-text lato-normal text-[20px] uppercase text-white">
              sport games
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16 mx-auto">
          {cardItems.map((item) => (
            <div
              key={item.title + item.avatar}
              className="p-5 rounded-[10px] w-[397px] h-[537px] backdrop-blur-md bg-white/5 border-2 border-[#d9d9d940] mb-5 mx-auto"
            >
              <img
                src={item.image}
                alt="filter item"
                className="lg:w-[361px] lg:h-[265px]"
              />

              <p className="capitalize text-[24px] leading-[26.54px] tracking-[1px] text-white my-7 lato-normal">
                {item.title}
              </p>

              <div className="flex gap-4 mb-7">
                <img
                  src={item.avatar}
                  alt="user avatar"
                  className="h-[53px] w-[53px] object-contain"
                />
                <div className="my-auto">
                  <p className="text-[18px] leading-[19.91px] tracking-[1px] text-white mb-3 lato-normal capitalize">
                    {item.username}
                  </p>
                  <p className="font-medium text-[10px] leading-[11.06px] tracking-[1px] text-white lato-normal">
                    {item.subtext}
                  </p>
                </div>
              </div>
              <button
                className="h-[74px] banner-gradient-button
          bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] w-1/2
          button-slanted w-[232px] w-full h-[52px]
          "
              >
                <span className="slanted-inner-text lato-bold text-white text-[18px] uppercase">
                  Live Demo
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
