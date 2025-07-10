import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../utils/route";
import Button from "./button";

const tabs = ["Home", "About", "Services", "Projects", "Reviews"];

const routeMap = {
  Home: "/",
  About: AppRoutes.about,
  Services: AppRoutes.services,
  Projects: AppRoutes.projects,
  Reviews : AppRoutes.reviews,
};

const ChipTabs = ({ onClickItem }) => {
  const [selected, setSelected] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleClick = (tab) => {
    setSelected(tab);
    const path = routeMap[tab];
    if (path.includes("#")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    if (onClickItem) onClickItem(); // close sidebar if passed
  };

  return (
    <div className="bg-white w-fit bg-whtie border border-gray-200 flex gap-x-7 max-lg:hidden max-2xl:gap-x-4 rounded-full justify-between items-center p-4 relative z-10">
      {tabs.map((tab) => (
        <Chip
          key={tab}
          text={tab}
          selected={selected === tab}
          onClick={() => handleClick(tab)}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected
          ? "text-white"
          : "text-black hover:text-white hover:bg-primaryCol/30"
      } transition-colors px-4 py-2 rounded-3xl relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 px-4 py-2 bg-primaryCol rounded-3xl"
        ></motion.span>
      )}
    </button>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingNav, setPendingNav] = useState(null); // track navigation after close
  const navigate = useNavigate();

  // When sidebar closes and there's a pending navigation, navigate after animation
  useEffect(() => {
    if (!sidebarOpen && pendingNav) {
      if (pendingNav.includes("#")) {
        window.location.href = pendingNav;
      } else {
        navigate(pendingNav);
      }
      setPendingNav(null);
    }
  }, [sidebarOpen, pendingNav, navigate]);

  const handleTabClick = (tab) => {
    const path = routeMap[tab];
    setPendingNav(path);
    setSidebarOpen(false); // trigger close animation first
  };

  return (
    <nav className="text-white flex justify-between items-center left-0 fixed top-0  w-full z-50  px-28 max-md:px-4 pt-2 backdrop-blur-md ">
      <Link to={AppRoutes.home}>
        <section className="flex items-center font-bold">
          <div className="w-28 h-20 overflow-hidden">
            <img src="/logo.svg" className="w-full h-full"/>
          </div>
         
        </section>
      </Link>

      {/* Desktop tabs */}
      <section className="relative z-20">
        <ChipTabs />
        <div className="bg-custom-radial opacity-30 absolute w-[1512px] h-[963px] left-1/2 -top-1/2 -translate-x-1/2 -translate-y-1/3 -z-20 pointer-events-none max-sm:hidden"></div>
      </section>

      {/* Mobile menu button */}
      <div
        className="max-lg:block hidden bg-primaryCol z-20 rounded-full px-4 py-1.5 text-sm cursor-pointer font-bold "
        onClick={() => setSidebarOpen(true)}
      >
        Menu
      </div>
      <a href="https://calendly.com/thechillsroom/30min" target="_blank" className="max-xl:hidden">
        <Button text={"Contat us"} />
      </a>
      {/* <div className="w-[10vw] max-xl:hidden"></div> */}

      {/* Sidebar Overlay and Slide-in */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black  z-40"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-full px-3 py-3  text-white z-50  flex flex-col"
            >
              <div className="flex justify-between items-center mb-20">
                <section className="flex items-center font-bold ">
                  <div className="w-[72px] h-[72px]">
                    <img src="/logo.svg" />
                  </div>
               
                </section>
                <div
                  className=" text-sm font-bold bg-black px-4 py-1.5 rounded-full capitalize cursor-pointer"
                  onClick={() => setSidebarOpen(false)}
                >
                  close
                </div>
              </div>
              <div
                className="absolute left-0 top-0 w-screen h-screen -z-20 bg-black"
                style={{
                  backgroundImage: 'url("/chillsbg.png")',
                  backgroundSize: "cover",
                  backgroundRepeat: "repeat",
                }}
              ></div>
              <div className=" absolute left-0 top-0 w-screen h-screen -z-10 bg-[linear-gradient(106deg,rgba(101,175,186,0.4)_0%,rgba(101,175,186,0.4)_104.9%)]"></div>

              {tabs.map((tab) => (
                <div
                  key={tab}
                  className=" py-3 bg-black border-white/20 my-2 cursor-pointer hover:bg-primaryCol/30 rounded-full mx-auto  w-60 text-center "
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
