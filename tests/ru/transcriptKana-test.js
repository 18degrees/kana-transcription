import { transcriptKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TranscriptKana function: makes kana transcription to russian syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(transcriptKana('こうこう', 'ru'), 'коукоу')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.6 в /docs/explanation.md

            assert.equal(transcriptKana('わたし は うち へ いきます', 'ru'), 'ватаси ва ути э икимасу');
        })
        it('syllabic n', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(transcriptKana('おんよみ', 'ru'), 'онъёми')
            
            assert.equal(transcriptKana('はつおん', 'ru'), 'хацуон')
        })
        it('punctuation marks', () => {
            //все знаки препинания, кроме пробела, не изменяются
            
            assert.equal(transcriptKana(
                '「わかい　ひとたち　は　マナー　が　わるい」と　にじゅういっさい の おんなのがくせい が かんがえています。', 'ru'),
                '「вакаи хитотати ва манаа га варуи」то нидзюуиссаи но оннаногакусэи га кангаэтэимасу。'
            )
        })
        it('extended katakana', () => {
            assert.equal(transcriptKana('ウゥルカーヌス', 'ru'), 'вурукаанусу')
            assert.equal(transcriptKana('ミネルウァ', 'ru'), 'минэрува')
            assert.equal(transcriptKana('イェビス', 'ru'), 'йэбису')
            assert.equal(transcriptKana('フィクション', 'ru'), 'фикусён')
            assert.equal(transcriptKana('ジェスチャー', 'ru'), 'дзэсутяа')
            assert.equal(transcriptKana('エスクァイア', 'ru'), 'эсукваиа')
            assert.equal(transcriptKana('インテルメッツォ', 'ru'), 'интэрумэтцо')
            assert.equal(transcriptKana('ハロウィーン', 'ru'), 'харовиин')
        })
    })
    
    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(transcriptKana('わたし　は　きのう　はは　に　だいじな　てがみ　を　よんだ', 'ru'), 'ватаси ва киноу хаха ни даидзина тэгами о ёнда')

        assert.equal(transcriptKana(
            'しごと　の　すききらい　が　はっきり　していない　わかもの　でも、じぶん　に　いちばん　あう　もの　が　みつかったら、かんがえかた　も　いきかた　も　かわる　はずです', 'ru'), 
            'сигото но сукикираи га хаккири ситэинаи вакамоно дэмо、дзибун ни итибан ау моно га мицукаттара、кангаэката мо икиката мо кавару хадзудэсу'
        )
    })
    
})