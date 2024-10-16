import React from 'react';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const LoginForm = () => (
  <div className="bg-black bg-opacity-30 p-10 rounded-lg border border-teal-400/30 backdrop-blur-sm w-96">
    <h2 className="text-white text-2xl mb-6 text-center font-light">LOGIN</h2>
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="text-teal-400 text-xs mb-1 block">EMAIL</label>
        <Input type="email" id="email" className="bg-transparent text-white border-teal-400/50 focus:border-teal-400" />
      </div>
      <div>
        <label htmlFor="password" className="text-teal-400 text-xs mb-1 block">PASSWORD</label>
        <Input type="password" id="password" className="bg-transparent text-white border-teal-400/50 focus:border-teal-400" />
      </div>
      <div className="flex items-center">
        <Checkbox id="remember" className="border-teal-400/50" />
        <label htmlFor="remember" className="text-teal-400 text-xs ml-2">REMEMBER ME</label>
      </div>
      <div className="flex justify-between items-center">
        <Button variant="link" className="text-teal-400 p-0 text-xs">Forgot your password?</Button>
        <Button className="bg-teal-400 text-black hover:bg-teal-500 px-8">ENTER</Button>
      </div>
    </form>
  </div>
);

export default LoginForm;