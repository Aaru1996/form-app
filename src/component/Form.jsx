import React, { useRef, useState } from 'react'
import Display from './Display';

const Form = () => {
    const [form , setForm] = useState({
          username:"",
          age : "",
          gender : 'female',
          date : ''
    })
    const [formData, setFormData] = useState([]);

    const refUser=useRef();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({...form, [name]:value})
        // console.log(form)
    }

    const handleSubmit = (e) =>{
              e.preventDefault()
              console.log(form)

              if(!form.username){
              refUser.current.focus()
              return 
              }
              if(!form.age){
                alert('fill your age')
                return
              }
              if(!form.date){
                alert('fill the date')
                return
              }

              setFormData([...formData, {id:Date.now(), ...form}])
              setForm({
                username:"",
                age : "",
                gender : 'female',
                date : ''
              })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={refUser} name='username' value={form.username} placeholder='type Name' onChange={handleChange}/><br/>
            <input type='number' name='age' value={form.age} placeholder='Enter age' onChange={handleChange} /><br/>
            <span>Select your gender {" "}</span>
            <select name='gender' value={form.gender}   onChange={handleChange}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select><br/>
            <input type='date' name='date' value={form.date} onChange={handleChange} /><br/>
            <input type='submit' value='Login' />
        </form>
        <br/>
        <Display data={formData}/>
        </>
    )
}

export default Form;