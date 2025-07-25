import { fetchWithCache } from '@netlify/cache'
export default async (request, context) => {

  let url = `https://example.com`
  console.log("Current Deno version", Deno.version.deno);

  console.log("Current TypeScript version", Deno.version.typescript);
  console.log("Current V8 version", Deno.version.v8);
  const res = await fetchWithCache(url)

  if (!res.ok) {
    new Response("FAILED")
  }

  return res;
}