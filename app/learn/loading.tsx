export default function Loading() {
  return (
    <div className='w-full max-w-5xl mx-auto px-5 mb-10'>
      <div className='my-10'>
        <div className='flex items-center justify-center pb-6'>
          <div className='h-12 w-32 rounded-lg animate-pulse bg-zinc-200' />
        </div>
        <div className='h-12 w-40 rounded-lg animate-pulse bg-zinc-200' />
        <div className='h-12 w-[500px] rounded-lg animate-pulse bg-zinc-200 mt-5' />
      </div>
      <div className='flex flex-col gap-10'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
          <div className='flex flex-col gap-1.5'>
            <div className='h-6 w-24 rounded-lg animate-pulse bg-zinc-200' />
            <div className='h-6 w-64 rounded-lg animate-pulse bg-zinc-200' />
            <div className='h-24 w-full rounded-lg animate-pulse bg-zinc-200' />
          </div>
          <div className='col-span-2 flex flex-col'>
            <div className='h-96 w-full rounded-2xl animate-pulse bg-zinc-200' />
          </div>
        </div>
      </div>
    </div>
  );
}
