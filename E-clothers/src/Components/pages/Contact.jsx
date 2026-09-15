import './css/Contact.css'

const Contact = () => {
    return (
           <div className='contact'>
        <div className='container'>
                <div className='contact-us'>
                    <form>
                        <div className='row-form'>
                            <input type="name" name='Name' placeholder='Name:-' />
                            <input type="email" name='email' placeholder='Email:-' />
                        </div>
                          <div className='row-form'>
                            <input type="Phone" name='phone' placeholder='Phone:-' />
                            <input type="address" name='address' placeholder='Address:-' />
                        </div>
                        <textarea name="message" id="message-external" placeholder='Message:-'></textarea>
                          <button className='Primary-B'>SUBMIT</button>
                          {/* <input type="submit" className='Primary-B small-button' value="Subscribe Now"></input> */}
                    </form>
                </div>
        </div>
          </div>
    )
}

export default Contact