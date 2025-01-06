export default function Loading() {
  return (
    <div className='flex flex-col h-full justify-center items-center relative'>
      <div className='max-w-2xl h-60 mx-auto w-full flex flex-col gap-4 relative mb-16 bg-zinc-200 animate-pulse rounded-xl'></div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 absolute bottom-0 right-0 left-0 pb-3'>
        <div className='w-40 h-10 bg-zinc-200 rounded-md animate-pulse'></div>
        <div className='w-40 h-10 bg-zinc-200 rounded-md animate-pulse'></div>
        <div className='w-40 h-10 bg-zinc-200 rounded-md animate-pulse'></div>
      </div>
    </div>
  );
}
