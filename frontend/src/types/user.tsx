import { Image } from "react-native";
import { DateTime } from './datetime'

export interface User {
    name: string;
    email: string;
    profile: Image; 
    latitude: number;
    longitude: number;
    h3cell: string;
    locationtimestamp: DateTime;
    free: boolean;
    status: string;
}