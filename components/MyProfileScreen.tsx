import React from 'react';
import { UserCircleIcon } from './icons';

const MyProfileScreen: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-400">
      <UserCircleIcon className="w-24 h-24 text-gray-600 mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Mon Profil</h2>
      <p>Cette section est en cours de construction.</p>
      <button className="mt-6 bg-pink-600 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700 transition-colors">
        Modifier le profil
      </button>
      <button className="mt-4 bg-gray-700 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition-colors">
        Paramètres
      </button>
    </div>
  );
};

export default MyProfileScreen;
