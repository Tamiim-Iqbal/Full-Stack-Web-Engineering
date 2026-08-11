// Problem 1
function studentIntroduction(student) {
    
    if (typeof student !== "object" || student === null || Array.isArray(student)) 
    {
        return "Invalid";
    }
  
    if (!("name" in student) || !("age" in student) || !("course" in student)) 
    {
        return "Invalid";
    }
  
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

// Problem 2
function filterActiveUsers(users) {

    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }
    
    for (let user of users) {
        if (typeof user !== "object" || user === null || !("isActive" in user)) 
        {
            return "Invalid";
        }
    }
  
    return users.filter(user => user.isActive === true);
}

// Problem 3 
function countHashtags(caption) {

    if (typeof caption !== "string") 
    {
        return "Invalid";
    }
    
    const words = caption.split(" ");
    // console.log(words);
    let hashtagCount = 0;
    let longestTag = "";
    
    for (let word of words) 
    {
        if (word.startsWith("#")) 
        {
            hashtagCount++;
            const tag = word.slice(1);
            if (tag.length > longestTag.length) 
            {
                longestTag = tag;
            }
        }
    }

    return { hashtagCount, longestTag };
}

// Problem 4
function bonusScore(scores) {

    if (!Array.isArray(scores) || scores.length === 0) 
    {
        return "Invalid";
    }
    
    for (let score of scores) 
    {
        if (typeof score !== "number") 
        {
            return "Invalid";
        }
    }
    
    return scores.map(score => score + 10).reduce((total, score) => total + score, 0);
}

// Problem 5
function generateLeaderboard(students) {

    if (!Array.isArray(students)) 
    {
        return "Invalid";
    }

    if (students.length === 0) 
    {
        return "Invalid";
    }

    for (let student of students) 
    {
        if (typeof student !== "object" || student === null || !("name" in student) || !("score" in student) || typeof student.score !== "number") 
        {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => 
    {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => 
    {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}