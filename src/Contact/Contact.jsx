import React from 'react';

function Contact() {
    return (
        <div className='contact'>
            <div className=" w-50  container">
            <input   id="userName" type="text" placeholder="userName" name="userName" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <input id="userAge" type="text" placeholder="userAge" name="userName" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <input id="userEmail" type="text" placeholder="userEmail" name="userName" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <input id="userPassword" type="text" placeholder="userPassword" name="userName" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
            <button className=' my-2 btn btn-info'>send message</button>
            </div>
            
            
        </div>

    );
}

export default Contact;