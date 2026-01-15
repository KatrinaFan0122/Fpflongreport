export function CoFoSuggestions() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">04. Co-Fo 建议</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Suggestion 1: Time/Space */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-lg text-slate-800">时空修正</h3>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">
              Timing & Scope
            </span>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-slate-700">
              <span className="font-bold text-emerald-500">NOW</span>
              <span>停止C端产品研发，将现有技术封装为API，专注服务于3-5家标杆B端客户。</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-700">
              <span className="font-bold text-slate-400">NEXT</span>
              <span>利用B端现金流，在Q3季度启动"低代码"版本，降低使用门槛。</span>
            </li>
          </ul>
        </div>

        {/* Suggestion 2: Path Optimization */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-lg text-slate-800">路径寻优</h3>
            <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
              Critical Path
            </span>
          </div>
          <div className="relative pl-4 border-l border-slate-200 ml-2 space-y-4">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
              <h5 className="text-sm font-bold text-slate-800">降维打击</h5>
              <p className="text-xs text-slate-500">
                放弃"教育市场"，寻找已经有痛点但解决方案昂贵的场景进行替代。
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
              <h5 className="text-sm font-bold text-slate-800">建立生态位</h5>
              <p className="text-xs text-slate-500">
                与行业ERP厂商建立渠道联盟，借船出海。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
