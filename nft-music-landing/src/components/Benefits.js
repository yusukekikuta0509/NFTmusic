import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
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
    <section id="benefits" className="section bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Double <span className="text-primary">Benefits</span></h2>
          <p className="section-subtitle">革新的なエコシステムにおける音楽家と投資家それぞれのメリット</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          {/* For Musicians */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
            
            <motion.div custom={0} variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-primary mr-3">♪</span> For Musicians
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div custom={1} variants={fadeInUp} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">即時資金調達</h4>
                  <p className="text-gray-300">NFT販売を通じて、従来のレコード会社やスポンサーを介さずに直接資金を調達。クリエイティブなプロジェクト、ライブイベント、録音への迅速な投資が可能になります。</p>
                </div>
              </motion.div>
              
              <motion.div custom={2} variants={fadeInUp} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">プロモーション効果の向上</h4>
                  <p className="text-gray-300">NFT所有者がファンかつ投資家となり、SNSやコミュニティを通じて音楽家のプロモーションを促進。限定コンテンツによりエンゲージメントが向上します。</p>
                </div>
              </motion.div>
              
              <motion.div custom={3} variants={fadeInUp} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">ネットワークの形成</h4>
                  <p className="text-gray-300">投資家との直接的なネットワーキングにより、アドバイスやコンサルティング、ビジネスパートナーシップを築き、プラットフォーム上での実績を積むことであなたのブランド価値が向上します。</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* For Investors */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary rounded-xl p-8 border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
            
            <motion.div custom={0} variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-primary mr-3">💰</span> For Investors
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div custom={1} variants={fadeInUp} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">パッシブインカム</h4>
                  <p className="text-gray-300">音楽家の収益が発生すると、スマートコントラクトにより自動的に分配され、投資から安定した収入が得られます。</p>
                </div>
              </motion.div>
              
              <motion.div custom={2} variants={fadeInUp} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">資産価値の向上</h4>
                  <p className="text-gray-300">音楽家の成長に伴い、発行されたNFTの希少性と価値が向上し、二次市場での売却や譲渡でキャピタルゲインが期待できます。</p>
                </div>
              </motion.div>
              
              <motion.div custom={3} variants={fadeInUp} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">ポートフォリオの多様化</h4>
                  <p className="text-gray-300">
                  音楽やエンターテインメントを新たな資産クラスとして投資ポートフォリオに加え、早期参入による大きな成長が期待できます。
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;