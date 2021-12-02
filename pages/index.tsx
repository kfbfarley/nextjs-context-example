import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Field } from '../model/language'

export default function Home() {
    const { lang, setLanguage } = useContext(AppContext)
    let { code, name, h1, p, footer, options } = lang as Field

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='sm:text-6xl text-3xl font-bold'>{h1}</h1>
                <p className='mt-3 text-2xl'>{p}</p>
                <p className='hidden'>{name}</p>
                <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
                    <select
                        className='bg-white border border-white rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => {
                            setLanguage(e.target.value)
                        }}
                        value={code}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </main>

            <footer className='flex items-center justify-center w-full h-24 border-t'>
                <a
                    className='flex items-center justify-center'
                    href='https://vercel.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {footer}{' '}
                    <img
                        src='/vercel.svg'
                        alt='Vercel Logo'
                        className='h-4 ml-2'
                    />
                </a>
            </footer>
        </div>
    )
}
