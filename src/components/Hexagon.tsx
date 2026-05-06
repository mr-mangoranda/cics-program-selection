import React from 'react';

export const Hexagon = ({ bgCls, children }: { bgCls: string, children: React.ReactNode }) => (
  <div className={`w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] shrink-0 flex items-center justify-center ${bgCls}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
    {children}
  </div>
);
