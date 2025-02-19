"use client";
import Image from "next/image";
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
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
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
                
                <Image src="/lifecell-logo.webp"  width={500}
      height={500}
      alt="lifecell"/>
              </div>
              <div className="grid flex-1  m-4 text-left text-sm leading-tight">
              <Image src="/lifecell-logo.webp"  width={500}
      height={500}
      alt="Picture of the author"/>
                
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          
           </DropdownMenu>
           </SidebarMenuItem>
           </SidebarMenu> 
          
        
      
    
  );
}
