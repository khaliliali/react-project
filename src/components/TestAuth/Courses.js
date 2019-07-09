import React, { Component } from 'react';

class Courses extends Component {
    state = {
        courses: []
    };

    componentDidMount() {
        fetch('/course', {
            // pass obj to config fetch further
            headers: {
                Authorization: `Bearer ${this.props.auth.getAccessToken()}`
            }
        })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then(response => this.setState({ courses: response.courses }))
            .catch(error => this.setState({ message: error.message }));

        fetch('/admin', {
            // pass obj to config fetch further
            headers: {
                Authorization: `Bearer ${this.props.auth.getAccessToken()}`
            }
        })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then(response => console.log(response))
            .catch(error => this.setState({ message: error.message }));
    }

    render() {
        return (
            <ul className="photo_top_title">
                {this.state.courses.map(course => {
                    return <h2 key={course.id}>{course.title}</h2>;
                })}
            </ul>
        );
    }
}

export default Courses;
