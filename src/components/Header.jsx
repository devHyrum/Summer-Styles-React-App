import { OptionLeft } from './OptionLeft';

export const Header = () => {
  return (
    <div className='flex h-full justify-between items-center z-10 relative bg-[#e2dfdc] border-b-2 border-[#87888d]'>
      <figure>
        <img className='size-9 relative left-6 mr-4 cursor-pointer' src="./logo.svg" alt="" />
      </figure>
      <nav className='flex justify-between text-[#535b69] font-Barlow w-full'>
        <div>
          <ul className='flex m-4 font-semibold'>
            <OptionLeft
            nombre1='Woman'
            lista1='Shirt'
            lista2='Pants'
            lista3='Socks'
            lista4='Coats'
            lista5='Underwear'
            lista6='More...'
            />
            <OptionLeft
            nombre1='Men'
            lista1='Shirt'
            lista2='Pants'
            lista3='Socks'
            lista4='Coats'
            lista5='Underwear'
            lista6='More...'
            />
            <OptionLeft
            nombre1='Company'
            lista1='Shirt'
            lista2='Pants'
            lista3='Socks'
            lista4='Coats'
            lista5='Underwear'
            lista6='More...'
            />
            <OptionLeft
            nombre1='Stores'
            lista1='Shirt'
            lista2='Pants'
            lista3='Socks'
            lista4='Coats'
            lista5='Underwear'
            lista6='More...'
            />
          </ul>
        </div>
        <div>
          <ul className='flex m-4 font-semibold'>
            <li className='p-2 cursor-pointer border-r-2'>Sign in</li>
            <li className='p-2 cursor-pointer'>Create account</li>
            <li className='p-2 flex cursor-pointer'>
              <img className='px-1' src="./money.svg" alt="Currency" /> CAD
            </li>
            <li className='p-2 cursor-pointer'>
              <img src="./search.svg" alt="Search" />
            </li>
            <li className='p-2 flex cursor-pointer'>
              <img src="./shopping.svg" alt="Cart" /> 0
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
