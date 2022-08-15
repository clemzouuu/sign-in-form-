import React,{useState} from 'react'
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    passwordConfirmation:"",
    okayToEmail: false
  })

  function handleChange(event){

    const { name, value, type, checked } = event.target
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: type === 'checkbox' ? checked : value
    }))  
  }

  console.log(formData)

  function handleSubmit(event) {
    event.preventDefault()

    const {email,password,passwordConfirmation} = formData
    
    if(email,password,passwordConfirmation){
      if(password === passwordConfirmation) {
        
        alert('Successfully signed up')
       if (formData.okayToEmail) {
         alert("Thanks for signing up for our newsletter!")
       }
      }else{
        alert('Passwords to not match.')
      }
      
    }
    
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirmation"
          onChange={handleChange}
          value={formData.passwordConfirmation}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="okayToEmail"
            onChange={handleChange}
            checked={formData.okayToEmail}
          />

          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button className="form--submit">Sign up</button>
      </form>
    </div>
  )
}
