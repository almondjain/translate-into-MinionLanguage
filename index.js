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

//Adding server Url which is url for minion language
var serverURL = "https://api.funtranslations.com/translate/minion.json"

//function- generate Url(of minion's) with input text(which we enter in ENglish) which will be used to get the output ofminion's language.
function getTranslationURL(input){
    return serverURL + "?text=" + input;
}

//function errorHandler is called when there is any error, it will display the error
function errorHandler(error){
    console.log("Error: "+error);
    //will also show a alert popup to tell the user as well about the error ocurence
    alert("Error occur: Please try again!")
}

//function handleCick that will be call when button is clicked, basically to translate
function handleClick(){
    console.log('Clicked');

    //taking input
    var input = InputText.value;
    console.log(input);

    //aaega(input value, previous vale se aa rhi h jo) => jaega(return value)
    //now we call server which is our minion language translator using promise method
    fetch(getTranslationURL(input)).then(
        response => response.json()
    ).then(
        json=> {
            //translated text (minion lang) which come from the above url, will be stored in translatedText variable
            var translatedText = json.contents.translated;
            //translatdText (minion lang) will be stored in output div or box which is created for the output
            OutputText.innerText = translatedText;
        }
    ).catch(errorHandler) //function errorHandler is called in case there is any error while the translation
};

