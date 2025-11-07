import React from 'react';
import { ActiveView } from '../App';
import { HomeIcon, ChatBubbleIcon, CalendarIcon, UserCircleIcon } from './icons';

interface BottomNavProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

const NavItem: React.FC<{
    isActive: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}> = ({ isActive, onClick, icon, label }) => {
    const activeClass = 'text-pink-500';
    const inactiveClass = 'text-gray-400 hover:text-pink-400';
    return (
        <button onClick={onClick} className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`}>
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    );
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  return (
    <div className="h-20 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex justify-around items-start pt-2">
      <NavItem 
        isActive={activeView === 'home'}
        onClick={() => onNavigate('home')}
        icon={<HomeIcon className="w-7 h-7" />}
        label="Accueil"
      />
      <NavItem 
        isActive={activeView === 'matches'}
        onClick={() => onNavigate('matches')}
        icon={<ChatBubbleIcon className="w-7 h-7" />}
        label="Messages"
      />
      <NavItem 
        isActive={activeView === 'events'}
        onClick={() => onNavigate('events')}
        icon={<CalendarIcon className="w-7 h-7" />}
        label="Événements"
      />
      <NavItem 
        isActive={activeView === 'profile'}
        onClick={() => onNavigate('profile')}
        icon={<UserCircleIcon className="w-7 h-7" />}
        label="Profil"
      />
    </div>
  );
};

export default BottomNav;