import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div className='jumbotron'>
                <h1>About Me</h1>
                <p>I love coding!!</p>
                <Link to='/' className='btn btn-primary'>Back to Home</Link>
            </div>
        );
    }
}

export default AboutPage;