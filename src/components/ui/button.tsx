import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:scale-105 shadow-glow-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-glass-border bg-glass backdrop-blur-lg hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary/50",
        secondary:
          "bg-gradient-secondary text-secondary-foreground hover:scale-105 shadow-glow-secondary",
        accent:
          "bg-gradient-accent text-accent-foreground hover:scale-105 shadow-glow-accent",
        tech:
          "bg-gradient-tech text-foreground hover:scale-105",
        glass: "bg-glass backdrop-blur-lg border border-glass-border hover:bg-gradient-primary hover:text-primary-foreground hover:scale-105",
        ghost: "hover:bg-glass hover:backdrop-blur-lg hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-primary-foreground font-bold hover:scale-110 shadow-glow-primary animate-pulse-glow",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-12 w-12",
        hero: "h-16 px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
