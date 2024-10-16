import React from 'react';
import { Button } from "@/components/ui/button";

const UserModeToggle = () => (
  <div className="absolute top-6 right-6 space-y-2">
    <Button variant="outline" className="w-full text-teal-400 border-teal-400/50 hover:bg-teal-400/20 hover:text-white text-xs">
      Change User Mode
    </Button>
    <Button variant="outline" className="w-full text-teal-400 border-teal-400/50 hover:bg-teal-400/20 hover:text-white text-xs">
      Change App Mode
    </Button>
  </div>
);

export default UserModeToggle;