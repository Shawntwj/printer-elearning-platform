import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ChapterQuiz from './learners/ChapterQuiz';
import GradedQuiz from './learners/GradedQuiz';
import QuizAttempt from './learners/QuizAttempt';


class Home extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ margin: '8% 0' }}>
                {/* "starting page!" */}
                {/* <GradedQuiz/> */}
                <QuizAttempt/>
            </div>
        );
    }
}

export default Home;