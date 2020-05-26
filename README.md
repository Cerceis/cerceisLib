# Cerceis's Book Of Magic &#x1F4DA;
### The place you might find the spell you want.
#### This library provides various functions that you might find it useful during development
# セルセイスの魔導書 &#x1F4DA;
### 欲しかった呪文が見つかるかもしれません。
## INSTALLATION
```
npm install cerceislib --save
```
## 使い方・How to use
### 普通のHTML・Normal HTML script tag:
```
<script src="<pathTo>/cerceisLibrary.js"></script>
<script>
    cerceisLib.invokeMagic()
</script>
```
### Vue/React/Angular/etc:
```
import cerceisLib from "cerceislib";
cerceisLib.invokeMagic()
```
### NodeJS
```
const cerceisLib = require('cerceislib')
cerceisLib.invokeMagic()
```
## List of functions
#### #+[Number] to search (Windows:ctrl+F, Mac:cmd+F).
* String related
    * @1 Strip all html tags from String
    * @6 Check String if its Alphanumeric (No symbols)
    * @7 Get substring between 2 characters or string, if multiple result is available, choosing is possible.
* Array related
    * @2 Shuffle all element in an array
    * @4 Remove duplicated elements and return array consist of only unique element
    * @8 Extract specified property value from object or arrays of object
    * @9 Return array contains only unique field
* Generate
    * @3 Generate ObjectID from timestamp
    * @5 Generate Random String (Able to define format)
* Object related
    * @8 Extract specified property value from object or arrays of object
## 呪文一覧
#### #+[番号]を(Windows:ctrl+F, Mac:cmd+F)で探す。
* String関連
    * @1 StringのHTMLのタッグを全部外す
    * @6 StringがA-z,0-9だけ含んでいるかどうか
    * @7 Stringの中で指定した二つの点の間の内容だけ抽出
* Array
    * @2 配列の要素を全部ランダムに並び替える
    * @4 二つの配列の要素をそれぞれ比べて、重複していない要素だけ見つける
    * @8 Objectの配列・Objectから特定のプロパティを抽出
    * @9 配列の中のユニークな値を抽出
* 生成関連
    * @3 MongoDB用のObjectIdを生成する
    * @5 ランダムなIDを生成する（長さ・フォマット指定できる）
* Object関連
    * @8 Objectの配列・Objectから特定のプロパティを抽出

## coreLib : ***import {cerceisLib} from '(path)'***

* #9 &#x1F4D8;findUniqueInArray(inputArr) ***v.0.1.0***
    * Return array contains only unique field
    * inputArr(Array)

* #8 &#x1F4D8;extractFieldFromObject(inputObjectOrArray,targetFieldName) ***v.0.1.1***
    * Extract specified property value from object or arrays of object
    * inputObjectOrArray(Object)/(Array)
    * targetFieldName(String)/(Arary)
* #7 &#x1F4D8;getBetween2Char(inputString, strA, strB, indexOfResult) ***v.0.0.4***
    * Get substring between 2 characters or string, if multiple result is available, choosing is possible.
    * inputString(String)
    * strA(String)          : Starting char or string
    * strB(String)          : Ending char or string
    * indexOfResult(Number)*Optional' : Define which result to return (Start from 1)
* #6 &#x1F4D8;checkAlphanumeric(inputText) ***v0.0.3***
    * Check String if its Alphanumeric (No symbols)
    * inputText(String)
    * returns Boolean
* #5 &#x1F4D8;generateRandom(type,length,format) ***v.0.0.3***
    * Generate Random String (Able to define format
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
* #4 &#x1F4D8;removeDuplicatesFromArray(arr1, arr2) ***v0.0.2***
    * Remove duplicated elements and return array consist of only unique element
    * arr1(Array),arr2(Array)
    * returns Array
* #3 &#x1F4D8;generateMongoObjectId() ***v0.0.1***
    * Generate ObjectID from timestamp
    * returns ObjectId
* #2 &#x1F4D8;shuffleArray(array) ***v0.0.1***
    * Shuffle all element in an array
    * array(Array)
    * returns Array
* #1 &#x1F4D8;stripHTML(stringHtml) ***v0.0.1***
    * Strip all html tags from String
    * stringHtml(String)
    * returns String
* #0 &#x1F4D8;invokeMagic()
    * To test its working
    * ちゃんと動いていることを確認する

## ChangeLog
#### Version 0.1.1
* 2020/05/26
* extractFieldFromObject() now supports multiple field extract
#### Version 0.1.0
* 2020/05/26
* Added findUniqueInArray()
* Rewrited all functions to have better strict type check and error handling
#### Version 0.0.5
* 2020/05/21
* Added extractFieldFromObject()
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
