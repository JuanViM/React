//esta accion es la que va a modificar el state y cada vez que se modifique el state react va a vovler a pintar todo lo que tenga que pintar

import { types } from "../types/types";





export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

            break;

        default:
            return state;
    }
}