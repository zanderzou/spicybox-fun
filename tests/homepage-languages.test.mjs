import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../public/_worker.js';

test('restored language homepages reach assets for GET and HEAD, including canonical redirects', async()=>{
 for(const locale of ['de','fr','pt-br','it'])for(const suffix of ['', '/', '/index.html'])for(const method of ['GET','HEAD']){
  let calls=0;const pathname='/'+locale+suffix;
  const response=await worker.fetch(new Request('https://spicybox.fun'+pathname,{method}),{ASSETS:{fetch:async request=>{calls++;assert.equal(new URL(request.url).pathname,pathname);return new Response(method==='HEAD'?null:'homepage',{status:200});}}});
  assert.equal(response.status,200);assert.equal(calls,1);
 }
});

test('restoring homepages keeps retired subpages and unrelated language editions removed',async()=>{
 for(const pathname of ['/de/blog/','/fr/privacy/','/pt-br/terms/','/ja/','/ko/blog/','/de/example/']){
  let calls=0;const response=await worker.fetch(new Request('https://spicybox.fun'+pathname),{ASSETS:{fetch:async()=>{calls++;return new Response('unexpected');}}});
  assert.equal(response.status,410);assert.equal(calls,0);assert.match(response.headers.get('X-Robots-Tag'),/noindex/);
 }
 const missing=await worker.fetch(new Request('https://spicybox.fun/it/blog/'),{ASSETS:{fetch:async()=>new Response('missing',{status:404})}});
 assert.equal(missing.status,404);
});
