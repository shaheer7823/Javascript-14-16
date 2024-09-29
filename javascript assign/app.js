var student_Name = [];
// ---------------------------------------------------------------------------------------
var student_Name = new Array();
console.log(student_Name);
// ---------------------------------------------------------------------------------------
var str = ["Mango", "Heart", "Apple"];
// ---------------------------------------------------------------------------------------
var num = [1, 2, 3, 4, 5];
// ---------------------------------------------------------------------------------------
var booleanArray = [ false, true, false];
// ---------------------------------------------------------------------------------------
var mixArray = ["Apple", 23, true, "developer"];
// ---------------------------------------------------------------------------------------
var educ_quali = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log(educ_quali)
var educ_quali = [" 1. SSC <br> 2. HSC <br> 3. BCS <br> 4. BS <br> 5. MS <br> 6. M. Phil. <br> 7. PhD <br>"];
document.write(educ_quali)
// ---------------------------------------------------------------------------------------
var student_name = ["Mango", "Heart", "Apple"]
var student_num = [420,380,250]
 for(var i = 0; i <student_name.length;i++){
    var perc = (student_num[i]/500)*100;
document.write(" <br> student name :  " + student_name[i] +" score "+student_num[i] +"  percentages of students "+ perc )
 }
// ---------------------------------------------------------------------------------------
var colors_name = ["Red", "Green", "Blue", "Yellow", "Purple"]
var new_color = prompt("enter new color start beginning ")
colors_name.unshift(new_color)
console.log(colors_name) 
var new_color = prompt("enter new color start beginning ")
 colors_name.push(new_color)
 console.log(colors_name)
 colors_name.unshift("orange","red")
 console.log(colors_name)
colors_name.shift()
console.log(colors_name)
colors_name.pop()
console.log(colors_name)
var index = parseInt(prompt("enter index add color"))
var new_color =prompt("add new color")
colors_name.splice(index,0,new_color)
console.log(colors_name)
var index = parseInt(prompt("enter index add color"))
var count =prompt("enter count delete color")
colors_name.splice(index,count)
console.log(colors_name)
// ---------------------------------------------------------------------------------------
var studentScores = [85, 90, 78, 92, 88, 76, 95, 89];  
  
studentScores.sort();  
  
console.log(studentScores);
// ---------------------------------------------------------------------------------------
var city_name = ["Karachi","lahore","islamabad","Quetta","Peshwaer"]

var selected_city= city_name.slice(2,4)

console.log(selected_city)
// ---------------------------------------------------------------------------------------
var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join(",");
console.log(result); 
// ---------------------------------------------------------------------------------------
var new_array =["keyboard","mouse","printer","monitor"]
new_array.push("keyboard")
new_array.shift()
new_array.unshift("printer");
console.log(new_array)
// ---------------------------------------------------------------------------------------
var new_array =["keyboard","mouse","printer","monitor"]
new_array.push("keyboard")
new_array.shift()
console.log(new_array)
// ---------------------------------------------------------------------------------------
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>');