var sum = 0;
var i = 0;
while (i < 100 )
{
    if (i % 2 == 0)
    {
        sum = sum + i;
    }
    i++;
}

console.log(sum);

var sum = 0;
for (var i = 0; i < 100; i++){
    if (i % 3 == 0){
        sum = sum + i;
    }

}
console.log(sum);

var a = ["Pikachu","Squirtle"];
a.push("Magikrap");
a.unshift("Charmander");
a.pop();
a.sort();
console.log(a);

function pageLoad(){
    var clickButton = document.getElementById("clickme");
    clickButton.onclick = myFunction;

    var form = document.getElementById("myForm");
    form.onsubmit = myFormfunction;
}

function myFormfunction(){
    alert("OK")
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}

function myFunction(){
    alert("Hello");
}

window.onload = pageLoad;
