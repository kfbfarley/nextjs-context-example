import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Loading from '../components/loading'
import { lang as langs } from '../lang'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
    const [lang, setLang] = useState(langs.en)
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        const code = localStorage.getItem('code')

        if (code) {
            setLang(langs[code])
        }
        setLoading(false)
    }, [])

    const setLanguage = (e) => {
        setLang(langs[e])
        localStorage.setItem('code', e)
    }

    return (
        <AppContext.Provider value={{ lang, setLanguage }}>
            <Head>
                <title>NextJS Context Example | {lang.name || 'Loading'}</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {isloading ? <Loading /> : <Component {...pageProps} />}
        </AppContext.Provider>
    )
}
export default App
