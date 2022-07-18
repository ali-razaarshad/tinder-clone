import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import {IconButton} from "@mui/material";
import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img className='header_logo'
                 src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG6.png"
                 alt="Tinder Logo"/>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header;