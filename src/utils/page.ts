const HOME_PAGE_PATH = '/home';
const ERROR_PAGE_PATH = '/error';
const LOGIN_PAGE_PATH = '/login';
const HOME_PATH = '/home';
const STUDENT_PAGE = (studentId: string) => `/students/${studentId}`
const ADD_INTERN = '/students/add';
const INTERNSHIP_PAGE = (studentId: string, internshipId: string) => `/students/${studentId}/internships/${internshipId}`
const ADD_INTERNSHIP_PAGE = (studentId: string) => `/students/${studentId}/internships/add`
const EDIT_STUDENT_PAGE = (studentId: string) => `/students/${studentId}/edit`

const LAYOUT_WITH_NAVBAR = 'layout-with-navbar';
const LAYOUT_LOGIN = 'login-layout';

export const pages = {
    LAYOUT_WITH_NAVBAR: LAYOUT_WITH_NAVBAR,
    LAYOUT_LOGIN,
};

export const pagesPath = {
    ERROR_PAGE_PATH,
    HOME_PAGE_PATH,
    LOGIN_PAGE_PATH,
    HOME_PATH,
    STUDENT_PAGE,
    ADD_INTERN,
    INTERNSHIP_PAGE,
    ADD_INTERNSHIP_PAGE,
    EDIT_STUDENT_PAGE
};
