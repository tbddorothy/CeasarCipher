
function encipher(){
    var shiftval = 3;
    var text1 = document.getElementById('input').value;
    var textArr = [...text1];
    var newArr = [...text1];
    var size = textArr.length;
    var curr = '';

    for(i = 0; i < size; i++){
        curr = textArr[i];
        if(curr != ' '){
            curr = (curr.charCodeAt(0) + shiftval);
            newArr[i] = String.fromCharCode(curr);
        }
    }
    document.getElementById("response").innerHTML = newArr.join('');

}

function decipher(){
    alert("Decipher");
}