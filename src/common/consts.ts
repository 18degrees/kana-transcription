export const spacesRegExp = /[ 　]/g    //учитывается обычной пробемел и тот, что ставится на японской раскладке

export const kanaRegExp = /\p{Script=Kana}{1}|\p{Script=Hira}{1}|ー/ug

export const jpPunctuationMarksRegExp = /[（）｛｝［］【】、，゠…‥。「」『』〝〟：！？〽♪・￥〒]/g
export const spaceBeforeMarksRegExp = /[（｛［【「『〝〽]/
export const spaceAfterMarksRegExp = /[）｝］】」』〟、，。…‥！？♪]/
export const spaceAroundMarksRegExp = /[・￥〒]/

export const kanaAndJpPunctuationMarksRegExp = /\p{Script=Kana}{1}|\p{Script=Hira}{1}|ー|[ 　（）｛｝［］【】、，]/ug