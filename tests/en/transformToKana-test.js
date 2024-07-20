import { transformToKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TransformToKana function: transforms english syllables to japanese syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('devoiced vowel', () => {
            // Подробнее: п.4 и п.5 в /docs/explanation.md

            assert.equal(transformToKana('skoshii'), 'すこしい')
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
            assert.equal(transformToKana('keeki', 'en', 'katakana'), 'ケエキ');
        })
    })

    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(transformToKana('watashi wa kinoo haha ni daijina tegami o yonda'), 'わたし は きのお はは に だいじな てがみ を よんだ')
    })
});