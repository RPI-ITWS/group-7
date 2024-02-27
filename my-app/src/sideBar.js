import React from 'react';
import Museum_Icon from './images/Museum_Icon.png';
import Profile_Icon from './images/Profile_Icon.png';
import Nav_Logo from './images/Nav_Logo.png';
import Book_Icon from './images/Book_Icon.png';

const SideBar = () => {
    return (
        <div style={{transform:'scale(0.8)', width: '100%', height: '100%', position: 'relative', paddingLeft: '100px'}}>
            <div style={{width: 158, height: 965, left: 0, top: 0, position: 'absolute', background: '#FDF3DE'}}></div>
            <div style={{width: 97, left: 31, top: 726, position: 'absolute', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word', overflow: 'hidden'}}>Hello, Username!</div>
            <div style={{width: 102.23, height: 121.5, left: 30, top: 90, position: 'absolute'}}>
                <img src={Nav_Logo} alt="Profile Logo" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: 50, height: 55, left: 54, top: 510.18, position: 'absolute'}}>
                <img src={Profile_Icon} alt="Profile Logo" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: 50, height: 43.52, left: 54, top: 281, position: 'absolute'}}>
                <img src={Museum_Icon} alt="Museum Logo" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: 45, height: 50.25, left: 57, top: 391, position: 'absolute'}}>
                <img src={Book_Icon} alt="Book Logo" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: 45, height: 50.25, left: 57, top: 391, position: 'absolute'}}>
                    
            </div>
        </div>
    );
}

export default SideBar;