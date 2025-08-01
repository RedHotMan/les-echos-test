import { Heading } from '@/components/atoms';

export function PageHeader() {
  return (
    <section className="bg-neutral-micro-contrast p-5 text-center">
      <Heading className="mb-3 text-3xl" withUnderline={false}>
        Newsletters
      </Heading>
      <p>
        Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous
        pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos
        newsletters.
      </p>
    </section>
  );
}
