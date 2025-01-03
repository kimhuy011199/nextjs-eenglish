export function LyricEmpty() {
  return (
    <div>
      <p className='text-2xl font-medium'>
        This audio does not include transcript.
      </p>
      <p className='pt-3 text-zinc-500'>
        If you'd like to contribute the transcript for this audio, feel free to
        <a
          href='mailto:kimhuy011199@gmail.com?subject=Contribute%20Transcript%20for%20EEnglish%20App'
          className='text-primary font-medium transition-all cursor-pointer hover:text-primary/75'
        >
          {' '}
          contact me
        </a>
        .
      </p>
    </div>
  );
}
