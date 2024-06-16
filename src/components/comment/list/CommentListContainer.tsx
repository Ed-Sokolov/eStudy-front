import React from "react";
import { CommentList } from "./CommentList";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeComment } from "../../../API/comments";
import { type TComment } from "../../../type/Comment";

type TCommentListContainer = {
    comments: TComment[]
}

export type TRemoveCommentHandler = (comment_id: number) => void

export const CommentListContainer: React.FC<TCommentListContainer> = (
    {
        comments
    }
) => {
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const removeCommentHandler: TRemoveCommentHandler = (comment_id) => {
        dispatch(removeComment(comment_id))
    }

    return <CommentList comments={comments} user={user} removeComment={removeCommentHandler} />
}