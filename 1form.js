document.getElementById('sbm').addEventListener('click',function(){
const a=document.getElementById('user').value;
const b=document.getElementById('pass').value;
if(a && b){
    console.log("username:",a);
    console.log("password:",b);
    alert('Form submitted successfully!');
}


});
