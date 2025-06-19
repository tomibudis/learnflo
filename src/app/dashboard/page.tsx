'use client';
import React, { useState } from 'react';
import {
  Search,
  Bell,
  Settings,
  Home,
  BarChart3,
  FolderOpen,
  Users,
  FileText,
  User,
  QrCode,
  TrendingUp,
  MoreHorizontal,
  Filter,
  Download,
  Menu,
  Eye,
  Copy,
} from 'lucide-react';

// Mock shadcn/ui components
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'default', size = 'md', className = '', onClick }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700',
    ghost: 'hover:bg-gray-100 text-gray-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6',
    icon: 'h-9 w-9',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Input: React.FC<{
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
}> = ({ type = 'text', placeholder, value, onChange, className = '', icon }) => (
  <div className="relative">
    {icon && (
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex h-9 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${icon ? 'pl-10' : ''} ${className}`}
    />
  </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// Type for sidebarItems
interface SidebarItem {
  icon: React.ElementType;
  label: string;
  shortcut?: string;
  active?: boolean;
  badge?: string;
}

// Type for customer
interface Customer {
  name: string;
  role: string;
  email: string;
  date: string;
  status: string;
  amount: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { icon: Search, label: 'Search', shortcut: '⌘K' },
    { icon: Home, label: 'Home', active: false },
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: FolderOpen, label: 'Projects', badge: '10' },
    { icon: Users, label: 'Tasks', badge: '3' },
    { icon: FileText, label: 'Reporting' },
    { icon: User, label: 'Users' },
  ];

  const customers: Customer[] = [
    {
      name: 'Lin Roses Chellpine',
      role: 'Manager',
      email: 'lin@unsplash.com',
      date: 'Jan 16, 2025',
      status: 'Paid',
      amount: '$104.16',
      avatar: 'LC',
    },
    {
      name: 'Caitlin King',
      role: 'Designer',
      email: 'hello@caitlinking.com',
      date: 'Jan 16, 2025',
      status: 'Paid',
      amount: '$86.32',
      avatar: 'CK',
    },
    {
      name: 'Fleur Cook',
      role: 'Writer',
      email: 'fleur@cook@gmail.com',
      date: 'Jan 15, 2025',
      status: 'Paid',
      amount: '$194.24',
      avatar: 'FC',
    },
    {
      name: 'Marco Kelly',
      role: 'Community',
      email: 'marco@marcocompany.co',
      date: 'Jan 14, 2025',
      status: 'Paid',
      amount: '$88.48',
      avatar: 'MK',
    },
    {
      name: 'Luis Meyers',
      role: 'Marketer',
      email: 'luis@luismeyers.com',
      date: 'Jan 14, 2025',
      status: 'Paid',
      amount: '$86.32',
      avatar: 'LM',
    },
    {
      name: 'Mikey Lawrence',
      role: 'Manager',
      email: 'mil.lawrence@gmail.com',
      date: 'Jan 14, 2025',
      status: 'Paid',
      amount: '$104.16',
      avatar: 'ML',
    },
    {
      name: 'Freya Browning',
      role: 'Director',
      email: 'freya@freyabrowning.com',
      date: 'Jan 14, 2025',
      status: 'Paid',
      amount: '$82.54',
      avatar: 'FB',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">Untitled UI</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {sidebarItems.map((item, index) => (
              <div key={index}>
                {item.label === 'Search' ? (
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left">{item.label}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.shortcut}
                    </span>
                  </button>
                ) : (
                  <button
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                      item.active
                        ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <Badge variant="default" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="px-4 pb-6 space-y-4">
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>

            {/* User Profile */}
            <div className="flex items-center px-3 py-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-medium text-gray-700">DH</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Dina Haris</div>
                <div className="text-xs text-gray-500">dina@untitledui.com</div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-sm font-medium text-gray-900 mb-2">Verify this device</div>
              <div className="text-xs text-gray-500 mb-3">
                Scan the QR code below to verify this device.
              </div>
              <div className="w-16 h-16 bg-white rounded-lg mx-auto flex items-center justify-center mb-3">
                <QrCode className="w-12 h-12" />
              </div>
              <button className="text-xs text-indigo-600 hover:text-indigo-500">
                Verify another way
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">My dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                What&apos;s new?
              </Button>
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy link
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Visit store
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Stats and Chart */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">All revenue</p>
                      <p className="text-3xl font-bold text-gray-900">$8,746.22</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">2.4%</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Profit VAT</p>
                      <p className="text-3xl font-bold text-gray-900">12,440</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">6.2%</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active now</p>
                      <p className="text-3xl font-bold text-gray-900">96</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">0.8%</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Net Revenue Card */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Net revenue</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">$7,804.16</p>
                    <div className="flex items-center text-green-600 mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">2.4%</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                      <option>12 months</option>
                      <option>6 months</option>
                      <option>3 months</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                      <option>30 days</option>
                      <option>7 days</option>
                      <option>1 day</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                      <option>7 days</option>
                      <option>1 day</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                      <option>24 hours</option>
                      <option>12 hours</option>
                    </select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </div>

                {/* Simple Chart Visualization */}
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 800 200">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Chart Line */}
                    <path
                      d="M 50 150 Q 150 120 250 130 T 450 110 T 650 90 T 750 80"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                      fill="none"
                    />

                    {/* Chart Area */}
                    <path
                      d="M 50 150 Q 150 120 250 130 T 450 110 T 650 90 T 750 80 L 750 180 L 50 180 Z"
                      fill="url(#gradient)"
                    />

                    {/* X-axis labels */}
                    {[
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ].map((month, i) => (
                      <text
                        key={month}
                        x={50 + i * 58}
                        y="195"
                        textAnchor="middle"
                        className="text-xs fill-gray-500"
                      >
                        {month}
                      </text>
                    ))}
                  </svg>
                </div>
              </Card>

              {/* Customers Table */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Customers</h3>
                  <div className="flex items-center space-x-3">
                    <Input
                      placeholder="Search"
                      icon={<Search className="w-4 h-4" />}
                      className="w-64"
                    />
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-sm font-medium text-indigo-700">
                                  {customer.avatar}
                                </span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{customer.name}</div>
                                <div className="text-sm text-gray-500">{customer.role}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-900">{customer.email}</td>
                          <td className="py-4 px-4 text-sm text-gray-900">{customer.date}</td>
                          <td className="py-4 px-4">
                            <Badge variant="success">{customer.status}</Badge>
                          </td>
                          <td className="py-4 px-4 text-sm font-medium text-gray-900">
                            {customer.amount}
                          </td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-gray-700">Previous</div>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 text-sm rounded-lg ${
                          page === 1
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-500">Next →</button>
                </div>
              </Card>
            </div>

            {/* Right Column - Mobile Dashboard Preview */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">My dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy link
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Visit store
                    </Button>
                  </div>
                </div>

                {/* Mobile Preview */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium text-gray-600">All revenue</div>
                      <div className="text-sm text-green-600">Prev vs</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">$8,746.22</div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">2.4%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium text-gray-600">Net revenue</div>
                      <div className="flex items-center space-x-2">
                        <button className="text-xs bg-gray-100 px-2 py-1 rounded">1m</button>
                        <button className="text-xs bg-gray-100 px-2 py-1 rounded">3m</button>
                        <button className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">
                          6m
                        </button>
                        <Button variant="outline" size="sm">
                          <Filter className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">$7,804.16</div>
                    <div className="flex items-center text-green-600 mb-4">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">2.4%</span>
                    </div>

                    {/* Mini Chart */}
                    <div className="h-32">
                      <svg className="w-full h-full" viewBox="0 0 300 100">
                        <path
                          d="M 10 80 Q 50 60 100 65 T 200 45 T 290 35"
                          stroke="#8b5cf6"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Customers Preview */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-gray-900">Customers</h4>
                    <Button variant="ghost" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {customers.slice(0, 7).map((customer, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-indigo-700">
                            {customer.avatar}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">
                            {customer.name}
                          </div>
                          <div className="text-xs text-gray-500">{customer.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">Page 1 of 10</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
