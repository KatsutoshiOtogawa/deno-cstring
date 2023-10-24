import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strtok,
  } = library.symbols;

  return {
    strtok,
    library,
  };
}

export {
  load,
}
