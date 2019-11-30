import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends React.Component {
    contactUs(fromValues){
        console.log('Form Values:', fromValues);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div><h1>Contact Form</h1>

            <form onSubmit={handleSubmit(this.contactUs)}>
                <div className='row'>
                <div className='field'>
                    <Field name='Name' component='input' type='text' />
                    <label>Name</label>
                </div>
                </div>

                <div className='row'>
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
                </div>

                <div className='row'>
                    <button>Send</button>
                </div>

            </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'contact-form'
})(ContactForm);



