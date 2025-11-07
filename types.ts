export interface UserProfile {
  id: number;
  name: string;
  age: number;
  bio: string;
  images: string[];
  tags: string[];
  distance: number;
  isVerified: boolean;
}

export interface Match {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  isVerified: boolean;
}

export interface Message {
  id: number;
  sender: 'me' | 'them';
  text: string;
  timestamp: string;
}

export interface ClubEvent {
  id: number;
  name: string;
  location: string;
  date: string;
  description: string;
  image: string;
}