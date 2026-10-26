import { User } from "./user"
import { DateTime } from './datetime'

export interface Message {
    sender: User;
    content: any;
    image: boolean;
    timestamp: DateTime;
    status: string;
}