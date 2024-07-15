import { FaPlay } from "react-icons/fa6";
import NikeShoe from "../assets/nike_r.png";
import { motion } from "framer-motion";

const slideUp= (delay:string|number)=> ({
    active: {
        opacity: 1,
        y:0,
        transition: {
          delay: delay,
          duration: 0.5
        }
    },
    inactive: {
        opacity: 0,
        y: 100
    }
})

const slideLeft= (delay:string|number)=> ({
    active: {
        opacity: 1,
        x:0,
        transition: {
          delay: delay,
          duration: 0.5
        }
    },
    inactive: {
        opacity: 0,
        x: 100
    }
})

const Hero = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px]">
        {/* Brand info */}
        <motion.div variants={slideUp(0.2)} initial="inactive" animate="active" className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="text-2xl font-bold uppercase">Jordan 1 air</h1>
            <div className="flex flex-col">
              <span className="font-semibold text-xl">Release Date</span>
              <span>649 7249 79249</span>
              <span className="font-semibold text-xl">Color</span>
              <span>red</span>
            </div>
            <div className="flex flex-col max-w-[250px]">
              <p className="font-semibold text-xl">Select Size</p>
              <div className="flex flex-wrap gap-3">
                <motion.span variants={slideLeft(0.3)} initial="inactive" animate="active" className="size-box">sm</motion.span>
                <motion.span variants={slideLeft(0.4)} initial="inactive" animate="active" className="size-box">md</motion.span>
                <motion.span variants={slideLeft(0.5)} initial="inactive" animate="active" className="size-box">xl</motion.span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* hero image */}
        <div className="flex flex-col justify-center items-center gap-28">
          <motion.img
            initial={{opacity:0,x:100,rotate:0}}
            whileInView={{opacity:1,x:0,rotate:-40}}
            whileHover={{rotate:0}}
            transition={{duration:0.2,delay:0.2}}
            src={NikeShoe}
            alt="shoe"
            className="max-w-[500px] md:max-w-[700px] relative z-10 brightness-110  duration-300"
          />
          <div className="flex flex-row gap-4 items-center">
            <button className="hover:scale-105 duration-200">
              <FaPlay />
            </button>
            <span>Play anime</span>
          </div>
        </div>
        {/* right side */}
      </div>
    </section>
  );
};

export default Hero;
