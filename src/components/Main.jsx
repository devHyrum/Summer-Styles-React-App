import { Image } from './Image';

export const Main = () => {
  return (
    <section className='text-[#111827] font-Barlow gap-4 grid grid-cols-2 w-full h-[calc(100vh-56px)]'>
      <div className='m-10'>
        <h1 className='text-7xl font-bold my-5'>Summer styles are finally here</h1>
        <p className='text-[#868c97] text-2xl'>This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
        <button className='bg-[#4f46e5] p-3 px-9 rounded-md text-white my-5 hover:bg-[#373296]'>Shop Collection</button>
      </div>

      <div className='w-full h-full grid grid-cols-3 relative bottom-20 z-0'>
        <div className='flex flex-col justify-center gap-4'>
          <Image numberImg={1} />
          <Image numberImg={2} />
        </div>
        <div className='flex flex-col gap-4'>
          <Image numberImg={3} />
          <Image numberImg={4} />
          <Image numberImg={5} />
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <Image numberImg={6} />
          <Image numberImg={7} />
        </div>
      </div>
    </section>
  );
};
