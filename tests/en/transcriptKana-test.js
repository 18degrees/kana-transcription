import { transcriptKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TranscriptKana function: makes kana transcription to english syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(transcriptKana('こうこう'), 'koukou')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.6 в /docs/explanation.md

            assert.equal(transcriptKana('わたし は うち へ いきます'), 'watashi wa uchi e ikimasu');
        })
        it('syllabic n', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(transcriptKana('おんよみ'), "on'yomi")
            
            assert.equal(transcriptKana('はつおん'), 'hatsuon')
        })
        it('punctuation marks', () => {
            //все знаки препинания, кроме пробела, не изменяются

            assert.equal(transcriptKana(
                '「わかい　ひとたち　は　マナー　が　わるい」と　にじゅういっさい の おんなのがくせい が かんがえています。'),
                '「wakai hitotachi wa manaa ga warui」to nijyuuissai no onnanogakusei ga kangaeteimasu。'
            )
        })
        it('extended katakana', () => {
            assert.equal(transcriptKana('ウゥルカーヌス'), 'wurukaanusu')
            assert.equal(transcriptKana('ミネルウァ'), 'mineruwa')
            assert.equal(transcriptKana('イェビス'), 'yebisu')
            assert.equal(transcriptKana('フィクション'), 'fikushon')
            assert.equal(transcriptKana('ジェスチャー'), 'jesuchaa')
            assert.equal(transcriptKana('エスクァイア'), 'esukwaia')
            assert.equal(transcriptKana('インテルメッツォ'), 'interumettso')
            assert.equal(transcriptKana('ハロウィーン'), 'harowiin')
        })
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(transcriptKana('わたし　は　きのう　はは　に　だいじな　てがみ　を　よんだ'), 'watashi wa kinou haha ni daijina tegami o yonda')

        assert.equal(transcriptKana(
            'しごと　の　すききらい　が　はっきり　していない　わかもの　でも、じぶん　に　いちばん　あう　もの　が　みつかったら、かんがえかた　も　いきかた　も　かわる　はずです'), 
            'shigoto no sukikirai ga hakkiri shiteinai wakamono demo、jibun ni ichiban au mono ga mitsukattara、kangaekata mo ikikata mo kawaru hazudesu'
        )
        assert.equal(transcriptKana(
            'あつかう、つうしん、おもいつく、にゅうがく、すいどう、びょういん'),
            'atsukau、tsuushin、omoitsuku、nyuugaku、suidou、byouin'
        )
        assert.equal(transcriptKana(
            'さいきん　は　ちいさいい　とき　から ファミコン　ばかりしている　から　にちがいありません。'),
            'saikin wa chiisaii toki kara famikon bakarishiteiru kara nichigaiarimasen。'
        )
    })
})