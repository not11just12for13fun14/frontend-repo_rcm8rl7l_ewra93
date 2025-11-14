import React from 'react'

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-24 h-72 w-72 animate-[float_12s_ease-in-out_infinite] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-[-60px] top-40 h-80 w-80 animate-[float_16s_ease-in-out_infinite_alternate] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-[-60px] left-1/3 h-64 w-64 animate-[float_14s_ease-in-out_infinite] rounded-full bg-cyan-400/20 blur-3xl" />
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-30px) translateX(10px) scale(1.05); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
      `}</style>
    </div>
  )
}
