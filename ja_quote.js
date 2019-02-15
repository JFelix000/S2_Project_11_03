"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Jose Felix
   Date:   2.15.19
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
//randomInt is to make the number a random number from 0 to 9 since there are a total of 10 values in the code.
var randomQ = randomInt(0, 9);
// the function randomInt returns the code being a math.floor which is a rounding down, then the math.random gives you a random number within that. Multiplying by 10 makes it reach every integer value so that it can select the code that is in all of the quotes.
function randomInt() {
    return Math.floor(Math.random()*10 );
}
// The document.getelementsbytagname gets the quote tag so that we dont have to make a quote id or class to select. Since this is the only quote tag, the code knows to select this. 
var quoteElem = document.getElementsByTagName('quote');
// quoteElem[#] is the form that the quotes are selected from and since the numbers need to be random when refreshed, it uses the randomQ within the function with all of the quotes(getQuote).
quoteElem[0].innerHTML = getQuote(randomQ);


function getQuote(n) {
   var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Life seems but a quick succession of busy nothings.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "One cannot be always laughing at a man without now and then stumbling on something witty.",
   "Men were put into the world to teach women the law of compromise.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}