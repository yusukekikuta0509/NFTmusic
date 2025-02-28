import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-black to-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0yNHY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
          <p className="section-subtitle">さらに詳しく知りたい、または私たちの革命に参加したい方は、<br></br>こちらからお問い合わせください!</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black bg-opacity-60 rounded-xl p-8 md:p-12 border border-gray-800 text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">革命を起こす覚悟はできていますか？</h3>
              <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              サポートを求めている音楽家の皆様、新しい機会を探している投資家、<br></br>または当社のプロジェクトに興味がある方など、ぜひご連絡ください。

              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary bg-opacity-20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                <a href="mailto:yusukekikuta.05@gmail.com" className="text-primary hover:text-white transition-colors">
                  yusukekikuta.05@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h4 className="text-xl font-semibold mb-6">Follow Our Journey</h4>
              <div className="flex justify-center space-x-6">
                <a href="https://x.com/yusuke_05092005" className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary transition-colors duration-300 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                
                <a href="https://www.instagram.com/y_k_.o5/" className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary transition-colors duration-300 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;