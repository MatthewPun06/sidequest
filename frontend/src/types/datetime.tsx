export interface DateTime {
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
    year: number;
}

function parseTimestampz(timestampz: string) : DateTime {
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