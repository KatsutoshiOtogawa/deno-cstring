import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strstr,
  } = library.symbols;

  return {
    strstr,
    library,
  };
}

export {
  load,
}
