const coreLib = {
    invokeMagic(){
        let t = "color:#66FFFF;font-weight:bold;"
        let r = "color:#FF0033;font-weight:bold;"
        let p = "color:#FF99CC;font-weight:bold;"
        let g = "color:#00FF66;font-weight:bold;";
        let b = "color:#0066FF;font-weight:bold;";
        const magic = `
        Version 0.0.5
        %c███╗   ███╗%c █████╗ %c ██████╗ %c██╗%c ██████╗
        %c████╗ ████║%c██╔══██╗%c██╔════╝ %c██║%c██╔════╝
        %c██╔████╔██║%c███████║%c██║  ███╗%c██║%c██║     
        %c██║╚██╔╝██║%c██╔══██║%c██║   ██║%c██║%c██║     
        %c██║ ╚═╝ ██║%c██║  ██║%c╚██████╔╝%c██║%c╚██████╗
        %c╚═╝     ╚═╝%c╚═╝  ╚═╝%c ╚═════╝ %c╚═╝%c ╚═════╝
        ┎┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┒
                     Invoke Success
        ┖┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┚
        %cセルセイスの
        %c        #      %c         #   #    %c        #         
        %c###############%c  ## ############ %c  ############   
        %c#    #     #   %c   ##     #       %c       #     #   
        %c# ###### ######%c    #  ########   %c################ 
        %c#   ##     ##  %c       #      #   %c       #     #   
        %c#  # ##   ## # %c ####  ########   %c  ############   
        %c# #  #  #  #  #%c    #  #      #   %c       #         
        %c#  ##########  %c    #  ########   %c  ############   
        %c#  #   #    #  %c    #  #      #   %c       #         
        %c#  ##########  %c   ##  ########   %c################ 
        %c#  #   #    #  %c  ## #            %c                 
        %c#  ##########  %c ##   ########### %c  ############   
        %c##    #  #  # #%c              #   %c  #          #   
        %c#    ##  #  ###%c  ################%c  ############   
        %c#   ##   ##    %c#     #       #   %c  #          #   
        %c###     ###### %c     #    ###     %c  ############   
        ┎┈┈┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┈┈┒
                            詠唱成功  
        ┖┈┈┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┈┈┚                               
        `;
        return console.log(magic, t,r,p,g,b,
                                  t,r,p,g,b,
                                  t,r,p,g,b,
                                  t,r,p,g,b,
                                  t,r,p,g,b,
                                  t,r,p,g,b,
                                  t,
                                  r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g,r,p,g
                                  ,r,p,g,r,p,g,r,p,g
                                  );
    },
    stripHTML(stringHtml){
        if(
            Object.prototype.toString.call(stringHtml) === "[object String]" 
        ){
            let temElement = document.createElement("div");
            temElement.innerHTML = stringHtml
            return temElement.textContent || temElement.innerText || "";
        }else{
            console.log('%cType Error : stripHTML(<String>)','color:#00FF66;')
        }
    },
    shuffleArray(array){
        if(
            Object.prototype.toString.call(array) === "[object Array]" 
        ){
            let currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }else{
            console.log('%cType Error : shuffleArray(<Array>)','color:#00FF66;')
        }
    },
    generateMongoObjectId(){
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    },
    removeDuplicatesFromArray(arr1,arr2){
        if(
            Object.prototype.toString.call(arr1) === "[object Array]" &&
            Object.prototype.toString.call(arr2) === "[object Array]" 
        ){
            return Array.from(new Set(arr1.concat(arr2).filter(e => ! (arr2.includes(e) && arr1.includes(e)))));
        }else{
            console.log('%cType Error : removeDuplicatesFromArray(<Array>,<Array>)','color:#00FF66;')
        }
    },
    generateRandom(type,length,format) {
        if(
            Object.prototype.toString.call(type) === "[object String]" &&
            Object.prototype.toString.call(length) === "[object Number]" &&
            (Object.prototype.toString.call(format) === "[object String]" || Object.prototype.toString.call(format) === "[object Undefined]" )
        ){
        let result = '';
        let chars = '';
        let charLen = 0;
            switch(type){
                case "Number+String":
                    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                    charLen = chars.length;
                    for ( let  i = 0; i < length; i++ ) {
                        result += chars.charAt(Math.floor(Math.random() * charLen));
                    }
                    return result;    
                case "Number":
                    chars       = '0123456789';
                    charLen = chars.length;
                    for ( let  i = 0; i < length; i++ ) {
                        result += chars.charAt(Math.floor(Math.random() * charLen));
                    }
                    return result;
                case "String":
                    chars       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    charLen = chars.length;
                    for ( let  i = 0; i < length; i++ ) {
                    result += chars.charAt(Math.floor(Math.random() * charLen));
                    }
                    return result;
                case "Format":
                    if(format){
                        let StringChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                        let StringCharsLen = StringChars.length;
                        let NumChars = '0123456789';
                        let NumCharsLen = NumChars.length;
                        for(let i = 0 ;i<format.length; i++){
                            if(!this.checkAlphanumeric(format[i])){
                                result += format[i];
                            }else if(format[i]==="N"){
                                result += NumChars.charAt(Math.floor(Math.random() * NumCharsLen));
                            }else if(format[i]==="S"){
                                result += StringChars.charAt(Math.floor(Math.random() * StringCharsLen));
                            }
                        }
                        return result;
                    }else{
                        console.log("%cPlease enter a format (type,length,format)","color:#00FF66;")
                        break;
                    }
                default:
                    console.log('%cPlease enter either "Number" or "String" or "Number+String" or "Format"',"color:#00FF66;")
            }
        }else{
            console.log("%cType Error : generateRandom(<String>,<Number>,<String>)","color:#00FF66;")
        }
    },
    //#6 (String)
    checkAlphanumeric(inputText){
        if(Object.prototype.toString.call(inputText) === "[object String]"){
            let alphanumeric = /^[0-9a-zA-Z]+$/;
            if(inputText.match(alphanumeric)){
                return true;
            }else{ 
                return false; 
            }
        }else{
            console.log("%cType Error : checkAlphanumeric(<String>)","color:#00FF66;")
        }
    },
    getBetween2Char(inputString,strA,strB,indexOfResult){
        if(
            Object.prototype.toString.call(inputString) === "[object String]" &&
            Object.prototype.toString.call(strA) === "[object String]" &&
            Object.prototype.toString.call(strB) === "[object String]" &&
            (Object.prototype.toString.call(indexOfResult) === "[object Number]")
        ){
            if(indexOfResult === 0) return "Please enter Integer > 0"
            let splitString = inputString.split(strA)[indexOfResult]
            if(!splitString) return "Please enter integer <= "+ ((inputString.split(strA).length)-1)
            return splitString.substring(0,splitString.indexOf(strB))
        }else{
            console.log('%cType Error : getBetween2Char(<String>,<String>,<String>,<Number>)','color:#00FF66;')
        }
    },
    extractFieldFromObject(inputObjectOrArray,targetFieldName){
        if(Object.prototype.toString.call(targetFieldName) === "[object String]"){
            if(Object.prototype.toString.call(inputObjectOrArray) === "[object Object]"){
                let result = {};
                return result[targetFieldName] = inputObjectOrArray[targetFieldName];
            }else if(Object.prototype.toString.call(inputObjectOrArray) === "[object Array]"){
                let result = [];
                for(let i in inputObjectOrArray)
                    result.push(inputObjectOrArray[i][targetFieldName]);
                return result;
            }
        }else
        console.log('%cType Error : extractFieldFromObject(<Array/Object>,<String>)','color:#00FF66;')
    }
}
/*
                const resultList = {
                    input: unpurifiedList,
                    remove(target) {
                        this.input = purify(this.input,target);
                        return this;
                    },
                    extract(){
                        this.input = extractID(this.input);
                        return this;
                    },
                    convert(){
                        this.input.map(function(myId) { return mongodb.ObjectId(myId);})
                        return this;
                    }
                 }
class Todos {
    constructor() {
        this.todos = [];
    }
    list() {
        return [...this.todos];
    }
    add(title) {
        let todo = {
            title: title,
            completed: false,
        }

        this.todos.push(todo);
    }
    complete(title) {
        let todoFound = false;
        this.todos.forEach((todo) => {
            if (todo.title === title) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });
        if (!todoFound) {
            throw new Error(`No TODO was found with the title: "${title}"`);
        }
    }
}

export {Todos};
*/
export const cerceisLib = coreLib;
