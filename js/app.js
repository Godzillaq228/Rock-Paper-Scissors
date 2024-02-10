window.addEventListener('load',function(){
    let countUser=document.querySelector('.count-user'),
    countComp=document.querySelector('.count-comp'),
    userField=document.querySelector('.user-field'),
    compField=document.querySelector('.comp-field'),
    sound=document.querySelector('.sound'),
    res=document.querySelector('.result'),
    play=document.querySelector('.play'),
    fields=document.querySelectorAll('.field'),

    userStep,compStep,countU=0,countC=0,blocked=false;

    function choiceUser(e){
        if (blocked) return;
        let target=e.target;
        if(target.classList.contains('field')){
            userStep=target.dataset.field;
            fields.forEach(item=>item.classList.remove('active','error'))
            target.classList.add('active');
            choiceComp();
        }
    }

    function choiceComp(){
        blocked=true;
        let rand=Math.floor(Math.random()*3);
        compField.classList.add('blink');
        let compFields=compField.querySelectorAll('.field');

        setTimeout(()=>{
            compField.classList.remove('blink');
            compStep=compFields[rand].dataset.field;
            compFields[rand].classList.add('active');
            winner();
        },3000)
    }

   
    play.addEventListener('click',playGame);
    userField.addEventListener('click',choiceUser);
});