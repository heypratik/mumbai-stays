import React, {useContext} from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import Search from './Search';
import { UserContext } from './userContext';
import { useHistory } from "react-router-dom";


function Header() {

    const {showSearch, setShowSearch} = useContext(UserContext)
    const history = useHistory();

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.imgur.com/xuMj4fW.jpg"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <div className='setters'>
                <h4 onClick={() => history.push('/search')}>Anywhere</h4>
                <h4 onClick={() => setShowSearch(!showSearch)}>Date</h4>
                {showSearch && <Search />}
                <input type="text" />
                </div>
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
            <LanguageIcon />
            <MenuIcon />
            <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header
