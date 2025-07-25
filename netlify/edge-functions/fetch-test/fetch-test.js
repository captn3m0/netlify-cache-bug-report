import { fetchWithCache } from '@netlify/cache'
export default async (request, context) => {

  let url = `https://example.com`
  const res = await fetchWithCache(url)

  if (!res.ok) {
    new Response("FAILED")
  }

  return res;
}