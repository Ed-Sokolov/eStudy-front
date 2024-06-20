import React, { useEffect } from "react";
import { EditRoom } from "./EditRoom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getStudents } from "../../../API/students";
import { FormikHelpers } from "formik";
import { getRoom, removeRoom, updateRoom } from "../../../API/rooms";
import { useNavigate, useParams } from "react-router-dom";
import { resetRoom } from "../../../Store/room/RoomSlice";
import { type TEditRoom } from "../../../type/edit/Room";

export const EditRoomContainer: React.FC = () => {
    const
        {
            students
        } = useAppSelector(state => state.student),
        {
            room
        } = useAppSelector(state => state.room),
        dispatch = useAppDispatch(),
        navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getStudents())

        if (id && !isNaN(Number(id)))
        {
            dispatch(getRoom(Number(id)))
        }

        return () => {
            dispatch(resetRoom())
        }
    }, []);

    const submit = (values: TEditRoom, actions: FormikHelpers<TEditRoom>) => {
        dispatch(updateRoom(values))
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

    const removeRoomHandler = (id: number) => {
        dispatch(removeRoom(id))
            .then(() => {
                navigate('/rooms/')
            })
    }

    return room
        ? <EditRoom initValues={room} submit={submit} peopleOptions={students} removeRoomHandler={removeRoomHandler}/>
        : <div>Loading...</div>
}