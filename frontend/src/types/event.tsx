import { User } from './user';
import React from 'react';
import { DateTime, datetimeToDate, datetimeToTime } from './datetime'
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

export function getDate(event: Event) {
    const currentYear = new Date().getFullYear();
    if (event.start.year != event.end.year) {
        return datetimeToDate(event.start) + " " + datetimeToTime(event.start) + " to " + datetimeToDate(event.end) + " " + datetimeToTime(event.start);
    }
    if (event.start.month != event.end.month) {
        return datetimeToDate(event.start, false) + " " + datetimeToTime(event.start) + " to " + datetimeToDate(event.end, currentYear != event.start.year) + " " + datetimeToTime(event.start);
    }
    if (event.start.day != event.end.day) {
        return datetimeToDate(event.start, false) + " " + datetimeToTime(event.start) + " to " + datetimeToDate(event.end, currentYear != event.start.year) + " " + datetimeToTime(event.start);
    }
    return datetimeToDate(event.start, currentYear == event.start.year) + "\n" + datetimeToTime(event.start) + "-" + datetimeToTime(event.start);

}