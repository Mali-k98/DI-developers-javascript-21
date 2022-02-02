import React, { useState } from 'react'
import emailjs from 'emailjs-com'



function Contact(props) {
    const {myRef}=props
    const [result, setResult]=useState(false)

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_063nivi', 'template_9r8n54n', e.target, 'user_ICkuOAfPGjkLSkuVaotZR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setResult(true)
    }
    const Result =()=>{
        alert('your message has been sent!')
        // return(
        //     <p>your message was sent!</p>
        // )
    }

    return (
        <div ref={myRef} className='contact' id="contact">
            <a name='contact'/>
            <h1 style={{fontWeight:900}}>we would love to hear from you</h1>
            <form className='cform' onSubmit={sendEmail}>
                First Name:<br/>
                <input className='input' type='text' name='name'/><br/>
                Last Name:<br/>
                <input className='input' type='text'/><br/>
                Email:<br/>
                <input className='input' type='text' name='email'/><br/>
                Message:<br/>
                <input className='input' id='message' type='text' name='message'/><br/><br/>
                
                <button onClick={Result} className='btn'>Enter</button>
                {/* <div className='row'>
                    {result ? <Result/> : null}
                </div> */}
            </form>
        </div>
    )
}

export default Contact
