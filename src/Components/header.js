import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header id="header">
                <nav id="nav-wrap" className='flex justify-center bg-navBg p-4 font-quicksand font-semibold text-white items-center'>
                    <ul className='flex space-x-2.5'>
                        <li className='hover:underline'>
                            <a href='#about'>About</a>
                        </li>
                        <li className='hover:underline'>
                            <a href='#experience'>Experiences</a>
                        </li>
                        <li className='hover:underline'>
                            <a href='/#projects'>Projects</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;