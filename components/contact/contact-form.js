import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {

    const response = await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify(contactDetails
            // {
            //     email: enteredEmail,
            //     name: enteredName,
            //     message: enteredMessage
            // }
        ),
        header: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    }
   
}

function ContactForm() {

    const [enteredEmail, setEnteredEmail]     = useState('');
    const [enteredName, setEnteredName]       = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [requestStatus, setRequestStatus]   = useState();
    const [requestError, setRequestError]     = useState();

    useEffect(() => {
        if(requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    },[requestStatus]);

    async function sendMessageHandler(event) {
        
        event.preventDefault();

        //optional: add client validation

        setRequestStatus('pending');

        try{
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            });
            setRequestStatus('success');
            setEnteredEmail('');
            setEnteredName('');
            setEnteredMessage('');
        }catch(error){
            setRequestError(error.message);
            setRequestStatus('error');
        }
    }

    let notification ;
    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending Message...',
            message: 'Your message is on the way'
        };
    }
    if(requestStatus === 'success'){
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        };
    }
    if(requestStatus === 'error'){
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        };
    }
    return (
        <section className={classes.contact}>
            <h1>How can I help You?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.subcontrols}>
                        <div className={classes.control}>
                            <label htmlFor='email'>YOUR EMAIL</label>
                            <input type='email' 
                                    id='email' 
                                    required 
                                    value={enteredEmail} 
                                    onChange={event => setEnteredEmail(event.target.value)}></input>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='name'>YOUR NAME</label>
                            <input type='text' 
                                    id='name' 
                                    required
                                    value={enteredName} 
                                    onChange={event => setEnteredName(event.target.value)}></input>
                        </div>
                    </div>
                    
                    <div className={classes.control}>
                        <label htmlFor='message'>YOUR MESSAGE</label>
                        <textarea id='message' 
                                    row='5'
                                    required 
                                    value={enteredMessage} 
                                    onChange={event => setEnteredMessage(event.target.value)}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>Send Message</button>
                    </div>
                </div>
            </form>
            {notification && <Notification status={notification.status}
                                            title={notification.title}
                                            message={notification.message}/>}
        </section>
    ) 
}

export default ContactForm;