let $ = document;
let rockImage = $.querySelector('.rock');
let scissorsImage = $.querySelector('.scissors');
let paperImage = $.querySelector('.paper');
let pcImage = $.querySelector('.selectedByComputer');
let personScore = $.querySelector('.person-Score');
let pcScore = $.querySelector('.pc-Score');
let imgElems = $.querySelectorAll('.player');
let winnerMessageElem = $.querySelector('.winner');
let imageSrc = ['./images/rock.png' , './images/scissor.png' , './images/paper.png'];
rockImage.setAttribute('src' ,'./images/rock.png');
scissorsImage.setAttribute('src','./images/scissor.png');
paperImage.setAttribute('src','./images/paper.png');
for(let img of imgElems){
    img.classList.remove('ToggleOpacity1');
    img.addEventListener('click', setEventOnImgElems);
}
function setEventOnImgElems(event){
    event.stopPropagation();
    for(let item of imgElems){
        item.classList.add('ToggleOpacity1');
    }
    event.target.classList.remove('ToggleOpacity1');
    let chosenPersonImage = event.target.getAttribute('src');
    let chosenPcImage = imageSrc[Math.floor(Math.random() * imageSrc.length)];
    determineWinner(chosenPersonImage , chosenPcImage);
}
let yourScore = 0 ;
let computerScore = 0 ;
let determineWinner = (userImg , pcImg) => {
    pcImage.setAttribute('src' , pcImg);
    if(userImg === './images/rock.png' && pcImg === './images/scissor.png' ){
        yourScore += 1;
        personScore.innerHTML = yourScore ;
    }else if(userImg === './images/scissor.png' && pcImg === './images/rock.png' ){
        computerScore += 1; 
        pcScore.innerHTML = computerScore ;
    }else if(userImg === './images/rock.png' && pcImg === './images/paper.png'){
        computerScore += 1; 
        pcScore.innerHTML = computerScore ;

    }else if(userImg === './images/scissor.png' && pcImg === './images/paper.png'){
        yourScore += 1;
        personScore.innerHTML = yourScore ;

    }else if(userImg === './images/paper.png' && pcImg === './images/rock.png'){
        yourScore += 1;
        personScore.innerHTML = yourScore ;
    }else if(userImg === './images/paper.png' && pcImg === './images/scissor.png'){
        computerScore += 1; 
        pcScore.innerHTML = computerScore ;
    }
    winnerChecker(yourScore , computerScore );
}

function winnerChecker(yourScore , computerScore){
    if(computerScore == 10 || yourScore == 10){
        AddFinshMessage();
        for(let img of imgElems){
            img.removeEventListener('click' , setEventOnImgElems);
        }
    }
}

function AddFinshMessage(){
    if(yourScore < computerScore){
       winnerMessageElem.innerHTML = 'computer win !';
       winnerMessageElem.classList.add('text-danger');

    }else{
        winnerMessageElem.innerHTML = 'you win :)';
        winnerMessageElem.classList.add('text-success');
    }
}