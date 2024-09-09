import { fromKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('fromKana function: makes kana transcription to english syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.9 в /docs/explanation.md

            assert.equal(fromKana('こうこう'), 'koukou')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(fromKana('わたし は うち へ いきます'), 'watashi wa uchi e ikimasu');
        })
        it('syllabic n', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(fromKana('おんよみ'), "on'yomi")
            
            assert.equal(fromKana('はつおん'), 'hatsuon')
        })
        it('punctuation marks', () => {
            //все знаки препинания, кроме пробела, не изменяются

            assert.equal(fromKana(
                '「わかい　ひとたち　は　マナー　が　わるい」と　にじゅういっさい の おんなのがくせい が かんがえています。'),
                '「wakai hitotachi wa manaa ga warui」to nijuuissai no onnanogakusei ga kangaeteimasu。'
            )
        })
        it('extended katakana', () => {
            assert.equal(fromKana('ウゥルカーヌス'), 'wurukaanusu')
            assert.equal(fromKana('ミネルウァ'), 'mineruwa')
            assert.equal(fromKana('イェビス'), 'yebisu')
            assert.equal(fromKana('フィクション'), 'fikushon')
            assert.equal(fromKana('ジェスチャー'), 'jesuchaa')
            assert.equal(fromKana('エスクァイア'), 'esukwaia')
            assert.equal(fromKana('インテルメッツォ'), 'interumettso')
            assert.equal(fromKana('ハロウィーン'), 'harowiin')
        })
        it('small extended kana', () => {
            assert.equal(fromKana('ふぁ'), 'fa')
            assert.equal(fromKana('グィ'), 'gwi')
            assert.equal(fromKana('じぇ'), 'je')
            assert.equal(fromKana('クヮ'), 'kwa')
        })
        it("systems' difference", () => {
            assert.equal(fromKana('わたし は じぶん に おちゃ を たてました', 'hepburn'), 'watashi wa jibun ni ocha o tatemashita')
            assert.equal(fromKana('わたし は じぶん に おちゃ を たてました', 'kunrei-shiki'), 'watasi wa zibun ni otya o tatemasita')
            assert.equal(fromKana('わたし は じぶん に おちゃ を たてました', 'nihon-shiki'), 'watasi ha zibun ni otya wo tatemasita')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => fromKana('あいう', 33), /Execute the/)
            assert.Throw(() => fromKana(), /There is a missing param/)
            assert.Throw(() => fromKana(123), /An invalid param was passed/)
            assert.Throw(() => fromKana('あいう', 'abc'), /An invalid param was passed/)
            assert.Throw(() => fromKana('あいう', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => fromKana('あいう', {toLang: 'en', system: 'polivanov'}), /The passed system param incompatible with the language/)

        })
        it('iteration marks (monosyllable)', () => {
            assert.equal(fromKana('さゝき'), 'sasaki')
            assert.equal(fromKana('みすゞ'), 'misuzu')
            assert.equal(fromKana('じゝ'), 'jishi')
        })
        it('iteration marks (polysyllable)', () => {
            assert.equal(fromKana('ところ〲'), 'tokorodokoro')
            assert.equal(fromKana('なにとした〱'), 'nanitoshitananitoshita')
            assert.equal(fromKana('ところ〴〵'), 'tokorodokoro')
            assert.equal(fromKana('ところ/゛\\'), 'tokorodokoro')
        })
        it('surrogate pair', () => {
            assert.equal(fromKana('𛀁'), 'ye')
        })
        it('separated voicing marks', () => {
            assert.equal(fromKana('ば'), 'ba')
            assert.equal(fromKana('は゛'), 'ba')

            assert.equal(fromKana('か゚'), 'nga')
            assert.equal(fromKana('か゜'), 'nga')
        })
        it ('multiple impact on prev syllable', () => {
            //ゃ needs to change き (ki - kya), but ゝ needs to change not just ゃ, but きゃ (otherwise - 'kyaya') - that is what is meant by 'multiple impact' 
            assert.equal(fromKana('きゃゝ'), 'kyakya')
        })
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(fromKana('わたし　は　きのう　はは　に　だいじな　てがみ　を　よんだ'), 'watashi wa kinou haha ni daijina tegami o yonda')

        assert.equal(fromKana(
            'しごと　の　すききらい　が　はっきり　していない　わかもの　でも、じぶん　に　いちばん　あう　もの　が　みつかったら、かんがえかた　も　いきかた　も　かわる　はずです'), 
            'shigoto no sukikirai ga hakkiri shiteinai wakamono demo、jibun ni ichiban au mono ga mitsukattara、kangaekata mo ikikata mo kawaru hazudesu'
        )
        assert.equal(fromKana(
            'あつかう、つうしん、おもいつく、にゅうがく、すいどう、びょういん'),
            'atsukau、tsuushin、omoitsuku、nyuugaku、suidou、byouin'
        )
        assert.equal(fromKana(
            'さいきん　は　ちいさいい　とき　から ファミコン　ばかりしている　から　にちがいありません。'),
            'saikin wa chiisaii toki kara famikon bakarishiteiru kara nichigaiarimasen。'
        )
    })
})