
import React from 'react';
import { EVENTS_DATA } from '../constants';
import { ClubEvent } from '../types';
import { CalendarIcon, MapPinIcon } from './icons';

const EventCard: React.FC<{ event: ClubEvent }> = ({ event }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
    <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-white">{event.name}</h3>
      <div className="flex items-center text-gray-400 mt-2 text-sm">
        <MapPinIcon className="w-4 h-4 mr-2 text-pink-400" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center text-gray-400 mt-1 text-sm">
        <CalendarIcon className="w-4 h-4 mr-2 text-pink-400" />
        <span>{event.date}</span>
      </div>
      <p className="text-gray-300 mt-3 text-sm">{event.description}</p>
      <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
        Je participe
      </button>
    </div>
  </div>
);

const EventsScreen: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Événements à Venir</h2>
      {EVENTS_DATA.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsScreen;
