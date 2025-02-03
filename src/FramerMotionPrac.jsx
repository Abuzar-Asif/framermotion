import React from 'react'
import '../src/FramerMotionPrac.css'
import {motion} from 'motion/react'
const FramerMotionPrac = () => {
  return (
    <>
    <center>
    <h1>
        Framer motion Practice
    </h1>
    </center>
    <motion.div className="box"
    drag
    whileDrag={{
        rotate:-360
    }}
    dragConstraints={{
        left:0,
        top:0,
        right:1200,
        bottom:1200
    }}
    dragDirectionLock='true'
    whileTap={{
        scale:2
    }}
    whileHover={{
        backgroundColor:'green'
    }}
     animate={{
        // x:900,
        // y:90,
        // rotate:270,
     }}
     transition={{
        // duration:3,
        // delay:1,
        // repeat:Infinity,
        ease:'anticipate'
     }}
    ></motion.div>
    <motion.div className="circle"
    animate={{
        x:[0,800,800,0,0],
        y:[0,0,300,300,0],
        // scale:1.5,
        // rotate:360,
        rotate:[0,360,0,-360,0],
    }}
    transition={{
        delay:1,
        repeat:Infinity,
        duration:8,
        ease:'anticipate'
    }}
    ></motion.div>

    </>
  )
}

export default FramerMotionPrac