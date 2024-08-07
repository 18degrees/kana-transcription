import {IncompatibleParamsError, MissingParamError, WrongParamTypeError, WrongParamValueError} from './errors.js'

const systemsEN = new Set(['hepburn', 'kunrei-shiki', 'nihon-shiki'])
const systemsRU = new Set(['nonstandard-ru', 'polivanov', 'static-ru'])

const systems = new Set([...systemsEN, ...systemsRU])
const langs = new Set(['en', 'ru'])

const kana = new Set(['hiragana', 'katakana'])

export function transcriptKanaErrorCheck(kanaText: any, options: any) {
    if (!kanaText) {
        throw new MissingParamError()
    }

    if (typeof kanaText !== 'string') {
        throw new WrongParamTypeError({func: 'transcriptKana', param: 'text'})
    }

    if (typeof options !== 'undefined' && typeof options !== 'string' && typeof options !== 'object') {
        throw new WrongParamTypeError({func: 'transcriptKana'})
    }

    if (typeof options === 'string') {
        if (!langs.has(options) && !systems.has(options)) {
            throw new WrongParamValueError({func: 'transcriptKana'})
        }
    }

    if (typeof options === 'object') {
        if (options.system && typeof options.system !== 'string') {
            throw new WrongParamTypeError({func: 'transcriptKana', param: 'system'})
        }

        if (options.toLang && typeof options.toLang !== 'string') {
            throw new WrongParamTypeError({func: 'transcriptKana', param: 'toLang'})
        }

        if (options.toLang && !langs.has(options.toLang)) {
            throw new WrongParamValueError({func: 'transcriptKana', param: 'toLang'})
        }

        if (options.system && !systems.has(options.system)) {
            throw new WrongParamValueError({func: 'transcriptKana', param: 'system'})
        }

        if (
            (options.toLang === 'en' && options.system && !systemsEN.has(options.system)) ||
            (options.toLang === 'ru' && options.system && !systemsRU.has(options.system))
        ) {
            throw new IncompatibleParamsError({lang: options.toLang, system: options.system})
        }
    }
}

export function transformToKanaErrorCheck(text: any, options: any) {
    if (!text) {
        throw new MissingParamError()
    }

    if (typeof text !== 'string') {
        throw new WrongParamTypeError({func: 'transformToKana', param: 'text'})
    }

    if (typeof options !== 'undefined' && typeof options !== 'string' && typeof options !== 'object' && typeof options !== 'boolean') {
        throw new WrongParamTypeError({func: 'transformToKana'})
    }

    if (typeof options === 'string') {
        if (!langs.has(options) && !systems.has(options) && !kana.has(options)) {
            throw new WrongParamValueError({func: 'transformToKana'})
        }
    }

    if (typeof options === 'object') {
        if (options.system && typeof options.system !== 'string') {
            throw new WrongParamTypeError({func: 'transformToKana', param: 'system'})
        }

        if (options.fromLang && typeof options.fromLang !== 'string') {
            throw new WrongParamTypeError({func: 'transformToKana', param: 'fromLang'})
        }

        if (options.toKana && typeof options.toKana !== 'string') {
            throw new WrongParamTypeError({func: 'transformToKana', param: 'toKana'})
        }

        if (options.guess && typeof options.guess !== 'boolean') {
            throw new WrongParamTypeError({func: 'transformToKana', param: 'guess'})
        }

        if (options.fromLang && !langs.has(options.fromLang)) {
            throw new WrongParamValueError({func: 'transformToKana', param: 'fromLang'})
        }

        if (options.toKana && !kana.has(options.toKana)) {
            throw new WrongParamValueError({func: 'transformToKana', param: 'toKana'})
        }
        if (options.system && !systems.has(options.system)) {
            throw new WrongParamValueError({func: 'transformToKana', param: 'system'})
        }
        if (
            (options.fromLang === 'en' && options.system && !systemsEN.has(options.system)) ||
            (options.fromLang === 'ru' && options.system && !systemsRU.has(options.system))
        ) {
            throw new IncompatibleParamsError({lang: options.fromLang, system: options.system})
        }
    }
}
export function reverseKanaErrorCheck(kanaText: any, toKana: any) {
    if (!kanaText) {
        throw new MissingParamError()
    }
    
    if (typeof kanaText !== 'string') {
        throw new WrongParamTypeError({func: 'reverseKana', param: 'text'})
    }

    if (toKana) {
        if (typeof kanaText !== 'string') {
            throw new WrongParamTypeError({func: 'reverseKana', param: 'toKana'})
        }
    
        if (!kana.has(toKana)) {
            throw new WrongParamValueError({func: 'reverseKana', param: 'toKana'})
        }
    }
}