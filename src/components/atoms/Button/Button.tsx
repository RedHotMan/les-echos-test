import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `
    inline-flex shrink-0 items-center justify-center gap-2 rounded-5xl px-3 text-sm font-bold whitespace-nowrap
    transition-all outline-none
    hover:cursor-pointer
    focus-visible:ring-[3px]
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      variant: {
        default: `
          bg-primary text-white
          hover:bg-primary/80
        `,
        subscription: `
          bg-subscription text-black
          hover:bg-subscription/80
        `,
      },
      size: {
        default: `
          h-10 min-w-31
          has-[>svg]:px-3
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
