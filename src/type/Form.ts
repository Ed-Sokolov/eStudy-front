import { FormikHelpers } from "formik";

export type TForm<TValues> = {
    initValues: TValues
    submit: (values: TValues, actions: FormikHelpers<TValues>) => void
}