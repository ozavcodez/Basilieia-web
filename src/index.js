const stickyNav = document.getElementById("navbar-sticky");
const subNav = document.getElementById('sub-nav');
function show () {

  if (subNav.classList.contains('hidden')){
    subNav.classList.remove('hidden')
  }else{
    subNav.classList.add('hidden')
  }
}
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

