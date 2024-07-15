import { FaWallet } from "react-icons/fa6";
import NikeLogo from "../assets/nike_l.png";
import { FaHamburger, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
    delay: "0.2",
  },

  {
    id: 2,
    title: "Men",
    link: "#",
    delay: "0.4",
  },
];

const slideRight = (delay:string|number) =>({
    hidden: {
        opacity: 0,
        x: -100
    },
    show:{
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

const NavBar = () => {
  return (
    <nav>
      <div className="bg-primary text-white">
        <div className="container flex justify-between py-6 items-center">
          {/* {Logo} */}
          <motion.div variants={slideRight(0.1)} initial="hidden" animate="show">
            <img src={NikeLogo} alt="logo" className="w-[100px]" />
          </motion.div>
          {/* {Menu} */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {menus.map((menu) => {
                return (
                  <motion.li key={menu.id} variants={slideRight(menu.delay)} initial="hidden" animate="show">
                    <a
                      href={menu.link}
                      className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300"
                    >
                      {menu.title}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          {/* {ICons} */}
          <motion.div variants={slideRight(0.5)} initial="hidden" animate="show" className="flex items-center gap-4">
            <FaUserCircle className="text-2xl cursor-pointer hover:scale-110 duration-300" />
            <div className="relative">
              <FaWallet className="text-2xl cursor-pointer hover:scale-110 duration-300" />
              <div className="absolute -top-1 -right-2 bg-red-900 rounded-full z-50 w-4 h-4 flex justify-center items-center text-white text-sm">2</div>
            </div>
          </motion.div>
          {/* {Mobile Menu} */}
          <div className="md:hidden">
            <FaHamburger />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
