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

export interface toKanaOptionsEN extends toKanaCommonOptions {
    fromLang?: 'en'
    system?: systemsEN
}

export interface toKanaOptionsRU extends toKanaCommonOptions {
    fromLang?: 'ru'
    system?: systemsRU
}

export type toKanaOptions = toKanaOptionsEN | toKanaOptionsRU

// transcriptKana()

export interface fromKanaOptionsEN {
    toLang?: 'en'
    system?: systemsEN
}

export interface fromKanaOptionsRU {
    toLang?: 'ru'
    system?: systemsRU
}

export type fromKanaOptions = fromKanaOptionsEN | fromKanaOptionsRU