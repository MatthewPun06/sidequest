import { User } from "@/types/user"
import { Event } from "@/types/event"
import { DateTime } from "@/types/datetime"
import { Conversation } from "@/types/conversation"
import { Image } from "react-native"
export const user1 : User = {
    name: "John Doe",
    email: "johndoe@example.com",
    profile: Image,
    latitude: 10,
    longitude: 10,
    h3cell: "examplecell1",
    locationtimestamp: {
        year: 2026,
        month: 10,
        day: 21,
        hour: 5,
        minute: 24,
        second: 31
    },
    free: true,
    status: "journaling in central park!"
};
export const user2 : User = {
        name: "Alice Allway",
    email: "aliceallway@example.com",
    profile: Image,
    latitude: 10.1,
    longitude: 10.2,
    h3cell: "examplecell1",
    locationtimestamp: {
        year: 2026,
        month: 10,
        day: 21,
        hour: 5,
        minute: 24,
        second: 52
    },
    free: true,
    status: "working in maman!"
};
export const user3 : User = {    
    name: "Bob Bingon",
    email: "bobbingon@example.com",
    profile: Image,
    latitude: 14,
    longitude: 15,
    h3cell: "examplecell2",
    locationtimestamp: {
        year: 2026,
        month: 10,
        day: 21,
        hour: 5,
        minute: 25,
        second: 12
    },
    free: false,
    status: ""
};
export const users : User[] = [user1, user2, user3];

export const convo1 : Conversation = {
    name: "john's 21st birthday party",
    event: true,
    owner: user1,
    participants: users,
    messages: []
}

export const convo2 : Conversation = {
    name: "halloween!",
    event: true,
    owner: user2,
    participants: users,
    messages: []
}

export const convo3 : Conversation = {
    name: "central park tag!",
    event: true,
    owner: user1,
    participants: users,
    messages: []
}
export const convo4 : Conversation = {
    name: "pottery making",
    event: true,
    owner: user2,
    participants: users,
    messages: []
}

export const event1 : Event = {
    id: 0,
    name: "john's 21st birthday party",
    image: Image,
    description: "byob! pregame for the bars at 12 am",
    organizer: user1,
    participants: users,
    conversation: convo1,
    address: "string",
    addresslink: "string",
    start: {
        year: 2026,
        month: 10,
        day: 22,
        hour: 21,
        minute: 0,
        second: 0
    },
    end: {
        year: 2026,
        month: 10,
        day: 22,
        hour: 23,
        minute: 59,
        second: 0
    }
}

export const event2 : Event = {
    id: 1,
    name: "halloween!",
    image: Image,
    description: "vodka shots on the way in!",
    organizer: user2,
    participants: users,
    conversation: convo2,
    address: "string",
    addresslink: "string",
    start: {
        year: 2026,
        month: 10,
        day: 31,
        hour: 21,
        minute: 0,
        second: 0
    },
    end: {
        year: 2026,
        month: 10,
        day: 31,
        hour: 23,
        minute: 59,
        second: 0
    }
}

export const events = [event1, event2];

export const event3 : Event = {
    id: 2,
    name: "central park tag!",
    image: Image,
    description: "play tag with us at central park! bring your friends, meet new people, and have fun!",
    organizer: user1,
    participants: users,
    conversation: convo1,
    address: "string",
    addresslink: "string",
    start: {
        year: 2026,
        month: 10,
        day: 22,
        hour: 21,
        minute: 0,
        second: 0
    },
    end: {
        year: 2026,
        month: 10,
        day: 22,
        hour: 23,
        minute: 59,
        second: 0
    }
}

export const event4 : Event = {
    id: 3,
    name: "pottery making",
    image: Image,
    description: "the pottery shop is hosting a workshop for beginners to learn how to make pottery.",
    organizer: user2,
    participants: users,
    conversation: convo4,
    address: "string",
    addresslink: "string",
    start: {
        year: 2026,
        month: 10,
        day: 31,
        hour: 21,
        minute: 0,
        second: 0
    },
    end: {
        year: 2026,
        month: 10,
        day: 31,
        hour: 23,
        minute: 59,
        second: 0
    }
}

export const discoverEvents = [event3, event4];
