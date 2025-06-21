'use client';

import * as React from 'react';
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
} from '@tabler/icons-react';

import { NavMain } from '@/components/app-sidebar/nav-main';
import { NavUser } from '@/components/app-sidebar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Settings2 } from 'lucide-react';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard as React.ElementType,
    },
    {
      title: 'Transactions',
      url: '#',
      icon: IconListDetails as React.ElementType,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar as React.ElementType,
    },
    {
      title: 'Courses',
      url: '#',
      icon: IconFolder as React.ElementType,
    },
    {
      title: 'Users',
      url: '#',
      icon: IconUsers as React.ElementType,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2 as React.ElementType,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold">Learnflo</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
