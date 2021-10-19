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
            case 2 :return "HUNDRED";

            case 3 :
            case 4 :
            case 5 :return "THOUSAND";

            case 6 :
            case 7:
            case 8:
                return "MILLION";
            case 9 :
            case 10 :
            case 11:return "BILLION";
            case 12:
            case 13 :
            case 14 :return "TRILLION";

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
        if(n.length<=15){ 

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
        }else
            console.log("error occur num greater accounted digit (15) "+n.length);


        return " ";
    }

 print(n){

        this.num=n;
    console.log(" ")
    console.log(" ")
    console.log("new")
    console.log(n+"   "+this._read(n))

}  



 getWordsFromNumber(number){

        this.num=number; 
      const  result =this._read(number)
    console.log(number+" ==   "+result) 
 return result

}

}
var r= new NumberReader()
r.print("6757")
r.print("1234567890")
r.print("1000000")
r.print("01233");
r.print("100041");
r.print("1001");
r.print("20003256434"); 
r.print("0000"); 

