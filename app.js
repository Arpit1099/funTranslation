// var txtInput=document.querySelector("#txt-input");
// var btntranslate=document.querySelector("#btn-translate");
// var outputDiv=document.querySelector("#output");

// var serverURL= "https://api.funtranslations.com/translate/minion.json"


// function getTranslationUrl(text){
//     return serverURL + "?" + "text=" + text
// }

// function errorHandler(error){
//     console.log("error occured",error);
//     alert("something went wrong with server! try after sometime")
// }

// btntranslate.addEventListener("click",
// function clickEventHandler()
// {
//     var inputText=txtInput.value;
//     fetch(getTranslationURL(inputText))
//     .then(response => response.json())
//     .then(json => 
//         {
//             var translatedText=json.contents.translated;
//             outputDiv.innerText=translatedText;
//         })
//     .catch(errorHandler)
// })

var txtInput=document.querySelector("#txt-input");
var btntranslate=document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");
var serverURL= "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text)
{
return serverURL + "?" + "text=" + text
}
function errorHandler(error)
{
console.log("error occured: "+error)
alert("something wrong with server!!! Try again after some time")
}

btntranslate.addEventListener("click",
function clickEventHandler()
{
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => 
        {
            var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
        })
    .catch(errorHandler)
})




