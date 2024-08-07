import { transformToKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TransformToKana function: transforms english syllables to japanese syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('devoiced vowel', () => {
            // Подробнее: п.4 и п.5 в /docs/explanation.md

            assert.equal(transformToKana('skoshii', {guess: true}), 'すこしい')

            assert.equal(transformToKana('mashta', {guess: true}), 'ました')
        })
        it('long vowel', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md
            */
            assert.equal(transformToKana('kookoo'), 'こおこお') 

            assert.equal(transformToKana('ookii'), 'おおきい')

            assert.equal(transformToKana('ee go'), 'ええ ご')
        })
        it('long consonant', () => {
            //Подробнее: п.4 в /docs/explanation.md

            assert.equal(transformToKana('motto'), 'もっと')
        })
        it('`na` row and `n` syllable', () => {
            //Подробнее: п.3 в /docs/explanation.md
            
            assert.equal(transformToKana("ten'in"), 'てんいん')
            assert.equal(transformToKana('minna'), 'みんな')
        })
        it('long vowel (to katakana)', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md
            */
            assert.equal(transformToKana('keeki', {toKana: 'katakana'}), 'ケエキ');
        })
        it("systems' difference", () => {
            assert.equal(transformToKana('watashi wa jibun ni ocha o tatemashita', 'hepburn'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(transformToKana('watasi wa zibun ni otya o tatemasita', 'kunrei-shiki'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(transformToKana('watasi ha zibun ni otya wo tatemasita', 'nihon-shiki'), 'わたし は じぶん に おちゃ を たてました')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => transformToKana('abc', 33), /Execute the/)
            assert.Throw(() => transformToKana(), /There is a missing param/)
            assert.Throw(() => transformToKana(123), /An invalid param was passed/)
            assert.Throw(() => transformToKana('abc', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => transformToKana('abc', {fromLang: 'en', system: 'polivanov'}), /The passed system param incompatible with the language/)

        })
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(transformToKana('watashi wa kinoo haha ni daijina tegami o yonda'), 'わたし は きのお はは に だいじな てがみ を よんだ')

        assert.equal(transformToKana(
            'shigoto no sukikirai ga hakkiri shiteinai wakamono demo jibun ni ichiban au mono ga mitsukattara kangaekata mo ikikata mo kawaru hazudesu'), 
            'しごと の すききらい が はっきり していない わかもの でも じぶん に いちばん あう もの が みつかったら かんがえかた も いきかた も かわる はずです'
        )
        assert.equal(transformToKana(
            'atsukau tsuushin omoitsuku nyuugaku suidoo byooin'),
            'あつかう つうしん おもいつく にゅうがく すいどお びょおいん'
        )
    })
});