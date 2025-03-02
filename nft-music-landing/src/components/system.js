import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaFileAlt, FaBalanceScale } from 'react-icons/fa';

const System = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="system" className="section bg-black">
      <div className="container">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">
            System <span className="text-primary">of Project</span>
          </h2>
          <p className="section-subtitle">このプロジェクトの運用システム</p>
        </motion.div>

        {/* 説明テキスト */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-gray-300 max-w-3xl mx-auto text-center"
        >
          <p className="mb-4">
            今回のプロジェクトは、従来の楽曲販売をNFTで行うシステムとは一線を画し、<br></br>
            音楽家自身への投資を通じて、彼らの成長や実績の積み重ねに応じた利益増加を目指します。
          </p>
          <p className="mb-4">
            資金不足で楽曲制作や音楽学習の機会を得られない音楽家を支援し、<br></br>
            真の実力主義の市場形成を実現するため、中央集権に頼らず各音楽家にポートフォリオの提出を義務付け、
            投資家自身がその内容を判断して投資を行います。
          </p>
          <p>
            ポートフォリオには、名前（仮名可）、年齢、所属団体、楽曲、演奏実績など、詳細な情報が含まれ、<br></br>
            これにより投資家は音楽家の実力や成長ポテンシャルを正当に評価できる仕組みとなります。
          </p>
        </motion.div>

        {/* カード式説明 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* カード 1: 音楽家の審査 */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
          >
            <FaUserCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h4 className="text-xl font-bold mb-2 text-center">音楽家の審査</h4>
            <p className="text-gray-300 text-center">
              運営が一方的に審査するのではなく、<br></br>各音楽家が自身のポートフォリオ<br></br>（名前、年齢、所属、楽曲、実績等）を<br></br>提出し、真の実力を証明します。
            </p>
          </motion.div>

          {/* カード 2: ポートフォリオ提出 */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
          >
            <FaFileAlt className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h4 className="text-xl font-bold mb-2 text-center">ポートフォリオ提出</h4>
            <p className="text-gray-300 text-center">
              音楽家は自身の成績や実績を示す<br></br>ポートフォリオを提出し、<br></br>投資家がその内容をもとに投資判断を<br></br>行うための透明性を確保します。
            </p>
          </motion.div>

          {/* カード 3: 投資家の判断 */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
          >
            <FaBalanceScale className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h4 className="text-xl font-bold mb-2 text-center">投資家の判断</h4>
            <p className="text-gray-300 text-center">
              投資家は提出されたポートフォリオを<br></br>元に、自らの判断で投資対象を選定し、<br></br>真の実力主義市場を実現するための<br></br>エコシステムに参加します。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default System;
