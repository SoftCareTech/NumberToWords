

const update = document.querySelector('#update-button')
update.addEventListener('click', _ => {
  // Send PUT Request here 
  
  var  phone=document.querySelector('#phone').value;
  var  name=document.querySelector('#name').value;
  var  _id=document.querySelector('#_id').value;
  fetch('/update', {
    method: 'put' 
, headers: { 'Content-Type': 'application/json', }  // json format sending
,body: JSON.stringify({
    _id: _id,
    phone: phone,
    name: name
  })
}) .then(result => { 
   // window.location.reload(true)
    window.location.replace("/view"); //replace remove from history back will not take to previous page
    ///window.location.href="url"
   })
  .catch(error => console.error(error))
}) 