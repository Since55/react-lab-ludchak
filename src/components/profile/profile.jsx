import React from 'react';

import './profile.css';

function ProfilePage() {

    return (
        <div className='profile'>
            <img className='profile-img' src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="profile image"/>
            <h2 className='profile-header'>Admin</h2>
        </div>
    )
}

export default ProfilePage;