import React from 'react';
import { motion } from 'framer-motion';

const CEO = () => {
  return (
    <section id="ceo" className="section bg-black relative overflow-hidden">
      {/* Decorative music notes background */}
      <div className="absolute inset-0 z-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary text-6xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {['♪', '♫', '♬', '♩', '♭', '♮'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">CEO <span className="text-primary">Message</span></h2>
          <p className="section-subtitle">このプロジェクトの達成に向けたCEOメッセージ</p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary bg-opacity-60 rounded-xl p-8 md:p-10 border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary opacity-5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-800 border-4 border-primary overflow-hidden relative">
                  {/* Placeholder for CEO photo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <img
                        src="/110973.jpg" 
                        alt="CEOの写真" 
                        className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-xl font-bold">Yusuke Kikuta</h4>
                  <p className="text-primary">Founder & CEO</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-grow space-y-6"
              >
                <blockquote className="border-l-4 border-primary pl-6 italic text-gray-300">
                  <p className="text-lg md:text-xl">
                    私は音楽大学に進学したのちに、将来設計をやり直しエンジニアに転身しました。音楽業界が伝統的な業界ゆえに、真の実力主義ではなく運や人脈に左右される現実を目の当たりにしてきました。私たちのプロジェクトはそのギャップを埋め、成功が実力によって決まる公正なエコシステムを構築します。
                  </p>
                </blockquote>
                
                <div className="space-y-4 text-gray-200">
                  <p>
                  私のキャリアを通して、支援を受けられずに苦労してきています。多くの才能ある音楽家を見てきました。現行の業界構造では、たとえ実力があっても実力だけでは十分な機会が与えられません。
                  </p>
                  
                  <p>
                  NFT MUSICは単なるWeb3プロジェクトではなく、音楽業界を民主化するムーブメントです。ブロックチェーン技術を活用し、直接的な支援システムを実現します。
                  </p>
                  
                  <p>
                  私たちのビジョンは、音楽家が最高の音楽制作に専念できる環境を提供するとともに、適正な報酬と持続可能なキャリアを築くことです。一方で、投資家は早期に才能を発見し、透明で相互に利益をもたらす仕組みを通じて、その成功を共有できます。
                  </p>
                  
                  <p className="font-medium">
                  ぜひ、共に音楽業界を活性化していきましょう。
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

export default CEO;