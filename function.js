// Code By Webdevtrick ( https://webdevtrick.com )
//Switcher function:
$(".tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".tab").removeClass("activeTab");
  $(this).addClass("activeTab");
}); 

function buttonPressed() {
var x = document.getElementsByClassName("tab activeTab");
var stress = 0;
var relat = 0;
var prod = 0;
var exrs = 0;
var relatAdvice = "";
var stressAdvice = "";
var prodAdvice = "";
var physAdvice = "";

var x = document.getElementsByClassName("tab activeTab");

    for(var i = 0; i<x.length;i++){
        var value = parseInt(x[i].innerText);

        if(i < 5 ){
            stress = stress + value;
        }
        else if( i < 10){
            relat = relat + value;
        }
        else if( i <15){
            prod = prod + value;
        }
        else{
            exrs = exrs + value;
        }
    }

console.log(stress);
console.log(relat);
console.log(prod);
console.log(exrs);

document.getElementById("resultsC").style.display = "inline";
document.getElementById("aQuestions").style.display = "none";
document.getElementById("aButtons").style.display = "none";


document.getElementById("stressScore").innerHTML = "Your stress score out of 25 is: " + stress;
document.getElementById("relationshipScore").innerHTML = "Your relationship score out of 25 is: " + relat;
document.getElementById("productScore").innerHTML = "Your productivity score out of 25 is: " + prod;
document.getElementById("physicalScore").innerHTML = "Your physical wellness score out of 25 is: " + exrs;




if(stress<=6) { // really good
    stressAdvice += "For an ongoing pandemic, you seem to be handling stress quite well. The only suggestion that we have is to keep doing what you are doing.";
} else { // needs help
    stressAdvice += "You seem to be quite stressed, and we understand. <br> <br> Here are some suggestions: <br> <a style='color:#FFFFFF;' href='https://apps.apple.com/ca/app/breathe2relax/id425720246'>A popular meditation app </a> <br> <a style='color:#FFFFFF;' href='https://play.google.com/store/apps/details?id=com.urbandroid.sleep'>An app to track your sleeping and help with your sleep schedule.</a> <br> <a style='color:#FFFFFF;' href = 'https://www.ucalgary.ca/wellness-services'>A link to the University of Calgary Wellness Center </a>"  ;
} 

if(relat<=6) { // really good
    relatAdvice += "You seem to have good, healthy relationships. Based  ";
} else { // needs help
    relatAdvice += "Your relationships look like they need improvement. <br> <br> Here some helpful links: <br>  <a style='color:#FFFFFF;' href='https://www.reddit.com/r/UCalgary/'>the UCalgary subreddit to connect with others</a> <br> <a style='color:#FFFFFF;' href ='https://www.bigthrillfactory.com/funforallages'>Try these activities with a friend!</a> <br> <a style='color:#FFFFFF;' href = 'https://www.ucalgary.ca/wellness-services'>A link to the University of Calgary Wellness Center </a>";
} 

if(prod<=6) { // really good
    prodAdvice += "Despite the negative factors all around us, you seem to be very productive. Keep up the great work";
} else { // needs help
    prodAdvice += "Your productivity seems to be a little bit low. <br> <br> Here are some helpful resources: <br> <a style='color:#FFFFFF;' href = 'https://www.forestapp.cc/'>A useful app to stop you from getting distracted while working</a> <br> <a style='color:#FFFFFF;' href = 'https://support.microsoft.com/en-us/office/introduction-to-the-outlook-calendar-d94c5203-77c7-48ec-90a5-2e2bc10bd6f8'>Try using a calendar to help with scheduling </a>";
} 

if(exrs<=6) { // really good
    physAdvice += "You're showing your physical health the love it deserves, keep it up.";
} else { // needs help
    physAdvice += "Your physical health seems to be deteriorating. <br> <br> Here are some helpful resources: <br>  <a style='color:#FFFFFF;' href = 'https://apps.apple.com/us/app/myfitnesspal/id341232718'>A popular exercise and diet app.</a> <br> <a style='color:#FFFFFF;' href = 'https://food-guide.canada.ca/en/'>Canada's food guidelines.</a> <br>";
} 

    

document.getElementById("stressSuggestion").innerHTML = stressAdvice;
document.getElementById("relatSuggestion").innerHTML = relatAdvice;
document.getElementById("prodSuggestion").innerHTML = prodAdvice;
document.getElementById("excerSuggestion").innerHTML = physAdvice;

}
