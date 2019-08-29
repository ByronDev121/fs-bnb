// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Heroku
  BaseURL: 'https://fs-bnb-app.herokuapp.com'

  // Huawei router
  // BaseURL: 'http://192.168.8.101:3000'

  // Wifight router
  // BaseURL: 'http://192.168.0.192:3000'

  // Village and Life - Cannot reach this as it is an external IP address: i.e. not 192.168..
  // BaseURL: 'http://10.5.50.238:3000'

  // local host
  // BaseURL: 'http://localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
