import { saveQuestion } from '../utils/api';
import { saveQuestionAnswer } from '../utils/api';
import { addAnswerToUser, addQuestionToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    info: { authedUser, qid, answer },
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(addQuestionAnswer({ authedUser, qid, answer })))
      .then(() => dispatch(addAnswerToUser(authedUser, qid, answer)));
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const author = authedUser;
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => dispatch(addQuestionToUser(question)));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
