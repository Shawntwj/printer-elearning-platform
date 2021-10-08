import React, { Component, Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';

import Home from './pages/Home';
import LearnersHome from './pages/learners/LearnersHome';
import LearnersEnrolled from './pages/learners/LearnersEnrolled';
import LearnersCompleted from './pages/learners/LearnersCompleted';
import TrainersHome from './pages/trainers/TrainersHome';
import CoursePage from './pages/learners/CoursePage';
import TrainersCourse from './pages/trainers/TrainersCourse';
// import Test from './pages/trainers/Test';
import AdminHome from './pages/hr/AdminHome';
import CourseMaterials from './components/cards/CourseMaterials';
import ChapterQuiz from './pages/learners/ChapterQuiz';
import GradedQuiz from './pages/learners/GradedQuiz';
import CreateQuiz from './pages/trainers/CreateQuiz';
import IndividualTrainer from './pages/hr/IndividualTrainer';
import CreateCourse from './pages/hr/CreateCourse';
import ManageLearners from './pages/hr/ManageLearners';
import QuizAttempt from './pages/learners/QuizAttempt';
import AdminCoursePage from './pages/hr/AdminCoursePage';
import EditClassList from './pages/hr/EditClassList';

class AllRoutes extends Component {
    render(){
        return (
            <Fragment>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/learners-home" component={ LearnersHome }/>
                <Route exact path="/learners-enrolled" component={ LearnersEnrolled }/>
                <Route exact path="/learners-completed" component={ LearnersCompleted }/>
                <Route exact path="/trainers-home" component={ TrainersHome }/>
                <Route exact path="/course-page/:slug" component={ CoursePage }/>
                <Route exact path="/admin-course-page" component={ AdminCoursePage }/>
                {/* <Route path="/course-page/:slug" component={ CoursePage }/> */}
                <Route exact path="/trainers-course" component={ TrainersCourse }/>
                {/* <Route exact path="/test" component={ Test }/> */}
                <Route exact path="/admin-home" component={ AdminHome }/>
                <Route exact path="/course-materials" component={ CourseMaterials }/>
                <Route exact path="/chapter-quiz" component={ ChapterQuiz }/>
                <Route exact path="/final-quiz" component={ GradedQuiz }/>
                <Route exact path="/create-quiz" component={ CreateQuiz }/>
                <Route exact path="/individual-trainer" component={ IndividualTrainer }/>
                <Route exact path="/create-course" component={ CreateCourse }/>
                <Route exact path="/manage-learners" component={ ManageLearners }/>
                <Route exact path="/quiz-attempt" component={ QuizAttempt }/>
                <Route exact path="/edit-classlist" component={ EditClassList }/>
            </Fragment>
        )
    }
}

export default AllRoutes;
