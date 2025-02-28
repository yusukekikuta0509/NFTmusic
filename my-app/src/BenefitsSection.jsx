// BenefitsSection.jsx
import React from "react";

const BenefitsSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-6">  {/* 黒に近いグレー背景で区切り */}
      <h2 className="text-3xl font-bold text-center text-red-500 mb-12">
        音楽家と投資家それぞれのメリット
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        {/* 音楽家のメリット */}
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">音楽家のメリット</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li><span className="font-semibold text-gray-100">直接投資で資金調達:</span> ファンから直接資金提供を受けられるため、中間業者を介さず迅速に活動資金を得られる。</li>
            <li><span className="font-semibold text-gray-100">著作権収入の共有:</span> 楽曲NFTを販売し、収益の一部を保有者と共有することでファンとのwin-winな関係を構築。</li>
            <li><span className="font-semibold text-gray-100">ファンコミュニティの強化:</span> 投資してくれたファンに限定特典や先行公開を提供し、熱心なコミュニティを形成。</li>
          </ul>
        </div>
        {/* 投資家のメリット */}
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">投資家のメリット</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li><span className="font-semibold text-gray-100">収益分配への参加:</span> NFT保有により、音楽ストリーミングや楽曲使用料からの収益の一部を分配で受け取る可能性。</li>
            <li><span className="font-semibold text-gray-100">資産価値の向上:</span> お気に入りのアーティストが成長すればNFTの価値も上昇し、売買による利益獲得のチャンス。</li>
            <li><span className="font-semibold text-gray-100">特別な体験や特典:</span> 楽曲制作の裏側アクセスや限定イベント招待など、単なるファン以上の特別な体験を得られる。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
