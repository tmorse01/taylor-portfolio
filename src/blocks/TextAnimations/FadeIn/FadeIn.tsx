import { useEffect, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  onComplete?: () => void;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 1000,
  className = "",
  onComplete,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);

      if (onComplete) {
        const completionTimer = setTimeout(() => {
          onComplete();
        }, duration);

        return () => clearTimeout(completionTimer);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration, onComplete]);

  const style = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-in-out`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default FadeIn;
