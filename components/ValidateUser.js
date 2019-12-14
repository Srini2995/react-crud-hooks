export default function ValidateUser(user) {
  let errors ={}
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if(!user.name || user.name === null){
    errors.name = "Name field cannot be Empty"
  }else if(!/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/i.test(user.name)){
    errors.name = "Name should contain only Alphabets and spaces"
  }

  if(!user.age){
    errors.age = "Age field cannot be Empty"
  }else if(user.age <= 0 || user.age > 200){
    errors.age = "Age should be between 1 to 200"
  }

  if(!user.gender){
    errors.gender = "Please select a Gender"
  }

  if(!user.address){
    errors.address = "Address field cannot be Empty"
  }
  return errors
}