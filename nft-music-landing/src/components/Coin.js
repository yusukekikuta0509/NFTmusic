import React from 'react';
import { motion } from 'framer-motion';
// 例としてFontAwesomeのアイコンをインポート
import { FaMoneyBillWave, FaUsers, FaExchangeAlt } from 'react-icons/fa';

const Coin = () => {
  return (
    <section id="token" className="section bg-gradient-to-b from-black to-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">NoteX <span className="text-primary">Token</span></h2>
          <p className="section-subtitle">独自コインの発行で更に加速。</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="token.png"
              alt="token"
              className="object-cover w-40 h-auto rounded-full"
            />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black bg-opacity-60 rounded-xl p-8 md:p-12 border border-gray-800 text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">独自コイン "NoteX" をサービス利用時に発行</h3>
              <p className="text-gray-300 md:text-lg max-w-2xl mx-auto mt-2">
                「音符 (Note)」と無限の可能性を意味する「X」を掛け合わせた、音楽の未来を創るコインです。
              </p>
            </div>
          </motion.div>
        </div>

        {/* カード式のメリット説明セクション */}
        <div className="max-w-6xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8">NoteX Coinがもたらすメリット</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* カード 1: 収益分配 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
            >
              <FaMoneyBillWave className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">収益分配</h4>
              <p className="text-gray-300">
                音楽家の成功に連動し、NFTやNoteX Coin保有者へ自動的にロイヤリティが分配されます。
              </p>
            </motion.div>

            {/* カード 2: ファンとのエンゲージメント */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
            >
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">ファンとのエンゲージメント</h4>
              <p className="text-gray-300">
                NoteX Coin保有者は、限定イベントやガバナンス投票に参加でき、アーティストとの絆が深まります。
              </p>
            </motion.div>

            {/* カード 3: 高い流動性 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
            >
              <FaExchangeAlt className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">高い流動性</h4>
              <p className="text-gray-300">
                二次市場での取引が容易で、NoteX Coinはいつでも現金化できる資産運用手段です。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coin;
