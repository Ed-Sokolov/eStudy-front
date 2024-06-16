import React from "react";
import { CreateComment } from "./CreateComment";
import { useAppDispatch } from "../../../hooks";
import { createComment } from "../../../API/comments";
import { FormikHelpers } from "formik";
import { type TCreateComment } from "../../../type/create/Comment";

type TCommentCreateContainer = {
    task_id: number
}

export const CreateCommentContainer: React.FC<TCommentCreateContainer> = (
    {
        task_id
    }
) => {
    const dispatch = useAppDispatch();

    const initValues: TCreateComment = {
        content: '',
        task_id
    }

    const submit = (values: TCreateComment, actions: FormikHelpers<TCreateComment>) => {
        dispatch(createComment(values))
            .then(() => {
                actions.resetForm()
            })
    }

    return <CreateComment initValues={initValues} submit={submit} />
}