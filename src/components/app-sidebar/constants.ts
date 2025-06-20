import { BarChart3, Book, ChartNoAxesCombined, DollarSignIcon, Settings, User } from 'lucide-react';

export const ADMIN_MENU = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: BarChart3,
  },
  {
    title: 'User management',
    url: '#',
    icon: User,
  },
  {
    title: 'Course management',
    url: '#',
    icon: Book,
  },
  {
    title: 'Transactions',
    url: '#',
    icon: DollarSignIcon,
  },
  {
    title: 'Site settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'Reports & Analytics',
    url: '#',
    icon: ChartNoAxesCombined,
  },
];
