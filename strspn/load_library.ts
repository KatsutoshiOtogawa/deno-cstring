import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strspn,
  } = library.symbols;

  return {
    strspn,
    library,
  };
}

export {
  load,
}
