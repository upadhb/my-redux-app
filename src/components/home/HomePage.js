import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className='jumbotron'>
                <h1>My React Redux App</h1>
                <p>This is the home page for the app</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
            </div>
        );
    }
}

export default HomePage;