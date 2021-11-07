
### Number to words
This program convert a number to words of the selected language.
Now:
It is now available in Tiv and English. 
To add a new language  is simple, just read this https://github.com/SoftCareTech/NumberToWords/tree/main/Node%20API/public/lang. 
See Sample Languages
https://learn-numbers.herokuapp.com/v2      
The basic idea is add many languages flexible without reprogramming it.

This program is free to use. 
We will acept any contribution that improves the algorithm
https://github.com/SoftCareTech/NumberToWords
 
Apply it like it is in test.html. 



//pass Number and the output Language  to get request
        https://learn-numbers.herokuapp.com/v2/words/6788/English 
        ///output JSON
        {"number":" 6 788","words":"SIX THOUSAND, SEVEN HUNDRED AND EIGHTY EIGHT ","lang":"English","msg":"Okay","author":"GBenge Aondoakula Raphael Raphael -> Email: gbengeraymond@gmail.com","languageProvider":"Gbenge Aondoakula Raphael Raymond"}




     /// javascript implentation        
function getWordsFromNumber(number, lang){ 
  fetch("/v2/words/"+number+"/"+lang, {  
    method: 'get' 
  , headers: { 'Content-Type': 'application/json', }  
  }) .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {  
      console.log(response) 
      updateView(response) // updateView take the result and pressent it to html
      }) 
  
      
    
  }

