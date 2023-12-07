import React, { useState } from "react";
import './Form.css'

function Form() {
    const [formData , setFromData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
    })
    function handeInput(event){
        const name = event.target.name;
        const value = event.target.value;
        // setFromData({...formData,[name]:value})
        setFromData((prev)=>{
            return{...prev,[name]:value}
        })
    }
  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handeInput}
            placeholder="Enter First Name"
            required
          />
          <h2 style={{color:'white'}}>{formData.firstname}</h2>
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handeInput}
            placeholder="Enter Last Name"
            required
          />
          <h2 style={{color:'white'}}>{formData.lastname}</h2>
      
          <label for="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handeInput}
            placeholder="Enter email"
            required
          />
         <h2 style={{color:'white'}}>{formData.email}</h2>
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="tel"
            onChange={handeInput}
            value={formData.tel}
            id="tel"
            placeholder="Enter Mobile number"
            required
          />
        <h2 style={{color:'white'}}>{formData.tel}</h2>
          <label for="gender">Gender*</label>
          <br />
          <input type="radio" name="gender" value="" id="male" />
          Male
          <input type="radio" name="gender" value="" id="female" />
          Female
          <input type="radio" name="gender" value="" id="other" />
          Other
          <br />
          <br />
          <label for="lang">Your best Subject</label>
          <br />
          <input type="checkbox" name="lang" id="english" checked />
          English
          <input type="checkbox" name="lang" id="maths" />
          Maths
          <input type="checkbox" name="lang" id="physics" />
          Physics
          <br />
          <br />
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Enter Upload File"
            required
          />
          <br />
          <br />
          <label for="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Enter url"
            required
          />
          <br />
          <br />
          <label>Select your choice</label>
          <select name="select" id="select">
            <option value="" disabled selected>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="1">React</option>
              <option value="2">Node</option>
              <option value="3">Express</option>
              <option value="4">MongoDB</option>
            </optgroup>
          </select>
          <br />
          <br />
          <label for="about">About</label>
          <br />
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            placeholder="About your self"
            required
          ></textarea>
          <br />
          <br />
          <label>Submit OR Reset</label>
          <br />
          <button type="reset" value="reset">
            Reset
          </button>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Form;
