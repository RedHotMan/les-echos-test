export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secret');
export const JWT_EXPIRATION_TIME = 60 * 60 * 2; // 2 hours
export const USER_COOKIE_NAME = 'jwt-user';
