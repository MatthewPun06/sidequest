import { User } from "./user";
import { Message } from './message'
export interface Conversation {
    name: string;
    event: boolean;
    owner: User;
    participants: User[];
    messages: Message[];
}