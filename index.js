// Referencing button of html into js
var TranslateButton = document.querySelector("#translate-button");
console.log(TranslateButton);

// Referencing Input Textarea of html into js
var InputText = document.querySelector("#taking-input");
console.log(InputText);

// Referencing Output Div of html into js
var OutputText = document.querySelector("#output");
console.log(OutputText);

//adding Event Handler on Button i.e when we click on Button then it will call handleClick function
TranslateButton.addEventListener("click",handleClick);

//function handleCick that will be call when button is clicked, basically to translate
function handleClick(){
    console.log('Clicked');

}

