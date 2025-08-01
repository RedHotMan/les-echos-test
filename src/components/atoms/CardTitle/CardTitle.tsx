import { cn } from '@/lib/utils';

export function CardTitle({ children, className }: React.ComponentProps<'h2'>) {
  return (
    <h3 className={cn('font-meriweather text-3xl font-bold text-white text-shadow-lg/20', className)}>{children}</h3>
  );
}
