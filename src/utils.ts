import { cookies, headers } from 'next/headers';

import { USER_COOKIE_NAME } from '@/constants/server';

export async function fetchWithAuth<T>(path: string, init?: RequestInit): Promise<T> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get(USER_COOKIE_NAME);
  const headersList = await headers();
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const host = headersList.get('host');

  if (!host) {
    throw new Error('Host header is missing');
  }

  const url = `${protocol}://${host}${path}`;

  let fetchHeaders: HeadersInit = {
    ...init?.headers,
    'content-type': 'application/json',
  };
  if (userCookie?.value) {
    fetchHeaders = {
      ...headers,
      authorization: `Bearer ${userCookie.value}`,
    };
  }

  const response = await fetch(url, {
    ...init,
    headers: fetchHeaders,
  });

  if (!response.ok) {
    throw new Error(`Fetch failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
