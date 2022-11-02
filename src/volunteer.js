function func3 () {
    if (document.getElementById("female").checked){
      // console.log(`female`);
      // document.getElementById("gen").innerHTML = "female"
      var val = document.getElementById("female").value;
    
    } else if (document.getElementById('male').checked){
      // console.log(`male`);
      // document.getElementById("gen").innerHTML = "male";
      var val = document.getElementById("male").value;
    
    } 
    console.log(val);
  
  document.getElementById("gen").innerHTML = val;
    
  }
  
  
  
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx_WBAh3Df_xgD2ibN5738qxO7yg6cNnJubOuwLa2VTj_PkZCi328rIZw-vrkchHKEcOg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
  
    const fname=document.querySelector('#firstname').value.length
  const lname=document.querySelector('#lastname').value.length;
  const phone=document.querySelector('#phonenumber').value.length;
  const gender=document.querySelector('#gen').innerHTML;
  // const gender =document.querySelector('#gender').value.length;
  
  
  
  // let a = fname.value.length]\
  
  
    if(fname<3){
      alert("firstname cannot be less than three")
    }else if (lname<3){
      alert("lastname cannot be less than three")
    } else if (phone<10){
      alert("kindly input a valid phone number")
      console.log(document.getElementById('gender').textContent);
    } else if (!gender){
      alert(`kindly input a gender`)
    }
    else {
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => {
          msg.innerHTML = "Thanks for Volunteering we will get back to you"
         setTimeout(function(){
          msg.innerHTML = ""
         },5000)
         form.reset()
      })
      .catch((error) => {
        console.log(error)
        alert("server is down temporarily, please try again later")
      })
    }
    
  
  
     
   
  
    
   
    
  })
  
    