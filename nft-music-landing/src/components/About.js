import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-black to-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">About <span className="text-primary">The Project</span></h2>
          <p className="section-subtitle">音楽業界をブロックチェーンで揺らす。</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-300">
              長年の業界構造により、既存の大物に有利な環境が続いており、若い才能ある音楽家は十分な支援を受けられていません。実力主義と謳われながらも、実際は運や人脈が大きく影響している現状があります。
              </p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-300">
              各音楽家ごとにユニークなNFTを発行し、投資家が直接投資できる仕組みを構築。これにより、音楽家は直接資金を調達でき、投資家は将来的な価値上昇の恩恵を受けることができます。
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <p className="text-gray-300">
              各音楽家は独自のNFTを発行され、そのNFTには音楽家のポートフォリオやパフォーマンス情報が組み込まれます。スマートコントラクトにより、収益の一部が自動的にNFT保有者に分配される仕組みです。
              </p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Market Impact</h3>
              <p className="text-gray-300">
              音楽家への資金提供の新しいステージを提供することで、ライブ、ストリーミング、コンテンツ販売など多角的な収益源が生まれ、二次市場でのロイヤリティ収入も期待できます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;