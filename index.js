function saturdayFun (task = 'chai')
{
    return `This Saturday, I want to ${task}!`
    
}
const mondayWork = function (act = 'go to the office')
{
    return `This Monday, I will ${act}.`
}
function wrapAdjective(adj)
{
    return function(val = "special")
    {
        return `You are ${adj}${val}${adj}!`
    }
}