// const user = {
//     name: "Naseem",
//     email: "mdnaseem@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Naseem", isPaid: false, email: "mdnaseem@lco.dev"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// // type user = {
// //     name: string;
// //     email: string;
// //     isActive: Boolean
// // }

// // type Mystring = string

// function createUser(user: user): user{

// return {name: "", email: "", isActive: true}
// }
// createUser({name: "", email: "", isActive: true})

// export {}

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "j@J.com",
    isActive: false
}

// type credcardDetails = {
//     cardnumber: string
// }

type cardNumber = {
    CardNumber: string
}

type cardDate = {
    cardDate: string
}

type credcardDetails = cardNumber & cardDate & {
    CVV: number
}


myUser.email = "h@gmail.com"
//myUser._id = "saa"
