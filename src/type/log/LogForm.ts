export type TLogForm<TForm> = {
    initValues: TForm
    submit: (values: TForm) => void
}