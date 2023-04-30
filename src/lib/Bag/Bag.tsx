import React from 'react';

interface BagProps {
  children: React.ReactNode;
}
function Bag({ children }: BagProps) {
  return (
    <div style={{ padding: '8px', backgroundColor: 'yellow' }}>
      <div style={{ backgroundColor: 'cyan' }}>
        {children}
      </div>
    </div>
  );
}
export default Bag;
