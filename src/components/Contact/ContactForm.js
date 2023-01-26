import { useForm } from 'react-hook-form';
import {useState} from 'react';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
             <h4 style={{fontWeight:"700px",color:"white"}}>Contact Form</h4><br/>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  </div><br/>
                  <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='@yourmail.com'>
                      </input>
{errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
                  </div>
                </div><br/>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 50,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'>
                    </input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div><br/>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div><br/>
                <button className='submit-btn' type='submit'style={{
                        width: '150px',
                        height: '40px',
                        padding: '10px',
                        backgroundColor: isHovering ? 'red' : 'green',
                        color: isHovering ? 'blue' : 'white',
                        borderRadius:"20px"
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;