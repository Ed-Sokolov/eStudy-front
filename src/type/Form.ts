export type TForm<TValues> = {
    initValues: TValues
    submit: (values: TValues) => void
}