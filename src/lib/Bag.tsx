import React from "react";

interface BagProps {
  children?: React.ReactNode;
}

function Bag({ children }: BagProps) {
  return (
    <div style={{ backgroundColor: 'yellow', padding: '8px' }}>
      <div style={{ backgroundColor: 'yellowgreen' }}>
        {children}
      </div>
    </div>
  )
}

export default Bag;
