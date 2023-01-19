"use strict";

const MIN_VALUE =  1000;
const MAX_VALUE =  5000;
let total_points = 0;
let userInput = 0;
let count = 0;

const region1 = [0, 0, 0, 0];
const region2 = [0, 0, 0, 0];

//intialize regions 1 & 2 from userInput
while(total_points < 8){
    userInput = parseInt(prompt("Enter a total of 8 points between 1000-5000 for the regions. You have entered "+ total_points + " points so far."));
        if( userInput != ""  && (MIN_VALUE <= userInput && userInput <= MAX_VALUE)){ //conditions for empty/min/max 
            if(total_points <= 3){  //after 4 values switch to region 2 and intialize using count
                region1[total_points] = userInput;
                total_points ++; // responsible for intialzing array one but also to let the user know how many points are left
            }
            else{
                region2[count] = userInput;
                count ++; // responsible to intialize array 2 
                total_points ++;
            }
        }
        else
            alert("Renter another value, invalid entry!");
}

//Quarter totals
document.write("<span>Q1: $"+ (region1[0]+region2[0]) +"</span><br>");
document.write("<span>Q2: $"+ (region1[1]+region2[1]) +"</span><br>");
document.write("<span>Q3: $"+ (region1[2]+region2[2]) +"</span><br>");
document.write("<span>Q4: $"+ (region1[3]+region2[3]) +"</span><br>");

document.write('<h2>Sales By Region</h2>');//header

//Region totals
document.write("<span>Region 1: $"+ (region1[0]+region1[1]+region1[2]+region1[3]) +"</span><br>");
document.write("<span>Region 2: $"+  (region2[0]+region2[1]+region2[2]+region2[3])+"</span><br>");

document.write('<h2>Total Sales</h2>');//header

//final total
document.write("<span>$"+(region1[0]+region1[1]+region1[2]+region1[3] + region2[0]+region2[1]+region2[2]+region2[3])+"</span><br>");

