var shiftval = 0;
function encipher(){
    shiftval = parseInt(document.getElementById('shift').value);
    var text1 = document.getElementById('input').value;
    var textArr = [...text1];
    var newArr = [...text1];
    var size = textArr.length;
    var curr = '';

    for(i = 0; i < size; i++){
        curr = textArr[i];
        if(curr.charCodeAt(0) > 58 && curr != ' '){
            curr = curr.charCodeAt(0);
            curr = convert(curr+shiftval);
            newArr[i] = String.fromCharCode(curr);
        }
    }
    document.getElementById("response").innerHTML = newArr.join('');

}

function decipher(){
    alert("Decipher");
}

function convert(curr){
    
    var temp =  curr - shiftval;
    if(temp > 64 && temp < 91){
        curr = ((curr - 64 ) % 26) + 64;
         if(curr == 64)
            curr = 90;
    }

     if(temp > 96 && temp < 123){
        curr = ((curr - 96 ) % 26) + 96;
        if(curr == 96)
            curr = 122;
    }

  /*  if(temp > 47 && temp < 58){
        curr = ((curr - 47) % 10) + 47;
        if(curr == 47)
            curr = 57;
    }*/
    
    

    return curr;
    
}