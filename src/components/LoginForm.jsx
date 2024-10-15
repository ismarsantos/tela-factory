import React from 'react';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const LoginForm = () => (
  <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-teal-400">
    <h2 className="text-white text-3xl mb-6 text-center">LOGIN</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="text-white text-sm">EMAIL</label>
        <Input type="email" id="email" className="bg-transparent text-white border-teal-400" />
      </div>
      <div>
        <label htmlFor="password" className="text-white text-sm">PASSWORD</label>
        <Input type="password" id="password" className="bg-transparent text-white border-teal-400" />
      </div>
      <div className="flex items-center">
        <Checkbox id="remember" className="border-teal-400" />
        <label htmlFor="remember" className="text-white text-sm ml-2">REMEMBER ME</label>
      </div>
      <div className="flex justify-between items-center">
        <Button variant="link" className="text-teal-400 p-0">Forgot your password?</Button>
        <Button className="bg-teal-400 text-black hover:bg-teal-500">ENTER</Button>
      </div>
    </form>
  </div>
);

export default LoginForm;