import { ReactNode } from 'react';

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <div>{children}</div>;
};

export default Subtitle;
