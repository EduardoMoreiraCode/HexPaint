var textContent = document.getElementById("hex");
var textColor = document.getElementById("hex");
var bcgColor = document.querySelector("body");
var savedColorText = localStorage.getItem("colorText");
var savedTextContent = localStorage.getItem("contentText");
var savedBackColor = localStorage.getItem("colorBcg");

if(savedBackColor)
{
    document.body.style.backgroundColor = savedBackColor;
}

if(savedTextContent)
{
    document.getElementById("hex").innerText = savedTextContent;
}

if(savedColorText)
{
    document.body.style.color = savedColorText;
}

function generateHex()
{
    let vet = "0123456789ABCDEF";
    let hex="";
    var i;
    for(i = 0,n = vet.length; i < 6; ++i)
    {
        hex += vet.charAt(Math.floor(Math.random() * n));
    }

    textContent.innerText = `#${hex}`;
    bcgColor.style.background = `#${hex}`;
    textColor.style.color = `#${hex}`;  
   
   localStorage.setItem("contentText", textContent.innerText);
   localStorage.setItem("colorText", textColor.style.color);
   localStorage.setItem("colorBcg", bcgColor.style.background);
}

function copyToClipBoard()
{
    var right = "successfully copied!"
    var wrong = "Something went wrong while copying!"
    var content = document.getElementById('hex').innerHTML;

    navigator.clipboard.writeText(content)
    .then(() => {
        window.alert(content + " " + right);
    })

    .catch(err => {
        window.alert(wrong, err);
    })
}
