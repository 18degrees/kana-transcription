import { kanaRegExp } from './consts.js'
import { systems } from './types.js'

export function isThereKanaAround(prevSyllable: string | undefined, nextSyllable: string | undefined) {
    if (prevSyllable && isKana(prevSyllable)) return true
    if (nextSyllable && isKana(nextSyllable)) return true

    return false
}

function isKana(string: string) {
    return !!string.match(kanaRegExp)
}

export function isItSmallKana(string: string) {
    return !!string.match(/[ぁァぃィぅゥぇェぉォゎヮゕヵゖヶゃャゅュょョ]/)
}

export function getLangFromSystem(system: systems | string) {
    return (
        (system === 'hepbern' || system === 'kunrei-shiki' || system === 'nihon-shiki') ? 'en' :
        (system === 'nonstandard-ru' || system === 'polivanov' || system === 'static-ru') ? 'ru' : undefined
    )
}