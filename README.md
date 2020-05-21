# Cerceis's Book Of Magic &#x1F4DA;
### The place you might find the spell you want.
# セルセイスの魔導書 &#x1F4DA;
### 欲しかった呪文が見つかるかもしれません。
#### @+[番号]を(Windows:ctrl+F, Mac:cmd+F)で探す。
* @1 StringのHTMLのタッグを全部外す
* @2 配列の要素を全部ランダムに並び替える
* @3 MongoDB用のObjectIdを生成する
* @4 二つの配列の要素をそれぞれ比べて、重複していない要素だけ見つける
* @5 ランダムなIDを生成する（長さ・フォマット指定できる）
* @6 StringがA-z,0-9だけ含んでいるかどうか
* @7 Stringの中で指定した二つの点の間の内容だけ抽出
## coreLib : ***import {cerceisLib} from '(path)'***
* @7 &#x1F4D8;getBetween2Char(inputString, strA, strB, indexOfResult) ***v.0.0.4***
    * Get substring between 2 characters or string, if multiple result is available, choosing is possible.
    * inputString(String)
    * strA(String)          : Starting char or string
    * strB(String)          : Ending char or string
    * indexOfResult(Number) : Define which result to return (Start from 1)
* @6 &#x1F4D8;checkAlphanumeric(inputText) ***v0.0.3***
    * Check String if its Alphanumeric (No symbols)
    * inputText(String)
    * returns Boolean
* @5 &#x1F4D8;generateRandom(type,length,format) ***v.0.0.3***
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
* @4 &#x1F4D8;removeArrayDuplicates(arr1, arr2) ***v0.0.2***
    * Remove duplicated elements and return array consist of only unique element
    * arr1(Array),arr2(Array)
    * returns Array
* @3 &#x1F4D8;generateMongoObjectId() ***v0.0.1***
    * Generate ObjectID from timestamp
    * returns ObjectId
* @2 &#x1F4D8;shuffleArray(array) ***v0.0.1***
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
