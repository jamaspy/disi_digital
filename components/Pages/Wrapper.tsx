import React from 'react';

const Wrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <main
      id={id}
      className="bg-gradient-to-br from-primary-500 to-primary-700 min-h-screen pl-12 md:px-20 lg:pl-24 pt-12"
    >
      {children}
    </main>
  );
};

export default Wrapper;
