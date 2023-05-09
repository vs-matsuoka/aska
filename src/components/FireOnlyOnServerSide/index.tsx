import React, { useEffect, useState } from 'react';

const FireOnlyOnServerSide = ({ children }: { children: React.ReactNode }) => {
  const [isServerSide, setIsServerSide] = useState(true);
  useEffect(() => {
    setIsServerSide(typeof window === 'undefined');
  }, []);

  return <>{isServerSide ? children : <></>}</>;
};

export default FireOnlyOnServerSide;
