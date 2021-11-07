Greetings

#### To contribute 
### For any one

Crate your language file with the language  as file name 
if  writing 100 in your language is  'One Hundred' using the enlish template  else  if it is 'Hundred one' use the Tiv template.
Change the values acording to your language
Change language provide but leave author value.
Leave righ or left space(bank ) in Number only the characters should be change
# Don't change or delete any key // e.g n0,n2 nPower 
if non or  after are errors msg us




### For developers
After creating your language json file
# go  Latest version in the 'routes' and  add your case and language

 case  "Tiv" :{
            const rawdata = fs.readFileSync('public/lang/tiv.json'); 
             numberJ =JSON.parse(rawdata);
             msg=numberJ.ok
             break;
            }
# go  the corresponding version in 'views'  add select. 
Make sure the case and select values are same. 

## Non Matched your language
Add your algorithm in another public folder called it in in your case 

Thanks for contributing we hope u share it to friends.
