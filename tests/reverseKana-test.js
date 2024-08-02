import { reverseKana } from '../lib/esm/index.mjs'
import { assert } from "chai"

describe('ReverseKana function: transforms japanese letters from one to another syllabary',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel (to katakana)', () => {
            // Подробнее: п.10 в /docs/explanation.md
            
            assert.equal(reverseKana('けえき', 'katakana'), 'ケエキ')
        })
    })
    describe('Test-core', () => {
        //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей

        assert.equal()
    })
})