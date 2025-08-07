import Image from 'next/image';

import { Button, CardTitle } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { Newsletter } from '@/types';

interface CardProps extends Omit<Newsletter, 'id'>, Omit<React.ComponentProps<'div'>, 'title'> {}

export function Card({ imageUrl, title, description, isAccessible, className }: CardProps) {
  return (
    <div
      className={cn(
        `
          mx-auto flex h-87 w-full flex-col items-center justify-between
          sm:w-card
        `,
        className
      )}
    >
      <div className="relative h-50 w-full text-center">
        <Image src={imageUrl} fill alt="newsletter image" style={{ objectFit: 'cover' }} />
        <CardTitle
          className={`
            absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2
            font-(family-name:--font-meriweather)
          `}
        >
          {title}
        </CardTitle>
      </div>
      <div className="text-center">{description}</div>
      <div>
        <Button variant={isAccessible ? 'default' : 'subscription'}>{isAccessible ? "S'inscrire" : "S'abonner"}</Button>
      </div>
    </div>
  );
}
