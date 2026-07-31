// Problem 1
function matchWinner(teamAGoals, teamBGoals) 
{
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number" || isNaN(teamAGoals) || isNaN(teamBGoals)) 
    {
        return "Invalid";
    }

    if (teamAGoals > teamBGoals) 
    {
        return "Team A Won";
    } 
    else if (teamBGoals > teamAGoals) 
    {
        return "Team B Won";
    } 
    else 
    {
        return "Draw";
    }
}

// Problem 2
function isElevatorSafe(weights) 
{
    if (!Array.isArray(weights)) 
    {
        return "Invalid";
    }
    let totalWeight = 0;

    for (let i = 0; i < weights.length; i++) 
    {
        totalWeight += weights[i];
    }

    return totalWeight <= 400;
}

// Problem 3
function calculateAiCost(tokensUsed) 
{
    if (typeof tokensUsed !== "number" || tokensUsed < 0) 
    {
        return "Invalid";
    }
    if (tokensUsed <= 500) 
    {
        return 0;
    }
    let extraTokens = tokensUsed - 500;
    let chargeableBlocks = Math.floor(extraTokens / 100);
    let cost = chargeableBlocks * 5;
    return cost;
}

// Problem 4
function topRatedRestaurant(restaurants) 
{
    if (!Array.isArray(restaurants) || restaurants.length === 0) 
    {
        return "Invalid";
    }

    let topRestaurant = restaurants[0];

    for (let i = 1; i < restaurants.length; i++) 
    {
        if (restaurants[i].rating > topRestaurant.rating) 
        {
            topRestaurant = restaurants[i];
        }
    }
    let upperCase = topRestaurant.name.toUpperCase();
    return upperCase;
}

// Problem 5
function averageResponseTime(times) 
{
    if (!Array.isArray(times)) 
    {
        return "Invalid";
    }
    if (times.length === 0) 
    {
        return "Invalid";
    }
    let total = 0;
    for (let i = 0; i < times.length; i++) 
    {
        if (typeof times[i] !== "number")
        {
            return "Invalid";
        }
    }
    for (let i = 0; i < times.length; i++) 
    {
        total += times[i];
    }
    return total / times.length;
}