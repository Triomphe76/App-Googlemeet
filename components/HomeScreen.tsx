import React, { useState } from 'react';
import { PROFILES_DATA } from '../constants';
import { UserProfile } from '../types';
import { HeartIcon, StarIcon, XIcon, MapPinIcon, VerifiedIcon } from './icons';

const ProfileCard: React.FC<{ profile: UserProfile, onRemove: () => void }> = ({ profile, onRemove }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % profile.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + profile.images.length) % profile.images.length);
  };

  return (
    <div className="absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-transform duration-300 ease-in-out">
      <div className="relative h-full w-full">
        <img src={profile.images[currentImageIndex]} alt={profile.name} className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {profile.images.length > 1 && (
            <div className="absolute top-2 left-2 right-2 flex gap-1">
                {profile.images.map((_, index) => (
                    <div key={index} className={`h-1 flex-1 rounded-full ${index === currentImageIndex ? 'bg-white/90' : 'bg-white/40'}`}></div>
                ))}
            </div>
        )}
        
        {profile.images.length > 1 && (
            <>
                <div className="absolute left-0 top-0 bottom-1/3 w-1/2" onClick={prevImage}></div>
                <div className="absolute right-0 top-0 bottom-1/3 w-1/2" onClick={nextImage}></div>
            </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">{profile.name}, {profile.age}</h2>
            {profile.isVerified && <VerifiedIcon className="w-7 h-7 text-cyan-400" />}
          </div>
          <div className="flex items-center gap-2 text-gray-300 mt-1">
            <MapPinIcon className="w-5 h-5" />
            <span>À {profile.distance} km</span>
          </div>
          <p className="mt-2 text-gray-200">{profile.bio}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {profile.tags.map(tag => (
              <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButtons: React.FC<{ onAction: (action: 'pass' | 'superlike' | 'like') => void }> = ({ onAction }) => (
  <div className="flex justify-center items-center gap-6 mt-4">
    <button onClick={() => onAction('pass')} className="p-4 bg-white/10 rounded-full text-red-500 hover:bg-white/20 transition-all duration-200 scale-90">
      <XIcon className="w-8 h-8" />
    </button>
    <button onClick={() => onAction('superlike')} className="p-4 bg-white/10 rounded-full text-blue-400 hover:bg-white/20 transition-all duration-200">
      <StarIcon className="w-7 h-7" />
    </button>
    <button onClick={() => onAction('like')} className="p-5 bg-white/10 rounded-full text-pink-500 hover:bg-white/20 transition-all duration-200 scale-110">
      <HeartIcon className="w-10 h-10" />
    </button>
  </div>
);

const NewUsersCarousel: React.FC = () => {
    // In a real app, this would be a separate, dynamic list
    const newUsers = [...PROFILES_DATA].reverse(); 

    return (
        <div className="flex-shrink-0 mb-4">
            <h2 className="text-xl font-bold text-gray-200 px-4 mb-3">Nouveaux Membres</h2>
            <div className="flex space-x-4 overflow-x-auto pb-3 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {newUsers.map(user => (
                    <div key={user.id} className="flex-shrink-0 w-28 text-center cursor-pointer group">
                        <div className="relative w-28 h-40">
                            <img src={user.images[0]} alt={user.name} className="w-full h-full object-cover rounded-xl shadow-lg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl"></div>
                            <p className="absolute bottom-2 left-0 right-0 text-white text-sm font-semibold truncate px-1">{user.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const HomeScreen: React.FC = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>(PROFILES_DATA);

  const handleAction = (action: 'pass' | 'superlike' | 'like') => {
    console.log(`Action: ${action} on ${profiles[profiles.length - 1]?.name}`);
    setProfiles(prev => prev.slice(0, prev.length - 1));
  };
  
  return (
    <div className="h-full flex flex-col">
      <NewUsersCarousel />
      
      <div className="flex-grow flex flex-col p-4 pt-0">
        <div className="flex-grow relative mb-4">
          {profiles.length > 0 ? (
            profiles.map((profile, index) => {
              const isTopCard = index === profiles.length - 1;
              return (
                <div key={profile.id}
                     className="absolute inset-0 transition-transform duration-300 ease-in-out"
                     style={{ 
                         transform: `translateY(-${(profiles.length - 1 - index) * 10}px) scale(${1 - (profiles.length - 1 - index) * 0.03})`,
                         zIndex: index,
                         filter: `blur(${isTopCard ? 0 : 2}px)`,
                         opacity: isTopCard ? 1 : (1 - (profiles.length - 1 - index) * 0.2)
                     }}>
                  <ProfileCard profile={profile} onRemove={() => handleAction('pass')} />
                </div>
              );
            })
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-400">
                <h2 className="text-2xl font-bold text-white mb-2">Plus personne...</h2>
                <p>Vous avez vu tous les profils. Revenez plus tard !</p>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          {profiles.length > 0 && <ActionButtons onAction={handleAction} />}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;