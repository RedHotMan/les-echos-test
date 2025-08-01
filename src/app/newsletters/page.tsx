import { PageHeader } from '@/components/molecules';
import { CardGrid } from '@/components/organims';
import { NewslettersResponse } from '@/types';
import { fetchWithAuth } from '@/utils';

export default async function Newsletters() {
  const newsletters = await fetchWithAuth<NewslettersResponse>('/api/newsletters');

  return (
    <section className="flex flex-col gap-15">
      <PageHeader />
      {newsletters.map(({ site, newsletters }) => (
        <CardGrid key={site} title={site} cards={newsletters} />
      ))}
    </section>
  );
}
