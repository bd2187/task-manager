import { createStore } from 'redux';

const initialState = {
    user: {
        registered: false,
        id: 0,
        email: '',
        username: '',
        profilePic: '',
    },
};
function myReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload };

        case 'LOGOUT':
            return { ...state, ...action.payload };

        default:
            return state;
    }
}

const store = createStore(
    myReducer,
    /*eslint-disable */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// const defaultState_0 = {
//     user: {
//         registered: false,
//         id: 0,
//         email: '',
//         username: '',
//         profilePic: '',
//     },

//     projects: [
//         {
//             id: 2981642822,
//             title: 'Task Manager App',
//             objectives: {
//                 uncategorized: {
//                     incomplete: [],
//                     complete: [],
//                 },
//                 categorized: [
//                     {
//                         id: 1239481028,
//                         title: 'UI/UX',
//                         completed: [],
//                         incomplete: [
//                             {
//                                 id: 3919172631,
//                                 title: 'Create landing page',
//                                 dueDate: 1583814066968,
//                                 priority: 3,
//                                 subTasks: [],
//                                 // fetch comments
//                             },
//                         ],
//                     },
//                 ],
//             },
//         },
//     ],
// };

// const defaultState = {
//     user: {
//         registered: false,
//         id: 0,
//         email: '',
//         username: '',
//         profilePic: '',
//     },

//     projects: [
//         {
//             id: 2981642822,
//             title: 'Task Manager App',
//             objectives: {
//                 uncategorized: {
//                     incomplete: [
//                         {
//                             id: 3918361721,
//                             title: 'Configure Webpack and FE tooling',
//                             dueDate: 1583814066968,
//                             priority: 0,
//                             subTasks: [],
//                             comments: [],
//                         },
//                     ],
//                     complete: [
//                         {
//                             id: 3919172631,
//                             title: 'Create Git Repo',
//                             dueDate: 1583814066968,
//                             priority: 3,
//                             subTasks: [],
//                             comments: [
//                                 {
//                                     commentID: 201928391,
//                                     userID: 2826128981,
//                                     username: 'brandon',
//                                     comment: 'good job!',
//                                     date: 1583814066968,
//                                     replies: [
//                                         {
//                                             commentID: 1293102891,
//                                             userID: 3782732578,
//                                             username: 'bob',
//                                             comment: 'ty! appreciate it!',
//                                             date: 1583814066968,
//                                         },
//                                     ],
//                                 },
//                                 {
//                                     commentID: 3892831091,
//                                     userID: 9381323879,
//                                     username: 'ben',
//                                     comment: 'impressive!',
//                                     date: 1583814066968,
//                                 },
//                             ],
//                         },
//                     ],
//                 },

//                 categories: [
//                     {
//                         id: 1239481028,
//                         title: 'UI/UX',
//                         completed: [],
//                         incomplete: [{}],
//                     },
//                     {
//                         id: 8392739281,
//                         title: 'Config',
//                         completed: [],
//                         incomplete: [],
//                     },
//                 ],
//             },
//         },
//         {
//             id: 1938371381,
//             title: 'Leet Code',
//         },
//     ],
// };
