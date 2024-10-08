/*
    Подробнее об ограничениях работы функций и о рекомендациях при их использовании написано в /readme.md и /docs/explanation.md
    Нежелательные результаты работы функций отражены в ./tests
*/

import { fromKanaEN } from "./en/fromKana.js"
import { fromKanaRU } from "./ru/fromKana.js"

import { toKanaEN } from "./en/toKana.js"
import { toKanaRU } from "./ru/toKana.js"

import type { lang, systems, kana, toKanaOptions, fromKanaOptions, toKanaOptionsEN, toKanaOptionsRU, fromKanaOptionsEN, fromKanaOptionsRU } from "./common/types.js"
import { getLangFromSystem } from "./common/funcs.js"

import { fromKanaErrorCheck, toKanaErrorCheck} from './error-check.js'

export { convertKana } from './convertKana.js'

type fromKanaOptionsModified = (fromKanaOptionsEN & {toLang: 'en'}) | (fromKanaOptionsRU & {toLang: 'ru'})

/**
 * Transcribes the kana in a given text
 * 
 * @param kanaText A text where the kana is used
 * @param toLang A language to transcribe to
 * 
 * @returns The transcribed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#fromKana|Functions overview}
 */
export function fromKana(kanaText: string, toLang?: lang): string

/**
 * Transcribes the kana in a given text
 * 
 * @param kanaText A text where the kana is used
 * @param system A system by which to transcribe
 * 
 * @returns The transcribed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#fromKana|Functions overview}
 */
export function fromKana(kanaText: string, system?: systems): string

/**
 * Transcribes the kana in a given text
 * 
 * @param kanaText A text where the kana is used
 * @param options An object, which include the toLang and system props
 * 
 * @returns The transcribed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#fromKana|Functions overview}
 */
export function fromKana(kanaText: string, options?: fromKanaOptions): string

export function fromKana(kanaText: string, options?: fromKanaOptions | lang | systems): string {
    fromKanaErrorCheck(kanaText, options)

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

    if (optionsModified.toLang === 'ru') return fromKanaRU(kanaText, optionsModified.system)

    return fromKanaEN(kanaText, optionsModified.system) 
}

type toKanaOptionsModified = (toKanaOptionsEN & {fromLang: 'en'}) | (toKanaOptionsRU & {fromLang: 'ru'})

/**
 * Transforms a text to one of the Japanese alphabet
 * 
 * @param text A text to transform
 * @param fromLang A language to transform from
 * 
 * @returns The transformed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#toKana|Functions overview}
 */
export function toKana(text: string, fromLang?: lang): string

/**
 * Transforms a text to one of the Japanese alphabet
 * 
 * @param text A text to transform
 * @param system A system by which to transform
 * 
 * @returns The transformed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#toKana|Functions overview}
 */
export function toKana(text: string, system?: systems): string

/**
 * Transforms a text to one of the Japanese alphabet
 * 
 * @param text A text to transform
 * @param toKana A kana to transform to
 * 
 * @returns The transformed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#toKana|Functions overview}
 */
export function toKana(text: string, toKana?: kana): string

/**
 * Transforms a text to one of the Japanese alphabet
 * 
 * @param text A text to transform
 * @param guess The switch, controlling whether to enable devoiced vowel guessing
 * 
 * @returns The transformed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#toKana|Functions overview}
 */
export function toKana(text: string, guess?: boolean): string

/**
 * Transforms a text to one of the Japanese alphabet
 * 
 * @param text A text to transform
 * @param options An object, which include the fromLang, system, toKana, and guess props
 * 
 * @returns The transformed text
 * 
 * @see {@link https://github.com/18degrees/kana-transformer/blob/main/docs/en/functions.md#toKana|Functions overview}
 */
export function toKana(text: string, options?: toKanaOptions): string

export function toKana(text: string, options?: toKanaOptions | boolean | lang | systems | kana): string {
    toKanaErrorCheck(text, options)

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

    if (optionsModified.fromLang === 'ru') return toKanaRU(text, optionsModified)

    return toKanaEN(text, optionsModified)
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