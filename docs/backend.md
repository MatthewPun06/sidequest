# Backend

## Dependencies

 * python
 * docker
 * sqlalchemy/postgresql

## Data Layer (PostgreSQL)

### Tables

1) Users
      * userid                (uuid)
      * name                  (string)
      * email                 (string)
      * latitude              (float)
      * longitude             (float)
      * h3cell                (string)
      * locationtimestamp     (datetime)
      * free                  (bool)
      * status                (string)
      * statusExpiry          (datetime)

2) Friends
      * userid1                (uuid) (foreign key)
      * userid2                (uuid) (foreign key)
      * u1locationconsented    (bool)
      * u2locationconsented    (bool)

3) Calendar
      * calendarid       (uuid)
      * owner            (uuid) (foreign key)
      * name             (string)
      * color            (int)
      * timezone         (string)

4) Event
      * eventid          (uuid)
      * organizer        (uuid) (foreign key)
      * calendar         (uuid) (foreign key)
      * name             (string)
      * description      (string)
      * start            (JSON) {"date": date, "datetime": datetime, "timezone": string}
      * end              (JSON) {"date": date, "datetime": datetime, "timezone": string}
      * location         (string)

5) EventParticipants
      * eventid          (uuid) (foreign key)
      * participantid    (uuid) (foreign key)
      * organizer        (bool)
      * decision         (string) YES | INTERESTED | NO | PENDING

## Functionality

### Calendar Integration

Integrations:
 * Google Calendar
 * Outlook Calendar
 * Notion Calendar
 * Apple Calendar

### Location-Based Notifications

H3 
1) break the earth into hexagons and search for adjacent hexagons
2) perform the distance calculation for those inside the relevant hexagons

custom notification buzz?

libraries:
1) react-native-geolocation-service
2) react-native-sensors

1) get location of both people
2) get the direction vector between the two
3) project that vector onto the current screen using the orientation of the phone screen
4) orientation of the phone screen can be given relative to XTrueNorthZVertical
5) get 2 unit vectors representing the surface of the phone
6) project onto those two unit vectors

7) if elevation is given, 
XTrueNorthZVertical a reference frame where the Z axis is vertical and the X axis points to the geographic north pole.