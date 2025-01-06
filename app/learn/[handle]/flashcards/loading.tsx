export default function Loading() {
  return (
    <div className='flex flex-col h-full justify-center items-center gap-4'>
      <div className='mx-auto gap-4 w-full lg:w-[720px] h-[480px] lg:h-[275px] bg-zinc-200 rounded-xl animate-pulse'></div>
      <div className='flex justify-center gap-5 w-full pt-5'>
        <div className='w-10 h-10 bg-zinc-200 rounded-md animate-pulse'></div>
        <div className='w-10 h-10 bg-zinc-200 rounded-md animate-pulse'></div>
      </div>
    </div>
  );
}
