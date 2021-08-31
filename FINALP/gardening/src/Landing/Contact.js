import React from 'react'

function Contact() {
    return (
        <div className='contact'>
            <h1 style={{fontWeight:900}}>we would love to hear from you</h1>
            <form className='cform'>
                First Name:<br/>
                <input className='input' type='text'/><br/>
                Last Name:<br/>
                <input className='input' type='text'/><br/>
                Email:<br/>
                <input className='input' type='text'/><br/>
                Message:<br/>
                <input className='input' id='message' type='text'/><br/>
                <button>Enter</button>
            </form>
        </div>
    )
}

export default Contact
