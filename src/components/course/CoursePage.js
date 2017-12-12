import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor (props, context) {
        super(props, context);

    // for future reference
        /*
            this.state = {
                course: { title: '' }
            };

            this.onTitleChange = this.onTitleChange.bind(this);
            this.onClickSave = this.onClickSave.bind(this);*/
    }

    // for future reference
   /* onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={index} className='col-md-12'>
                {index+1+')'} {course.title}
            </div>
        );
    }
    */

    render() {
        const { courses } = this.props;
        return (
            <div className="container">
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
        /*  for future reference
        <div className='jumbotron row'>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <div className='col-md-1'>
                    <label htmlFor='courseName'>Add Course</label>
                </div>
                <div className='col-md-3'>
                    <input id='courseName' type='text'
                           className='form-control'
                           onChange={this.onTitleChange}
                           value={this.state.course.title}/>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-success' onClick={this.onClickSave}>Save</button>
                </div>
            </div>*/
    }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);