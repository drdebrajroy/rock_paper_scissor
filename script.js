//reloading
const reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
    window.location.reload();
})
//score counting variables in global scope 
let count=0;
let user=0;
let computer=0;
//choice clicking event
document.querySelectorAll('button').forEach(ele=>{
    ele.addEventListener('click',e=>{
        document.querySelector('.result').innerHTML="Game has started";
        count++;
        //taking user choice
        let idd=  e.target.id ; 
        //taking computer choice by generating random number    
        let com = Math.floor(Math.random()*3); 
        //count will increase till 5 i.e, there only 5 rounds of game from where computer will decide who is the winner    
        if(count<=5)
        {
            console.log(count);
            //assigning computer choice from " assign_choice" function (go to line no 99) for each random generated number;
            com=assign_choice(com);
            //checking user and computer choice from "check" function (go to line no 49) and show the immediate result
            check(idd,com);
            console.log(idd);
            console.log(com);
            console.log(computer);
            console.log(user);
        }
        else{
            document.querySelector('#reset').classList.add('anim');
            //announce the winner using "generate_winner" function (line no 41)
            generate_winner(user,computer);
        }
    })
})

//announcing winner
function generate_winner(u,c)
{
    if(user<computer)
    document.querySelector('.result').innerHTML="Computer is the winner<br>To replay click Reset";
    else if(user==computer)
    document.querySelector('.result').innerHTML="Game is tie<br>To replay click Reset";
    else
    document.querySelector('.result').innerHTML="User is the winner<br>To replay click Reset";
}
//user and computer choice checking function
function check(i,c)
{
    if(i==c)
    {
        document.querySelector('.current-result').innerHTML="it is draw";
        //return statement is important else interpreter will execute next condition  where i matches and also increase unwanted score
        return;
    }

    else if(i=='rock')
    {
        if(c=='paper')
        {
        document.querySelector('.current-result').innerHTML="computer wins";
        computer++;
        
        }
        else
        {
            document.querySelector('.current-result').innerHTML="user wins";
            user++;
        }
    }
    else if(i=='paper')
    {
        if(c=='scissor')
        {
            document.querySelector('.current-result').innerHTML="computer wins";
            computer++;
            }
        else
        {
            document.querySelector('.current-result').innerHTML="user wins";
            user++;
        }
    }
    else
    {
        if(c=='rock')
        {
            document.querySelector('.current-result').innerHTML="computer wins";
            computer++;
            }
        else
        {
            document.querySelector('.current-result').innerHTML="user wins";
            user++;
        }
    }
}
//computer choice generating number
function assign_choice(c)
{
    if(c==0)
    return c='rock';
    else if (c==1)
    return c='paper';
    else
    return c='scissor';
}

