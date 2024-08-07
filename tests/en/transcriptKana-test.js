import { transcriptKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TranscriptKana function: makes kana transcription to english syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.9 в /docs/explanation.md

            assert.equal(transcriptKana('こうこう'), 'koukou')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(transcriptKana('わたし は うち へ いきます'), 'watashi wa uchi e ikimasu');
        })
        it('syllabic n', () => {
            //Подробнее: п.8 в /docs/explanation.md

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
        it("systems' difference", () => {
            assert.equal(transcriptKana('わたし は じぶん に おちゃ を たてました', 'hepburn'), 'watashi wa jibun ni ocha o tatemashita')
            assert.equal(transcriptKana('わたし は じぶん に おちゃ を たてました', 'kunrei-shiki'), 'watasi wa zibun ni otya o tatemasita')
            assert.equal(transcriptKana('わたし は じぶん に おちゃ を たてました', 'nihon-shiki'), 'watasi ha zibun ni otya wo tatemasita')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => transcriptKana('あいう', 33), /Execute the/)
            assert.Throw(() => transcriptKana(), /There is a missing param/)
            assert.Throw(() => transcriptKana(123), /An invalid param was passed/)
            assert.Throw(() => transcriptKana('あいう', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => transcriptKana('あいう', {toLang: 'en', system: 'polivanov'}), /The passed system param incompatible with the language/)

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