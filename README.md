# Cerceis Library for my own private use

## CoreFunctions
* generateRandom(type,length,format)
    * type(String)
        * "Number"        : Generate random Number
        * "String"        : Generate random String
        * "Number+String" : Generate random Number+String
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
