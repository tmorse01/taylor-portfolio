import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Reset state when text prop changes
    setDisplayedText("");
    setIsTyping(false);

    // Start initial delay
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      // Continue typing
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
    } else {
      // Typing complete
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, text, speed, isTyping, onComplete]);

  return (
    <div className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </div>
  );
};

export default TypewriterText;
