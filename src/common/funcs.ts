import { kanaRegExp } from './consts.js'

export function isThereKanaAround(prevSyllable: string | undefined, nextSyllable: string | undefined) {
    if (prevSyllable && isKana(prevSyllable)) return true
    if (nextSyllable && isKana(nextSyllable)) return true

    return false
}

function isKana(string: string) {
    return !!string.match(kanaRegExp)
}

export function isItSmallKana(string: string) {
    return !!string.match(/[ぁァｧぃィｨぅゥｩぇェｪぉォｫゎヮゕヵゖヶゃャゅュょョ]/)
}

export function getLangFromSystem(system: string) {
    if (system === 'nonstandard-ru' || system === 'polivanov' || system === 'static-ru') return 'ru'

    return 'en'
}

export function isItPolysyllableItrationMark(symbolBefore: string, symbolAfter?: string) {
    switch (symbolBefore) {
        case '〱':
            return true
        case '〳':
            return symbolAfter === '〵'
        case '／':
            return symbolAfter === '＼'
        case '/':
            return symbolAfter === '\\'
        default:
            return false
    }
}