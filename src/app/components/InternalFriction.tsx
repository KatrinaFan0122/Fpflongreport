interface Friction {
  title: string;
  subtitle: string;
  description: string;
}

export function InternalFriction() {
  const frictions: Friction[] = [
    {
      title: "认知偏差",
      subtitle: "技术自恋陷阱",
      description: "过度高估了「技术优雅度」在客户采购决策中的权重，忽略了「迁移成本」带来的巨大阻力。"
    },
    {
      title: "环境阻力",
      subtitle: "合规性滞后",
      description: "所在的细分领域（如数据采集）目前处于监管灰色地带，未来6-12个月可能面临合规成本激增。"
    },
    {
      title: "资源缺口",
      subtitle: "销售铁军缺失",
      description: "团队全员极客属性，缺乏能将复杂技术语言翻译为商业利益（ROI）的BD合伙人。"
    }
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">03. 创业内在摩擦</h2>
      </div>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-amber-200">
          {frictions.map((friction, index) => (
            <div key={index} className={`px-2 ${index > 0 ? 'pt-4 md:pt-0 md:pl-6' : 'pt-2 md:pt-0'}`}>
              <h4 className="text-amber-800 font-bold text-sm mb-2 flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                {friction.title}
              </h4>
              <div className="text-xs text-slate-600">
                <span className="font-medium text-slate-800 block mb-1">{friction.subtitle}</span>
                {friction.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
