import {
    AUTH_ROUTE,
    NOTES_ROUTE, USER_ROUTE,
    REGISTRATION_ROUTE, SEARCH_ROUTE, CREATE_ROUTE
} from "./utils/consts";
import Auth from "./page/Auth";
import Registration from "./page/Registration";
import Notes from "./page/Notes";
import User from "./page/User";
import SearchNotes from "./page/SearchNotes";
import Create from "./page/Create";

export const authRoutes = [
    {
        path: NOTES_ROUTE + '/:id',
        Component: Notes
    },
    {
        path: USER_ROUTE + '/:id',
        Component: User
    },
    {
        path: SEARCH_ROUTE ,
        Component: SearchNotes
    }
]

export const publicRoutes = [
    {
        path: AUTH_ROUTE ,
        Component: Auth
    }
]

export const doctorRoutes = [
    {
        path: REGISTRATION_ROUTE ,
        Component: Registration
    },
    {
        path: SEARCH_ROUTE ,
        Component: SearchNotes
    },
    {
        path: NOTES_ROUTE + '/:id',
        Component: Notes
    },
    {
        path: USER_ROUTE + '/:id',
        Component: User
    },
    {
        path: CREATE_ROUTE,
        Component: Create
    }
]