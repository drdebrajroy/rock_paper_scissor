*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    max-width: 800px;
    height: 100vh;
    margin: auto;
    text-align: center;
}
/* -----------main container div--------------- */
.container{
    padding: 20px;
    border: 1px solid black;
}

/* ----------- score board container----------------*/
.scoreBoard{
    /* height: 50px; */
    /* background-color: gray; */
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 5px;
    font-size: 1.5em;
    border: 1px solid grey;
    border-radius: 4px ;
}
.user{
    background-color: yellow;
    border: 1px solid black;
}
.computer{
    background-color: white;
    border: 1px solid black;
}
/* ------------------choices styling------------------ */
.choices{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}
button{
    width: 100px;
    height: 50px;
    border-radius: 4px;
    font-size: 1.3em;
    cursor: pointer;
}
button:hover{
    box-shadow: 1px 1px 5px black;
}
/* ------------------result container---------------------- */
.result{
    padding: 20px;
}
.result h3,.result h2{
    margin: 10px 0;
}
/* -----------------reload container------------------------ */
.reload{
    padding: 20px;
}
.reload button{
    background-color: red;
}