import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { LessonSidebar } from '@/app/learn/[id]/_components/lesson-sidebar';
import { BreadcrumbHeader } from '@/app/learn/[id]/_components/breadcrumb-header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <LessonSidebar />
      <SidebarInset>
        <BreadcrumbHeader />
        <div className='flex flex-1 flex-col gap-4 p-5 pt-0'>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
