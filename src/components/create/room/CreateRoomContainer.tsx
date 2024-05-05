import React from "react";
import {CreateRoom} from "./CreateRoom";
import { type TCreateRoom } from "../../../type/create/Room";

export const CreateRoomContainer: React.FC = () => {
    const initValues: TCreateRoom = {
        name: '',
        user_id: 1
    }

    const submit = (values: TCreateRoom) => {
        console.log(values);
    }

    return <CreateRoom initValues={initValues} submit={submit}/>
}