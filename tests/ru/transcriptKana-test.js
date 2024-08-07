import { transcriptKana} from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('TranscriptKana function: makes kana transcription to russian syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.9 в /docs/explanation.md

            assert.equal(transcriptKana('こうこう', 'ru'), 'коукоу')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(transcriptKana('わたし は うち へ いきます', 'ru'), 'ватаси ва ути э икимасу');
        })
        it('syllabic n', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(transcriptKana('おんよみ', 'ru'), 'онъёми')
            
            assert.equal(transcriptKana('はつおん', 'ru'), 'хацуон')
        })
        it('punctuation marks', () => {
            //все знаки препинания, кроме пробела, не изменяются
            
            assert.equal(transcriptKana(
                '「わかい　ひとたち　は　マナー　が　わるい」と　にじゅういっさい の おんなのがくせい が かんがえています。', 'ru'),
                '「вакаи хитотати ва манаа га варуи」то нидзюуиссаи но оннаногакусэи га кангаэтэимасу。'
            )
        })
        it('extended katakana', () => {
            assert.equal(transcriptKana('ウゥルカーヌス', 'ru'), 'вурукаанусу')
            assert.equal(transcriptKana('ミネルウァ', 'ru'), 'минэрува')
            assert.equal(transcriptKana('イェビス', 'ru'), 'йэбису')
            assert.equal(transcriptKana('フィクション', 'ru'), 'фикусён')
            assert.equal(transcriptKana('ジェスチャー', 'ru'), 'дзэсутяа')
            assert.equal(transcriptKana('エスクァイア', 'ru'), 'эсукваиа')
            assert.equal(transcriptKana('インテルメッツォ', 'ru'), 'интэрумэтцо')
            assert.equal(transcriptKana('ハロウィーン', 'ru'), 'харовиин')
        })
        it("systems' difference", () => {
            assert.equal(transcriptKana('わたし は じぶん に おちゃ を たてました', 'nonstandard-ru'), 'ватащи ва джибун ни очя о татэмащита')
            assert.equal(transcriptKana('わたし は じぶん に おちゃ を たてました', 'polivanov'), 'ватаси ва дзибун ни отя о татэмасита')
            assert.equal(transcriptKana('わたし は じぶん に おちゃ を たてました', 'static-ru'), 'ватаси ха дзибун ни отя во татэмасита')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => transcriptKana('あいう', 33), /Execute the/)
            assert.Throw(() => transcriptKana(), /There is a missing param/)
            assert.Throw(() => transcriptKana(123), /An invalid param was passed/)
            assert.Throw(() => transcriptKana('あいう', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => transcriptKana('あいう', {toLang: 'ru', system: 'hepbern'}), /The passed system param incompatible with the language/)

        })
    })
    
    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(transcriptKana('わたし　は　きのう　はは　に　だいじな　てがみ　を　よんだ', 'ru'), 'ватаси ва киноу хаха ни даидзина тэгами о ёнда')

        assert.equal(transcriptKana(
            'しごと　の　すききらい　が　はっきり　していない　わかもの　でも、じぶん　に　いちばん　あう　もの　が　みつかったら、かんがえかた　も　いきかた　も　かわる　はずです', 'ru'), 
            'сигото но сукикираи га хаккири ситэинаи вакамоно дэмо、дзибун ни итибан ау моно га мицукаттара、кангаэката мо икиката мо кавару хадзудэсу'
        )
        assert.equal(transcriptKana(
            'あつかう、つうしん、おもいつく、にゅうがく、すいどう、びょういん', 'ru'),
            'ацукау、цуусин、омоицуку、нюугаку、суидоу、бёуин'
        )
        assert.equal(transcriptKana(
            'さいきん　は　ちいさいい　とき　から ファミコン　ばかりしている　から　にちがいありません。', 'ru'),
            'саикин ва тиисаии токи кара фамикон бакариситэиру кара нитигаиаримасэн。'
        )
    })
    
})