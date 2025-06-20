import { Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ADMIN_MENU } from '@/components/app-sidebar/constants';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex px-3 py-4 border-b border-gray-200">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900">Learnflo</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ADMIN_MENU.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton size="default" asChild isActive={item.url === '/dashboard'}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="px-4 pb-6 space-y-4">
              <button className="w-full flex items-center text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </button>

              {/* User Profile */}
              <div className="flex items-center py-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-gray-700">DH</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Dina Haris</div>
                  <div className="text-xs text-gray-500">dina@untitledui.com</div>
                </div>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
