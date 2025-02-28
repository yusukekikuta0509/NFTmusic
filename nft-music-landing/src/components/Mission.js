import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" className="section bg-gradient-to-b from-secondary to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <pattern id="music-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M10 10L30 10M10 20L30 20M10 30L30 30" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#music-pattern)" />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Our <span className="text-primary">Mission</span></h2>
          <p className="section-subtitle">このプロジェクトで達成したいこと</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black bg-opacity-60 p-8 md:p-12 rounded-xl border border-gray-800 backdrop-blur-sm relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-primary opacity-20">
                <path fill="currentColor" d="M44.5,-73.3C59.3,-67.3,73.9,-58.3,81.9,-44.7C89.9,-31.1,91.3,-12.9,88.9,4.3C86.5,21.4,80.3,37.5,70.1,50.5C59.9,63.6,45.9,73.7,30.4,77.6C14.9,81.4,-2.2,79.1,-18.3,74.9C-34.5,70.8,-49.7,64.8,-60.9,53.9C-72.1,43,-79.2,27.1,-81.2,10.5C-83.1,-6.1,-79.9,-23.5,-72.1,-38.5C-64.2,-53.5,-51.6,-66.1,-37.1,-72.2C-22.6,-78.4,-6.2,-78.1,9.2,-76.5C24.6,-75,39.8,-79.3,44.5,-73.3Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary">音楽業界に革命を巻き起こす。</h3>
            
            <div className="space-y-6 text-lg">
              <p className="text-gray-200">
              私たちのミッションは、才能が真に成功を左右する、より公正で活気ある音楽エコシステムを創造することです。目指すのは、
              </p>
              
              <div className="pl-6 border-l-4 border-primary">
                <p className="text-white font-medium italic mb-4">
                「伝統的な業界構造が提供できない、若い音楽家への直接的な資金支援とキャリア機会を実現すること」
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>音楽の才能が公正な投資メカニズムを通じて直接報われる透明な市場を構築する。</span>
                </li>
                
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>スマートコントラクトによるロイヤリティ分配と直接資金調達で、音楽家の持続可能な収入源を創出する。</span>
                </li>
                
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>投資家とアーティストを直接結びつけ、1on1のクリエイティブ活動を促進する。</span>
                </li>
                
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>ブロックチェーン技術を活用し、すべての取引の透明性、不変性、信頼性を確保する。</span>
                </li>
              </ul>
              
              <p className="text-gray-200">
              このミッションを実現することで、音楽家への資金調達方法を変革するだけでなく、音楽市場全体を拡大し、より多様なサウンドと機会をすべての参加者にもたらします。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;