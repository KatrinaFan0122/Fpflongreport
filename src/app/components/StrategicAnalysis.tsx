import { RadarChart } from '@/app/components/RadarChart';
import { Info, Users, Package, TrendingUp } from 'lucide-react';

interface Dimension {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

export function StrategicAnalysis() {
  const dimensions: Dimension[] = [
    {
      icon: <Info size={16} />,
      title: "愿景尺度：Lifestyle",
      description: "追求可持续的现金流与工作生活的平衡，而非高风险的资本扩张。目标是构建一个服务于创始人生活方式的高利润生意。",
      colorClass: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: <Users size={16} />,
      title: "协作模式：Team Builder",
      description: "核心在于识人、用人与培养人。通过打造强凝聚力、价值观一致的内生团队来驱动业务，而非依赖松散的外部协作。",
      colorClass: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: <Package size={16} />,
      title: "核心资产：System",
      description: "关键资产是一套经过验证的、可自动运转的业务流程与管理体系（SOP）。将个人能力转化为可复制的系统能力。",
      colorClass: "bg-amber-100 text-amber-600"
    },
    {
      icon: <TrendingUp size={16} />,
      title: "市场姿态：Optimizer",
      description: "不做颠覆性的从0到1，而是专注于现有市场的存量优化。通过提升效率、降低成本或改善体验来获取市场份额。",
      colorClass: "bg-rose-100 text-rose-600"
    }
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">02. 创业策略解析</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Radar Chart */}
        <div className="col-span-1 bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center min-h-[250px]">
          <h4 className="text-sm font-bold text-slate-500 mb-4">维度组合</h4>
          <RadarChart />
        </div>

        {/* Right: Detailed Cards */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dimensions.map((dimension, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-4 rounded-lg border border-slate-200 transition-all duration-300 hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-1.5 rounded ${dimension.colorClass}`}>
                  {dimension.icon}
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{dimension.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {dimension.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
