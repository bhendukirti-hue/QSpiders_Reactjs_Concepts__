import React, { useState } from 'react'

const AllInputField = () => {
    const[form,setForm]=useState({
        username:"",
        age:"",
        email:"",
        password:"",
        gender:"",
        skills:[],
        college:"",
        graduationyear:"",
        dob:"",
        profile:""
    })
    const [errors,setErrors]=useState({})
    const validateForm=()=>{
      const {username,age,email,password,gender,skills,college,graduationyear,dob,profile}=form
      const err={}

      if(!username){
        err.username="username is required"
      }
      if(!age){
        err.age="age is required"
      }
      if(!email){
        err.email="email is required"
      }
      if(!password){
        err.password="password is required"
      }
      if(!gender){
        err.gender="gender is required"
      }
      if(skills.length===0){
        err.skills="Atleast one skill is required"
      }
      if(!college){
        err.college="college is required"
      }
      if(!graduationyear){
        err.graduationyear="graduation year is required"
      }
      if(!dob){
        err.dob="dob is required"
      }
      if(!profile){
        err.profile="profile is required"
      }
      if(Object.keys(err).length>0){
        setErrors(err)
        return false
      }
      return true
  
    }
    
    const {username,age,email,password,gender,skills,college,graduationyear,dob,profile}=form

    const handleForm=(e)=>{
        e.preventDefault()
        const validationresult=validateForm()
        if(validationresult){
          console.log("Form submited sucessfully");
          console.log(form);
          setErrors({})
        }
        else{
          console.log("some error is there");
          
        }
    }
    const handleInput=(e)=>{
        const {name,value}=e.target
        setForm({...form,[name]:value})
        setErrors({...errors,[name]:""})
    }
    const handleCheckbox = (e) => {
    if (e.target.checked) {
        setForm({
            ...form,
            skills: [...skills, e.target.value]
        });
    } else {
        setForm({
            ...form,
            skills: skills.filter((ele) => ele !== e.target.value)
        });
    }
    setErrors({
  ...errors,
  skills: ""
});
};
    const handleFile=(e)=>{
        setForm({...form,profile:e.target.files[0]})
        setErrors({...errors,[name]:""})
    }
  return (
  <div className=" min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex justify-center items-center py-10 px-4">
    <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Registration Form
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleForm}>

        {/* Username */}
        <div>
          <label className="block font-semibold mb-2">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={handleInput}
          />{
            errors.username && <p className='text-red-500'>{errors.username}</p>
          }
        </div>

        {/* Age */}
        <div>
          <label className="block font-semibold mb-2">Age</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Age"
            value={age}
            name='age'
            onChange={handleInput}
          />
          {
            errors.age && <p className='text-red-500'>{errors.age}</p>
          }
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Email"
            value={email}
            name='email'
            onChange={handleInput}
          />
          {
            errors.email && <p className='text-red-500'>{errors.email}</p>
          }
        </div>

        {/* Password */}
        <div>
          <label className="block font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Password"
            value={password}
            name='password'
            onChange={handleInput}
          />
          {
            errors.password && <p className='text-red-500'>{errors.password}</p>
          }
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-2">Gender</label>

          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Male" checked={gender=="Male"} onChange={handleInput}/>
              Male
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Female" checked={gender=="Female"} onChange={handleInput}/>
              Female
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Other" checked={gender=="Other"} onChange={handleInput} />
              Other
            </label>
            {
            errors.gender && <p className='text-red-500'>{errors.gender}</p>
          }
          </div>
        </div>
        
        {/* Graduation Year */}
        <div>
          <label className="block font-semibold mb-2">Graduation Year</label>
          <input
            type="month"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="2026"
            name='graduationyear'
            onChange={handleInput}
            value={graduationyear}
          />
          {
            errors.graduationyear && <p className='text-red-500'>{errors.graduationyear}</p>
          }
        </div>

        {/* Skills */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-3">Skills</label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            <label className="flex items-center gap-2"><input type="checkbox" value="HTML" onChange={handleCheckbox} />HTML</label>
            <label className="flex items-center gap-2"><input type="checkbox" value="CSS" onChange={handleCheckbox}/>CSS</label>
            <label className="flex items-center gap-2"><input type="checkbox" onChange={handleCheckbox} value="JavaScript"/>JavaScript</label>
            <label className="flex items-center gap-2"><input type="checkbox" onChange={handleCheckbox} value="Node JS"/>Node JS</label>

          </div>
          {
            errors.skills && <p className='text-red-500'>{errors.skills}</p>
          }
        </div>

        {/* College */}
        <div>
          <label className="block font-semibold mb-2">College</label>

          <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" name='college' value={college} onChange={handleInput}>
            <option value="">Select College</option>
            <option value="Gandhi Institute For Technology">Gandhi Institute For Technology</option>
            <option value="Science Higher Secondary College">Science Higher Secondary College</option>
            <option value="IIT Bombay">IIT Bombay</option>
            <option value="NIST College Berhampur">NIST College Berhampur</option>
            <option value="Science Autonomous College Hinjilicut">Science Autonomous College Hinjilicut</option>
            <option value="SSVM Kukudakhandi">SSVM Kukudakhandi</option>
            <option value="Little Angel College">Little Angel College</option>
            <option value b="Nodal High School Jagdalpur">Nodal High School Jagdalpur</option>
          </select>
          {
            errors.college && <p className='text-red-500'>{errors.college}</p>
          }
        </div>

        {/* DOB */}
        <div>
          <label className="block font-semibold mb-2">Date of Birth</label>
          <input
            type="date"
            name='dob'
            value={dob}
            onChange={handleInput}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {
            errors.dob && <p className='text-red-500'>{errors.dob}</p>
          }
        </div>

        {/* Profile */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">Profile Photo</label>

          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50"
            onChange={handleFile}
          />
          {
            errors.profile && <p className='text-red-500'>{errors.profile}</p>
          }
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg transition duration-300 shadow-lg"
          >
            Register
          </button>
        </div>

      </form>
    </div>
  </div>
)
}

export default AllInputField
