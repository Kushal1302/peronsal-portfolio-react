import React, { useState } from 'react'
const Contact = ()=>{
    const [input , setInput] = useState({
        name:"",
        number: "",
        email : "",
        summary : ""
    })
    const OnEvent = (e) =>{
        const {name , value} = e.target;
        setInput((prev)=>{
            return {
                ...prev , 
                [name]:value,
            }
        })

    }
    const onFetch = (e) =>{
        e.preventDefault()
        alert("Hello "+input.name + " Your Email : " + input.email )
    }
return (<>

<div className="my-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container">
    <div className="row ">
        <div className="col-md-6 col-10 mx-auto ">
           <form onSubmit={onFetch} >
           <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name:</label>
                    <input type="text" name="name" value={input.name} onChange={OnEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
            </div>
            <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Phone Number:</label>
                   <input type="number"  value={input.number} onChange={OnEvent} name="number" className="form-control" id="" placeholder='Enter Your Phone Number' />
            </div>
            <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Phone Number:</label>
                   <input type="email" name="email" value={input.email} onChange={OnEvent}  className="form-control" id="" placeholder='Enter Your Email' />
            </div>
            <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Summary:</label>
                    <textarea name="summary" value={input.summary} onChange={OnEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12">
                <button type='submit' className='btn btn-outline-success'>Submit Form</button>
            </div>
           </form>

        </div>
    </div>
</div>

</>);
}
export default Contact;