var drums=document.querySelectorAll(".drum");

for(var i=0;i<drums.length;i++)
{
    drums[i].addEventListener("click",function()
    {
        var buttonText=this.textContent;
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });
}

document.addEventListener("keydown",function(event)
{
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var waudio=new Audio("sounds/tom-1.mp3");
            waudio.play();
            break;
        case "a":
            var waudio=new Audio("sounds/tom-2.mp3");
            waudio.play();
            break;
        case "s":
            var waudio=new Audio("sounds/tom-3.mp3");
            waudio.play();
            break;
        case "d":
            var waudio=new Audio("sounds/tom-4.mp3");
            waudio.play();
            break;
        case "j":
            var waudio=new Audio("sounds/crash.mp3");
            waudio.play();
            break;
        case "k":
            var waudio=new Audio("sounds/kick-bass.mp3");
            waudio.play();
            break;
        case "l":
            var waudio=new Audio("sounds/snare.mp3");
            waudio.play();
            break;
        default:
            console.log(key);     
    }
}

function buttonAnimation(key)
{
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);

}