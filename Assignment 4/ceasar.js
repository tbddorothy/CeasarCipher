var set;
var shiftval = 0;
function encipher(){
    shiftval = parseInt(document.getElementById('shift').value);
    set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    set = [...set];
    var text1 = document.getElementById('input').value;
    var textArr = [...text1];
    var newArr = [...text1];
    var size = textArr.length;
    var curr = '';

    for(i = 0; i < size; i++){
            curr = textArr[i];
            curr = findIndex(curr);
            curr = (curr) % 62;
            newArr[i] = set[curr];
    }
    document.getElementById("response").innerHTML = newArr.join('');

}

function decipher(){
    shiftval = parseInt(document.getElementById('shift').value);
    set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    set = [...set];
    var text1 = document.getElementById('input').value;
    var textArr = [...text1];
    var newArr = [...text1];
    var size = textArr.length;
    var curr = '';

    for(i = 0; i < size; i++){
            curr = textArr[i];
            curr = DfindIndex(curr);
            curr = (curr) % 62;
            newArr[i] = set[curr];
    }
    document.getElementById("response").innerHTML = newArr.join('');
}


function findIndex(curr){
    
    var found = false;
    var i = 0;
    while(!found && i < 63){
        if(curr == set[i]){
            found = true;
        }
        i = i + 1;
    }
  
    return i + shiftval - 1;
}

function DfindIndex(curr){
    
    var found = false;
    var i = 0;
    var ret;
    while(!found && i < 63){
        if(curr == set[i]){
            found = true;
            ret = i - shiftval;
            if(ret < 0){
                return 62 + ret;
            }

            return ret;
        }
        i = i + 1;

       
    }
  
     return;
    
}