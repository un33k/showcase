import { tm } from '@sc/libs/util/style/merge';
import { HTMLProps, ReactNode } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export function Container(props: Props) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={tm(
        'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-4',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
