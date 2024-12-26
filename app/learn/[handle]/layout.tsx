import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { LessonSidebar } from '@/app/learn/[handle]/_components/lesson-sidebar';

export default function Layout({
  children,
  breadcrumb,
}: Readonly<{
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <LessonSidebar />
      <SidebarInset>
        {breadcrumb}
        <div className='flex flex-1 flex-col gap-4 p-5 pt-0'>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
