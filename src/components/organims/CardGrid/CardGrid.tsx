import { Heading } from '@/components/atoms';
import { Card } from '@/components/molecules';

export interface CardGridProps extends React.ComponentProps<'div'> {
  title: string;
  cards: React.ComponentProps<typeof Card>[];
}

export function CardGrid({ title, cards }: CardGridProps) {
  return (
    <section>
      <Heading
        asChild
        className={`
          mb-6 ml-5 text-xl
          sm:ml-0
        `}
      >
        <h2>{title}</h2>
      </Heading>
      <div
        className={`
          grid grid-cols-1 gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        `}
      >
        {cards.map(({ title, description, imageUrl, isSubscribed }) => (
          <Card key={title} imageUrl={imageUrl} title={title} description={description} isSubscribed={isSubscribed} />
        ))}
      </div>
    </section>
  );
}
