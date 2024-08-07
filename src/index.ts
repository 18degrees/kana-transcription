/*
    Подробнее об ограничениях работы функций и о рекомендациях при их использовании написано в /readme.md и /docs/explanation.md
    Нежелательные результаты работы функций отражены в ./tests
*/

import { transcriptKanaEN } from "./en/transcriptKana.js"
import { transcriptKanaRU } from "./ru/transcriptKana.js"

import { transformToKanaEN } from "./en/transformToKana.js"
import { transformToKanaRU } from "./ru/transformToKana.js"

import type { lang, systems, kana, toKanaOptions, fromKanaOptions } from "./common/types.js"
import { getLangFromSystem } from "./common/funcs.js"

import {transcriptKanaErrorCheck, transformToKanaErrorCheck} from './error-check.js'

export { reverseKana } from './reverseKana.js'

export function transcriptKana(kanaText: string, toLang?: lang): string | null
export function transcriptKana(kanaText: string, system?: systems): string | null
export function transcriptKana(kanaText: string, options?: fromKanaOptions): string | null

export function transcriptKana(kanaText: string, options?: fromKanaOptions | lang | systems): string | null {
    transcriptKanaErrorCheck(kanaText, options)

    const optionsModified: fromKanaOptions = typeof options === 'object' ? options : {toLang: 'en'}

    if (typeof options === 'object' && !options.toLang) {
        const langFromSystem = options.system ? getLangFromSystem(options.system) : 'en'

        if (langFromSystem) optionsModified.toLang = langFromSystem

    } else if (typeof options === 'string') {
        const lang = options === 'en' || options === 'ru' ? options : getLangFromSystem(options)

        optionsModified.toLang = lang

        if (
            options === 'hepburn' || options === 'kunrei-shiki' || options === 'nihon-shiki' || 
            options === 'nonstandard-ru' || options === 'polivanov' || options === 'static-ru'
        ) {
            optionsModified.system = options
        }
    }

    return (
        optionsModified.toLang === 'en' ? transcriptKanaEN(kanaText, optionsModified.system) : 
        optionsModified.toLang === 'ru' ? transcriptKanaRU(kanaText, optionsModified.system) : null
    )
}

export function transformToKana(text: string, fromLang?: lang): string | null
export function transformToKana(text: string, system?: systems): string | null
export function transformToKana(text: string, toKana?: kana): string | null
export function transformToKana(text: string, guess?: boolean): string | null
export function transformToKana(text: string, options?: toKanaOptions): string | null

export function transformToKana(text: string, options?: toKanaOptions | boolean | lang | systems | kana): string | null {
    transformToKanaErrorCheck(text, options)

    const optionsModified: toKanaOptions = typeof options === 'object' ? options : {fromLang: 'en'}

    if (typeof options === 'object' && !options.fromLang) {
        const langFromSystem = options.system ? getLangFromSystem(options.system) : 'en'

        if (langFromSystem) optionsModified.fromLang = langFromSystem

    } else if (typeof options === 'boolean') {
        optionsModified.guess = options
    } else if (typeof options === 'string') {
        const lang = options === 'en' || options === 'ru' ? options : getLangFromSystem(options)

        optionsModified.fromLang = lang

        if (options === 'hiragana' || options === 'katakana') optionsModified.toKana = options

        if (
            options === 'hepburn' || options === 'kunrei-shiki' || options === 'nihon-shiki' || 
            options === 'nonstandard-ru' || options === 'polivanov' || options === 'static-ru'
        ) {
            optionsModified.system = options
        }
    }

    return (
        optionsModified.fromLang === 'en' ? transformToKanaEN(text, optionsModified) : 
        optionsModified.fromLang === 'ru' ? transformToKanaRU(text, optionsModified) : null
    ) 
}