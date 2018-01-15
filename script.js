

//  Declare Variables

const demoVideo = document.querySelectorAll('video')[0];
const allSpans = document.querySelectorAll('span');
const half =  document.getElementsByClassName("halftime");



// Function / For Loop, conditional, and add class function

demoVideo.addEventListener("timeupdate", () => {
	for ( let i = 0; i < allSpans.length; i+= 1) {
		let spanStart = allSpans[i].dataset.starttime;
    	let spanEnd = allSpans[i].dataset.endtime;
    	let current = demoVideo.currentTime;

    	if (current >=spanStart && current <= spanEnd){
    		allSpans[i].classList.add('addColor');
    	}
    	else {
    		allSpans[i].classList.remove('addColor');
    	}

    	}
});

/*  Description 


The project requires the color change of text (caption) located below the video to reflect the script of the video.  
The text is orgranized in time snippets in the captions.txt file with a start and stop times of the text.  
As the video progresses different text will be highlighted.
*/

/*  Javascript Elements needed  
Set Data Elelments for start and stop time for captions 
Variables-- Set a variable to video , span , start and end data sets, 
Event Listener --This is used to listen as the video progresses attach to the variable  
Event Handler --  timeupdate function used to track as the video progresses
For loop-- this is used to iterate through the various span elements
conditional statement --used to companre start and end times vs current time 
Add style--add a style addColor if the times are between the start and end and remove once it is not
*/

/*  Steps to Project 

Step 1--Declare Variable (demoVideo) for video to make it easier to attach event listener

const demoVideo = document.querySelectorAll('video')[0];   grabs video element and stores in const variable--need to use [0] because it is a collection

Step 2--  Add event listener to video variable to track when the video is being played and triggers a function. should use timeupdate built in javascript function and arrow function syntax. 

demoVideo.addEventListener("timeupdate", () => 

Step 4--  Create For loop to loop through all spans & Create variable to represent all spans

const allSpans = document.querySelectorAll('span');

for ( let i = 0; i < allSpans.length; i+=) 
    
Step 6 --  Create variables for the datasets with in the spans for both staring and ending data values.  Verify names match up with index.html file also make sure it is in the loop

let startVid = allSpans[i].dataset.starttime
let endVid =allSpans[i].dataset.endtime  


Step 7 Create Variable for current time of video variable to set the current time to compare vs start and end time to trigger the text being highlighted as the video progresses

let current = demoVideo.currentTime;  

Step 8 Write conditional statement comparing values of spans and current time




Step 9 write conditional statement to add class of highlight to span if meets condition also should be included in for loop .  

if (current >= startVid && current <= endVid){
            allSpans[i].classList.add('addColor');
        }
        else{
            allSpans[i].classList.remove('addColor');
        }
    }  

Step 10  Add Css Class with the change in color .addColor

Step 11 close function & test 



*/



/*   Part 2 Descirption 

	When a user clicks on the text the video is reset to the begining of the span that the text includes


 */

 /*   Javascript Elements needed 
 for loop 
Attach event listener to the allSpans variable 
Eventlistener set to click
Event Handnler   Click 
Run a function 
Conditional statement if the current time ==  span start reset to start time
run a built in function to play video 



Step 1  Set up a for loop to loop through all spans 
Step 2  Add an event listener to the all Spans variale 
Step 3 set an event handler to to listener for click when the user clicks on the span elements
Step 4 run function using arrow function syntax 
Step 5  function should reset the current time to the start time of the span that is clicked on
Step 6 add built in play function to play the video once the span is clicked on

 */


 for (let i =0;  i< allSpans.length; i+= 1){
 	allSpans[i].addEventListener('click', () => {
 		demoVideo.currentTime = allSpans[i].dataset.starttime;
 		demoVideo.play();

 	});

 }