import {
    animate,
    motion,
    useMotionValue,
    useTransform,
    useWillChange,
  } from "framer-motion";
  import { useEffect } from "react";
  
  export default function Intro() {

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const willChange = useWillChange();
  
    useEffect(() => {
      const animation = animate(count, 100, { duration: 4, delay: 0 });
  
      return animation.stop;
    }, [count]);
  
    return (
      <motion.div
        layout
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ scaleY: 0, opacity: 0 }}
        transition={{
          duration: 1.5,
          delay: 6,
          ease: "anticipate",
        }}
        style={{
          willChange,
          background: "#000",
          color: "#fff",
          position: "fixed",
          justifyContent: "center",
          transformOrigin: "top",
          display: "flex",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <motion.div
          initial={{  zIndex: "100" }}
          animate={{  zIndex: "-100" }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "circIn",
          }}
          layout
          style={{
            willChange,
            alignSelf: "center",
            mixBlendMode: "difference",
          }}
        >
          {rounded}
         
        </motion.div>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "linear",
          }}
          layout
          style={{
            willChange,
            height: "100%",
            width: `1vw`,
            scaleX: rounded,
            background: "#fff",
            color: "#000",
            position: "absolute",
            transformOrigin: "left",
            left: "0",
            bottom: "0",
          }}
        />
      </motion.div>
    );
  };
  

  