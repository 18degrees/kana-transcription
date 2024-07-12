/*
    Подробнее об ограничениях работы функций и о рекомендациях при их использовании написано в /readme.md и /docs/explanation.md
    Нежелательные результаты работы функций отражены в ./tests
*/

import { transcriptKanaEN } from "./en/transcriptKana.js"
import { transcriptKanaRU } from "./ru/transcriptKana.js"

import { transformToKanaEN } from "./en/transformToKana.js"
import { transformToKanaRU } from "./ru/transformToKana.js"

import type { kana, lang } from "./type-common/index.js"


export function transcriptKana(kanaText: string, toLang: lang = 'en'): string | null {
    return (
        toLang === 'en' ? transcriptKanaEN(kanaText) : 
        toLang === 'ru' ? transcriptKanaRU(kanaText) : null
    )
}

export function transformToKana(text: string, fromLang: lang, toKana: kana): string | null {
    return (
        fromLang === 'en' ? transformToKanaEN(text, toKana) : 
        fromLang === 'ru' ? transformToKanaRU(text, toKana) : null
    ) 
}

export { reverseKana } from './common/reverseKana.js'