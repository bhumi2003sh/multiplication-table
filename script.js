function generateTable(){
    var getData = document.getElementById("number").value; //This line gets the value from an HTML input element with the id of "number". It stores this value in the variable getData. This value is expected to be a number (but note that it's retrieved as a string).
    
    var putData = document.getElementById("display"); //This line selects an HTML element with the id of "display", which will be used to display the multiplication table. It stores this element in the variable putData.
    
    var i; //Here, one variable is declared, i (used as the loop counter).
    
    for(i=1; i<=10; i++){
        putData.innerHTML+=getData+"*"+i+"="+getData*i+"<br>";
    } // This for loop iterates from 1 to 10. For each iteration:- It constructs a string representing the multiplication operation (e.g., 5*1=5 if getData is 5).It then appends this string to the innerHTML of the putData element, which is the output display area. The "<br>" part adds a line break after each multiplication result to ensure that each result appears on a new line.
}