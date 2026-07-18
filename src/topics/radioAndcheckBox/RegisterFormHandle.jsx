import React, { useState } from 'react'

const RegisterFormHandle = () => {
    
    const[form,setForm]=useState({
        fullname:"",
        email:"",
        password:"",
        phonenumber:"",
        age:"",
        DOB:"",
        gender:"",
        address:"",
        jobrole:"",
        experience:"",
        highestqualification:"",
        expectedsalary:"",
        skills:[],
        resume:"",
        profilephoto:"",
        protfoliowebsite:"",
        linkdilnprofile:"",
        joiningmonth:"",
        interviewtime:"",
        themecolour:"#7c3aed"
    }) 
    const [errors,setErrors]=useState({})
    const validateForm=()=>{
      const {fullname,email,password,phonenumber,age,DOB,gender,address,jobrole,experience,highestqualification,expectedsalary,skills,resume,profilephoto,protfoliowebsite,linkdilnprofile,joiningmonth,interviewtime,themecolour}=form
      const err={}
      if(!fullname){
        err.fullname="name is required"
      }
      if(!email){
        err.email="email is required"
      }
      if(!password){
        err.password="password is required"
      }
      if(!phonenumber){
        err.phonenumber="phone number is required"
      }
      if(!age){
        err.age="age is required"
      }
      if(!DOB){
        err.DOB="Date of birth is required"
      }
      if(!gender){
        err.gender="gender is required"
      }
      if(!address){
        err.address="address is required"
      }
      if(!jobrole){
        err.jobrole="job role is required"
      }
      if(!experience){
        err.experience="Experience is required"
      }
      if(!highestqualification){
        err.highestqualification="qualification is required"
      }
      if(!expectedsalary){
        err.expectedsalary="expected salary is required"
      }
      if(!skills){
        err.skills="skills is required"
      }
      if(!resume){
        err.resume="resume is requird"
      }
      if(!profilephoto){
        err.profilephoto="profile photo is requird"
      }
      if(!protfoliowebsite){
        err.protfoliowebsite="protfolio website is required"
      }
      if(!linkdilnprofile){
        err.linkdilnprofile="likdiln is required"
      }
      if(!joiningmonth){
        err.joiningmonth="joining month is required"
      }
      if(!interviewtime){
        err.interviewtime="interview time is reqired"
      }
      if(!themecolour){
        err.themecolour="theme colour is required"
      }
      if(Object.keys(err).length>0){
        setErrors(err)
        return false
      }
      return true
    }
    const {fullname,email,password,phonenumber,age,DOB,gender,address,jobrole,experience,highestqualification,expectedsalary,skills,resume,profilephoto,protfoliowebsite,linkdilnprofile,joiningmonth,interviewtime,themecolour}=form

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
    const handleFile = (e) => {
  setForm({...form,[name]: files[0],
  });
        setErrors({...errors,[name]:""})

};
    
  return (
  <div className="min-h-screen bg-gray-100 py-10">
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-violet-700 to-indigo-600 text-white p-8">
        <h1 className="text-4xl font-bold">Job Application Form</h1>
        <p className="mt-2 text-violet-100">
          Complete all the required details to apply for the position.
        </p>
      </div>

      <form className="p-8 space-y-10" onSubmit={handleForm}>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-violet-700 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name='fullname'
                value={fullname}
                onChange={handleInput}
                placeholder="John Doe"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"
              />
              {
            errors.fullname && <p className='text-red-500'>{errors.fullname}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name='email'
                value={email}
                onChange={handleInput}
                placeholder="john@gmail.com"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"
              />
              {
            errors.email && <p className='text-red-500'>{errors.email}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name='password'
                value={password}
                onChange={handleInput}
                placeholder="********"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"
              />
              {
            errors.password && <p className='text-red-500'>{errors.password}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Phone Number</label>
              <input
                type="tel"
                name='phonenumber'
                value={phonenumber}
                onChange={handleInput}
                placeholder="+91 9876543210"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"
              />
              {
            errors.phonenumber && <p className='text-red-500'>{errors.phonenumber}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Age</label>
              <input
                type="number"
                name='age'
                value={age}
                onChange={handleInput}
                placeholder="24"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"
              />
              {
            errors.age && <p className='text-red-500'>{errors.age}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Date of Birth</label>
              <input
                type="date"
                name='DOB'
                value={DOB}
                onChange={handleInput}
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none"
              />
              {
            errors.DOB && <p className='text-red-500'>{errors.DOB}</p>
          }
          </div>

          </div>

          <div className="mt-6">
            <label className="font-semibold">Gender</label>

            <div className="flex gap-6 mt-3">
              <label><input type="radio" name="gender" value="Male" checked={gender=="Male"} onChange={handleInput} className="accent-violet-600 mr-2" />Male</label>
              <label><input type="radio" name="gender" value="Female" checked={gender=="Female"} onChange={handleInput} className="accent-violet-600 mr-2" />Female</label>
              <label><input type="radio" name="gender" value="Other" checked={gender=="Other"} onChange={handleInput} className="accent-violet-600 mr-2" />Other</label>
            </div>
            {
            errors.gender && <p className='text-red-500'>{errors.gender}</p>
          }
          </div>

          <div className="mt-6">
            <label className="font-semibold">Address</label>
            <textarea
              rows="4"
              name='address'
              value={address}
              onChange={handleInput}
              placeholder="Enter your complete address"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-violet-500 outline-none resize-none"
            ></textarea>
          </div>
          {
            errors.addresse && <p className='text-red-500'>{errors.address}</p>
          }
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-violet-700 mb-6">
            Professional Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Job Role</label>
              <select className="w-full mt-2 border rounded-lg p-3" name='jobrole' value={jobrole} onChange={handleInput}>
                <option value="">Choose Role</option>
                <option value="Web Devlopment">Web Devlopment</option>
                <option value="React js Devloper">React js Devloper</option>
                <option value="Full stack devloper">Full stack devloper</option>
              </select>
              {
            errors.jobrole && <p className='text-red-500'>{errors.jobrole}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Experience</label>
              <select className="w-full mt-2 border rounded-lg p-3" name='experience' value={experience} onChange={handleInput}>
                <option value="">Select Experience</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {
            errors.experience && <p className='text-red-500'>{errors.experience}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Highest Qualification</label>
              <select className="w-full mt-2 border rounded-lg p-3" name='highestqualification' value={highestqualification} onChange={handleInput}>
                <option value="">Select Qualification</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="PHD">PHD</option>
              </select>
              {
            errors.highestqualification && <p className='text-red-500'>{errors.highestqualification}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Expected Salary (₹)</label>
              <input
                type="range"
                name='expectedsalary'
                value={expectedsalary}
                onChange={handleInput}
                className="w-full mt-5 accent-violet-600"
              />
              {
            errors.expectedsalary && <p className='text-red-500'>{errors.expectedsalary}</p>
          }
            </div>
          </div>

          <div className="mt-8">
            <label className="font-semibold block mb-4">
              Technical Skills
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML","CSS","JavaScript","React",
                "Node.js","Java","Spring Boot","MongoDB",
                "MySQL","Python","Git","Docker"
              ].map((skill)=>(
                <label key={skill} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-violet-600" value={skill} checked={skills.includes(skill)} onChange={handleCheckbox}/>
                  {skill}
                </label>
              ))}
            </div>
            {
            errors.skills && <p className='text-red-500'>{errors.skills}</p>
          }
          </div>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-violet-700 mb-6">
            Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Upload Resume</label>
              <input
                type="file"
                name='resume'
                onChange={handleFile}
                className="w-full mt-2 border rounded-lg file:bg-violet-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg"
              />
              {
            errors.resume && <p className='text-red-500'>{errors.resume}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Profile Photo</label>
              <input
                type="file"
                name='profilephoto'
                onChange={handleFile}
                className="w-full mt-2 border rounded-lg file:bg-violet-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg"
              />
              {
            errors.profilephoto && <p className='text-red-500'>{errors.profilephoto}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Portfolio Website</label>
              <input
                type="url"
                name='protfoliowebsite'
                value={protfoliowebsite}
                onChange={handleInput}
                placeholder="https://portfolio.com"
                className="w-full mt-2 border rounded-lg p-3"
              />
              {
            errors.protfoliowebsite && <p className='text-red-500'>{errors.protfoliowebsite}</p>
          }
            </div>

            <div>
              <label className="font-semibold">LinkedIn Profile</label>
              <input
                type="url"
                name='linkdilnprofile'
                value={linkdilnprofile}
                onChange={handleInput}
                placeholder="https://linkedin.com/in/..."
                className="w-full mt-2 border rounded-lg p-3"
              />
              {
            errors.linkdilnprofile && <p className='text-red-500'>{errors.linkdilnprofile}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Joining Month</label>
              <input
                type="month"
                name='joiningmonth'
                value={joiningmonth}
                onChange={handleInput}
                className="w-full mt-2 border rounded-lg p-3"
              />
              {
            errors.joiningmonth && <p className='text-red-500'>{errors.joiningmonth}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Preferred Interview Time</label>
              <input
                type="time"
                name='interviewtime'
                value={interviewtime}
                onChange={handleInput}
                className="w-full mt-2 border rounded-lg p-3"
              />
              {
            errors.interviewtime && <p className='text-red-500'>{errors.interviewtime}</p>
          }
            </div>

            <div>
              <label className="font-semibold">Preferred Theme Color</label>
              <input
                type="color"
                name='themecolour'
                value={themecolour}
                onChange={handleInput}
                className="w-20 h-12 mt-2 border rounded-lg"
              />
              {
            errors.themecolour && <p className='text-red-500'>{errors.themecolour}</p>
          }
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-violet-600" />
              I confirm that all the information provided is correct.
            </label>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <button
            type="reset"
            className="px-10 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-10 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold"
          >
            Submit Application
          </button>
        </div>

      </form>
    </div>
  </div>
);
}

export default RegisterFormHandle
