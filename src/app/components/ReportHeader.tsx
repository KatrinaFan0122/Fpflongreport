interface ReportHeaderProps {
  entrepreneurName?: string;
  entrepreneurId?: string;
  generatedDate?: string;
}

export function ReportHeader({ 
  entrepreneurName = "Alex Chen", 
  entrepreneurId = "#8204",
  generatedDate = "2026-01-16"
}: ReportHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-100 pb-6 mb-8 relative z-10">
      <div>
        <div className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-1">
          Co-Fo Framework Analysis
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          FPF 创业策略报告
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Founder-Project-Fit Strategy Diagnosis
        </p>
      </div>
      <div className="mt-4 md:mt-0 text-right">
        <div className="inline-block bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          <p className="text-xs text-slate-400 uppercase font-semibold">创业者 / ID</p>
          <p className="font-bold text-slate-800">{entrepreneurName} / {entrepreneurId}</p>
        </div>
        <div className="text-xs text-slate-400 mt-2">生成日期: {generatedDate}</div>
      </div>
    </header>
  );
}
