// HeroSection.jsx
import React from "react";
// Framer Motion を使用してテキストをアニメ表示（フェードイン）
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
      {/* フルスクリーン中央に配置 */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-red-500 mb-6 
                   [text-shadow:_0_0_10px_rgba(255,0,0,0.6)]"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        MUSIC NFT<br/>音楽家の未来に投資してみませんか
      </motion.h1>
      {/* 必要に応じてサブテキスト */}
      <p className="text-gray-300 text-lg md:text-2xl max-w-xl">
        ブロックチェーンで音楽著作権に革命を。<br/>
        お気に入りのアーティストに直接投資しましょう。
      </p>
      {/* CTAボタンの例（お問い合わせフォームへスクロールするリンクなど） */}
      <a href="#contact" 
         className="mt-8 px-6 py-3 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-black transition">
        今すぐ参加する
      </a>
    </section>
  );
};

export default HeroSection;
