var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];

var isGameStarted=false;
var level=0;

$(document).on("keydown",function()
{
    if(isGameStarted==false)
    {
        isGameStarted=true;
        $("#level-title").text("Level "+level);
        nextSequence();
    }
});

function nextSequence()
{
    level++;
    $("#level-title").text("Level "+level);    

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);   

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100); 
    playSound(randomChosenColour);

    userClickedPattern=[];
}

$(".btn").on("click",function(event){
    var userChosenColour =$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});


function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3"); // For Chrome they changed autoplay policy
    var playPromise=audio.play();  //this method returns a promise, that need to be handled , otherwise gives error.
    
    playPromise.then(function(){
        
    }).catch(function(err){
        console.log(err);
    });
}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel)
{
    if(userClickedPattern.length<=gamePattern.length && userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();        
    }
}

function startOver()
{
    isGameStarted=false;
    level=0;
    gamePattern=[];
}