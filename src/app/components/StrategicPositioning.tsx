interface StrategicPositioningProps {
  speciesName?: string;
  tags?: string[];
  summary?: string;
}

export function StrategicPositioning({
  speciesName = "知识领主",
  tags = ["高抗压", "深度垂直", "技术驱动"],
  summary = "该策略模型显示出极强的单一痛点穿透力。与其追求广阔的水平市场，不如利用核心技术资产在垂直领域建立深壁垒。如同深海生物，在极高压环境下通过特异化进化获得生存权，随后向上层水域辐射影响力。"
}: StrategicPositioningProps) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">01. 创业策略定位</h2>
      </div>

      <div className="bg-gradient-to-br from-emerald-900 to-emerald-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="40"/>
            <path d="M50 10 V90 M10 50 H90"/>
          </svg>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          {/* Species Name */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-emerald-100 text-sm font-medium mb-1">创维物种名称</p>
            <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">{speciesName}</h3>
            <div className="inline-flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-white/15 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="flex-[1.5] bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
            <p className="text-xs text-emerald-200 uppercase font-bold mb-2">定位综述</p>
            <p className="text-sm leading-relaxed text-emerald-50">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
