"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BlogSection from "./blogs";
import Footer from "./footer";

export default function ParallaxComponent() {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="layer-1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="layer-2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="layer-3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="layer-4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="layer-5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="layer-6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="layer-7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="layer-8"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="layer-9"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer> */}
        <ParallaxLayer offset={1} speed={0.25}>
          <motion.section
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
          >
            <BlogSection />
          </motion.section>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
