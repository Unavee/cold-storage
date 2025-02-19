"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import DecryptedText from "./bits/detext";
import { SidebarTrigger } from "./ui/sidebar";

const random = (min: number, max: number) => Math.random() * (max - min) + min;
//new Date().getHours();
function getTimeBasedGreeting() {
  const hour = new Date().getHours();;

  if (hour < 12) {
    return {    
      text: "Good Morning!!",
      colors: ["#B2E2F2", "#FFF6A9"],
      gradient: "from-amber-300 to-orange-300",
      textColor: "text-black",
      elements: ["sun", "clouds"],
    };
  } else if (hour < 18) {
    return {
      text: "Good Afternoon!!",
      colors: ["#00b4d8", "#0077b6"],
      gradient: "from-cyan-400 to-blue-600",
      textColor: "text-white",
      elements: ["clouds"],
    };
  } else {
    return {
      text: "Good Evening!!",
      colors: ["#1a1a2e", "#16213e"],
      gradient: "from-slate-800 to-slate-900",
      textColor: "text-white",
      elements: ["moon", "stars"],
    };
  }
}

export default function Header() {
  const [currentGreeting, setCurrentGreeting] = useState(getTimeBasedGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(getTimeBasedGreeting());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        background: `linear-gradient(90deg, ${currentGreeting.colors[0]}, ${currentGreeting.colors[1]})`,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="relative text-white flex h-16 items-center gap-2 px-4 shadow-lg overflow-hidden"
    >
      {currentGreeting.elements.includes("sun") && (
        <motion.div
          className="absolute top-2 right-6 w-14 h-14"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-yellow-300 rounded-full shadow-lg" />
          <div className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full blur-md" />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-1 bg-yellow-400 top-1/2 left-1/2 -translate-y-1/2"
              style={{
                originX: "0%",
                rotate: i * 45 + "deg",
                x: "35px",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      )}

      {currentGreeting.elements.includes("moon") && (
        <motion.div
          className="absolute top-3 right-8 w-10 h-10 bg-gray-300 rounded-full overflow-hidden"
          animate={{
            x: [0, -3, 0],
            y: [0, -3, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <div className="absolute top-2 left-2 w-8 h-8 bg-gray-900 rounded-full" />
          <div className="absolute top-4 left-6 w-2 h-2 bg-gray-400 rounded-full" />
          <div className="absolute top-6 left-3 w-3 h-3 bg-gray-400 rounded-full opacity-75" />
          <div className="absolute inset-0 bg-white/10 blur-sm" />
        </motion.div>
      )}

      {currentGreeting.elements.includes("stars") && (
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white w-1 h-1 rounded-full"
              style={{
                top: `${random(10, 90)}%`,
                left: `${random(5, 95)}%`,
                scale: random(0.5, 1.2),
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.4, 1],
                x: random(-1, 1),
                y: random(-1, 1),
              }}
              transition={{
                duration: random(1, 3),
                repeat: Infinity,
                repeatType: "mirror",
                delay: random(0, 2),
              }}
            />
          ))}
        </div>
      )}

      {currentGreeting.elements.includes("clouds") && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/80 backdrop-blur-lg rounded-full"
              style={{
                width: `${random(40, 88)}px`,
                height: `${random(80, 50)}px`,
                top: `${random(10, 70)}%`,
                left: `${i * 40}%`,
                scale: 0.8 + i * 0.5,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, random(-10, 10), 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: random(15, 25),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative flex items-center gap-2 px-4 z-10">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <DecryptedText
          text={currentGreeting.text}
          speed={100}
          revealDirection="center"
          className={`${currentGreeting.gradient} capitalize text-center font-mono font-semibold`}
        />
        <DecryptedText
          text="Cold Storage Monitoring"
          animateOn="view"
          speed={100}
          revealDirection="center"
          className={`${currentGreeting.textColor} text-lg font-black drop-shadow-md capitalize text-center`}
        />
      </div>
    </motion.header>
  );
}