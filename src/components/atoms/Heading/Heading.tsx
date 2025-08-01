import { Slot } from '@radix-ui/react-slot';

interface HeadingProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
  withUnderline?: boolean;
}

export function Heading({ className, asChild = false, withUnderline = true, ...props }: HeadingProps) {
  const Comp = asChild ? Slot : 'h1';

  return (
    <div className={className}>
      <Comp className={`font-bold uppercase`} {...props} />
      {withUnderline && <div className="mt-2 h-1 w-17 rounded-xl bg-primary"></div>}
    </div>
  );
}
