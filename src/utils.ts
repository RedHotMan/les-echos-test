import { decodeJwt } from 'jose';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { USER_COOKIE_NAME } from '@/constants/server';
import { User } from '@/types';

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

  if (!userCookie?.value) {
    redirect('/connect/default-user');
  }

  const fetchHeaders: HeadersInit = {
    ...init?.headers,
    ...headers,
    'content-type': 'application/json',
    authorization: `Bearer ${userCookie.value}`,
  };

  const response = await fetch(url, {
    ...init,
    headers: fetchHeaders,
  });

  if (!response.ok) {
    throw new Error(`Fetch failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getCurrentUserFromCookie(): Promise<User | undefined> {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get(USER_COOKIE_NAME);

  if (userCookie?.value) {
    return decodeJwt(userCookie.value);
  }

  return undefined;
}
