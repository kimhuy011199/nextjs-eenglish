'use client';

import * as React from 'react';
import { SwatchBook, Headphones } from 'lucide-react';

import { NavMain } from '@/app/learn/[handle]/_components/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';

export function LessonSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  const navItems = [
    {
      title: 'Listening',
      url: '#',
      icon: Headphones,
      isActive: true,
      items: [
        {
          title: 'Mini Story',
          url: 'story',
        },
        {
          title: 'Vocabulary',
          url: 'vocabulary',
        },
      ],
    },
    {
      title: 'Vocabulary',
      url: '#',
      icon: SwatchBook,
      isActive: true,
      items: [
        {
          title: 'Flashcards',
          url: 'flashcards',
        },
        {
          title: 'Practice',
          url: 'practice',
        },
        {
          title: 'Quiz',
          url: 'quiz',
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='px-0.5 pt-2.5'>
          <Logo height={28} isOpen={open} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
