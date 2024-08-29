import { fromKana } from '../../lib/esm/index.mjs'
import { assert } from "chai"

describe('fromKana function: makes kana transcription to russian syllables',  () => {
    describe('Examples of work and disadvantages', () => {
        it('long vowel', () => {
            //Подробнее: п.9 в /docs/explanation.md

            assert.equal(fromKana('こうこう', 'ru'), 'коукоу')
        })
        it('sentense (particle)', () => {
            //Подробнее: п.7 в /docs/explanation.md

            assert.equal(fromKana('わたし は うち へ いきます', 'ru'), 'ватаси ва ути э икимасу');
        })
        it('syllabic n', () => {
            //Подробнее: п.8 в /docs/explanation.md

            assert.equal(fromKana('おんよみ', 'ru'), 'онъёми')
            
            assert.equal(fromKana('はつおん', 'ru'), 'хацуон')
        })
        it('punctuation marks', () => {
            //все знаки препинания, кроме пробела, не изменяются
            
            assert.equal(fromKana(
                '「わかい　ひとたち　は　マナー　が　わるい」と　にじゅういっさい の おんなのがくせい が かんがえています。', 'ru'),
                '「вакаи хитотати ва манаа га варуи」то нидзюуиссаи но оннаногакусэи га кангаэтэимасу。'
            )
        })
        it('extended katakana', () => {
            assert.equal(fromKana('ウゥルカーヌス', 'ru'), 'вурукаанусу')
            assert.equal(fromKana('ミネルウァ', 'ru'), 'минэрува')
            assert.equal(fromKana('イェビス', 'ru'), 'йэбису')
            assert.equal(fromKana('フィクション', 'ru'), 'фикусён')
            assert.equal(fromKana('ジェスチャー', 'ru'), 'дзйэсутяа')
            assert.equal(fromKana('エスクァイア', 'ru'), 'эсукваиа')
            assert.equal(fromKana('インテルメッツォ', 'ru'), 'интэрумэтцо')
            assert.equal(fromKana('ハロウィーン', 'ru'), 'харовиин')
        })
        it("systems' difference", () => {
            assert.equal(fromKana('わたし は じぶん に おちゃ を たてました', 'nonstandard-ru'), 'ватащи ва джибун ни очя о татэмащита')
            assert.equal(fromKana('わたし は じぶん に おちゃ を たてました', 'polivanov'), 'ватаси ва дзибун ни отя о татэмасита')
            assert.equal(fromKana('わたし は じぶん に おちゃ を たてました', 'static-ru'), 'ватаси ха дзибун ни отя во татэмасита')
        })
        it('custom errors', () => {
            //the custom errors located in /src/errors.ts

            assert.Throw(() => fromKana('あいう', 33), /Execute the/)
            assert.Throw(() => fromKana(), /There is a missing param/)
            assert.Throw(() => fromKana(123), /An invalid param was passed/)
            assert.Throw(() => fromKana('あいう', 'abc'), /An invalid param was passed/)
            assert.Throw(() => fromKana('あいう', {system: 'hebpern'}), /An invalid param was passed/)
            assert.Throw(() => fromKana('あいう', {toLang: 'ru', system: 'hepburn'}), /The passed system param incompatible with the language/)

        })
        it('iteration marks', () => {
            assert.equal(fromKana('さゝき', 'ru'), 'сасаки')
            assert.equal(fromKana('みすゞ', 'ru'), 'мисудзу')
            assert.equal(fromKana('じゝ', 'ru'), 'дзиси')
        })
        it('surrogate pair', () => {
            assert.equal(fromKana('𛀁', 'ru'), 'йэ')
        })
        it('separated voicing marks', () => {
            assert.equal(fromKana('ば', 'ru'), 'ба')
            assert.equal(fromKana('は゛', 'ru'), 'ба')

            assert.equal(fromKana('か゚', 'ru'), 'нга')
            assert.equal(fromKana('か゜', 'ru'), 'нга')
        })
    })
    
    //Остальные слова (и предложения), без группировки; с учётом вышеизложенных особенностей
    it('other cases', () => {
        assert.equal(fromKana('わたし　は　きのう　はは　に　だいじな　てがみ　を　よんだ', 'ru'), 'ватаси ва киноу хаха ни даидзина тэгами о ёнда')

        assert.equal(fromKana(
            'しごと　の　すききらい　が　はっきり　していない　わかもの　でも、じぶん　に　いちばん　あう　もの　が　みつかったら、かんがえかた　も　いきかた　も　かわる　はずです', 'ru'), 
            'сигото но сукикираи га хаккири ситэинаи вакамоно дэмо、дзибун ни итибан ау моно га мицукаттара、кангаэката мо икиката мо кавару хадзудэсу'
        )
        assert.equal(fromKana(
            'あつかう、つうしん、おもいつく、にゅうがく、すいどう、びょういん', 'ru'),
            'ацукау、цуусин、омоицуку、нюугаку、суидоу、бёуин'
        )
        assert.equal(fromKana(
            'さいきん　は　ちいさいい　とき　から ファミコン　ばかりしている　から　にちがいありません。', 'ru'),
            'саикин ва тиисаии токи кара фамикон бакариситэиру кара нитигаиаримасэн。'
        )
    })
    
})