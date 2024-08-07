import { reverseKana } from '../lib/esm/index.mjs'
import { assert } from "chai"

describe('ReverseKana function: transforms japanese letters from one to another syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel (to katakana)', () => {
            // Подробнее: п.10 в /docs/explanation.md
            
            assert.equal(reverseKana('けえき', 'katakana'), 'ケエキ')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => reverseKana('abc', 33), /An invalid param was passed/)
            assert.Throw(() => reverseKana(), /There is a missing param/)
        })
    })
    describe('Test-core', () => {
        //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей

        assert.equal()
    })
})