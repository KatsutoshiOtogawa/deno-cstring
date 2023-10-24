/// <reference lib="deno.unstable" />

const CallSymbol = {
  "strxfrm": {
    name: "strxfrm",
    parameters: [
      //  変換の結果の格納先の配列
      "buffer",
      //  変換する文字列
      "buffer",

      // 格納する変換した結果の文字数
      "u64",
    ],
    result: "u64"
  },
} as const

function _load() {

  let cpu =  "" 
  if (Deno.build.arch == 'aarch64') {
      cpu = 'aarch64'
  } else if (Deno.build.arch == 'x86_64') {
      cpu = 'x86_64'
  } else {
    throw TypeError("Not supported cpu");
  }

  let libname = "";

  if (Deno.build.os === 'linux') {
    libname = `/lib/${cpu}-linux-gnu/libc.so.6`;
  // darwin not supported yet deno.
  // } else if (Deno.build.os === 'darwin') {
    // libname = `/lib/${cpu}-linux-gnu/libc.so.6`;
  } else if (Deno.build.os === 'windows') {
    libname = `C:/Windows/System32/msvcrt.dll`;
  } else {
    throw TypeError("Not supported os");
  }

  const library = Deno.dlopen(libname, CallSymbol);

  return library;
}

export {
  type CallSymbol,
  _load
}
