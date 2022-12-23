function generateHex()
{
    let vet = "0123456789ABCDEF";
    let hex="";
    var i;
    for(i = 0,n = vet.length; i < 6; ++i)
    {
        hex += vet.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("hex").innerText = `#${hex}`;
    document.querySelector("body").style.background = `#${hex}`;
    document.getElementById("hex").style.color = `#${hex}`;  
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