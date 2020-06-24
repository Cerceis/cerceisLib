"use strict";
((exports)=>{
const isDefined = x => x !== undefined && x !== null;
const isUndefined = x => x === undefined;
const isArray = Array.isArray;
const isString = x => (typeof x === 'string' || x instanceof String);
const isObject = x => Object.prototype.toString.call(x) === "[object Object]";
const isNumber = x => Object.prototype.toString.call(x) === "[object Number]";
const isBoolean = x => Object.prototype.toString.call(x) === "[object Boolean]";
exports.invokeMagic = ()=>{
    let t = "color:#66FFFF;font-weight:bold;"
    let r = "color:#FF0033;font-weight:bold;"
    let p = "color:#FF99CC;font-weight:bold;"
    let g = "color:#00FF66;font-weight:bold;";
    let b = "color:#0066FF;font-weight:bold;";
    const magic = `
    Cerceis's book of magic 
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
}
exports.isArrayElement = (x,type) =>{ //Awaiting Documentation
    if(!exports.isAllArrayElementSameType(x))
        return console.log('%cInput Error : Elements in array has multiple type','color:#FF0033;')
    if(type === "String")
        return isString(x[0])
    if(type === "Number")
        return isNumber(x[0])
    if(type === "Array")
        return isArray(x[0])
    if(type === "Object")
        return isObject(x[0])
    if(type === "Boolean")
        return isBoolean(x[0])
}
exports.stripHTML = (stringHtml)=>{
    if(
        isString(stringHtml)
    ){
        let temElement = document.createElement("div");
        temElement.innerHTML = stringHtml
        return temElement.textContent || temElement.innerText || "";
    }else{
        console.log('%cType Error : stripHTML(<String>)','color:#00FF66;')
    }
}
exports.generateMongoObjectId = ()=>{
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, ()=>{
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
}
exports.addPrefix = (input,value,options)=>{//Awaiting Documentation
    if(
        (isString(input) || ((isArray(input)) && exports.isArrayElement(input,"String") )) &&
        isString(value) &&
        (isObject(options) || isUndefined(options) )
    ){
        let result = []
        if(isString(input)){
            
            result = value + input
        }else{
            input.forEach((e,i) => {
                result[i] = value + input[i]
            });
        }
        if(isDefined(options)){
            if(isNumber(options['fixTo'])){
                if(isString(result)){
                    if(options['fixTo']>=result.length){
                        let difference = options['fixTo'] - result.length
                        for(let i = 0 ; i<=difference-1; i++)
                            result = value + result
                        return result
                    }
                }else{
                    result.forEach((e,i) => {
                        if(options['fixTo']>=result[i].length){
                            let difference = options['fixTo'] - result[i].length
                            for(let j = 0 ; j<=difference-1; j++)
                                result[i] = value + result[i]
                            return result
                        }
                    });
                }
            }
        }
        return result
    }else{
        console.log('%cType Error : addPrefix(<String>/<ArraysOfstring>,<String>,<Object><optional>)','color:#00FF66;')
    }
}
exports.addSuffix = (input,value,options)=>{ //Awaiting Documentation
    if(
        (isString(input) || ((isArray(input)) && exports.isArrayElement(input,"String") )) &&
        isString(value) &&
        (isObject(options) || isUndefined(options) )
    ){
        let result = []
        if(isString(input)){
            
            result = input + value
        }else{
            input.forEach((e,i) => {
                result[i] =  input[i] + value
            });
        }
        if(isDefined(options)){
            if(isNumber(options['fixTo'])){
                if(isString(result)){
                    if(options['fixTo']>=result.length){
                        let difference = options['fixTo'] - result.length
                        for(let i = 0 ; i<=difference-1; i++)
                            result = result + value
                        return result
                    }
                }else{
                    result.forEach((e,i) => {
                        if(options['fixTo']>=result[i].length){
                            let difference = options['fixTo'] - result[i].length
                            for(let j = 0 ; j<=difference-1; j++)
                                result[i] = result[i] + value
                            return result
                        }
                    });
                }
            }
        }
        return result
    }else{
        console.log('%cType Error : addPrefix(<String>/<ArraysOfstring>,<String>,<Object><optional>)','color:#00FF66;')
    }
}
exports.shuffleArray = (array)=>{
    if(
        isArray(array)
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
}
exports.extractField = (inputObjectOrArray,targetFieldName)=>{
    if(isString(targetFieldName)){
        if(isObject(inputObjectOrArray)){
            let result = {};
            return result[targetFieldName] = inputObjectOrArray[targetFieldName];
        }else if(isArray(inputObjectOrArray)){
            let result = [];
            for(let i in inputObjectOrArray)
                result.push(inputObjectOrArray[i][targetFieldName]);
            return result;
        }
    }else if(isArray(targetFieldName)){
        if(isObject(inputObjectOrArray)){
            let result = {};
            targetFieldName.forEach(element => {
                result[element] = inputObjectOrArray[element]
            });
            return result;
        }else if(isArray(inputObjectOrArray)){
            let result = [];
            for(let i in inputObjectOrArray){
                let tmpObj = {};
                targetFieldName.forEach(element => {
                    tmpObj[element] = inputObjectOrArray[i][element]
                });
                result.push(tmpObj);
            }
            return result;
        }
    }else
    console.log('%cType Error : extractField(<Array/Object>,<Array/String>)','color:#00FF66;')
}
exports.o2a = (inputObj)=>{//Awaiting Documentation
    if(
        isObject(inputObj) 
    ){
        return Object.keys(inputObj).map((key)=>{ return [String(key), inputObj[key]] });
    }else{
        console.log('%cType Error : o2a(<Object>)','color:#00FF66;')
    }
}
exports.a2o = (arr)=>{//Awaiting Documentation
    if(
        isArray(arr) 
    ){
        let result = []
        arr.forEach(e=>{
            let tmpObj = {}
            e.forEach(e2 => tmpObj[e2[0]] = e2[1] )
            result.push(tmpObj)
        })
        return result
    }else{
        console.log('%cType Error : a2o(<Array>)','color:#00FF66;')
    }
}
exports.returnNonDuplicated = (inputArr,order)=>{ //Awaiting upgrade document
    if(
        (isNumber(order) || isUndefined(order)) &&
        isArray(inputArr)
    ){
        if(
            exports.isAllArrayElementSameType(inputArr)&&
            isObject(inputArr[0])&&
            exports.isObjectLenSame(inputArr)
        ){
            let storedProperty, tmp, eachObjectLen;
            let storedPropertyType = []
            ///Check all object has same length
            //Sort Object key if defined
            if(order === -1){
                storedProperty = Object.keys(inputArr[0]).sort().reverse()
                tmp = exports.sortObject(inputArr,-1)
            }else{
                storedProperty = Object.keys(inputArr[0]).sort()
                tmp = exports.sortObject(inputArr)
            }
            storedProperty.forEach(e => {
                storedPropertyType.push([e, typeof inputArr[0][e]])
            });
            eachObjectLen = storedProperty.length
            //Convert Object into Array
            let y = tmp.map(x => exports.o2a(x))
            //Sort object field before start flattening it
            y = y.flat(Infinity)
            for(let i = 0 ; i<storedProperty.length ; i++)
                y = exports.removeElementContain(y,storedProperty[i],true)
            //Form array pairs
            y = y.reduce((result, value, index,array)=>{
                let tmp;
                if (index % eachObjectLen === 0){
                    tmp = array.slice(index, index + eachObjectLen)
                    result.push(exports.sumAllArrayElement(tmp))
                }
                return result;
            }, []);
            //Filtering starts here
            y = exports.returnNonDuplicated(y)
            //Reconstruct array back to object
            let result = []
            y.forEach(e=>{
                let tmpResult = {}
                let tmp = e.split(" ")
                storedPropertyType.forEach((e,i) => {
                    switch(e[1]){
                        case "number":
                            tmpResult[e[0]] =  Number(tmp[i])
                            break
                        case "string":
                            tmpResult[e[0]] =  String(tmp[i])
                            break
                        default:
                            tmpResult[e[0]] =  tmp[i] 
                    }
                })
                result.push(tmpResult)
            })
            return result
        }else{
            let extractedData = Array.from(new Set(inputArr.filter(e => exports.countInArray(inputArr,e) !== 1 ? false : true )));
            return extractedData
        }
    }else{
        console.log('%cType Error : returnNonDuplicated(<Array>,<Number><optional>)','color:#00FF66;')
    }
}
exports.returnUniques = (input,order)=>{//Awaiting Documentation
    if(
        (isNumber(order) || isUndefined(order)) &&
        isArray(input)
    ){
        if(
            exports.isAllArrayElementSameType(input)&&
            isObject(input[0])&&
            exports.isObjectLenSame(input)
        ){
            let storedProperty, tmp, eachObjectLen;
            let storedPropertyType = []
            ///Check all object has same length
            //Sort Object key if defined
            if(order === -1){
                storedProperty = Object.keys(input[0]).sort().reverse()
                tmp = exports.sortObject(input,-1)
            }else{
                storedProperty = Object.keys(input[0]).sort()
                tmp = exports.sortObject(input)
            }
            storedProperty.forEach(e => {
                storedPropertyType.push([e, typeof input[0][e]])
            });
            eachObjectLen = storedProperty.length
            //Convert Object into Array
            let y = tmp.map(x => exports.o2a(x))
            //Sort object field before start flattening it
            y = y.flat(Infinity)
            for(let i = 0 ; i<storedProperty.length ; i++)
                y = exports.removeElementContain(y,storedProperty[i],true)
            //Form array pairs
            y = y.reduce((result, value, index,array)=>{
                let tmp;
                if (index % eachObjectLen === 0){
                    tmp = array.slice(index, index + eachObjectLen)
                    result.push(exports.sumAllArrayElement(tmp))
                }
                return result;
            }, []);
            //Filtering starts here
            y = exports.returnUniques(y)
            //Reconstruct array back to object
            let result = []
            y.forEach(e=>{
                let tmpResult = {}
                let tmp = e.split(" ")
                storedPropertyType.forEach((e,i) => {
                    switch(e[1]){
                        case "number":
                            tmpResult[e[0]] =  Number(tmp[i])
                            break
                        case "string":
                            tmpResult[e[0]] =  String(tmp[i])
                            break
                        default:
                            tmpResult[e[0]] =  tmp[i] 
                    }
                })
                result.push(tmpResult)
            })
            return result
        }else
            return Array.from(new Set(input))
    }else{
        console.log('%cType Error : returnUniques(<Array>,<Number><optional)','color:#00FF66;')
    }
}
exports.generateRandom = (type,length,format)=>{
    if(
       isString(type) &&
       isNumber(length) &&
       (isString(format) || isUndefined(format) )
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
                        if(!exports.checkIfAlphanumeric(format[i])){
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
}
exports.checkIfAlphanumeric = (inputText)=>{
    if(isString(inputText)){
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        if(inputText.match(alphanumeric)){
            return true;
        }else{ 
            return false; 
        }
    }else{
        console.log("%cType Error : checkIfAlphanumeric(<String>)","color:#00FF66;")
    }
}
exports.getContentBetween2Char = (inputString,strA,strB,indexOfResult)=>{
    if(
       isString(inputString) &&
       isString(strA) &&
       isString(strB) &&
       (isNumber(indexOfResult) || isUndefined(indexOfResult))
    ){
        if(indexOfResult === 0) return "Please enter Integer > 0"
        let splitString = inputString.split(strA)[indexOfResult]
        if(!splitString) return "Please enter integer <= "+ ((inputString.split(strA).length)-1)
        return splitString.substring(0,splitString.indexOf(strB))
    }else{
        console.log('%cType Error : getContentBetween2Char(<String>,<String>,<String>,<Number>)','color:#00FF66;')
    }
}
exports.visualizeDOM = ()=>{
    const div = document.getElementsByTagName("div")
    for(let i = 0 ; i<div.length ; i++){
        div[i].style.background = "#D6EAF8"
        for(let j = 0 ; j<div[i].children.length ; j++){
            div[i].children[j].style.background = "#E8DAEF"
            for(let k = 0 ; k<div[i].children[j].children.length ; k++){
                div[i].children[j].children[k].style.background = "#D5F5E3"
                for(let l = 0 ; l<div[i].children[j].children[k].children.length ; l++){
                    div[i].children[j].children[k].children[l].style.background = "#FCF3CF"
                    for(let m = 0 ; m<div[i].children[j].children[k].children[l].children.length ; m++){
                        div[i].children[j].children[k].children[l].children[m].style.background = "#EDBB99"
                    }
                }
            }
        }
    }
}
exports.getRandomFromArray = (arr,noOfResult)=>{
    if(
        isArray(arr) &&
        (isNumber(noOfResult) || isUndefined(noOfResult) )
    ){
        let result = []
        for(let i = 0 ; i<noOfResult ; i++)
            result.push(arr[Math.floor(Math.random() * arr.length)]);
        return result
    }else{
        console.log('%cType Error : getRandomFromArray(<Array>,<Number><optional>)','color:#00FF66;')
    }
}
exports.sumAllArrayElement = (arr)=>{
    if(
        isArray(arr)
    ){
        return arr.reduce((f,l)=>{
            if(exports.isAllArrayElementSameType(arr) && isNumber(f) ){
                return f + l 
            }else{
                return f +" "+ l 
            }
        })
    }else{
        console.log('%cType Error : sumAllArrayElement(<Array>)','color:#00FF66;')
    }
}
exports.getOddEvenArrayElement = (arr, evenOrOdd)=>{ //Awaiting Documentation
    if(
        isArray(arr) &&
        isNumber(evenOrOdd)
    ){
        if(evenOrOdd === 1)
            return arr.filter((v,i)=>{ return (i%2);}); 
        if(evenOrOdd === 2){
            return arr.filter((v,i)=>{ return !(i%2);}); 
        }
    }else{
        console.log('%cType Error : getEvenOddArrayElement(<Array>,<Number>)','color:#00FF66;')
    }
}
exports.isAllArrayElementSameType = (arr)=>{//Awaiting Documentation
    if(
        isArray(arr) 
    ){
        return new Set( arr.map( x => Object.prototype.toString.call(x) ) ).size <= 1;
    }else{
        console.log('%cType Error : isAllArrayElementSameType(<Array>)','color:#00FF66;')
    }
}
exports.removeElementContain = (arr,value,forceMode)=>{//Awaiting Documentation
    if(
        isArray(arr) &&
        isDefined(value) &&
        (exports.isAllArrayElementSameType(arr) ||
        isDefined(forceMode))
    ){
        if(isObject(arr[0])){
            if(isObject(value)){               
                return (arr.filter((v)=>{ return(!( v[Object.getOwnPropertyNames(value)[0]] == value[Object.getOwnPropertyNames(value)[0]])) }))
            }else{
                return console.log('%cType Error : <value> needs to be object {propertyName:value}','color:#00FF66;')
            }
        }
        if(!isObject(arr[0] && !isObject(value)))
            return arr.filter((v,i)=>{ return !(v === value);}); 
    }else{
        console.log('%cType Error : removeElementContain(<Array>,<Any>,<Boolean><optional>) %c*All array element must have same type','color:#00FF66;','color:#FF0033;')
    }
}
exports.isObjectLenSame = (input)=>{//Awaiting Documentation
    if(
        isArray(input) &&
        exports.isArrayElement(input,"Object")
    ){
        let alpha = Object.keys(input[0]).length
        let result = false
        for(let i = 0 ; i<input.length ; i++ ){
            if((Object.keys(input[i]).length) !== alpha)
                result = false
            else
                result =  true
        }
        return result
    }else{
        console.log('%cType Error : isObjectLenSame(<Array>)','color:#00FF66;')
    }
}
exports.sortObject = (input,order)=>{//Awaiting Documentation
    if(
        (isNumber(order) || isUndefined(order)) &&
        isObject(input) || 
        (isArray(input) && exports.isArrayElement(input,"Object"))
        
    ){
        if(isObject(input)){ //If single obj
                let orderedObj = {}
                if(order === -1){
                    Object.keys(input).sort().reverse().forEach((key)=> (orderedObj[key] = input[key]) );
                }
                else{
                    Object.keys(input).sort().forEach((key)=> (orderedObj[key] = input[key]) );
                }
                return orderedObj
               
        }else{  //If array of obj
            if(order === -1){
                return input.map(x => {
                    let orderedObj = {}
                    Object.keys(input[0]).sort().reverse().forEach((key)=>orderedObj[key] = x[key]);
                    return orderedObj
                })
            }
            else{
                return input.map(x => {
                    let orderedObj = {}
                    Object.keys(input[0]).sort().forEach((key)=>orderedObj[key] = x[key]);
                    return orderedObj
                })
            }
        }
    }else{
        console.log('%cType Error : sortObject(<Object>/<ArrayOfObject>,<Number><optional>)','color:#00FF66;')
    }
}
exports.generateArray = (eleType,len)=>{//Awaiting Documentation
    if(
        isString(eleType) &&
        isNumber(len) 
    ){
        let result = []
        let randomNumber = 0
        let randomString = ""
        let tmpObj = {}
        switch(eleType){
            case "Array":
                for(let i = 0 ; i<len ; i++){
                    randomNumber = Math.floor(Math.random() * 1000)
                    result.push([randomNumber])
                }  
                return result
            case "Object":
                let propertyName1 = exports.generateRandom("String",Math.floor(Math.random() * 5)+1)
                let propertyName2 = exports.generateRandom("String",Math.floor(Math.random() * 5)+1)
                for(let i = 0 ; i<len ; i++){
                    for(let j = 0 ; j<2 ; j++){
                        tmpObj[propertyName1] = Math.floor(Math.random() * 1000)
                        tmpObj[propertyName2] = Math.floor(Math.random() * 1000)
                    }
                    result.push(tmpObj)
                    tmpObj = {} 
                }  
                return result
            case "String":
                for(let i = 0 ; i<len ; i++){
                    randomString = exports.generateRandom("String",Math.floor(Math.random() *6)+3)
                    result.push(randomString)
                }  
                return result
            case "Number":
                for(let i = 0 ; i<len ; i++){
                    randomNumber = Math.floor(Math.random() * 10000)
                    result.push(randomNumber)
                }  
                return result
            case "Boolean":
                let choice = [true,false]
                for(let i = 0 ; i<len ; i++){
                    randomNumber = Math.floor(Math.random() * 2)
                    result.push(choice[randomNumber])
                }  
                return result
            default:
                console.log("Error")
        }

    }else{
        console.log('%cType Error : generateArray(<String>,<Number>)','color:#00FF66;')
    }
}
exports.isObjectSame = (obj1,obj2)=>{//Awaiting Documentation
    if(
        isObject(obj1) &&
        isObject(obj2) 
    ){
        let a = exports.o2a(obj1).flat().sort()
        let b = exports.o2a(obj2).flat().sort()
        let trigger = false
        if(a.length !== b.length) //Check len, if different, no point to move foward
            return false
        for(let i = 0 ; i<a.length ; i++){
            if(a[i] !== b[i]){
                trigger = true
                break
            }
        }
        if(trigger === true) return false
        else return true
    }else{
        console.log('%cType Error : isObjectSame(<Object>,<Object>)','color:#00FF66;')
    }
}
exports.simpleEncode = (data,key)=>{//Awaiting Documentation
    if(
        isString(data) &&
        isString(key) 
    ){
        let keyValue = 0
        let result = ""
        for(let i = 0 ; i<key.length ; i++){  
            keyValue += key.charCodeAt(i)
        }
        keyValue = String(keyValue).split("").reverse().join("")
        keyValue = "l"+keyValue+"l"
        for(let i = 0 ; i<data.length ; i++){  
            result += data.charCodeAt(i)+keyValue
        }
        return result
    }else{
        console.log('%cType Error : encode(<String>,<String>)','color:#00FF66;')
    }
}
exports.simpleDecode = (data,key)=>{//Awaiting Documentation
        if(
            isString(data) &&
            isString(key) 
        ){
            let keyValue = 0
            for(let i = 0 ; i<key.length ; i++){  
                keyValue += key.charCodeAt(i)
            }
            keyValue = String(keyValue).split("").reverse().join("")
            keyValue = "l"+keyValue+"l"
            let unlockedData = data.split(keyValue)
            let filtered = unlockedData.filter((el)=> (el !== null) && (el !== "") && (el !== undefined) );
            let result = ""
            filtered.forEach(e => result += String.fromCharCode(Number(e)) )
            return result
        }else{
            console.log('%cType Error : decode(<String>,<String>)','color:#00FF66;')
        }
}
exports.countInArray = (array,value)=>{//Awaiting Documentation
    if(
        isArray(array) &&
        isDefined(value) 
    ){
        return array.reduce((a,b) => a + (b === value), 0);
    }else{
        console.log('%cType Error : countInArray(<Array>,<value>)','color:#00FF66;')
    }
}
// [rearrangeObjectProperty]
})(typeof exports === 'undefined'? this['cerceisLib']={}: exports);



