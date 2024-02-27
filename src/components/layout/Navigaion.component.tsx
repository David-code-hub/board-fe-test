import BagIcon from "../../assets/bag-icon.png";
import Logo from "../../assets/logo.png";
import Badge from "../../assets/badge.png";
import MenuIcon from "../../assets/menu-icon.png";
const navigation = [
  { name: "PRODUCTS", href: "#" },
  { name: "APPS & GAMES", href: "#" },
  { name: "FEATURES", href: "#" },
  { name: "SUPPORT", href: "#" },
  { name: "ABOUT", href: "#" },
];

export default function Navigation() {
  return (
    <div className="lg:absolute w-full z-10 max-w-[1440px]">
      <nav
        className="flex items-center justify-between p-7 lg:px-28 lg:pb-12 lg:pt-7"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Board</span>
            <img
              className="lg:w-[150.83px] h-[29.58px] w-auto lg:h-[34.86px]"
              src={Logo}
              alt="board logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <img src={MenuIcon} alt="menu icon" className="h-[14px] w-[23px]" />
          </button>
        </div>
        <div className="hidden lg:flex  gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[18px] lato-normal leading-[19.91px] text-white nav-tab tracking-[1px]"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <img src={BagIcon} className="bag-icon" alt="bag cart" />
          <img
            src={Badge}
            className="h-[6px] w-[6px] left-[-4px] top-[7px] relative"
            alt="bag cart"
          />
        </div>
      </nav>
    </div>
  );
}
