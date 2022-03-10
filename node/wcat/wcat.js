const { Console } = require("console");
const fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(input);

let filesArr = [];
let optionArr=[];
// placed files path in filesArr
for (let i = 0; i < inputArr.length; i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=='-'){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }

    
}
// console.log("file to be read are " + filesArr);

//check if all the files are present //
for (let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("Files does not exist ");
        return;
    }
}

// content read and appending starts//
let content = "";
for (let i = 0; i < filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent+"\n";
}
console.log(content);

let contentArr=content.split("\n");
console.log(contentArr);

let isPresent=optionArr.includes("-s");
if(isPresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]==""&& contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]==""&& contentArr[i-1]==null){
            contentArr[i]=null;
        }

    }
}
// console.log(contentArr);
 tempArr=[];
 for(let i=0;i<contentArr.length;i++){
     if(contentArr[i]!=null){
         tempArr.push(contentArr[i]);
     }
 }
console.log(tempArr);