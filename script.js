$(document).ready(function() {


   $("#getMessage").on("click", function(){

     num = Math.floor(Math.random() * 10);
     string = caseInSwitch(num);


     $(".rquoteText").html(string);

   });




 });

function cardTweet(){

  var re = /<br>/gi;

  var cleanString = string.replace(re, '');


   if (cleanString.length>140){
     cleanString=cleanString.slice(0,120);
   cleanString=cleanString.concat("... -- Sri Aurobindo");
   }



  var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(cleanString);
   window.open(twtLink,'_blank');

   };

function caseInSwitch(val) {
 var caseString = "";
 switch (val) {
   case 0:
     caseString = "I become what I see in myself. All that thought suggests to me, I can do; all that thought reveals in me, I can become. This should be man's unshakeable faith in himself, because God dwells in him. <br><br> -Satprem";
     break;
   case 1:
     caseString = "The age of adventures is over. Even if we reach the seventh galaxy, we will go there helmeted and mechanized, and it will not change a thing for us; we will find ourselves exactly as we are now: helpless children in the face of death, living beings who are not too sure how they live, why they are alive, or where they are going. <br><br> -Satprem";
     break;
   case 2:
     caseString = "The heavens beyond are great and wonderful, but greater and more wonderful are the heavens within you. It is these Edens that await the divine worker. <br><br> -Satprem";
     break;
   case 3:
     caseString = "Our actual enemy is not any force exterior to ourselves, but our own crying weaknesses, our cowardice, our selfishness, our hypocrisy, our purblind sentimentalism. <br><br> -Satprem";
     break;
   case 4:
     caseString = "For what the Spirit sees becomes a truth. <br> And what the soul imagines is made a world. <br><br> -Satprem";
     break;
   case 5:
     caseString = "For Truth and knowldge are an idle gleam, <br> If Knowldge brings not power to change the world. <br><br> -Satprem";
     break;
   default:
     caseString = "I never admitted a truth in the mind without simultaneously keeping it open to the contrary of it...And the first result was the prestige of the intellect was gone. <br> <br>-Satprem";
     break;
 }
 return caseString;
}
