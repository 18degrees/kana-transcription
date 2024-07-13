import { transformToKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TransformToKana function: transforms russian syllables to japanese syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('devoiced vowel', () => {
            // Подробнее: п.4 и п.5 в /docs/explanation.md

            assert.equal(transformToKana('skoshii'), 'すこしい')
        })
    })
    describe('Test-core', () => {
        //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей

        assert.equal()
    })
});