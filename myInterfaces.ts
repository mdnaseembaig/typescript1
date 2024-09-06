interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number):
    number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"

}

const naseem: Admin = {dbId: 22, email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "naseem10", off: 10 ) => {
    return 10
}
}
naseem.email = "h@hc.com"
// naseem.dbId = 33

export {}