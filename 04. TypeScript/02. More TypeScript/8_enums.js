"use strict";
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Sunday;
console.log(Day.Tuesday); // 1
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Moderator";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
console.log(Roles.Admin); // Admin
const tamim = {
    name: 'Tamim',
    role: Roles.Admin
};
console.log(tamim);
var APIStatus;
(function (APIStatus) {
    APIStatus["Loading"] = "Loading";
    APIStatus["Pending"] = "Pending";
    APIStatus["Error"] = "Error";
})(APIStatus || (APIStatus = {}));
