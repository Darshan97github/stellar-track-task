import React, {useState} from 'react'
import './style.css'
import splogo from './sp.jpeg'
import reuselogo from './reuse.jpeg'
import etulogo from './etu.jpeg'
import aiblogo from './aib.jpeg'
import { IoIosContact } from "react-icons/io"
import { BiBuildings} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {ImLocation} from "react-icons/im"
import {TbLocation} from "react-icons/tb"
import {MdOutlineLocationSearching} from "react-icons/md"

function Container() {
    const [company, setCompany] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')

        const handleChange = (e)=>{
            if(e.target.name==='company'){
                setCompany(e.target.value)
            } if(e.target.name==='name'){
                setName(e.target.value)
            }if(e.target.name==='email'){
                setEmail(e.target.value)
            }if(e.target.name==='mobile'){
                setMobile(e.target.value)
            }if(e.target.name==='country'){
                setCountry(e.target.value)
            } if(e.target.name==='state'){
                setState(e.target.value)
            }else if(e.target.name==='city') {
                setCity(e.target.value)
            }
        }

        const handleSubmit = (e) =>{
            e.preventDefault()
            const formData = {
                company,
                name,
                email,
                mobile,
                country,
                state,
                city
            }
            console.log(formData);
                
                setCompany('')
                setName('')
                setEmail('')
                setMobile('')
                setCountry('')
                setState('')
                setCity('')
        }

  return (
    <div  className='container'>
        <div className='content'>
            <div className='box'>  
                <div className='text'>
                    <div  className='txt'>
                        <div > <img src={splogo} style={{width:'3rem', height:'3rem', marginTop:'3px', paddingRight:'1rem'}} ></img> </div>
                        <div><h1>Stars Payroll</h1></div>
                    </div> 
                </div>
            </div>
            <div className='box'>
                <div className='text'>
                    <div className='txt'>
                        <div>
                            <img src={etulogo} style={{width:'3rem', height:'3rem', marginTop:'2rem', paddingRight:'1rem' }}></img>
                        </div>
                        <div>
                            <h2>Easy to use</h2>
                            <p>simple and user friendly design for easy adaption</p>
                        </div>      
                </div>
            </div>  
            </div>
                <div className='box'>
                    <div className='text'>
                        <div className='txt'>
                            <div>
                                <img src={aiblogo} style={{width:'3rem', height:'3rem', marginTop:'2rem', paddingRight:'1rem' }}></img>
                            </div>
                            <div>
                                <h2> Additional Integration benefits</h2>
                                <p>Integrate with our software's for HR, statutory Employee Self Service portals & much more</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='box'>
                <div className='text'>
                    <div className='txt'>
                        <div>
                            <img src={reuselogo} style={{width:'2.5rem', height:'2.5rem', marginTop:'2rem', paddingRight:'1rem' }}></img>
                        </div>
                        <div>
                            <h2> Automated Complainces</h2>
                            <p>Set Compalainces like PF, TDS, PT & ESIC on auto pilot</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        <div className='regForm'>
                <form onSubmit={handleSubmit}>
                    <h1>Lets Get Started</h1>
                    <h4>One account for all Stars products</h4>
                    <div className='inputbox'>
                        <BiBuildings/>
                        <input type='text' name='company' value={company} onChange={handleChange} placeholder='Company Name'></input>
                    </div>
                    <div className='inputbox'>
                        <IoIosContact/>
                        <input type='text' name='name' value={name} onChange={handleChange} placeholder='Contact Name'></input>
                    </div>
                    <div className='inputbox'>
                        <AiOutlineMail/>
                        <input type='mail' name='email' value={email} onChange={handleChange} placeholder='Email Address'></input>
                    </div>
                    <div className='inputbox'>
                        <FiPhoneCall/>
                        <input type='text' name='mobile' value={mobile} onChange={handleChange} placeholder='Contact Number'></input>
                    </div>
                    <div className='inputbox' >
                            <ImLocation/>
                            <select name="country" value={country}  onChange={handleChange}>
                                            <option value=""> Country</option>
                                            <option value="America"> America</option>
                                            <option value="Australia"> Australia</option>
                                            <option value="Bangladesh"> Bangladesh</option>
                                            <option value="India"> India</option>
                                            <option value="Russia"> Russia</option>
                            </select> 
                    </div>
                    <div className='inputbox'> 
                        <TbLocation/>
                        <select name="state" value={state} placeholder='sdsds'  onChange={handleChange}>
                                    <option value=""> State</option>
                                    <option value="Dehli"> Dehli</option>
                                    <option value="Uttar Pradesh"> Uttar Pradesh</option>
                                    <option value="Karnataka"> Karnataka</option>
                                    <option value="Tamil Nadu"> Tamil Nadu</option>
                                    <option value="Kerala"> Kerala</option>
                        </select>
                    </div>
                    <div className='inputbox' >
                        <MdOutlineLocationSearching/>
                        <select name="city" value={city} onChange={handleChange} >
                                    <option value="" placeholder='city'>City</option>
                                    <option value="Bangalore"> Bangalore</option>
                                    <option value="Mumbai"> Mumbai</option>
                                    <option value="Hubli"> Hubli</option>
                                    <option value="Davanagere"> Davanagere</option>
                                    <option value="Mangalore"> Mangalore</option>
                        </select>
                    </div>
                        <p>I agree to the terms of services & privacy policy</p>
                        <button type='submit'>SIGN UP NOW</button>
                        <p>Already have an account? <a href='#'>Sign In</a></p>
                </form>
            </div>
    </div>   
  )
}

export default Container
