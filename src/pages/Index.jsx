import React from 'react';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import UserModeToggle from '../components/UserModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-teal-900">
      <div className="absolute inset-0 bg-[url('/wave-background.svg')] bg-no-repeat bg-cover opacity-20"></div>
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