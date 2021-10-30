'use strict';
let numberData = require('../public/english.json');
//let numberJ =JSON.parse(numberData);
//console.log(numberJ) 
class NumberReader{
    num="0";
          readUnits( d){
           switch(d){
               case '0' :{if(this.isZeros(this.num)){  console.log("all zeros "+this.num); return "Zero";}  else return "";}
               case '1' :return "ONE ";
               case '2' :return "TWO ";
               case '3' :return "THREE ";
               case '4' :return "FOUR ";
               case '5' :return "FIVE ";
               case '6' :return "SIX ";
               case '7':return "SEVEN ";
               case '8' :return "EIGHT ";
               case '9' :return "NINE ";
           }
           return "";
       }
   
   
          isZeros(num) {
           for(var i =0; i<num.length;i++) {
               if(num.charAt(i)!='0') {
                   return false;
               }
           }
           return  true;
       }
          readTens(d){
           switch(d){
   
               case '2' :return "TWENTY ";
               case '3' :return "THIRTY ";
               case '4' :return "FORTY ";
               case'5' :return "FIFTY ";
               case '6':return "SIXTY ";
               case '7' :return "SEVENTY ";
               case '8' :return "EIGHTY ";
               case'9' :return "NINETY ";
           }
           return "";
       }
   
            readTeens( num){
           switch(num){
               case "10" :return "TEN ";
               case "11" :return "ELEVEN ";
               case "12" :return "TWELVEN ";
               case "13" :return "THIRTEEN ";
               case "14" :return "FOURTEEN ";
               case "15" :return "FIFTEEN ";
               case "16" :return "SIXTEEN ";
               case "17" :return "SEVENTEEN ";
               case "18" :return "EIGHTEEN ";
               case "19" :return "NINETEEN ";
           }
           return "";
       }
   
            numberHeader(  l){
           switch(l){
               case 2 :return "Hundred";
   
               case 3 :
               case 4 :
               case 5 :return "Thousand";
   
               case 6 :
               case 7:
               case 8:
                   return "Million";
               case 9 :
               case 10 :
               case 11:return "Billion";
               case 12:
               case 13 :
               case 14 :return "Trillion";
               case 15:
               case 16 :
               case 17 :return "Quadrillion";
               case 18:
               case 19 :
               case 20 :return "Quintillion";
               case 21:
               case 22 :
               case 23 :return "Sextillion";
               case 24:
               case 25 :
               case 26 :return "Septillion";
               case 27:
               case 28 :
               case 29 :return "Octillion";
               case 30:
               case 31 :
               case 32 :return "Nonillion";
              case 33:
               case 34 :
               case 35 :return "Decillion";
   
               case 36:
               case 37 :
               case 38 :return "Undecillion";
   
               case 39:
               case 40 :
               case 41 :return "Duodecillion";
   
               case 42:
              case 43 :
                 case 44 :return "Tredecillion";
   
               case 45:
               case 46 :
               case 47 :return "Quattuordecillion";
   
               case 48:
               case 49 :
               case 50 :return "Quindecillion";
   
               case 51:
                case 52 :
               case 53 :return "Sexdecillion";
   
               case 54:
              case 55 :
               case 56 :return "Septendecillion";
   
               case 57:
               case 58 :
               case 59 :return "Octodecillion";
   
               case 60:
               case 61 :
               case 62 :return "Novemdecillion";
   
               case 63:
                 case 64 :
                case 65 :return "Vigintillion";                                                                                                                                                                                                    
   
       
   
           }
           return "";
       }
          one_99(  n){
           if(n.length<=1){
               return this.readUnits(n.charAt(0));
           }else
           if (n.length<=2){
               if(n.charAt(0)=='1'){
                   return	this.readTeens(n);
               }else{
                   return this.readTens(n.charAt(0))+this.readUnits(n.charAt(1));
               }
           }else
               console.log("error occur num greater than two digit "+n.length);
   
   
           return " ";
       }
   
     upToThosand(){
   if(this.num.length>3) return !this.isZeros(this.num.substring(0,this.num.length-3))  
   return false;
   }
   
     getAnd(n){
     return  ( this.isZeros(n)? " ": " AND ")
   }
     getComma(n){
     return  ( this.isZeros(n)? " ": ", ")
   }
           readHundreds(  n, appendAnd){
           if(n.length<=3){ 
               if (n.length<=2){ 
                   return    appendAnd? this.getAnd( n) + this.one_99(n): this.one_99(n);
               }else{
                   if(n.charAt(0)=='0')return  appendAnd?  this.getAnd( n.substring(1,3)) + this.one_99(n.substring(1,3)):this.one_99(n.substring(1,3));
                 
                   return this.readUnits(n.charAt(0))+ this.numberHeader(n.length-1)+  
                    this.getAnd( n.substring(1,3))
                     + this.one_99(n.substring(1,3));
               }
           }else
               console.log("error occur num greater than three digit "+n.length);
   
   
           return " ";
       }
   
        
   
         _read(n){
           var s1="", s2="";
           var l=3;
           if(n.length<=64){ 
   
               if (n.length<=3){ 
                   if(this.upToThosand() &&!this.isZeros(n))
                   return	this.readHundreds(n,true);
                    else
                  return  this.readHundreds(n,false);
               }
               else{
                   if(n.length%3!=0)l=n.length%l;
   
                   s1=n.substring(0, l);
                   s2=n.substring(l, n.length);
                   if(this.isZeros(s1))
                   return  this._read(s2);
                else
                   return this.readHundreds(s1, false)+ this.numberHeader(n.length-1)+ this.getComma(s2)+this._read(s2);
               }
           }else{
               console.log("error occur num greater accounted digit   "+n.length);
   
               return "Eror number too long " 
           }
           return " ";
       }
   
    print(n){
   
       this.num=n; 
       console.log(n+"   "+this.getWordsFromNumber(n))
   
   }  
   
   
   
    getWordsFromNumber(number){
    if(number){
        if(number.length>0){
            if(this.isAllDigit(number)){
           this.num=number; 
         const  result =this._read(number)
       console.log(number+" ==   "+result)
       return result.toUpperCase()
   }else{
           return "Unwanted character found"
       }
   
   }else{
           return "Empty"
       }
    
   } else{
        return "Error"
    }
   
   }
   isAllDigit(n){
       return !isNaN(parseFloat(n)) && isFinite(n);
   }
   
   
   
   }const numberReader= new NumberReader() 

const express = require('express');    
var app = express.Router();  
app.get('/', (req, res) => {  
       res.render('v1', { v1: null })
})   

app.put('/words/', (req, res) => {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Content-Type', 'application/json')
         res.json( {
             "number":req.body.number,
             "words": numberReader.getWordsFromNumber(req.body.number),
             "lang":"eng"
         })

    })
    
module.exports.v2 = app;
     



