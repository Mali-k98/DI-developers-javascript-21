import React from 'react'
import emailjs from 'emailjs-com'
import {useEffect} from  'react'

function Contact() {
    

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_9r8n54n', e.target, 'user_ICkuOAfPGjkLSkuVaotZR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    
    return (
        <div className='contact'>
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
                
                <button>Enter</button>
            </form>
        </div>
    )
}

export default Contact
