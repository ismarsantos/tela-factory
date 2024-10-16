import React from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";

const UserModeToggle = () => (
  <div className="absolute top-6 right-6">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="text-teal-400 border-teal-400/50 hover:bg-teal-400/20 hover:text-white">
          <Settings className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="cursor-pointer">
          Change User Mode
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Change App Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default UserModeToggle;