import { toKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('toKana function: transforms english syllables to japanese syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('devoiced vowel', () => {
            // Подробнее: п.4 и п.5 в /docs/explanation.md

            assert.equal(toKana('skoshii', {guess: true}), 'すこしい')

            assert.equal(toKana('mashta', {guess: true}), 'ました')
        })
        it('long vowel', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md
            */
            assert.equal(toKana('kookoo'), 'こおこお') 

            assert.equal(toKana('ookii'), 'おおきい')

            assert.equal(toKana('ee go'), 'ええ ご')
        })
        it('long consonant', () => {
            //Подробнее: п.4 в /docs/explanation.md

            assert.equal(toKana('motto'), 'もっと')
        })
        it('`na` row and `n` syllable', () => {
            //Подробнее: п.3 в /docs/explanation.md
            
            assert.equal(toKana("ten'in"), 'てんいん')
            assert.equal(toKana('minna'), 'みんな')
        })
        it('long vowel (to katakana)', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md
            */
            assert.equal(toKana('keeki', {toKana: 'katakana'}), 'ケエキ');
        })
        it("systems' difference", () => {
            assert.equal(toKana('watashi wa jibun ni ocha o tatemashita', 'hepburn'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(toKana('watasi wa zibun ni otya o tatemasita', 'kunrei-shiki'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(toKana('watasi ha zibun ni otya wo tatemasita', 'nihon-shiki'), 'わたし は じぶん に おちゃ を たてました')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => toKana('abc', 33), /Execute the/)
            assert.Throw(() => toKana(), /There is a missing param/)
            assert.Throw(() => toKana(123), /An invalid param was passed/)
            assert.Throw(() => toKana('some text', 'abc'), /An invalid param was passed/)
            assert.Throw(() => toKana('abc', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => toKana('abc', {fromLang: 'en', system: 'polivanov'}), /The passed system param incompatible with the language/)

        })
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(toKana('watashi wa kinoo haha ni daijina tegami o yonda'), 'わたし は きのお はは に だいじな てがみ を よんだ')

        assert.equal(toKana(
            'shigoto no sukikirai ga hakkiri shiteinai wakamono demo jibun ni ichiban au mono ga mitsukattara kangaekata mo ikikata mo kawaru hazudesu'), 
            'しごと の すききらい が はっきり していない わかもの でも じぶん に いちばん あう もの が みつかったら かんがえかた も いきかた も かわる はずです'
        )
        assert.equal(toKana(
            'atsukau tsuushin omoitsuku nyuugaku suidoo byooin'),
            'あつかう つうしん おもいつく にゅうがく すいどお びょおいん'
        )
    })
});