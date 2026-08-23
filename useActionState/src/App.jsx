import { useActionState } from 'react'
import './App.css'

function App() {
  

  const handleSubmit = async(previousData, formData) => {

    let name= formData.get("name");
    let password= formData.get("password");

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted with data:', { name, password })

    if(name && password){
      return {message:"Login Successful", name, password}
    }

    else{
      return {message:"Login Failed", name, password}
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, {
    message: "",
    name: "",
    password: ""
  });

  return (
    <>
    <h3>Login Form</h3>

    <form action={action}>

      <input defaultValue={data.name} type="text" name="name" placeholder='Enter your name' />
      <br />
      <input defaultValue={data.password} type="password" name="password" placeholder='Enter your password' />
      <br/>
      <button type="submit">Submit</button>

    </form>

    <h2> Name: {data.name} </h2>
    <h2> Password: {data.password} </h2>
    <h2> Message: {data.message} </h2>

    <h2> Pending: {pending ? "true" : "false"} </h2>


    
    
    </>
    
      
  )
}

export default App
