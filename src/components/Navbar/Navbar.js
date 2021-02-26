import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'


export class Navbar extends Component {
    state={
        isOpen : false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const {isOpen} = this.state
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="nav-logo">
                            Lario
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle} 
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen?"nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>   
            </nav>
        )
    }
}

export default Navbar
