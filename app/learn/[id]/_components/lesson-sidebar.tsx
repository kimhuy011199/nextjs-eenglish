'use client';

import * as React from 'react';
import { SwatchBook, Headphones } from 'lucide-react';

import { NavMain } from '@/app/learn/[id]/_components/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

export function LessonSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
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
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
