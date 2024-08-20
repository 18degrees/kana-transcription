import type { lang } from './common/types'

type func = 'fromKana' | 'toKana' | 'convertKana'
type param = 'toKana' | 'fromLang' | 'toLang' | 'system' | 'guess' | 'text'


export class MissingParamError extends Error {
    constructor() {
        super("There is a missing param: text must be provided.")
        this.name = 'MissingParamError'
    }
}

interface IWrongParamValueError {
    func: func
    param?: param
}
export class WrongParamValueError extends Error {
    constructor({func, param}: IWrongParamValueError) {
        super(`An invalid param was passed. 
            ${param ? `The param '${param}' must be ${
                    param === 'text' ? "the 'String' type" : 
                    param === 'toKana' ? "equal to either 'hiragana' or 'katakana'" : 
                    param === 'fromLang' || param === 'toLang' ? "equal to either 'en' or 'ru'" :
                    param === 'guess' ? "the 'Boolean' type" : 
                    param === 'system' ? "equal to either 'hepburn', 'kunrei-shiki', 'nihon-shiki', 'nonstandard-ru', 'polivanov', or 'static-ru'" : null
                }.` : `Execute the '${func}' function using one of the following scenarios: ${func === 'toKana' ? `
                    toKana(text: string, fromLang?: 'en' | 'ru')
                    toKana(text: string, system?: 'hepburn' | 'kunrei-shiki' | 'nihon-shiki' | 'nonstandard-ru' | 'polivanov' | 'static-ru')
                    toKana(text: string, toKana?: 'hiragana' | 'katakana')
                    toKana(text: string, guess?: boolean)
                    toKana(text: string, options?: object with the given above second params)` : 
                    func === 'fromKana' ? `
                    fromKana(kanaText: string, toLang?: 'en' | 'ru')
                    fromKana(kanaText: string, system?: 'hepburn' | 'kunrei-shiki' | 'nihon-shiki' | 'nonstandard-ru' | 'polivanov' | 'static-ru')
                    fromKana(kanaText: string, options?: object with the given above second params)` : 
                    func === 'convertKana' ? `
                    convertKana(text: string, toKana?: 'hiragana' | 'katakana')` : null
                }.`
            }
        `)
        this.name = "WrongParamValueError";
    }
}

export class WrongParamTypeError extends WrongParamValueError {
    constructor({func, param}: IWrongParamValueError) {
        super({func, param})
        this.name = 'WrongParamTypeError'
    }
}

interface IIncompatibleParamsError {
    system: any,
    lang: lang
}

export class IncompatibleParamsError extends Error {
    constructor({system, lang}: IIncompatibleParamsError) {
        super(
            `The passed system param incompatible with the language.
            You can:
                1. Don't pass the system param, which will set it to the default value: ${lang === 'en' ? "'hepburn' for English." : lang === 'ru' ? "'polivanov' for Russian." : null}
                2. Choose the system to use. For the '${lang}' lang you can pass: ${lang === 'en' ? "'hepburn', 'kunrei-shiki' or 'nihon-shiki'" : lang === 'ru' ? "'polivanov', 'nonstandard-ru' or 'static-ru'" : null}.
            Were provided: '${lang}' language with '${system}'.
        `)
        this.name = "IncompatibleParamsError"
    }
}