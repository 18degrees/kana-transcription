import { transcriptKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TranscriptKana function: makes kana transcription to english syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(transcriptKana('こうこう'), 'koukou')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.6 в /docs/explanation.md

            assert.equal(transcriptKana('わたし は うち へ いきます'), 'watashi wa uchi e ikimasu');
        })
        it('syllabic n', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(transcriptKana('おんよみ'), "on'yomi")
            
            assert.equal(transcriptKana('はつおん'), 'hatsuon')
        })
    })
    describe('Test-core', () => {
        //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей

        assert.equal()
    })
})