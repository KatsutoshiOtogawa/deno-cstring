# deno-cstring

clang string wrapper.

```ts
import { strcpy } from 'https://deno.land/x/cstringh@v0.0.1/mod.ts';

import { puts } from 'https://deno.land/x/cstdio@v0.0.3/mod.ts';
import { calloc, free } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';

const buf = new TextEncoder().encode("あいうえお");

// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 


// 書き込まれる側の文字列用のメモリを確保する。
let s_p = calloc(buf.length, 1);


// @ts-ignore
const s_view = new Deno.UnsafePointerView(s_p);

const s_buf = s_view.getArrayBuffer(buf.length);

strcpy(s_buf, buf)


puts(s_buf);

// new Uint8Array(s_buf);


// メモリの開放。
free(s_p);

```
