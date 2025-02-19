"use client";

import * as React from "react";
// import { ChevronsUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
  // const { isMobile } = useSidebar();
  

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-sidebar-primary-foreground">
                <img src="/lifecell-logo.webp" title="life cell" className="truncate font-semibold"/>
              </div>
              <div className="grid flex-1  m-4 text-left text-sm leading-tight">
                <img src="/lifecell-logo.webp" title="life cell" className="truncate font-semibold"/>
                
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          
           </DropdownMenu>
           </SidebarMenuItem>
           </SidebarMenu> 
          
        
      
    
  );
}
