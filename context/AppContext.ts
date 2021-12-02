import { createContext } from 'react'
import { lang } from '../lang'

export type Context = {
    lang: object
    setLanguage?: (string) => void
}

export const eng: Context = {
    lang: lang.en
}

export const AppContext = createContext<Context>(eng)
