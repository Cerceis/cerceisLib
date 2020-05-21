# Cerceis Library for my own private use

## coreLib ***import {cerceisLib} from '<path>'***
* checkAlphanumeric(inputText) ***v0.0.3***
    * Check String if its Alphanumeric (No symbols)
    * inputText(String)
    * returns Boolean
* generateRandom(type,length,format) ***v.0.0.3***
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
            console.log(generateRandom("Format",0,NN-SS:NNNN))
            :=> "52-Dv:7895"
            ```
* removeArrayDuplicates(arr1, arr2) ***v0.0.2***
    * Remove duplicated elements and return array consist of only unique element
    * arr1(Array),arr2(Array)
    * returns Array
* generateMongoObjectId() ***v0.0.1***
    * Generate ObjectID
    * returns ObjectId
* shuffleArray(array) ***v0.0.1***
    * Shuffle all element in an array
    * array(Array)
    * returns Array
* stripHTML(stringHtml) ***v0.0.1***
    * Strip all html tags from String
    * stringHtml(String)
    * returns String

## ChangeLog
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
