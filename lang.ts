import { Languages } from './model/language'

export const lang: Languages = {
    en: {
        code: 'en',
        name: 'English',
        h1: 'Welcome',
        p: 'Please, select a language to try the app.',
        footer: 'Copyright © 2021 Hosted by',
        options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'pt', label: 'Portuguese' }
        ]
    },
    es: {
        code: 'es',
        name: 'Español',
        h1: 'Bienvenido',
        p: 'Por favor, seleccione un idioma para probar la aplicación.',
        footer: 'Copyright © 2021 Alojado por',
        options: [
            { value: 'en', label: 'Inglés' },
            { value: 'es', label: 'Español' },
            { value: 'pt', label: 'Portugués' }
        ]
    },
    pt: {
        code: 'pt',
        name: 'Português',
        h1: 'Bem-vindo',
        p: 'Por favor, selecione um idioma para testar a aplicação.',
        footer: 'Copyright © 2021 Alojado por',
        options: [
            { value: 'en', label: 'Inglês' },
            { value: 'es', label: 'Español' },
            { value: 'pt', label: 'Português' }
        ]
    }
}
