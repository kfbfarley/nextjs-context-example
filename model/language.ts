interface Options {
    value: string
    label: string
}
export interface Field {
    code: string
    name: string
    h1: string
    p: string
    footer: string
    options: Options[]
}

export interface Languages {
    [key: string]: Field
}
