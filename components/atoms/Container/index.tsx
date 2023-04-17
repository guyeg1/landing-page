import React, { HTMLAttributes } from 'react';

export const Container: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
  const className = `${props.className} container w-full h-full mx-auto flex items-center justify-between px-6 py-3`;
  return (
    <section {...props} className={className}>
      {props.children}
    </section>
  );
};
