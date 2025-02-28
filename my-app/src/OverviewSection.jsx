// OverviewSection.jsx
import React from "react";

const OverviewSection = () => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        {/* セクションタイトル */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8">
          プロジェクト概要
        </h2>
        {/* プロジェクト紹介文 */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
          本NFTプロジェクトは、音楽家が自分の楽曲や著作権をトークン化し、ファンや投資家が直接投資できるプラットフォームです。これによりアーティストは従来のレコード会社に頼らず資金調達でき、ファンは音楽家の成長に参加しリターンを得るチャンスが生まれます。
        </p>
        {/* 音楽業界の課題説明 */}
        <h3 className="text-2xl font-semibold text-red-400 mb-4">
          音楽業界の課題
        </h3>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          現在の音楽業界では、新人アーティストの資金調達や収益分配が課題となっています。ブロックチェーンとNFTを活用することで、透明性の高い収益配分とファンからの直接支援が可能となり、業界の構造を革新します。
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;
