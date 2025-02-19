"use client";

import * as React from "react";
import {
  GalleryVerticalEnd,
  HomeIcon,
  CloudIcon,
  BarChartIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const sidebarItems = [
  {
    title: "Dashboard Overview",
    icon: HomeIcon,
    url: "/dashboard-overview",
    isActive: true,
    items: [
      { title: "Overview", url: "/overview" },
      { title: "System Health", url: "/" },
    ],
  },
  {
    title: "Data Monitoring",
    url: "/data-monitoring",
    icon: CloudIcon,
    isActive: false,
    items: [
      { title: "Temperature & Humidity", url: "/temperature-humidity" },
      { title: "Trends", url: "/trends" },
      { title: "Sensor Status", url: "/sensor-status" },
    ],
  },
  {
    title: "Analytics & Reports",
    url: "/analytics-reports",
    icon: BarChartIcon,
    isActive: false,
    items: [
      { title: "Daily Reports", url: "/reports/daily" },
      { title: "Historical Data", url: "/reports/history" },
      { title: "Custom Reports", url: "/reports/custom" },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
    isActive: false,
    items: [
      { title: "User Management", url: "/settings/users" },
      { title: "Notification Settings", url: "/settings/notifications" },
    ],
  },
  {
    title: "User Profile",
    url: "/user-profile",
    icon: UserIcon,
    isActive: false,
    items: [{ title: "Profile Info", url: "/profile" }],
  },
];

const data = {
  user: {
    name: "user",
    email: "m@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  
  navMain: sidebarItems,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
