const stickyNav = document.getElementById("navbar-sticky");
function openMenu(){
  console.log(stickyNav)
  if (stickyNav.classList.contains('hidden')){
    stickyNav.classList.remove('hidden')
  }else{
    stickyNav.classList.add('hidden')
  }
}
// const fname=document.querySelector('#firstname')
// const lname=document.querySelector('#lastname').value.length;
// const phone=document.querySelector('#phonenumber').value.length;
// const email =document.querySelector('#email').value.length;

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




const scriptURL = 'https://script.google.com/macros/s/AKfycbzBhYuym0x8PIWXj8DK1Fn2vzcW1oMtyDU9P4eZMya6ZU4iKRcUIYF0jxTInZMqXfvN/exec'
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
    .then(response => {
        msg.innerHTML = "Thanks for Volunteering we will get back to you"
       setTimeout(function(){
        msg.innerHTMl = ""
       },5000)
       form.reset()
    })
    .catch((error) => {
      console.log(error)
      alert("server is down temporarily, please try again later")
    })
  }
  


   
 

  
 
  
})

  