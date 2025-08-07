import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { userConfigs } from '@/constants/common';
import { JWT_EXPIRATION_TIME, JWT_SECRET, USER_COOKIE_NAME } from '@/constants/server';
import { UserType } from '@/types';

export async function GET(_: Request, { params }: { params: Promise<{ user: UserType }> }) {
  const { user } = await params;

  const currentUser = userConfigs[user];
  const token = await new SignJWT(currentUser)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRATION_TIME)
    .sign(JWT_SECRET);

  const cookieStore = await cookies();
  cookieStore.set(USER_COOKIE_NAME, token, {
    maxAge: JWT_EXPIRATION_TIME,
    secure: false,
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
  });

  return redirect('/newsletters');
}
