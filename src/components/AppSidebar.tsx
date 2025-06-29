
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  QrCode,
  BarChart3,
  Settings,
  Users,
  FileText,
  Download,
  HelpCircle
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "QR Generator", url: "/dashboard/qr-generator", icon: QrCode },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "My QR Codes", url: "/dashboard/my-codes", icon: FileText },
  { title: "Users", url: "/dashboard/users", icon: Users },
  { title: "Downloads", url: "/dashboard/downloads", icon: Download },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Help", url: "/dashboard/help", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r border-violet-200">
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          QR Dashboard
        </h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-violet-700 font-semibold">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg"
                            : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
