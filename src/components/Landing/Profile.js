import React from 'react';
import './Profile.css';

function Profile({url,name}) {
    return(
        <ul className="choose-profile">
        <li className="profile">
          <div>
            <a href='/home'> 
              <div class="avatar-wrapper">
                <img
                  class="profile-icon"
                  alt="profile-t"
                  src={url}
                >
                </img>
              </div>
              <p class="profile-name">{name}</p>
            </a>
          </div>
        </li>
      </ul>
    );
}

export default Profile;