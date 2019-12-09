import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';

class ContactForm extends React.Component {
    contactUs(fromValues){
        console.log('Form Values:', fromValues);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div><h1>Contact Form</h1>

            <form onSubmit={handleSubmit(this.contactUs)}>
                <Field name='name' component={Input} label='Name' />
                <Field name='email' component={Input} label='Email' type='email'/>
                <Field name='phone' component={Input} label='Phone' type='tel' />
                <Field name='subject' component={Input} label='Subject' type='text'/>
                <Field name='message' component={Input} label='Message' type='text'/>
                {/* <div className='row'>
                <div className='field'>
                    <Field name='Name' component='input' type='text' />
                    <label>Name</label>
                </div>
                </div> */}

                {/* <div className='row'>
                <div className='field'>
                    <Field name='Email' component='input' type='email' />
                    <label>Email</label>
                </div>
                </div>

                <div className='row'>
                <div className='field'>
                    <Field name='Phone' component='input' type='tel' />
                    <label>Phone</label>
                </div>
                </div>

                <div className='row'>
                <div className='field'>
                    <Field name='Subject' component='input' type='text' />
                    <label>Subject</label>
                </div>
                </div>

                <div className='row'>
                <div className='field'>
                    <Field name='Message' component='input' type='text' />
                    <label>Message</label>
                </div>
                </div> */}

                <div className='row'>
                    <button>Send</button>
                </div>

            </form>
            </div>
        )
    }
}

function validate (fromValues){

    const { name, email, phone, subject, message} = fromValues;
    const errors = {};
   if (!name){
       errors.name = "Please enter a name."
   }
   
   if (!email){
    errors.email = "Please enter a email."
    }   

    if (!phone){
    errors.phone = "Please enter a phone."
    }

    if (!subject){
    errors.subject = "Please enter a subject."
    }

    if (!message){
    errors.message = "Please enter a message."
    }
   return errors;
}

export default reduxForm({
    form:'contact-form',
    validate: validate
})(ContactForm);



