import { transformToKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TransformToKana function: transforms russian syllables to japanese syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('devoiced vowel', () => {
            // Подробнее: п.4 и п.5 в /docs/explanation.md

            assert.equal(transformToKana('скощии', {guess: true, system: 'nonstandard-ru'}), 'すこしい')

            assert.equal(transformToKana('мащта', {guess: true, system: 'nonstandard-ru'}), 'ました')
            assert.equal(transformToKana('дэс', {guess: true, system: 'nonstandard-ru'}), 'です')
        })
        it('long vowel', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md

                Правильным преобразованием 'коокоо' было бы こうこう (高校) - "старшая школа", 
                но так как учесть можно только один случай, 
                выбор сделан в пользу того, что всегда позволит прочитать слово правильно
            */
            assert.equal(transformToKana('коокоо', 'ru'), 'こおこお') 
            
            // в этом случае вывод верный
            // В итоге выше запись неверная, но ёё можно верно прочесть, а ниже и запись, и чтение верны

            assert.equal(transformToKana('оокии', 'ru'), 'おおきい')

            // то же тут: 'ээ го' было бы правильно конвертировать в えい ご (英語) - "английский язык"
            assert.equal(transformToKana('ээ го', 'ru'), 'ええ ご')
        })
        it('long consonant', () => {
            //Подробнее: п.4 в /docs/explanation.md

            assert.equal(transformToKana('мотто', 'ru'), 'もっと')
        })
        it('`na` row and `n` syllable', () => {
            //Подробнее: п.3 в /docs/explanation.md
            
            assert.equal(transformToKana('тэнъин', 'ru'), 'てんいん')
            assert.equal(transformToKana('минна', 'ru'), 'みんな')
        })
    
        it('long vowel (to katakana)', () => {
            /*
                Подробнее: п.2 в /docs/explanation.md

                Верный вариант - ケーキ, но т. к. нельзя отличить долгую гласную от двух отдельно произносимых согласных, 
                упор делается то, чтобы верное чтение по крайней мере было представлено, хоть и не было однозначно.
                Таким образом, не используется символ ー 
            */
            assert.equal(transformToKana('кээки', {toKana: 'katakana', fromLang: 'ru'}), 'ケエキ');
        })
        it("systems' difference", () => {
            assert.equal(transformToKana('ватащи ва джибун ни очя о татэмащита', 'nonstandard-ru'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(transformToKana('ватаси ва дзибун ни отя о татэмасита', 'polivanov'), 'わたし は じぶん に おちゃ を たてました')
            assert.equal(transformToKana('ватаси ха дзибун ни отя во татэмасита', 'static-ru'), 'わたし は じぶん に おちゃ を たてました')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => transformToKana('абв', 33), /Execute the/)
            assert.Throw(() => transformToKana(), /There is a missing param/)
            assert.Throw(() => transformToKana(123), /An invalid param was passed/)
            assert.Throw(() => transformToKana('some text', 'abc'), /An invalid param was passed/)
            assert.Throw(() => transformToKana('абв', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => transformToKana('абв', {fromLang: 'ru', system: 'hepburn'}), /The passed system param incompatible with the language/)

        })
        
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(transformToKana('ватаси ва киноо хаха ни даидзина тэгами о ёнда', 'ru'), 'わたし は きのお はは に だいじな てがみ を よんだ')
        
        assert.equal(transformToKana(
            'сигото но сукикираи га хаккири ситэинаи вакамоно дэмо дзибун ни итибан ау моно га мицукаттара кангаэката мо икиката мо кавару хадзудэсу', 'ru'), 
            'しごと の すききらい が はっきり していない わかもの でも じぶん に いちばん あう もの が みつかったら かんがえかた も いきかた も かわる はずです'
        )
        assert.equal(transformToKana(
            'ацукау цуусин омоицуку нюугаку суидоо бёоин', 'ru'),
            'あつかう つうしん おもいつく にゅうがく すいどお びょおいん'
        )
    })
});