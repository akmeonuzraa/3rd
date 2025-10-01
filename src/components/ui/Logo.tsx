import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <ShieldCheck className="h-8 w-8 text-primary-600" />
    </div>
  );
};

export default Logo;