import axios from 'axios';

export const universalisClient = axios.create({
  baseURL: 'https://universalis.app/api/v2',
  timeout: 30_000,
});

export async function getWithRetry<T>(url: string, retries = 3): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await universalisClient.get<T>(url);
      return res.data;
    } catch (e) {
      if (i >= retries - 1) throw e;

      await new Promise((r) => setTimeout(r, 500 * 2 ** i));
    }
  }

  throw new Error('Unreachable');
}
