import React from 'react';
import { Button } from "@/components/ui/button";

const UserModeToggle = () => (
  <div className="absolute top-4 right-4 space-y-2">
    <Button variant="outline" className="w-full text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-black">
      Change User Mode
    </Button>
    <Button variant="outline" className="w-full text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-black">
      Change App Mode
    </Button>
  </div>
);

export default UserModeToggle;