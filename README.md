# Netlify Bug Report

```
TypeError: requestContext.waitUntil is not a function
    at fetchWithCache (file:///home/nemo/projects/personal/mf.captnemo.in/.netlify/edge-functions-serve/bundled-@netlify_cache.js:328:22)
    at eventLoopTick (ext:core/01_core.js:181:11)
    at async default (file:///home/nemo/projects/personal/mf.captnemo.in/netlify/edge-functions/nsdl-isin-details/nsdl-isin-details.js:8:15)
    at async FunctionChain.runFunction (https://v2-14-0--edge.netlify.com/bootstrap/function_chain.ts:526:22)
    at async FunctionChain.run (https://v2-14-0--edge.netlify.com/bootstrap/function_chain.ts:395:20)
    at async handleRequest (https://v2-14-0--edge.netlify.com/bootstrap/handler.ts:178:7)
    at async ext:deno_http/00_serve.js:457:18
```

## Reproduce locally

```
npm ci
netlify dev
```

Open <http://localhost:8888/test> in the browser

## Reproduce over Docker

```
docker build -t netlify-cache-bug .
docker run --publish 8888:8888 netlify-cache-bug
```

Open <http://localhost:8888/test> in the browser