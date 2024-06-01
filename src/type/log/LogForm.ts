import {FormikHelpers} from "formik";

export type TLogForm<TForm> = {
    initValues: TForm
    submit: (values: TForm, actions: FormikHelpers<TForm>) => void
}