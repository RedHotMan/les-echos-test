import { USER_TYPES } from '@/constants/common';

export interface Newsletter {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  isSubscribed: boolean;
}

export type NewslettersResponse = {
  site: string;
  newsletters: Newsletter[];
}[];

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: 'M' | 'F';
  subscriptions: ('RIGHT_1' | 'RIGHT_2')[];
}

export type UserType = (typeof USER_TYPES)[keyof typeof USER_TYPES];
