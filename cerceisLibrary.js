/* 
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┒
                            Version 0.0.3s
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┚
*/

const coreLib = {
    //#1 (String)
    stripHTML(stringHtml){
        let temElement = document.createElement("div");
        temElement.innerHTML = stringHtml

        return temElement.textContent || temElement.innerText || "";
    },
    //#2 (Array)
    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
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
    },
    //#3 ()
    generateMongoObjectId(){
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    },
    //#4 (Array,Array)
    removeArrayDuplicates(arr1, arr2) {
        return [...new Set(arr1.concat(arr2).filter(e => ! (arr2.includes(e) && arr1.includes(e))))];
    },
    //#5 (String,Number,String)
    generateRandom(type,length,format) {
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
                    for(let i in format){
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
                    return "Please enter a format (type,length,format)"
                }
            default:
                return 'Please enter either "Number" or "String" or "Number+String" or "Format"'
        }
    },
    //#6 (String)
    checkAlphanumeric(inputText){
        let alphanumeric = /^[0-9a-zA-Z]+$/;
        if(inputText.match(alphanumeric)){
            return true;
        }else{ 
            return false; 
        }
    },
    TodoList(){
        
    }
}
/*
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