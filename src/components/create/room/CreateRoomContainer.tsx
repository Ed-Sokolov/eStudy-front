import React, { useEffect } from "react";
import { CreateRoom } from "./CreateRoom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getStudents } from "../../../API/students";
import { FormikHelpers } from "formik";
import { createRoom } from "../../../API/rooms";
import { useNavigate } from "react-router-dom";
import { type TCreateRoom } from "../../../type/create/Room";

export const CreateRoomContainer: React.FC = () => {
    const
        {
            students
        } = useAppSelector(state => state.student),
        dispatch = useAppDispatch(),
        navigate = useNavigate()

    useEffect(() => {
        dispatch(getStudents())
    }, []);

    const initValues: TCreateRoom = {
        name: '',
        students: [],
    }

    const submit = (values: TCreateRoom, actions: FormikHelpers<TCreateRoom>) => {
        dispatch(createRoom(values))
            .then((res) => {
                if (res.payload && res.payload.id)
                {
                    navigate(`/rooms/${res.payload.id}`)
                }
            })
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0])
                }
            })
    }

    return <CreateRoom initValues={initValues} submit={submit} peopleOptions={students}/>
}