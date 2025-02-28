// ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-16 px-6">
      <div className="max-w-md mx-auto text-center text-gray-100">
        <h2 className="text-3xl font-bold text-red-500 mb-4">お問い合わせ</h2>
        <p className="mb-8 text-gray-300">
          プロジェクトへのご質問や詳細な情報については、以下のメールアドレスよりお問い合わせください。
        </p>
        <p>yusukekikuta.05@gmail</p>
      </div>
    </section>
  );
};

export default ContactSection;
