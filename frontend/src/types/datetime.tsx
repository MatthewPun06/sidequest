export interface DateTime {
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
    year: number;
}

export function parseTimestampz(timestampz: string) : DateTime {
    // 2025-10-21 10:44:34.123456+00
    // 00000000001111111111222222222
    // 01234567890123456789012345667

    return {
        year: parseInt(timestampz.substring(0,4)),
        month: parseInt(timestampz.substring(5,7)),
        day: parseInt(timestampz.substring(8,10)),
        hour: parseInt(timestampz.substring(11,13)),
        minute: parseInt(timestampz.substring(14,16)),
        second: parseFloat(timestampz.substring(17,26)),
    }

}

export function datetimeToDate(datetime: DateTime, year: boolean = true) {
    let month = numberToMonth(datetime.month);
    return month + " " + datetime.day + (year? ", " + datetime.year : "");
}

export function datetimeToTime(datetime: DateTime) {
    let hour;
    let suffix;
    if (datetime.hour > 12) {
        hour = datetime.hour - 12;
        suffix = "pm"
    }
    else if (datetime.hour > 0) {
        hour = datetime.hour;
        suffix = "am"
    }
    else if (datetime.hour == 0) {
        hour = 12;
        suffix = "am"
    }
    else {
        hour = 0;
        suffix = "am";
    }

    let minute = "" + datetime.minute;
    if (datetime.minute < 10) {
        minute = "0" + datetime.minute;
    }
    return hour + ":" + minute + suffix;
}

export function numberToMonth(month: number) {
    switch (month) {
        case 1:
            return "jan";
        case 2: 
            return "feb";
        case 3:
            return "mar";
        case 4:
            return "apr";
        case 5:
            return "may";
        case 6:
            return "jun";
        case 7:
            return "jul";
        case 8:
            return "aug";
        case 9:
            return "sept";
        case 10:
            return "oct";
        case 11:
            return "nov";
        case 12:
            return "dec";
        default:
            return "Error: Month does not exist"
    }
}