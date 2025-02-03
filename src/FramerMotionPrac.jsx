import React from "react";
import "../src/FramerMotionPrac.css";
import { motion, useScroll } from "motion/react";
const FramerMotionPrac = () => {
  const scrollyprogess = useScroll().scrollYProgress;
  return (
    <>
      <center>
        <h1>Framer motion Practice</h1>
      </center>
      <motion.div
      className="text-origin-left bg-danger text position-fixed top-0 left-0 w-100"
        style={{
            transformOrigin: "left center",
            scaleX:scrollyprogess}}
      
      
      >
        <p>
    
        </p>
      </motion.div>
      <motion.div
        className="box"
        drag
        whileDrag={{
          rotate: -360,
        }}
        dragConstraints={{
          left: 0,
          top: 0,
          right: 1200,
          bottom: 1200,
        }}
        dragDirectionLock="true"
        whileTap={{
          scale: 2,
        }}
        whileHover={{
          backgroundColor: "green",
        }}
        animate={
          {
            // x:900,
            // y:90,
            // rotate:270,
          }
        }
        transition={{
          // duration:3,
          // delay:1,
          // repeat:Infinity,
          ease: "anticipate",
        }}
      ></motion.div>
      <motion.div
        className="circle"
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          // scale:1.5,
          // rotate:360,
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          delay: 1,
          repeat: Infinity,
          duration: 8,
          ease: "anticipate",
        }}
      ></motion.div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        <br />
        <br />
        <br />
        <br />
        <br />
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        <br />
        <br />
        <br />
        <br />
        <br />
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        <br />
        <br />
        <br />
        <br />
        <br />
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        <br />
        <br />
        <br />
        <br />
        <br />
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        <br />
        <br />
        <br />
        <br />
        <br />
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        <br />
        <br />
        <br />
        <br />
        <br />
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        <br />
        <br />
        <br />
        <br />
        <br />
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        <br />
        <br />
        <br />
        <br />
        <br />
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        <br />
        <br />
        <br />
        <br />
        <br />
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        <br />
        <br />
        <br />
        <br />
        <br />
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        <br />
        <br />
        <br />
        <br />
        <br />
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        <br />
        <br />
        <br />
        <br />
        <br />
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        <br />
        <br />
        <br />
        <br />
        <br />
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        <br />
        <br />
        <br />
        <br />
        <br />
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        <br />
        <br />
        <br />
        <br />
        <br />
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        <br />
        <br />
        <br />
        <br />
        <br />
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        <br />
        <br />
        <br />
        <br />
        <br />
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        <br />
        <br />
        <br />
        <br />
        <br />
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        <br />
        <br />
        <br />
        <br />
        <br />
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        <br />
        <br />
        <br />
        <br />
        <br />
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        <br />
        <br />
        <br />
        <br />
        <br />
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        <br />
        <br />
        <br />
        <br />
        <br />
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        <br />
        <br />
        <br />
        <br />
        <br />
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        beatae! Quibusdam sed animi saepe quam doloremque placeat, ipsa possimus
        voluptas assumenda ea dolores vel tenetur suscipit ab adipisci sunt
        aperiam magnam expedita ut, cum eum veritatis! Excepturi temporibus nisi
        sed? Autem eius iure eligendi facere incidunt quasi, explicabo, sit
        deleniti obcaecati eos aliquid nihil officiis! Facere obcaecati
        veritatis enim quasi magni debitis, ullam molestias quis ex libero quod
        placeat, corporis deleniti consequuntur aspernatur ab at necessitatibus
        tenetur. Facere, odit possimus. Fugit ipsum mollitia rerum illum neque,
        distinctio libero aperiam voluptates nulla placeat rem, id porro iure.
        Maxime, placeat. Eius ipsam dignissimos possimus nesciunt illum
        reiciendis asperiores perferendis? Maiores eius rem iusto quidem minima
        nulla fugit, asperiores eos dolore assumenda consectetur iste placeat
        sequi vero possimus explicabo? Placeat veritatis saepe vero modi commodi
        reprehenderit numquam exercitationem, aspernatur esse eum nesciunt.
        <br />
        <br />
        <br />
        <br />
        <br />
        Exercitationem molestias, aperiam unde rerum cum, illo error enim
        doloribus quas culpa officiis magnam quidem tenetur impedit fuga
        voluptatum alias placeat facilis tempore quaerat iste dolorum laboriosam
        repellendus molestiae. Perspiciatis voluptas doloribus provident
        aspernatur voluptates maiores in nesciunt esse veniam amet, error enim
        dignissimos id alias, repellendus nulla doloremque ipsum facere debitis
        qui quasi explicabo facilis laborum! Natus tempore incidunt impedit.
      </p>
    </>
  );
};

export default FramerMotionPrac;
