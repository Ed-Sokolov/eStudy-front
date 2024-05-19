import React from "react";
import { CreateRoom } from "./CreateRoom";
import { type TCreateRoom } from "../../../type/create/Room";
import { type TSelectOption } from "../../../type/select/Option";

export const CreateRoomContainer: React.FC = () => {
    const initValues: TCreateRoom = {
        name: '',
        user_id: 1,
        people: [],
    }

    const submit = (values: TCreateRoom) => {
        console.log(values);
    }

    const peopleOptions: TSelectOption[] = [
        { value: '1', label: 'Eduard' },
        { value: '2', label: 'Maxim' },
        { value: '3', label: 'Misha' },
        { value: '4', label: 'Andrew' },
        { value: '5', label: 'Igor' },
        { value: '6', label: 'Pasha' },
        { value: '7', label: 'Oleg' },
        { value: '8', label: 'Nastya' },
        { value: '9', label: 'Alina' },
    ]

    return <CreateRoom initValues={initValues} submit={submit} peopleOptions={peopleOptions}/>
}