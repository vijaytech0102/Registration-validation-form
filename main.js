const form=document.getElementById("registration-form");
const  firstName =document.getElementById("firstname");
const  lastName =document.getElementById("lastname");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const batchNumber =document.getElementById("batchnumber");
const currentModule =document.getElementById("currentmodule"); 
const check=document.getElementById("check");


form.addEventListener('submit',(events) => {
    events.preventDefault();
    validate();
});



//  fat arrow function for finalSuccessMsg.....!
const finalSuccessMsg = () =>{
 let parentEle = document.getElementsByClassName('col-md-6 success');
 let parentEleCheck = document.getElementsByClassName('col-12 success');
 const length1= parentEle.length;
 const length2=parentEleCheck.length;
 const totalLen=length1+length2;
 if(totalLen==7){
    setTimeout(() => {
        alert('Your details have been saved successfully...!');
        form.reset();
    }, 1000);
 }
 else
    return false;
}

   
// validation declaration....
  
  const validate = () =>{
    const firstNameVal= firstName.value.trim();
    const lastNameVal= lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const batchNumberVal = batchNumber.value.trim();
    const currentModuleVal = currentModule.value.trim();
    // const checkVal= check.checked

    // validation for firstname....    
      if(firstNameVal === "")
      setErrorMsg(firstName,'Please enter a valid first name.');
      else if(firstNameVal.length<3)
      setErrorMsg(firstName,'firstname should have at least 3 characters!');
      else
      setSuccessMsg(firstName);

     // validation for lastname..!
      if(lastNameVal === "")
      setErrorMsg(lastName,'Please Enter a valid last name');
      else if(lastNameVal.length<3)
      setErrorMsg(lastName,'lastname should have at least 3 characters!');
      else
      setSuccessMsg(lastName);

      // validation for email..!
       if(emailVal=== "")
       setErrorMsg(email.parentElement,'Please enter a valid email');
       else if(emailVal.indexOf["@"]===0){
            setErrorMsg(email.parentElement,'First character cannot be @..!');
        }
        else {
            var p=0; var q=0;
            for(var i=0;i<emailVal.length;i++){
                if(emailVal[i]!='.')
                p++;
            
            if(emailVal[i]!='@'){
                q++;
            }
        }
        if(p=== emailVal.length || q=== emailVal.length){
           setErrorMsg(email.parentElement,"Please enter a valid email");
        }
        
       else if(emailVal.length>0 && emailVal.length < emailVal.lastIndexOf(".")+3){
            setErrorMsg(email.parentElement,'After last . , there should be at least 2 characters..!');
        }
        else
        setSuccessMsg(email.parentElement);
    }
        
    // validation for phone number..!
       
       if(phoneVal==="")
       setErrorMsg(phone.parentElement,'Phone number cannot be blank..!');      
      else if(phoneVal.length!==10)
       setErrorMsg(phone.parentElement,'Please provide a valid phone number..!');
       else
       setSuccessMsg(phone.parentElement);

   // batch no validation...!
    //  const val=parseInt(batchNumberVal);
      if(batchNumberVal.length>2)
        setErrorMsg(batchNumber,'please select a valid Batch No..!');
      else
      setSuccessMsg(batchNumber);

    //    validation for current module..!

    if(currentModuleVal.length>2)
    setErrorMsg(currentModule,'Please select a valid Module No.');
    else
    setSuccessMsg(currentModule);

    //  checkbox validation..! 
      if(check.checked == true)
      setSuccessMsg(check.parentElement);
      else
      setErrorMsg(check.parentElement,'You must agree before submitting.'); 

      finalSuccessMsg();
     
  }

    
 // set error function..!

  function setErrorMsg(tagName,errorValue){
    let parentElement=tagName.parentElement;
    parentElement.setAttribute('id', 'error');
    const small=parentElement.querySelector('small');
    small.innerText=errorValue;
  }

  // set success function..!

   function setSuccessMsg(tagName){
    const parentElement=tagName.parentElement;
    parentElement.setAttribute('id', 'success');
    const oldclass=parentElement.className;
    parentElement.className =oldclass+ " success ";
   }