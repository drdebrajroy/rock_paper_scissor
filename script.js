const userScore = document.querySelector('.userScore');
const computerScore=document.querySelector('.computerScore');

const choices=document.querySelectorAll('.btn');

const currentResult=document.querySelector('.currentResult');
const reload=document.querySelector('.reload');
const finalResult=document.querySelector('.finalResult');

let cScore =0;
let uScore =0;

let userChoice;
let computerGenerate;
let computerChoice;



let  getResult=(userChoice,computerGenerate)=>
{
    if (computerGenerate==0)
    computerChoice='rock';
else if(computerGenerate==1)
    computerChoice='paper';
else
    computerChoice='scissor';


    console.log(userChoice);
    console.log(computerChoice);

    if(computerChoice==userChoice)
    {
    currentResult.innerHTML="It's a Draw";
    return;
    }

    if(userChoice=='rock')
    {
        if(computerChoice=='paper')
        {
            cScore+=1;
            computerScore.innerHTML=cScore;
            currentResult.innerHTML='computer wins by paper';
        }
        else
        {
            uScore+=1;
            userScore.innerHTML=uScore;
            currentResult.innerHTML='user wins rock';
        }
        // count+=1;
    }
    if(userChoice=='paper')
    {
        if(computerChoice=='scissor')
        {
            cScore+=1;
            computerScore.innerHTML=cScore;
            currentResult.innerHTML='computer wins scissor';
        }
        else
        {
            uScore+=1;
            userScore.innerHTML=uScore;
            currentResult.innerHTML='user wins paper';
        }
        // count+=1;
    }
    if(userChoice=='scissor')
    {
        if(computerChoice=='rock')
        {
            cScore+=1;
            computerScore.innerHTML=cScore;
            currentResult.innerHTML='computer wins rock';
        }
        else
        {
            uScore+=1;
            userScore.innerHTML=uScore;
            currentResult.innerHTML='user wins scissor';
        }
        // count+=1;
    }
}






choices.forEach(element => {
    element.addEventListener('click',(e)=>{
     userChoice=e.target.id;
    computerGenerate=Math.floor(Math.random()*3);
    getResult(userChoice,computerGenerate);

    })
    


});

reload.addEventListener('click',()=>{
    window.location.reload();
})

// TODO:
// // i have to make for 5 round gameplay;

