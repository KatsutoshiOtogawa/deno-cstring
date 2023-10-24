import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strcat,
  } = library.symbols;

  return {
    strcat,
    library,
  };
}

export {
  load,
}
