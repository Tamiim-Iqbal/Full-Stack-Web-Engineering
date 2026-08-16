type Student = {
    name : string,
    roll : number,
    major : string,
    gpa ?: number
}

const robin : {
    name : string,
    roll : number,
    major : string,
    gpa : number
} = {
    name : "Robin", 
    roll : 1,
    major : "Computer Science",
    gpa : 3.50
}

const mobin : Student = {      //      
    name : "Robin", 
    roll : 1,
    major : "Computer Science",
}