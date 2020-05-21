/* Version 0.0.1
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┒
    #1 Strip all HTML from string
    #2 Shuffle all elements in array
    #3 Generate mongoDB's ObjectID
    #4 Remove duplicated elements and return array consist of only unique element
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨❈୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┚
*/

const cerceisLib = {
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
    }
}

export default cerceisLib;