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


   if (cleanString.length>280){
     cleanString=cleanString.slice(0,120);
   cleanString=cleanString.concat("... -- Satprem");
   }



  var twtLink = 'https://twitter.com/intent/tweet?text=' +encodeURIComponent(cleanString);
   window.open(twtLink,'_blank');

   };

function caseInSwitch(val) {
 var caseString = "";
 switch (val) {
   case 0:
     caseString = "I become what I see in myself. All that thought suggests to me, I can do; all that thought reveals in me, I can become. This should be man's unshakeable faith in himself, because God dwells in him. <br><br> Sri Aurobindo, <br> Thoughts and Glimpses";
     break;
   case 1:
     caseString = "The soul attracted leaned to the Abyss: <br> It longed for the adventure of Ignorance...<br><br> Sri Aurobindo, <br> Savitri" 
     break;
   case 2:
     caseString = "The heavens beyond are great and wonderful, but greater and more wonderful are the heavens within you. It is these Edens that await the divine worker. <br><br> Sri Aurobindo, <br> Hour of God";
     break;
   case 3:
     caseString = "Our actual enemy is not any force exterior to ourselves, but our own crying weaknesses, our cowardice, our selfishness, our hypocrisy, our purblind sentimentalism. <br><br> Sri Aurobindo, <br> New Lamps for Old";
     break;
   case 4:
     caseString = "For what the Spirit sees becomes a truth. <br> And what the soul imagines is made a world. <br><br> Sri Aurobindo, <br>Savitri";
     break;
   case 5:
     caseString = "For Truth and knowldge are an idle gleam, <br> If Knowldge brings not power to change the world. <br><br> Sri Aurobindo, <br>Savitri";
     break;
   default:
     caseString = "I never admitted a truth in the mind without simultaneously keeping it open to the contrary of it <br> And the first result was the prestige of the intellect was gone. <br> <br> Sri Aurobindo, <br>Evening Talks ";
     break;
 }
 return caseString;
}
