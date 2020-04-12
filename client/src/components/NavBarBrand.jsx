import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

class NavBarBrand extends Component {
    render() {
        return (
            <Link to="/" className="navbar-brand">
                <img src={logo} width="50" height="50" alt="logo" />
                My Movies
            </Link>
        )
    }
}

export default NavBarBrand