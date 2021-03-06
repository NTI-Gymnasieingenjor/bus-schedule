// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    realtime: 'http://localhost:8000/realtime.php',
    failover: 'http://localhost:8000/failover.php',
    update: 'http://localhost:8000/update.php',
    debug: 'http://localhost:8000/info.json'
  },
  transitLines: [6, 11, 770, 804],
  transitUrls: {
    11: 'https://www.ul.se/api/journey/search?changeTimeType=0&dateTime=&from=Uppsala+Business+Park+Norra+(Uppsala)&fromPointId=700527&fromPointType=0&maxWalkDistance=3000&priorityType=0&to=Uppsala+Centralstation+(Uppsala)&toPointId=700600&toPointType=0&trafficTypes=1,2,3,4,5,6,7,8,9,10,11&travelWhenType=2&via=&viaPointId=&walkSpeedType=0',
    804: 'https://www.ul.se/api/journey/search?changeTimeType=0&dateTime=&from=Uppsala+Business+Park+Norra+(Uppsala)&fromPointId=700527&fromPointType=0&maxWalkDistance=3000&priorityType=0&to=Skolgatan+(Uppsala)&toPointId=700270&toPointType=0&trafficTypes=1,2,3,4,5,6,7,8,9,10,11&travelWhenType=2&via=&viaPointId=&walkSpeedType=0',
    770: 'https://www.ul.se/api/journey/search?changeTimeType=0&dateTime=&from=Uppsala+Business+Park+Norra+(Uppsala)&fromPointId=700527&fromPointType=0&maxWalkDistance=3000&priorityType=0&to=Mejramsvägen+(Storvreta)&toPointId=700612&toPointType=0&trafficTypes=1,2,3,4,5,6,7,8,9,10,11&travelWhenType=2&via=&viaPointId=&walkSpeedType=0',
    6: 'https://www.ul.se/api/journey/search?changeTimeType=0&dateTime=&from=Södra+Slavstavägen+(Uppsala)&fromPointId=700441&fromPointType=0&maxWalkDistance=3000&priorityType=0&to=Uppsala+Centralstation+(Uppsala)&toPointId=700600&toPointType=0&trafficTypes=1,2,3,4,5,6,7,8,9,10,11&travelWhenType=2&via=&viaPointId=&walkSpeedType=0'
  },
  stops: {
    'Polacksbacken': {
      url: 'https://www.ul.se/api/stop/departures?stopId=700572',
      bus_count: 4
    },
    'Grindstugan': {
      url: 'https://www.ul.se/api/stop/departures?stopId=700021',
      ignore: [
        4, 12
      ],
      bus_count: 6
    },
    'Lundellska skolan': {
      url: 'https://www.ul.se/api/stop/departures?stopId=700218',
      directions: ['C', 'D'],
      bus_count: 2
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
