"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// myUniom.ts
var score = 33;
score = 44;
score = "55";
var naseem = { name: "naseem", id: 334 };
naseem = { username: "hc", id: 334 };
//  function getDbId(id: number | string) {
// //   // makin Some API calls
// //     console.log('DB id is: ${id}');
//     if(typeof id === "string") {
//         id.toLocaleLowerCase()
//     }
//  }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
