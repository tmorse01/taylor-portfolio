/**
 * Button variant system aligned with common design libraries (Material UI, Ant Design).
 *
 * Variants:
 * - primary: main call-to-action, filled brand color
 * - secondary: supporting action, outlined / low-emphasis fill
 * - default: neutral action for light surfaces
 * - ghost: minimal action for dark or layered surfaces
 * - link: inline text action with no button chrome
 * - danger: destructive action, filled red
 */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "default"
  | "ghost"
  | "link"
  | "danger";

export const buttonBaseStyles =
  "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-blue-600 border border-blue-500/50 shadow-lg shadow-blue-950/30 hover:bg-blue-500 hover:border-blue-400/60 hover:shadow-blue-500/25 hover:-translate-y-0.5 focus-visible:ring-blue-400",

  secondary:
    "text-blue-100 bg-blue-900/20 border border-blue-300/30 backdrop-blur-md shadow-sm hover:bg-blue-800/40 hover:border-blue-300/50 hover:text-white hover:-translate-y-0.5 focus-visible:ring-blue-400/40",

  default:
    "text-blue-700 bg-white border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800 focus-visible:ring-blue-500 dark:text-blue-300 dark:bg-slate-900 dark:border-blue-500/40 dark:hover:bg-slate-800 dark:hover:border-blue-400/60",

  ghost:
    "text-white/80 bg-transparent border border-white/20 backdrop-blur-sm shadow-none hover:bg-white/10 hover:border-white/60 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] focus-visible:ring-white/40 active:scale-100",

  link: "h-auto min-h-0 px-0 py-0 text-blue-400 bg-transparent border-transparent shadow-none rounded-none hover:text-blue-300 hover:underline focus-visible:ring-blue-400 active:scale-100 hover:-translate-y-0",

  danger:
    "text-white bg-red-600 border border-red-500/50 shadow-lg shadow-red-950/30 hover:bg-red-500 hover:border-red-400/60 hover:shadow-red-500/25 hover:-translate-y-0.5 focus-visible:ring-red-400",
};

export const getButtonClassName = (
  variant: ButtonVariant = "default",
  className = ""
): string => {
  return [buttonBaseStyles, buttonVariantStyles[variant], className]
    .filter(Boolean)
    .join(" ");
};
