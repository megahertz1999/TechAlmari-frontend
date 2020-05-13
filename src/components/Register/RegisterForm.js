import React from 'react';
import login from '../../img/login.jpg';

export default function RegisterForm() {
  return (
    <>
      <section class='login_box_area p_120'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6'>
              <div class='login_box_img'>
                <img class='img-fluid' src={login} alt='' />
                <div class='hover'>
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <a class='main_btn' href='registration.html'>
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='login_form_inner'>
                <h3>Create Account</h3>
                <form
                  class='row login_form'
                  action='contact_process.php'
                  method='post'
                  id='contactForm'
                  novalidate='novalidate'
                >
                  <div class='col-md-12 form-group'>
                    <input
                      type='text'
                      class='form-control'
                      id='name'
                      name='name'
                      placeholder='Username'
                    />
                  </div>
                  <div class='col-md-12 form-group'>
                    <input
                      type='email'
                      class='form-control'
                      id='email'
                      name='email'
                      placeholder='Email'
                    />
                  </div>
                  <div class='col-md-12 form-group'>
                    <input
                      type='password'
                      class='form-control'
                      id='password'
                      name='password'
                      placeholder='Password'
                    />
                  </div>
                  <div class='col-md-12 form-group'>
                    <input
                      type='password'
                      class='form-control'
                      id='confirmPassword'
                      name='confirmPassword'
                      placeholder='Confirm Password'
                    />
                  </div>
                  <div class='col-md-12 form-group'>
                    <button type='submit' value='submit' class='btn submit_btn'>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
