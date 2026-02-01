// src/hooks/useInView.js
import { useEffect, useRef, useState } from 'react';

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after first intersection
          // observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,           // 10% of element visible → trigger
        rootMargin: '0px',        // can be negative for earlier trigger
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

export default useInView;