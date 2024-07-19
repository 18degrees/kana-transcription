export const spacesRegExp = /[ 　]/g    //учитывается обычный пробел и тот, что ставится на японской раскладке

export const kanaRegExp = /\p{Script=Kana}{1}|\p{Script=Hira}{1}|ー/ug