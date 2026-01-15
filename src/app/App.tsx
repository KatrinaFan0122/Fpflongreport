import { Printer } from 'lucide-react';
import { ReportHeader } from '@/app/components/ReportHeader';
import { StrategicPositioning } from '@/app/components/StrategicPositioning';
import { StrategicAnalysis } from '@/app/components/StrategicAnalysis';
import { InternalFriction } from '@/app/components/InternalFriction';
import { CoFoSuggestions } from '@/app/components/CoFoSuggestions';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8 min-h-screen" style={{ fontFamily: "'Noto Sans SC', sans-serif", backgroundColor: '#f3f4f6' }}>
      {/* Control Bar */}
      <div className="max-w-[210mm] mx-auto mb-4 flex justify-end print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition shadow"
        >
          <Printer size={16} />
          打印 / 导出PDF
        </button>
      </div>

      {/* Main Report Container */}
      <div className="max-w-[210mm] mx-auto min-h-[297mm] p-8 md:p-12 bg-white relative overflow-hidden rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] print:shadow-none print:rounded-none">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none"></div>

        <ReportHeader 
          entrepreneurName="Alex Chen"
          entrepreneurId="#8204"
          generatedDate="2026-01-16"
        />

        <StrategicPositioning 
          speciesName="知识领主"
          tags={["高抗压", "深度垂直", "技术驱动"]}
          summary="该策略模型显示出极强的单一痛点穿透力。与其追求广阔的水平市场，不如利用核心技术资产在垂直领域建立深壁垒。如同深海生物，在极高压环境下通过特异化进化获得生存权，随后向上层水域辐射影响力。"
        />

        <StrategicAnalysis />

        <InternalFriction />

        <CoFoSuggestions />

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-400">
            本报告基于 Co-Fo (Co-Founder) 模拟算法生成 · 仅供策略参考 · Confidential
          </p>
        </footer>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          html, body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            margin: 0;
            size: A4;
          }
        }
      `}</style>
    </div>
  );
}