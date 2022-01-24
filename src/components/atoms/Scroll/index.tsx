import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { debounce } from 'lodash';

interface ScrollProps {
  children: ReactNode;
  className: string;
  scrollActiveLocation: number; //얼마나 보이고 이벤트 시작할지
}

const ScrollComponent = ({
  children,
  className,
  scrollActiveLocation,
}: ScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const delay = 15;
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener('scroll', debounce(yScrollEvent, delay));
    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, [scrollRef.current]);

  const yScrollEvent = () => {
    const { current } = scrollRef;
    if (current !== null) {
      const scroll: DOMRect = current.getBoundingClientRect();
      if (scroll.top < window.innerHeight - scrollActiveLocation) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }
  };

  return (
    <div className={`${className} ${isShow ? 'active' : ''}`} ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollComponent;
