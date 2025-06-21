import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
} from '@tabler/icons-react';
import { Settings2 } from 'lucide-react';

export const DASHBOARD_MENU = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: IconDashboard as React.ElementType,
  },
  {
    title: 'Transactions',
    url: '/transactions',
    icon: IconListDetails as React.ElementType,
  },
  {
    title: 'Reports & Analytics',
    url: '/reports',
    icon: IconChartBar as React.ElementType,
  },
  {
    title: 'Courses',
    url: '/courses',
    icon: IconFolder as React.ElementType,
  },
  {
    title: 'Users',
    url: '/users',
    icon: IconUsers as React.ElementType,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings2 as React.ElementType,
  },
];
