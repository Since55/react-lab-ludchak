import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {

    return (
        <header className='header-main'>
            <Link to='/'>
                <button>
                    Home
                </button>
            </Link>

            <Link to='/news'>
                <button>
                    News
                </button>
            </Link>

            <Link to='/profile'>
                <button>
                    Profile
                </button>
            </Link>
            {/* <Link to='/login'>
                <button>
                    Login
                </button>
            </Link> */}
        </header>
    );
}

export default Header;