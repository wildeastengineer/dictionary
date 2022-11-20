import { Translate } from '@services';

function TextField() {
  return (
    <input className='
    d-text-field mt-1 block w-full
    rounded-md border border-gray-300 shadow-sm sm:text-sm outline-none
    active:border-amber-800
    '
           placeholder={Translate.name}/>
  );
}

export default TextField;
