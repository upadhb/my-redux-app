import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// for future reference
/*export function createCourse (course) {
    return {
        type: types.CREATE_COURSE,
        payload: course
    }
}*/

export function loadCourcesSuccess (courses) {
    return {
        type: types.LOAD_COURSE_SUCCESS,
        payload: courses
    }
}

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses()
            .then( courses => {
                dispatch(loadCourcesSuccess(courses));
            }).catch( error => {
                throw(error);
            })
    }
}