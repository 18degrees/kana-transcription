import { transcriptKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TranscriptKana function: makes kana transcription to russian syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(transcriptKana('こうこう', 'ru'), 'коукоу')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.6 в /docs/explanation.md

            assert.equal(transcriptKana('わたし は うち へ いきます', 'ru'), 'ватаси ва ути э икимасу');
        })
        it('syllabic n', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(transcriptKana('おんよみ', 'ru'), 'онъёми')
            
            assert.equal(transcriptKana('はつおん', 'ru'), 'хацуон')
        })
    })
    describe('Test-core', () => {
        //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей

        assert.equal()
    })
})