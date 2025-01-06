import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const ref = useRef();
  const { width } = useWindowSize();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { title: "About", link: "About" },
    { title: "Experience", link: "Educations" },
    { title: "Tech", link: "Skills" },
    { title: "Project", link: "Projects" },
  ];

  useOnClickOutside(ref, () => setNavOpen(false));

  useEffect(() => {
    if (width > 1024) {
      setNavOpen(false);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY >= 1);
    });
  }, []);

  return (
    <>
      <header
        className={`px-6 md:px-[90px] h-20 flex items-center justify-between w-full fixed top-0 z-40 transition-all duration-300 py-0 ${scrolled
          ? "shadow bg-[#cce4ff]/75 bg-opacity-90 backdrop-blur hover:bg-opacity-100"
          : "shadow-none bg-transparent"
          }`}
      >
        <div className="font-bold text-xl flex md:text-3xl items-center gap-4 justify-center text-paleBlue">
          <ScrollLink
            to="About"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Aldi
          </ScrollLink>
        </div>

        <div className="hidden xl:flex items-center gap-x-2">
          {menu.map((item, itemIdx) => (
            <div key={itemIdx}>
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                className="text-paleBlue rounded-md px-2 py-[8px] hover:bg-white hover:text-[#0284c7] font-medium whitespace-nowrap cursor-pointer"
              >
                {item.title}
              </ScrollLink>
            </div>
          ))}
        </div>

        <button
          onClick={() => setNavOpen(true)}
          className="block xl:hidden text-paleBlue cursor-pointer"
        >
          <FaBars size={22} />
        </button>
      </header>

      {/* Mobile Navigation */}
      <div
        ref={ref}
        style={{ right: navOpen ? "0" : "-300px" }}
        className="fixed z-50 top-0 h-full min-[300px]:w-[300px] bg-paleBlue/50 backdrop-blur drop-shadow transition-all"
      >
        <div className="flex items-center justify-end text-white p-4">
          <FaXmark
            className="cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        </div>
        <div className="p-4 h-96 text-left space-y-8">
          {menu.map((item, itemIdx) => (
            <div key={itemIdx}>
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                className="px-6 py-2 text-white hover:bg-white/20 font-medium whitespace-nowrap cursor-pointer rounded-lg"
                onClick={() => setNavOpen(false)}
              >
                {item.title}
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
