import React from "react";


export default function Card({ children, inner = false, className = '' }: { children: React.ReactNode, inner?: boolean, className?: string }) {
  return (
    <div className={`text-white overflow-hidden transition rounded-sm px-4 py-2.5 duration-150 ease-in-out max-w-md lg:max-w-2xl w-full ${inner ? 'bg-white/5' : 'bg-gray-800/30'} ${className}`}>
      {children}
    </div>
  )
}
