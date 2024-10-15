import React from 'react';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import UserModeToggle from '../components/UserModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-background.svg')] bg-no-repeat bg-cover opacity-30"></div>
      <UserModeToggle />
      <Logo />
      <LoginForm />
      <div className="absolute bottom-4 left-4">
        <img src="/meta-original-logo.svg" alt="Meta Original" className="h-12" />
      </div>
    </div>
  );
};

export default Index;