import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size    = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest rounded-2xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a5c86] disabled:opacity-60 disabled:cursor-not-allowed';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-[#0a5c86] text-white hover:bg-[#034466] dark:bg-[#38bdf8] dark:text-slate-900 dark:hover:bg-[#0ea5e9]',
  secondary:
    'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  ghost:
    'text-[#0a5c86] dark:text-white hover:bg-[#0a5c86]/10 dark:hover:bg-[#38bdf8]/10',
};

const SIZES: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-sm',
};

// ── Button element ──────────────────────────────────────────────────────────
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...rest }: ButtonProps) {
  return (
    <button
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

// ── Anchor element (same visual, renders <a>) ───────────────────────────────
interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function LinkButton({ variant = 'primary', size = 'md', className = '', children, ...rest }: LinkButtonProps) {
  return (
    <a
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
