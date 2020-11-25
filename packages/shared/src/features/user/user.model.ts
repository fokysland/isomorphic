import { createEvent, createStore } from 'effector';

import { User } from './user.type';

export const $user = createStore<User>({ email: '' });
export const $isLoggedIn = $user.map(({ email }) => email.trim() !== '');

export const login = createEvent<string>();

$user.on(login, (_, email) => ({ email }));
