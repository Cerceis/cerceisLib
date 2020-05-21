# Cerceis's Book Of Magic &#x1F4DA;
### The place you might find the spell you want.
# セルセイスの魔導書 &#x1F4DA;
### 欲しかった呪文が見つかるかもしれません。
#### @+[番号]を(Windows:ctrl+F, Mac:cmd+F)で探す。
* @1 StringのHTMLのタッグを全部外す
## coreLib : ***import {cerceisLib} from '(path)'***
* &#x1F4D8;getBetween2Char(inputString, strA, strB, indexOfResult) ***v.0.0.4***
    * Get substring between 2 characters or string, if multiple result is available, choosing is possible.
    * inputString(String)
    * strA(String)          : Starting char or string
    * strB(String)          : Ending char or string
    * indexOfResult(Number) : Define which result to return (Start from 1)
* &#x1F4D8;checkAlphanumeric(inputText) ***v0.0.3***
    * Check String if its Alphanumeric (No symbols)
    * inputText(String)
    * returns Boolean
* &#x1F4D8;generateRandom(type,length,format) ***v.0.0.3***
    * Generate Random String
    * type(String)
        * "Number"        : Generate random Number
        * "String"        : Generate random Alphabet
        * "Number+String" : Generate random Number+Alphabet
        * "Format"        : Generate random type defined by user (see *format)
    * length(Number)
        * Define the length of the result 
        * Ignored in type "Format"
    * format(String)
        * Define Generated format
        * N = Number, S = String
        * Example
            ```
            console.log( generateRandom("Format", 0, NN-SS:NNNN) )
            :=> "52-Dv:7895"
            ```
* &#x1F4D8;removeArrayDuplicates(arr1, arr2) ***v0.0.2***
    * Remove duplicated elements and return array consist of only unique element
    * arr1(Array),arr2(Array)
    * returns Array
* &#x1F4D8;generateMongoObjectId() ***v0.0.1***
    * Generate ObjectID
    * returns ObjectId
* &#x1F4D8;shuffleArray(array) ***v0.0.1***
    * Shuffle all element in an array
    * array(Array)
    * returns Array
* @1 &#x1F4D8;stripHTML(stringHtml) ***v0.0.1***
    * Strip all html tags from String
    * stringHtml(String)
    * returns String

## ChangeLog
#### Version 0.0.4
* 2020/05/21
* Added getBetween2Char()
#### Version 0.0.3
* 2020/05/21
* Added generateRandom()
* Added checkAlphanumeric()
#### Version 0.0.2
* 2020/05/21
* Added namespace exports
#### Version 0.0.1
* 2020/05/21
* Added core functions
