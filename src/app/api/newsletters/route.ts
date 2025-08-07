import { decodeJwt } from 'jose';

import { NEWSLETTER_ITEMS } from '@/mocks/newsletters';
import { NewslettersResponse, User } from '@/types';

const isNewsletterAccessible = (currentUser: User | undefined, newsletterSubscriptions: string[]): boolean => {
  if (newsletterSubscriptions.length === 0) {
    return true;
  }

  return currentUser?.subscriptions?.some((subscription) => newsletterSubscriptions.includes(subscription)) ?? false;
};

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');

  const jwt = authHeader?.split(' ')?.[1];

  const currentUser: User | undefined = jwt ? decodeJwt(jwt) : undefined;

  const groupedBySite = Object.groupBy(NEWSLETTER_ITEMS, (item) => item.site);
  const newsletters: NewslettersResponse = Object.entries(groupedBySite).map(([site, items]) => ({
    site,
    newsletters:
      items?.map(({ id, title, description, image: imageUrl, subscriptions }) => ({
        id,
        title,
        description,
        imageUrl,
        isAccessible: isNewsletterAccessible(currentUser, subscriptions),
      })) ?? [],
  }));

  return Response.json(newsletters);
}
