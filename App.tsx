import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './components/HomeScreen';
import MatchesScreen from './components/MatchesScreen';
import EventsScreen from './components/EventsScreen';
import MyProfileScreen from './components/MyProfileScreen';
import ChatScreen from './components/ChatScreen';
import { Match } from './types';
import { HeartIcon } from './components/icons';


export type ActiveView = 'home' | 'matches' | 'events' | 'profile' | 'chat';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const handleNavigate = (view: ActiveView) => {
    setActiveView(view);
  };
  
  const handleSelectMatch = (match: Match) => {
    setSelectedMatch(match);
    setActiveView('chat');
  };

  const renderContent = () => {
    if (activeView === 'chat' && selectedMatch) {
        return <ChatScreen match={selectedMatch} onBack={() => setActiveView('matches')} />;
    }
    switch (activeView) {
      case 'home':
        return <HomeScreen />;
      case 'matches':
        return <MatchesScreen onSelectMatch={handleSelectMatch} />;
      case 'events':
        return <EventsScreen />;
      case 'profile':
        return <MyProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };
  
  const getHeaderTitle = () => {
    if (activeView === 'chat' && selectedMatch) {
      return selectedMatch.name;
    }
     switch (activeView) {
      case 'home':
        return "Élan Libertin";
      case 'matches':
        return "Messages";
      case 'events':
        return "Événements";
      case 'profile':
        return "Mon Profil";
      default:
        return "Élan Libertin";
    }
  }

  return (
    <div className="h-screen w-screen max-w-md mx-auto flex flex-col font-sans bg-gray-900 text-white overflow-hidden">
      <header className="flex-shrink-0 bg-gray-900/80 backdrop-blur-sm z-10 p-4 flex items-center justify-center relative">
        <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6 text-pink-500" />
            <h1 className="text-xl font-bold text-gray-100">{getHeaderTitle()}</h1>
        </div>
      </header>
      
      <main className="flex-grow overflow-y-auto overflow-x-hidden relative">
        {renderContent()}
      </main>
      
      {activeView !== 'chat' && (
        <footer className="flex-shrink-0">
          <BottomNav activeView={activeView} onNavigate={handleNavigate} />
        </footer>
      )}
    </div>
  );
};

export default App;