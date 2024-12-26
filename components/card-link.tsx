import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function CardLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={twMerge(
        'group w-full block relative overflow-hidden border border-zinc-200 hover:border-primary hover:bg-primary/5 transition-colors',
        className
      )}
    >
      {children}
    </Link>
  );
}
