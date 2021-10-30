const fs = require('fs');
var numberJ 
class NumberReader{
   
    num="0";
          readUnits( d){
           switch(d){
               case '0' :{if(this.isZeros(this.num)){  console.log("all zeros "+this.num); return numberJ.n0;}  else return "";}
               case '1' :return numberJ.n1;
               case '2' :return numberJ.n2;
               case '3' :return numberJ.n3;
               case '4' :return numberJ.n4;
               case '5' :return numberJ.n5;
               case '6' :return numberJ.n6;
               case '7':return numberJ.n7;
               case '8' :return numberJ.n8;
               case '9' :return numberJ.n9;
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
   
               case '2' :return numberJ.n20;
               case '3' :return numberJ.n30;
               case '4' :return numberJ.n40;
               case'5' :return numberJ.n50;
               case '6':return numberJ.n60;
               case '7' :return numberJ.n70;
               case '8' :return numberJ.n80;
               case'9' :return numberJ.n80;
           }
           return "";
       }
   
            readTeens( num){
           switch(num){
               case "10" :return numberJ.n10;
               case "11" :return numberJ.n11;
               case "12" :return numberJ.n12;
               case "13" :return numberJ.n13;
               case "14" :return numberJ.n14;
               case "15" :return numberJ.n15;
               case "16" :return numberJ.n16;
               case "17" :return numberJ.n17;
               case "18" :return numberJ.n18;
               case "19" :return numberJ.n19;
           }
           return "";
       }
   
            numberHeader(  l){
           switch(l){
               case 2 :return numberJ.nPower.n2;
   
               case 3 :
               case 4 :
               case 5 :return numberJ.nPower.n5;
   
               case 6 :
               case 7:
               case 8: return  numberJ.nPower.n8;
               case 9 :
               case 10 :
               case 11:return  numberJ.nPower.n11;
               case 12:
               case 13 :
               case 14 :return  numberJ.nPower.n14;
               case 15:
               case 16 :
               case 17 :return  numberJ.nPower.n17;
               case 18:
               case 19 :
               case 20 :return  numberJ.nPower.n20;
               case 21:
               case 22 :
               case 23 :return  numberJ.nPower.n23;
               case 24:
               case 25 :
               case 26 :return  numberJ.nPower.n26;
               case 27:
               case 28 :
               case 29 :return  numberJ.nPower.n29;
               case 30:
               case 31 :
               case 32 :return  numberJ.nPower.n32;
              case 33:
               case 34 :
               case 35 :return  numberJ.nPower.n35;
   
               case 36:
               case 37 :
               case 38 :return  numberJ.nPower.n38;
   
               case 39:
               case 40 :
               case 41 :return  numberJ.nPower.n41;
   
               case 42:
               case 43 :
               case 44 :return  numberJ.nPower.n44;
   
               case 45:
               case 46 :
               case 47 :return  numberJ.nPower.n47;
   
               case 48:
               case 49 :
               case 50 :return  numberJ.nPower.n50;
   
               case 51:
                case 52 :
               case 53 :return  numberJ.nPower.n53;
   
               case 54:
              case 55 :
               case 56 :return  numberJ.nPower.n56;
   
               case 57:
               case 58 :
               case 59 :return  numberJ.nPower.n59;
   
               case 60:
               case 61 :
               case 62 :return  numberJ.nPower.n62;
   
               case 63:
                 case 64 :
                case 65 :return  numberJ.nPower.n65;                                                                                                                                                                                                    
   
       
   
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
           if(n.length<= numberJ.nPower.nMax){ 
   
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
   
               return "Error number too long " 
           }
           return " ";
       }
   
    print(n){
   
       this.num=n; 
       console.log(n+"   "+this.getWordsFromNumber(n))
   
   }  
   
   getReadMode( number){
       var st=""
    if(number){
        if(number.length>3){
            var s =3
        for( var n=number.length;n>=0; n-=3){
            st=" "+number.substring(0,3)+st
            number =number.substring(4,n)
          s+=3;
        }
    return st
    }
    }   return number
   }
   
    getWordsFromNumber(number){
    if(number){
        if(number.length>0){
            if(this.isAllDigit(number)){
           this.num=number; 
         const  result =this._read(number)
      // console.log(number+" ==   "+result)
       return result.toUpperCase()
   }else{
           return numberJ.unknownD
       }
   
   }else{
           return  numberJ.empty
       }
    
   } else{
        return numberJ.error;
    }
   
   }
   isAllDigit(n){
       return !isNaN(parseFloat(n)) && isFinite(n);
   }
    
   } 




const express = require('express');    
var app = express.Router(); 
app.get('/', (req, res) => {  
       res.render('v2', { v1: null })
})   

app.get('/words/:number/:lang', (req, res) => {  
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Content-Type', 'application/json') 

   const numberReader = new NumberReader()  
    const data =req.params ;
    console.log(data)
    var msg="" 
        switch(data.lang){
            case  "English" :{
        const rawdata = fs.readFileSync('public/english.json'); 
         numberJ =JSON.parse(rawdata);
         msg=numberJ.ok
         break;
        }
       case  "Tiv" :{
            const rawdata = fs.readFileSync('public/english.json'); 
             numberJ =JSON.parse(rawdata);
             msg=numberJ.ok
             break;
            }
     default:{ 
            const rawdata = fs.readFileSync('public/english.json'); 
            numberJ =JSON.parse(rawdata);
            msg=numberJ.warnL
        }

     } 
  
    var  resultData= {
        "number":numberReader.getReadMode(data.number),
        "words": numberReader.getWordsFromNumber(data.number),
        "lang": numberJ.lang,
        "msg": msg
        }
         console.log(resultData)
         res.json(resultData)

    })


    
    
    
module.exports.v2 = app;
     



