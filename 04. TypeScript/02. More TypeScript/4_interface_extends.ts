type userRole = "Admin" | "User" | "Guest"

interface User {
    name : string,
    role : userRole;
    email : string;
}

interface Admin extends User{
    permission : string[];
}

const bigBoss: Admin = {
    name : "Boss",
    role : "Admin",
    email : "boss@example.com",
    permission: ["manage_users", "edit_comment"]
}