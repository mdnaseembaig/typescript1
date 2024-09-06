function addTwo(num){
     return num + 2
   // return "Hello"
}

function getUpper(val){
    return val.toUpperCase()
}
function signUpUser(name: string, email: string, isPaid: boolean){}

var loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("NAseem")

signUpUser("Naseem", "Naseem@lco.dev", false)
loginUser("N", "h@h.com")

//function getValue(myVal: number){
   // if (myVal > 5) {
      //  return true
    //}
  //  return "200 OK"
//}


const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return hero is ${hero}

})

function consoleError(errmsg: string): void{
    console.log(errmsg);

}
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}

export {}