import { toKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('toKana function: transforms russian syllables to japanese syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('devoiced vowel', () => {
            // Подробнее: п.4 и п.5 в /docs/explanation.md

            assert.equal(toKana('скощии', {guess: true, system: 'nonstandard-ru'}), 'すこしい')

            assert.equal(toKana('мащта', {guess: true, system: 'nonstandard-ru'}), 'ました')
            assert.equal(toKana('дэс', {guess: true, system: 'nonstandard-ru'}), 'です')
        })
        it('long vowel', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md

                Правильным преобразованием 'коокоо' было бы こうこう (高校) - "старшая школа", 
                но так как учесть можно только один случай, 
                выбор сделан в пользу того, что всегда позволит прочитать слово правильно
            */
            assert.equal(toKana('коокоо', 'ru'), 'こおこお') 
            
            // в этом случае вывод верный
            // В итоге выше запись неверная, но ёё можно верно прочесть, а ниже и запись, и чтение верны

            assert.equal(toKana('оокии', 'ru'), 'おおきい')

            // то же тут: 'ээ го' было бы правильно конвертировать в えい ご (英語) - "английский язык"
            assert.equal(toKana('ээ го', 'ru'), 'ええ ご')
        })
        it('long consonant', () => {
            //Подробнее: п.4 в /docs/explanation.md

            assert.equal(toKana('мотто', 'ru'), 'もっと')
        })
        it('`na` row and `n` syllable', () => {
            //Подробнее: п.3 в /docs/explanation.md
            
            assert.equal(toKana('тэнъин', 'ru'), 'てんいん')
            assert.equal(toKana('минна', 'ru'), 'みんな')
        })
    
        it('long vowel (to katakana)', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md

                Верный вариант - ケーキ, но т. к. нельзя отличить долгую гласную от двух отдельно произносимых согласных, 
                упор делается то, чтобы верное чтение по крайней мере было представлено, хоть и не было однозначно.
                Таким образом, не используется символ ー 
            */
            assert.equal(toKana('кээки', {toKana: 'katakana', fromLang: 'ru'}), 'ケエキ');
        })
        it("systems' difference", () => {
            assert.equal(toKana('ватащи ва джибун ни очя о татэмащита', 'nonstandard-ru'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(toKana('ватаси ва дзибун ни отя о татэмасита', 'polivanov'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(toKana('ватаси ха дзибун ни отя во татэмасита', 'static-ru'), 'わたし は じぶん に おちゃ を たてました')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => toKana('абв', 33), /Execute the/)
            assert.Throw(() => toKana(), /There is a missing param/)
            assert.Throw(() => toKana(123), /An invalid param was passed/)
            assert.Throw(() => toKana('some text', 'abc'), /An invalid param was passed/)
            assert.Throw(() => toKana('абв', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => toKana('абв', {fromLang: 'ru', system: 'hepburn'}), /The passed system param incompatible with the language/)

        })
        
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(toKana('ватаси ва киноо хаха ни даидзина тэгами о ёнда', 'ru'), 'わたし は きのお はは に だいじな てがみ を よんだ')
        
        assert.equal(toKana(
            'сигото но сукикираи га хаккири ситэинаи вакамоно дэмо дзибун ни итибан ау моно га мицукаттара кангаэката мо икиката мо кавару хадзудэсу', 'ru'), 
            'しごと の すききらい が はっきり していない わかもの でも じぶん に いちばん あう もの が みつかったら かんがえかた も いきかた も かわる はずです'
        )
        assert.equal(toKana(
            'ацукау цуусин омоицуку нюугаку суидоо бёоин', 'ru'),
            'あつかう つうしん おもいつく にゅうがく すいどお びょおいん'
        )
    })
});