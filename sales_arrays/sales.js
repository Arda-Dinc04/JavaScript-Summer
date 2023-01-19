"use strict";


const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

document.write("Q1: $"+ (region1[0]+region2[0]+region3[0]+region4[0]+region5[0]) +"<br>");
document.write("Q2: $"+ (region1[1]+region2[1]+region3[1]+region4[1]+region5[1]) +"<br>");
document.write("Q3: $"+ (region1[2]+region2[2]+region3[2]+region4[2]+region5[2]) +"<br>");
document.write("Q4: $"+ (region1[3]+region2[3]+region3[3]+region4[3]+region5[3]) +"<br>");

document.write('<h2>Sales By Region</h2>');

const region1Total = (region1[0]+region1[1]+region1[2]+region1[3]);
const region2Total = (region2[0]+region2[1]+region2[2]+region2[3]);
const region3Total = (region3[0]+region3[1]+region3[2]+region3[3]);
const region4Total = (region4[0]+region4[1]+region4[2]+region4[3]);
const region5Total = (region5[0]+region5[1]+region5[2]+region5[3]);

document.write("Region 1: $"+ region1Total +"<br>");
document.write("Region 2: $"+ region2Total +"<br>");
document.write("Region 3: $"+ region3Total +"<br>");
document.write("Region 4: $"+ region4Total +"<br>");
document.write("Region 5: $"+ region5Total +"<br>");

document.write('<h2>Total Sales</h2>');


const total = region1Total + region2Total + region3Total + region4Total + region5Total;

document.write("$"+total);
