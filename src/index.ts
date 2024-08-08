/*
    Подробнее об ограничениях работы функций и о рекомендациях при их использовании написано в /readme.md и /docs/explanation.md
    Нежелательные результаты работы функций отражены в ./tests
*/

import { transcriptKanaEN } from "./en/transcriptKana.js"
import { transcriptKanaRU } from "./ru/transcriptKana.js"

import { transformToKanaEN } from "./en/transformToKana.js"
import { transformToKanaRU } from "./ru/transformToKana.js"

import type { lang, systems, kana, toKanaOptions, fromKanaOptions, toKanaOptionsEN, toKanaOptionsRU, fromKanaOptionsEN, fromKanaOptionsRU } from "./common/types.js"
import { getLangFromSystem } from "./common/funcs.js"

import {transcriptKanaErrorCheck, transformToKanaErrorCheck} from './error-check.js'

export { reverseKana } from './reverseKana.js'

type fromKanaOptionsModified = (fromKanaOptionsEN & {toLang: 'en'}) | (fromKanaOptionsRU & {toLang: 'ru'})

export function transcriptKana(kanaText: string, toLang?: lang): string
export function transcriptKana(kanaText: string, system?: systems): string
export function transcriptKana(kanaText: string, options?: fromKanaOptions): string

export function transcriptKana(kanaText: string, options?: fromKanaOptions | lang | systems): string {
    transcriptKanaErrorCheck(kanaText, options)

    //На этом этапе конфликт между выставленным языком и системой исключён

    const optionsModified = (
        typeof options === 'object' ? 
            {...options, fromLang: getLang(options.toLang ? options.toLang : options.system)} :
            {toLang: getLang(options)}
    ) as fromKanaOptionsModified

    if (typeof options === 'string') {
        if (
            options === 'hepburn' || options === 'kunrei-shiki' || options === 'nihon-shiki' || 
            options === 'nonstandard-ru' || options === 'polivanov' || options === 'static-ru'
        ) {
            optionsModified.system = options
        }
    }

    if (optionsModified.toLang === 'ru') return transcriptKanaRU(kanaText, optionsModified.system)

    return transcriptKanaEN(kanaText, optionsModified.system) 
}

type toKanaOptionsModified = (toKanaOptionsEN & {fromLang: 'en'}) | (toKanaOptionsRU & {fromLang: 'ru'})

export function transformToKana(text: string, fromLang?: lang): string
export function transformToKana(text: string, system?: systems): string 
export function transformToKana(text: string, toKana?: kana): string
export function transformToKana(text: string, guess?: boolean): string
export function transformToKana(text: string, options?: toKanaOptions): string

export function transformToKana(text: string, options?: toKanaOptions | boolean | lang | systems | kana): string {
    transformToKanaErrorCheck(text, options)

    //На этом этапе конфликт между выставленным языком и системой исключён

    const optionsModified = (
        typeof options === 'object' ? 
            {...options, fromLang: getLang(options.fromLang ? options.fromLang : options.system)} :
            {fromLang: getLang(options)}
    ) as toKanaOptionsModified

    if (typeof options === 'boolean') {
        optionsModified.guess = options

    } else if (typeof options === 'string') {
        switch (options) {
            case 'hiragana':
            case 'katakana':
                optionsModified.toKana = options
                break
            case 'hepburn':
            case 'kunrei-shiki':
            case 'nihon-shiki':
            case 'polivanov':
            case 'nonstandard-ru':
            case 'static-ru':
                optionsModified.system = options
                break
            default:
                break
        }
    }

    if (optionsModified.fromLang === 'ru') return transformToKanaRU(text, optionsModified)

    return transformToKanaEN(text, optionsModified)
}

function getLang(option?: lang | systems | kana | boolean): lang {
    if (option === 'en' || option === 'ru') return option

    if (
        option === 'hepburn' || option === 'kunrei-shiki' || option === 'nihon-shiki' || 
        option === 'nonstandard-ru' || option === 'polivanov' || option === 'static-ru'
    ) {
        return getLangFromSystem(option)
    }

    return 'en'
}