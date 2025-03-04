import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animate">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary rounded-full opacity-10"
            initial={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold hero-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* ロゴ画像を表示 */}
            <motion.img
              src="/nftmusic.png" // ここを実際のロゴ画像のパスに変更してください
              alt="NFT MUSIC Logo"
              className="mx-auto"
              animate={{
                // 例として、微妙な拡大縮小のアニメーションを追加する場合
                
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.h1>

          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            人脈や運を必要としない公平な音楽市場を創るプロジェクト
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="#about" className="btn btn-primary px-8 py-4 text-lg">
            Discover More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
