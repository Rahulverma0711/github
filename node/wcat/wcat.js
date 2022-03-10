const { Console } = require("console");
const fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(input);

let filesArr = [];
let optionArr=[];

for (let i = 0; i < inputArr.length; i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=='-'){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }

    
}

for (let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("Files does not exist ");
        return;
    }
}


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

 tempArr=[];
 for(let i=0;i<contentArr.length;i++){
     if(contentArr[i]!=null){
         tempArr.push(contentArr[i]);
     }
 }
contentArr=tempArr;
let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");


let finalOption = "";

if (indexOfN != -1 && indexOfB != -1) {
    if (indexOfN < indexOfB) {
        finalOption = "-n";
    }
    else {
        finalOption = "-b";
    }
}

else {
    if (indexOfN != -1) {
        finalOption = "-n";
    }
    else if (indexOfB != -1) {
        finalOption="-b"
    }
}


if (finalOption == "-n") {
    modifiyContentByN();
}
else if (finalOption == "-b") {
    modifiyContentByB();
}

function modifiyContentByN() {
   for(let i=0;i<contentArr.length;i++){
       content[i]=(i+1)+") "+content[i];
   }
}
 console.log(contentArr);
function modifiyContentByB() {
   for(let i=0;i<contentArr.length;i++){
       if(content[i]!=""){
        content[i]=(i+1)+") "+content[i];
       }
   }
}
console.log(contentArr);
