import { kanaRegExp } from './consts.js'

export function isThereKanaAround(prevSyllable: string | undefined, nextSyllable: string | undefined) {
    if (prevSyllable && isKana(prevSyllable)) return true
    if (nextSyllable && isKana(nextSyllable)) return true

    return false
}

function isKana(string: string) {
    return !!string.match(kanaRegExp)
}
