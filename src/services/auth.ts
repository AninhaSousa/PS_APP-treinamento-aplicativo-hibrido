import { secureGet, secureSet, secureRemove } from './storage';

export type User = { name: string; email: string };
type Account = User & { password: string };

const USERS_KEY = 'ps.users';
const SESSION_KEY = 'ps.session';

async function readAccounts(): Promise<Account[]> {
  const raw = await secureGet(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function register(
  name: string,
  email: string,
  password: string,
): Promise<User> {
  const accounts = await readAccounts();
  const normalized = email.trim().toLowerCase();

  if (accounts.some((a) => a.email === normalized)) {
    throw new Error('Este e-mail já está cadastrado.');
  }

  const account: Account = { name: name.trim(), email: normalized, password };
  await secureSet(USERS_KEY, JSON.stringify([...accounts, account]));

  const user: User = { name: account.name, email: account.email };
  await secureSet(SESSION_KEY, JSON.stringify(user));
  return user;
}

export async function login(email: string, password: string): Promise<User> {
  const accounts = await readAccounts();
  const normalized = email.trim().toLowerCase();
  const account = accounts.find((a) => a.email === normalized);

  if (!account || account.password !== password) {
    throw new Error('E-mail ou senha incorretos.');
  }

  const user: User = { name: account.name, email: account.email };
  await secureSet(SESSION_KEY, JSON.stringify(user));
  return user;
}

export async function getSession(): Promise<User | null> {
  const raw = await secureGet(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function logout() {
  await secureRemove(SESSION_KEY);
}