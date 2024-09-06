// myUniom.ts
let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let naseem: User | Admin = {name: "naseem", id: 334}

naseem = {username: "hc", id: 334}

//  function getDbId(id: number | string) {
// //   // makin Some API calls
// //     console.log('DB id is: ${id}');
//     if(typeof id === "string") {
//         id.toLocaleLowerCase()
//     }

//  }
 

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
        if(typeof id === "string") {
            id.toLocaleLowerCase()
        }
        
    
     }

     //array 

     const data: number[] = [1, 2, 3]
     const data2: string[] = ["1", "2", "3"]
     const data3: (string | number | boolean)[] = ["1", "2", 3, true]

     let seatAllotment: "aisle" | "middle" | "Windows"

     seatAllotment = "aisle"
    //  seatAllotment = "crew"

export {}