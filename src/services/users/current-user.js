import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {userProfileThunk} from "./user-thunks";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userProfileThunk())
    }, [])
    return(children)
}
export default CurrentUser