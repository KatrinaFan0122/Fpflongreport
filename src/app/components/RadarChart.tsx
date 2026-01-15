export function RadarChart() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
      {/* Grid Lines */}
      <polygon 
        points="100,20 180,100 100,180 20,100" 
        className="fill-none stroke-slate-200"
        strokeWidth="1"
      />
      <polygon 
        points="100,40 160,100 100,160 40,100" 
        className="fill-none stroke-slate-200"
        strokeWidth="1"
      />
      <polygon 
        points="100,60 140,100 100,140 60,100" 
        className="fill-none stroke-slate-200"
        strokeWidth="1"
      />
      
      {/* Axes */}
      <line 
        x1="100" y1="20" x2="100" y2="180" 
        className="stroke-slate-200"
        strokeWidth="1"
      />
      <line 
        x1="20" y1="100" x2="180" y2="100" 
        className="stroke-slate-200"
        strokeWidth="1"
      />
      
      {/* Data Shape */}
      <polygon 
        points="100,30 170,100 100,150 50,100" 
        className="fill-blue-600/20 stroke-blue-600"
        strokeWidth="2"
      />
      
      {/* Points */}
      <circle cx="100" cy="30" r="4" fill="#2563eb" />
      <circle cx="170" cy="100" r="4" fill="#2563eb" />
      <circle cx="100" cy="150" r="4" fill="#2563eb" />
      <circle cx="50" cy="100" r="4" fill="#2563eb" />
      
      {/* Labels */}
      <text x="100" y="10" textAnchor="middle" fontSize="10" fill="#64748b">愿景</text>
      <text x="190" y="103" textAnchor="start" fontSize="10" fill="#64748b">协作</text>
      <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#64748b">资产</text>
      <text x="10" y="103" textAnchor="end" fontSize="10" fill="#64748b">市场</text>
    </svg>
  );
}
