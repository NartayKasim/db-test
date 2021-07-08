import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructorNav() {
    return (
        <nav className="instructor-nav">
            <Link to='/about'>
                <h3>About</h3>
            </Link>
            <h3>First Link</h3>
            <h3>Second Link</h3>
        </nav>
    )
}