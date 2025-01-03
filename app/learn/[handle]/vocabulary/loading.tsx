export default function Loading() {
  return (
    <div className='flex flex-1 flex-col gap-4'>
      <div className='mb-auto h-full rounded-2xl bg-zinc-200 flex flex-col animate-pulse' />
      <div className='h-32 rounded-2xl bg-zinc-200 flex flex-col animate-pulse' />
    </div>
  );
}
