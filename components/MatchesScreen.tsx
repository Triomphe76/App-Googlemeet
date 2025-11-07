import React from 'react';
import { MATCHES_DATA } from '../constants';
import { Match } from '../types';
import { VerifiedIcon } from './icons';

interface MatchesScreenProps {
    onSelectMatch: (match: Match) => void;
}

const MatchesScreen: React.FC<MatchesScreenProps> = ({ onSelectMatch }) => {
  return (
    <div className="p-2 space-y-2">
      <div className="px-2">
        <h2 className="text-lg font-semibold text-pink-400">Nouveaux Matches</h2>
        {/* Placeholder for new matches */}
        <div className="flex space-x-4 py-2 overflow-x-auto">
            {MATCHES_DATA.filter(m => m.unread).map(match => (
                 <div key={match.id} className="flex flex-col items-center space-y-1" onClick={() => onSelectMatch(match)}>
                    <div className="relative">
                        <img src={match.avatar} alt={match.name} className="w-16 h-16 rounded-full object-cover border-2 border-pink-500" />
                        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 border-2 border-gray-900"></span>
                    </div>
                    <span className="text-sm text-gray-200">{match.name.split(' ')[0]}</span>
                </div>
            ))}
        </div>
      </div>
      
      <div className="border-t border-gray-700/50 my-2"></div>

      <div className="px-2">
        <h2 className="text-lg font-semibold text-gray-300">Conversations</h2>
        {MATCHES_DATA.map(match => (
            <div key={match.id} onClick={() => onSelectMatch(match)} className="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors duration-200">
                <div className="relative">
                    <img src={match.avatar} alt={match.name} className="w-14 h-14 rounded-full object-cover" />
                    {match.unread && <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-pink-500"></span>}
                </div>
                <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-gray-100">{match.name}</h3>
                            {match.isVerified && <VerifiedIcon className="w-5 h-5 text-cyan-400" />}
                        </div>
                        <span className={`text-xs ${match.unread ? 'text-pink-400' : 'text-gray-500'}`}>{match.timestamp}</span>
                    </div>
                    <p className={`text-sm truncate ${match.unread ? 'text-gray-200 font-medium' : 'text-gray-400'}`}>{match.lastMessage}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesScreen;