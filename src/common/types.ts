export type kana = 'hiragana' | 'katakana'

export type lang = 'ru' | 'en'

export type systemsEN = 'hepburn' | 'kunrei-shiki' | 'nihon-shiki' 

export type systemsRU = 'nonstandard-ru' | 'polivanov' | 'static-ru'

export type systems = systemsEN | systemsRU

// transformToKana()

export interface toKanaCommonOptions {
    toKana?: kana
    guess?: boolean
}

interface toKanaOptionsEN extends toKanaCommonOptions {
    fromLang?: 'en'
    system?: systemsEN
}

interface toKanaOptionsBySystemRU extends toKanaCommonOptions {
    fromLang?: 'ru'
    system: systemsRU
}
interface toKanaOptionsByLangRU extends toKanaCommonOptions {
    fromLang: 'ru'
    system?: systemsRU
}
//на выбор можно ввести либо систему, либо язык (или и то и другое)

type toKanaOptionsRU = toKanaOptionsByLangRU | toKanaOptionsBySystemRU

export type toKanaOptions = toKanaOptionsEN | toKanaOptionsRU

// transcriptKana()

interface fromKanaOptionsEN {
    toLang?: 'en'
    system?: systemsEN
}

interface fromKanaOptionsBySystemRU {
    toLang?: 'ru'
    system: systemsRU
}
interface fromKanaOptionsByLangRU {
    toLang: 'ru'
    system?: systemsRU
}
//на выбор можно ввести либо систему, либо язык (или и то и другое)

type fromKanaOptionsRU = fromKanaOptionsByLangRU | fromKanaOptionsBySystemRU

export type fromKanaOptions = fromKanaOptionsEN | fromKanaOptionsRU