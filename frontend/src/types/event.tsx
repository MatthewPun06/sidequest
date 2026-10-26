import { User } from './user';
import { DateTime } from './datetime'
import { Image } from 'react-native'
import { Conversation } from './conversation'

export interface Event {
    id: number;
    name: string;
    image: Image;
    description: string;
    organizer: User;
    participants: User[];
    conversation: Conversation;
    address: string;
    addresslink: string;
    start: DateTime;
    end: DateTime;
}

