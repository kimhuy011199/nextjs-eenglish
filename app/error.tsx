'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h2>Something went wrong!</h2>
    </div>
  );
}
