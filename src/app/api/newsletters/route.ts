import { decodeJwt } from 'jose';

import { NEWSLETTER_ITEMS } from '@/mocks/newsletters';
import { NewslettersResponse, User } from '@/types';

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
        isSubscribed: currentUser?.subscriptions?.some((subscription) => subscriptions.includes(subscription)) ?? false,
      })) ?? [],
  }));

  return Response.json(newsletters);
}
