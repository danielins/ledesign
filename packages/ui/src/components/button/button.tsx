import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "ui:inline-flex ui:items-center ui:justify-center ui:rounded-md ui:font-medium ui:transition-colors ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:cursor-pointer",
  {
    variants: {
      variant: {
        primary: "ui:bg-brand ui:text-white ui:hover:bg-brand/90",
        secondary: "ui:bg-gray-100 ui:text-gray-900 ui:hover:bg-gray-200",
        ghost: "ui:text-brand ui:hover:bg-brand/10",
      },
      size: {
        sm: "ui:h-8 ui:px-3 ui:text-sm",
        md: "ui:h-10 ui:px-4 ui:text-base",
        lg: "ui:h-12 ui:px-6 ui:text-lg",
      }
    },
    defaultVariants: {variant: 'primary', size: 'md'}
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, isLoading = false, disabled, children, ...props}, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({variant, size}), className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && (
        <svg
          aria-hidden="true"
          className="ui:mr-2 ui:size-4 ui:animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="ui:opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="ui:opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  )
)
Button.displayName = "Button";