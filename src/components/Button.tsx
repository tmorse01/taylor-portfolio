type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  className,
  type,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
