import {
    MAIN,
    CREATE,
    READ,
    UPDATE,
    DELETE
} from "./consts";

import Main from "../pages/Main";
import Create from "../pages/Create";
import Read from "../pages/Read";
import Delete from "../pages/Delete";
import Edit from "../pages/Edit";

export const routes = [
    {
        path: MAIN,
        element: Main,   
    },
    {
        path: CREATE,
        element: Create,   
    },
    {
        path: UPDATE ,
        element: Edit,   
    },
    {
        path: READ,
        element: Read,   
    },
    {
        path: DELETE,
        element: Delete,   
    },
]
