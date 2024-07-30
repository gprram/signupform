const form=document.getElementById("form");
const username=document.getElementById("uname");
const email=document.getElementById("email")
const passw=document.getElementById("pass")
const cpassw=document.getElementById("cpass")
const terms=document.getElementById("tc")



form.addEventListener('keyup',(e)=>{
    console.log(e)
    e.preventDefault()
    console.log('clicked')
    Validate()
})
function Validate(){
    let uname2=username.value.trim();
    let Email=email.value.trim();
    let password=passw.value.trim()
    let cpassword=cpassw.value.trim()
    console.log(Email)
    console.log(uname)
    
    if(uname2===''){
        console.log('if block')
        console.log('username empty')
        seterror(uname,'cannot be empty')
       
    }
    else if(uname2.length<4){
    
        seterror(uname,'minimum 4 characters needed');
    }
    else{
        
        setsuccess(uname);
    }

    if(Email===''){
        seterror(email,'email should not be empty');
    }
    else{
        setsuccess(email)
    }
    if(password===''){
        seterror(pass,'should not empty')

    }
    else if(password.length<8){
        seterror(pass,'length shouldbe 8 characters')

    }else{
        setsuccess(pass)
    }
    if(cpassword===''){
        seterror(cpass,'should not empty')

    }
    else if(password !== cpassword){
        seterror(cpass,'not matched')

    }else{
        setsuccess(cpass)
    }
    
}
    

/*function validate(){
    let uname2=username.value.trim();
    let Email=email.value.trim();
    let Pass=password.value.trim();
    let Cpass=cpassword.value.trim();
    

    if(uname2===''){
        setError(uname,'User cannot be empty')
    }
    else if(uname2.length<4){
        setError(uname,'minimum 4 characters needed');
    }
    else{
        setSuccess(uname);
    }
    if(Email===''){
        setError(email,'User cannot be empty')
    }
    else if(!emailCheck(Email)){
        setError(email,'Enter valid mail')
    }
    else{
        setSuccess(email)
    }

    if(Pass===''){
        setError(pass,'Password cannot be empty')
    }
    else if(Pass.length<8){
        setError(pass,'Password should be 8 characters')
    }
    else{
        setSuccess(pass)
    }

    if(Cpass===''){
        setError(cpass,'Password cannot be empty')
    }
    else if(Pass !==Cpass){
        setError(cpass,'Password not matched')
    }
    else{
        setSuccess(cpass)
    }

    if(!terms.checked){
        setError(tc,'You must agree to terms and conditions')

    }
    else{
        setSuccess(tc)
    }

    



}

function setError(input,message){
    let parent =input.parentElement;
    let small =parent.querySelector('small')
    small.innerText=message;
    parent.classList.add('error')
    parent.ClassList.remove('success')
}
    */
function setsuccess(input){
    let parent=input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')

}
function seterror(input,message){
    let parent = input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=message
    parent.classList.add('error')
    parent.classList.remove('success')

}
function emailCheck(input){
    let emailReg=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    let valid = emailReg.test(input)
    return valid;
}