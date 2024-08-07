import {IncompatibleParamsError, MissingParamError, WrongParamTypeError, WrongParamValueError} from './errors.js'

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

    if (typeof options === 'object') {
        if (options.system && typeof options.system !== 'string') {
            throw new WrongParamTypeError({func: 'transcriptKana', param: 'system'})
        }

        if (options.toLang && typeof options.toLang !== 'string') {
            throw new WrongParamTypeError({func: 'transcriptKana', param: 'toLang'})
        }

        if (options.toLang && options.toLang !== 'en' && options.toLang !== 'ru') {
            throw new WrongParamValueError({func: 'transcriptKana', param: 'toLang'})
        }

        if (
                options.system && 
                options.system !== 'hepbern' && options.system !== 'kunrei-shiki' && options.system !== 'nihon-shiki' && 
                options.system !== 'nonstandard-ru' && options.system !== 'polivanov' && options.system !== 'static-ru'
        ) {
            throw new WrongParamValueError({func: 'transcriptKana', param: 'system'})
        }

        if (
            (options.toLang === 'en' && options.system && options.system !== 'hepbern' && options.system !== 'kunrei-shiki' && options.system !== 'nihon-shiki') ||
            (options.toLang === 'ru' && options.system && options.system !== 'nonstandard-ru' && options.system !== 'polivanov' && options.system !== 'static-ru')
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

        if (options.fromLang && options.fromLang !== 'en' && options.fromLang !== 'ru') {
            throw new WrongParamValueError({func: 'transformToKana', param: 'fromLang'})
        }

        if (options.toKana && options.toKana !== 'hiragana' && options.toKana !== 'katakana') {
            throw new WrongParamValueError({func: 'transformToKana', param: 'toKana'})
        }
        if (
            options.system && 
            options.system !== 'hepbern' && options.system !== 'kunrei-shiki' && options.system !== 'nihon-shiki' && 
            options.system !== 'nonstandard-ru' && options.system !== 'polivanov' && options.system !== 'static-ru'
        ) {
            throw new WrongParamValueError({func: 'transformToKana', param: 'system'})
        }
        if (
            (options.fromLang === 'en' && options.system && options.system !== 'hepbern' && options.system !== 'kunrei-shiki' && options.system !== 'nihon-shiki') ||
            (options.fromLang === 'ru' && options.system && options.system !== 'nonstandard-ru' && options.system !== 'polivanov' && options.system !== 'static-ru')
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
    
        if (toKana !== 'hiragana' && toKana !== 'katakana') {
            throw new WrongParamValueError({func: 'reverseKana', param: 'toKana'})
        }
    }
}