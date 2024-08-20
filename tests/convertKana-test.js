import { convertKana } from '../lib/esm/index.mjs'
import { assert } from "chai"

describe('convertKana function: transforms japanese letters from one to another syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel (to katakana)', () => {
            // Подробнее: п.10 в /docs/explanation.md
            
            assert.equal(convertKana('けえき', 'katakana'), 'ケエキ')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => convertKana('abc', 33), /An invalid param was passed/)
            assert.Throw(() => convertKana(), /There is a missing param/)
        })
    })
    describe('Test-core', () => {
        //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей

        assert.equal()
    })
})