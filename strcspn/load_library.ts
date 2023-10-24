import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strcspn,
  } = library.symbols;

  return {
    strcspn,
    library,
  };
}

export {
  load,
}
