export function transcriptKanaEN(kanaText: string): string | null {
    const allKanaRegExp = /\p{Script=Kana}{1}|\p{Script=Hira}{1}|ー/ug

    const splitedSentence = kanaText.toLowerCase().split(' ')

    const isThereOnlyOneWord = splitedSentence.length === 1

    const transcriptedWords: string[] = []

    for (const word of splitedSentence) {
        const splitedWord = word.match(allKanaRegExp)

        if (!splitedWord) continue
        
        const isItTheOnlySyllable = splitedWord.length === 1
        
        const transcriptedSplitedWord: string[] = []
        
        splitedWord.forEach((kana, index) => {
            let transcriptedSyllable = ''

            switch (kana) {
                case 'あ':
                case 'ア': 
                    transcriptedSyllable = 'a'
                    break
                case 'い':
                case 'イ':
                    transcriptedSyllable = 'i'
                    break
                case 'う':
                case 'ウ':
                    transcriptedSyllable = 'u'
                    break
                case 'え':
                case 'エ':
                    transcriptedSyllable = 'e'
                    break
                case 'お':
                case 'オ':
                    transcriptedSyllable = 'o'
                    break
                case 'か':
                case 'カ':
                    transcriptedSyllable = 'ka'
                    break
                case 'き':
                case 'キ':
                    transcriptedSyllable = 'ki'
                    break
                case 'く':
                case 'ク':
                    transcriptedSyllable = 'ku'
                    break
                case 'け':
                case 'ケ':
                    transcriptedSyllable = 'ke'
                    break
                case 'こ':
                case 'コ':
                    transcriptedSyllable = 'ko'
                    break
                case 'が':
                case 'ガ':
                    transcriptedSyllable = 'ga'
                    break
                case 'ぎ':
                case 'ギ':
                    transcriptedSyllable = 'gi'
                    break
                case 'ぐ':
                case 'グ':
                    transcriptedSyllable = 'gu'
                    break
                case 'げ':
                case 'ゲ':
                    transcriptedSyllable = 'ge'
                    break
                case 'ご':
                case 'ゴ':
                    transcriptedSyllable = 'go'
                    break
                case 'さ':
                case 'サ':
                    transcriptedSyllable = 'sa'
                    break
                case 'し':
                case 'シ':
                    transcriptedSyllable = 'shi'
                    break
                case 'す':
                case 'ス':
                    transcriptedSyllable = 'su'
                    break
                case 'せ':
                case 'セ':
                    transcriptedSyllable = 'se'
                    break
                case 'そ':
                case 'ソ':
                    transcriptedSyllable = 'so'
                    break
                case 'ざ':
                case 'ザ':
                    transcriptedSyllable = 'za'
                    break
                case 'じ':
                case 'ジ':
                    transcriptedSyllable = 'ji'
                    break
                case 'ず':
                case 'ズ':
                    transcriptedSyllable = 'zu'
                    break
                case 'ぜ':
                case 'ゼ':
                    transcriptedSyllable = 'ze'
                    break
                case 'ぞ':
                case 'ゾ':
                    transcriptedSyllable = 'zo'
                    break
                case 'た':
                case 'タ':
                    transcriptedSyllable = 'ta'
                    break
                case 'ち':
                case 'チ':
                    transcriptedSyllable = 'chi'
                    break
                case 'つ':
                case 'ツ':
                    transcriptedSyllable = 'tsu'
                    break
                case 'て':
                case 'テ':
                    transcriptedSyllable = 'te'
                    break
                case 'と':
                case 'ト':
                    transcriptedSyllable = 'to'
                    break
                case 'だ':
                case 'ダ':
                    transcriptedSyllable = 'da'
                    break
                case 'ぢ':
                case 'ヂ':
                    transcriptedSyllable = 'ji'
                    break
                case 'づ':
                case 'ヅ':
                    transcriptedSyllable = 'zu'
                    break
                case 'で':
                case 'デ':
                    transcriptedSyllable = 'de'
                    break
                case 'ど':
                case 'ド':
                    transcriptedSyllable = 'do'
                    break
                case 'な':
                case 'ナ':
                    transcriptedSyllable = 'na'
                    break
                case 'に':
                case 'ニ':
                    transcriptedSyllable = 'ni'
                    break
                case 'ぬ':
                case 'ヌ':
                    transcriptedSyllable = 'nu'
                    break
                case 'ね':
                case 'ネ':
                    transcriptedSyllable = 'ne'
                    break
                case 'の':
                case 'ノ':
                    transcriptedSyllable = 'no'
                    break
                case 'は':
                    transcriptedSyllable = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'wa' : 'ha'
                    break
                case 'ハ':
                    transcriptedSyllable = 'ha'
                    break
                case 'ひ':
                case 'ヒ':
                    transcriptedSyllable = 'hi'
                    break
                case 'ふ':
                case 'フ':
                    transcriptedSyllable = 'fu'
                    break
                case 'へ':
                    transcriptedSyllable = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'e' : 'he'
                    break
                case 'ヘ':
                    transcriptedSyllable = 'he'
                    break
                case 'ほ':
                case 'ホ':
                    transcriptedSyllable = 'ho'
                    break
                case 'ば':
                case 'バ':
                    transcriptedSyllable = 'ba'
                    break
                case 'び':
                case 'ビ':
                    transcriptedSyllable = 'bi'
                    break
                case 'ぶ':
                case 'ブ':
                    transcriptedSyllable = 'bu'
                    break
                case 'べ':
                case 'ベ':
                    transcriptedSyllable = 'be'
                    break
                case 'ぼ':
                case 'ボ':
                    transcriptedSyllable = 'bo'
                    break
                case 'ぱ':
                case 'パ':
                    transcriptedSyllable = 'pa'
                    break
                case 'ぴ':
                case 'ピ':
                    transcriptedSyllable = 'pi'
                    break
                case 'ぷ':
                case 'プ':
                    transcriptedSyllable = 'pu'
                    break
                case 'ぺ':
                case 'ペ':
                    transcriptedSyllable = 'pe'
                    break
                case 'ぽ':
                case 'ポ':
                    transcriptedSyllable = 'po'
                    break
                case 'ま':
                case 'マ':
                    transcriptedSyllable = 'ma'
                    break
                case 'み':
                case 'ミ':
                    transcriptedSyllable = 'mi'
                    break
                case 'む':
                case 'ム':
                    transcriptedSyllable = 'mu'
                    break
                case 'め':
                case 'メ':
                    transcriptedSyllable = 'me'
                    break
                case 'も':
                case 'モ':
                    transcriptedSyllable = 'mo'
                    break
                case 'や':
                case 'ヤ':
                    transcriptedSyllable = 'ya'
                    break
                case 'ゆ':
                case 'ユ':
                    transcriptedSyllable = 'yu'
                    break
                case 'よ':
                case 'ヨ':
                    transcriptedSyllable = 'yo'
                    break
                case 'ら':
                case 'ラ':
                    transcriptedSyllable = 'ra'
                    break
                case 'り':
                case 'リ':
                    transcriptedSyllable = 'ri'
                    break
                case 'る':
                case 'ル':
                    transcriptedSyllable = 'ru'
                    break
                case 'れ':
                case 'レ':
                    transcriptedSyllable = 're'
                    break
                case 'ろ':
                case 'ロ':
                    transcriptedSyllable = 'ro'
                    break
                case 'わ':
                case 'ワ':
                    transcriptedSyllable = 'wa'
                    break
                case 'を':
                    transcriptedSyllable = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'o' : 'wo'
                    
                    break
                case 'ヲ':
                    transcriptedSyllable = 'wo'
                    break
                case 'ん': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null | undefined = nextKana ? transcriptKanaEN(nextKana) : undefined

                    const nextLetter = nextSyllableTranscription ? nextSyllableTranscription[0] : undefined

                    if (nextLetter && hasOnlyVowel(nextLetter)) {
                        transcriptedSyllable = "n'"
                        break
                    }
                    transcriptedSyllable = 'n'
                    break
                }
                case 'ン':
                    transcriptedSyllable = 'n'
                    break
                case 'ゃ':
                case 'ャ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (!prevSyllableConsonants || prevSyllableConsonants.length > 2) break

                    transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    
                    transcriptedSyllable = prevSyllableConsonants.length === 2 ? 'a' : 'ya'
                    break
                }
                case 'ゅ':
                case 'ュ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (!prevSyllableConsonants || prevSyllableConsonants.length > 2) break
                    
                    transcriptedSplitedWord[index - 1] = prevSyllableConsonants

                    transcriptedSyllable = prevSyllableConsonants.length === 2 ? 'u' : 'yu'
                    break
                }
                case 'ょ':
                case 'ョ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (!prevSyllableConsonants || prevSyllableConsonants.length > 2) break

                    transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    
                    transcriptedSyllable = prevSyllableConsonants.length === 2 ? 'o' : 'yo'
                    break
                }
                case 'っ':
                case 'ッ': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null = transcriptKanaEN(nextKana)

                    if (!nextKana || !nextSyllableTranscription) break

                    const nextLetter = nextSyllableTranscription[0]

                    if (!hasOnlyConsonants(nextLetter)) break

                    transcriptedSyllable = nextKana === 'ち' ? 't' : nextLetter                                     //По Хепбёрну っち пишется как tchi
                    break
                }
                case 'ー': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]
                    
                    if (!prevKana || !prevSyllableTranscription) break

                    const prevLetter = prevSyllableTranscription.slice(-1)

                    if (!hasOnlyVowel(prevLetter)) break

                    const vowelForExtending = prevLetter

                    transcriptedSyllable = vowelForExtending
                    break
                }
                default:
                    break
            }
            transcriptedSplitedWord.push(transcriptedSyllable)
        })
        const transcriptedWord = transcriptedSplitedWord.join('')

        transcriptedWords.push(transcriptedWord)
    }
    const transcriptedText = transcriptedWords.join(' ')

    return transcriptedText
}

function hasOnlyVowel(str: string) {
    const vowelRegExp = /[^aiueoyаеёийоуэюя]/

    return !str.match(vowelRegExp)
}
function hasOnlyConsonants(str: string) {
    const consonantRegExp = /[^цкнгшщзхфвпрлджчсмтбksztfdnhbpmrwj]/

    return !str.match(consonantRegExp)
}
function getConsonants(str: string) {
    const consonantRegExp = /[ksztfdnhbpmrwj]/g

    const consonants = str.match(consonantRegExp)?.join('')

    return consonants
}