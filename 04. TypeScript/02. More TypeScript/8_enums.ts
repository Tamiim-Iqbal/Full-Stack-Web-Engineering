enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday, 
    Saturday, 
    Sunday
}
let offDay = Day.Sunday
console.log(Day.Tuesday);        // 1

enum Roles {
    Admin = 'Admin',
    Moderator = 'Moderator',
    Guest = 'Guest'
}
console.log(Roles.Admin);       // Admin

const tamim = {
    name : 'Tamim',
    role : Roles.Admin
}
console.log(tamim);

type apiStatus = "Loading" | "Pending" | "Error"

enum APIStatus {
    Loading = 'Loading',
    Pending = 'Pending',
    Error = 'Error'
}

