import type { ComparisonKey, Locale } from "./locales";

export interface SpicyArticle {
  title: string;
  description: string;
  intro: string;
  dimensions: [string, string, string][];
  sections: [string, string][];
  verdict: string;
}

export const sourceLinks: Record<ComparisonKey, { name: string; url: string }[]> = {
  promptchan: [
    { name: "Promptchan · Create", url: "https://promptchan.com/generate" },
    { name: "Promptchan · Terms", url: "https://promptchan.com/termsofservice" }
  ],
  "ourdream-ai": [
    { name: "OurDream AI · Product", url: "https://land.ourdream.ai/" },
    { name: "OurDream AI · Terms", url: "https://ourdream.ai/terms/terms-of-service" }
  ],
  "playbox-ai": [
    { name: "Playbox AI · Product", url: "https://www.playbox.com/" },
    { name: "Playbox AI · Terms", url: "https://www.playbox.com/terms-and-conditions" },
    { name: "Playbox AI · Privacy", url: "https://www.playbox.com/privacy-policy" }
  ],
  "musebox-ai": [
    { name: "Musebox AI · Video generator", url: "https://musebox.ai/ai-video-generator/" },
    { name: "Musebox AI · Entry rules", url: "https://musebox.ai/partners" }
  ],
  runway: [
    { name: "Runway · Gen-4.5", url: "https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5" },
    { name: "Runway · Content moderation", url: "https://help.runwayml.com/hc/en-us/articles/21745792516371-Why-is-my-input-getting-content-moderated" },
    { name: "Runway · Generation errors", url: "https://help.runwayml.com/hc/en-us/articles/32880432736659-Why-am-I-receiving-errors-when-trying-to-generate" }
  ]
};

// All five comparison angles have original prose in each requested locale.
export const comparisonArticles: Record<Locale, Record<ComparisonKey, SpicyArticle>> = {
  ja: {
    promptchan: {
      title: "SpicyBox vs Promptchan：本人写真のテンプレートか、架空の人物を一から作るか",
      description: "SpicyBox と Promptchan を入力条件、画像制作、動画、追加費用、プライバシーで比較。本人写真を使うか、文字から架空の人物を作るかが分岐点です。",
      intro: "両方とも成人向けの映像制作に関わりますが、出発点が違います。SpicyBox は利用者本人だけが写る写真とテンプレートから短い出力を作ります。Promptchan は文章から架空の人物や画像を作り、構図を調整して動画にもできます。",
      dimensions: [
        ["最初の入力", "本人だけの写真とテンプレート", "文章、生成画像、ギャラリーのリミックス"],
        ["主な強み", "短い手順で画像を動かす", "姿勢・画風・構図を作り込める"],
        ["動画への道筋", "写真とテンプレートから短いクリップ", "画像から動画、または文章から動画"],
        ["確認すべき費用", "生成ごとのクレジットと再試行", "画像・動画・高画質・非公開設定の範囲"]
      ],
      sections: [
        ["写真が既にあるか、それとも人物を設計するか", "SpicyBox の Explore では見本から動きを選び、規約に合う本人写真を当てはめます。プロンプトを書き込む時間は短くても、元画像の画角がテンプレートと合わなければ仕上がりは不安定です。Promptchan の生成画面では文章、否定プロンプト、画風、姿勢、構図を調整できます。架空の人物を先に整えてから動画へ進む場合に意味があります。"],
        ["入力の権利を混同しない", "SpicyBox の現行規約は写真に写る人物がアップロードする本人だけであることを要求します。恋人が承諾した写真や購入したモデル写真でも、この個別の条件とは別です。Promptchan は文字から始められるので、実在者の顔を使わず架空の成人を作る選択肢があります。画像をアップロードする場合は Promptchan 自身の現行規約も確認してください。"],
        ["自由度と反復の代価", "テンプレート中心の SpicyBox は最初の選択が簡単な反面、動きや構図の細部は見本に左右されます。Promptchan は生成画像のリミックスや動画化など選択肢が多く、意図した画へ近づけやすい一方、設定を増やすほど時間とクレジットの使い方が複雑になります。両者とも広告の一枚だけで品質を判断しないことが大切です。"],
        ["プライバシーと料金の確認", "SpicyBox では本人写真そのものの保存・削除が最重要です。公式プライバシー文書を読み、元画像、出力、アカウントの削除経路を見つけてください。Promptchan の非公開生成は有料プランの機能として案内されていますが、非公開表示とデータ処理がゼロであることは同じではありません。完成した一本までに使った全クレジットを数えましょう。"]
      ],
      verdict: "本人だけの写真を素早く動かす目的なら SpicyBox の流れを検討できます。架空の成人を文章から作り、画風・姿勢・動画を段階的に設計したいなら Promptchan が適しています。どちらも実際の料金と入力規則は利用時に確認してください。"
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI：短い動画を作るか、続く架空の人物を育てるか",
      description: "SpicyBox と OurDream AI の違いを、本人写真、会話、人物の継続性、画像・動画、プライバシーと費用で整理します。",
      intro: "動画という共通点だけで同じ製品として比べると判断を誤ります。SpicyBox は本人画像を選んだテンプレートで動かす制作ツール。OurDream AI は架空の人物を作り、会話や音声、画像、動画にまたがって使うサービスです。",
      dimensions: [
        ["中心となる作業", "本人画像を短いクリップへ変換", "架空人物を作り会話・映像で使う"],
        ["始め方", "本人だけの写真をアップロード", "人物の設定や説明を入力"],
        ["継続性", "一回ごとの出力が中心", "同じ人物との継続したやり取り"],
        ["費用の数え方", "試行と完成クリップごと", "会話・音声・画像・動画の利用全体"]
      ],
      sections: [
        ["一つの映像と一人の人物は別の目的", "SpicyBox では既にある写真に合うテンプレートを探し、短い結果を確認します。人物の性格や過去を設定する必要はありません。OurDream AI の公式案内は、短い説明から人物を作り、会話、声、画像と動画で使う流れを示します。動画が完成しても人物とのやり取りは続きます。"],
        ["顔写真と物語の情報、守る対象が違う", "SpicyBox の入力規則は厳格で、写真にはアップロードする本人しか写っていてはいけません。元画像には顔だけでなく背景の居住地や職場が含まれることがあります。OurDream AI では架空の成人を設定できますが、会話が長くなると利用者自身の個人的な事情を書き込む危険があります。どちらもオンライン上のデータとして扱ってください。"],
        ["比較試験は製品の約束に合わせる", "SpicyBox を使う資格がある場合は、無害な本人写真と単純な動きで、顔の安定、背景の歪み、再試行回数、完成までのクレジットを見ます。OurDream AI では架空人物をいくつかの会話場面や画像に登場させ、一貫した名前、性格、見た目、音声が保てるかを考えます。これは読者向けの手順で、当サイトが実測順位を付けたものではありません。"],
        ["料金は利用する時間軸で見る", "SpicyBox なら一本の使用可能な動画までに捨てた出力を含めて費用を計算します。OurDream AI なら一週間の会話、画像、音声、動画をまとめて試算します。無料枠や課金単位は変わるので、購入直前に両方の公式画面で確認してください。"]
      ],
      verdict: "本人の写真を一度だけ短く変換したいなら SpicyBox が課題に近く、架空の成人キャラクターと長く会話し複数のメディアへ広げたいなら OurDream AI が近い選択です。比較する前に、自分が守りたいデータが顔写真なのか長期の会話なのかを決めましょう。"
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI：本人画像型どうしを比べる実用的な方法",
      description: "SpicyBox と Playbox AI の本人だけの画像条件、テンプレート発見、動画の安定、再試行費用と削除手順を比較します。",
      intro: "五つの候補の中で Playbox AI は SpicyBox に最も近い比較対象です。どちらも成人向けテンプレート制作を案内し、利用規約は写真の被写体がアップロードする本人だけであることを求めます。『他人の写真が使える方』という比較は成り立ちません。",
      dimensions: [
        ["画像の条件", "アップロードする本人だけが写る", "同じくアップロードする本人だけ"],
        ["テンプレート発見", "Explore の処理・短編形式", "広いカタログとクリエイター導線"],
        ["確認したい品質", "顔と背景の動き、元写真との一致", "同じ条件で動きと再現性を見る"],
        ["支払いと削除", "使用済みクレジット、明示的削除", "プラン枠、追加クレジット、明示的削除"]
      ],
      sections: [
        ["共通の入口条件を先に確かめる", "SpicyBox と Playbox AI の現行規約はいずれも、アップロードする人物自身だけが画像に写ることを要求します。ストック写真、恋人の肖像、有名人の画像を使う抜け道ではありません。本人写真を送ることに抵抗があるなら、両方を試さない判断が合理的です。"],
        ["見つけやすさと制御の違い", "SpicyBox の Explore は視覚的な処理と短編形式を前面に出します。Playbox の公開画面はより広いフィード、クリエイター向けの入口や制作要素を示します。ただしカタログが多いことと品質が高いことは別です。写真の画角に合う無害な動きを二つ選び、見本と操作の分かりやすさを比較します。"],
        ["広告の一枚ではなく一回の作業を比べる", "もし適格な本人写真を安全に用意できるなら、同じ写真と同じ二種類の動きで試し、完成した動画の顔・手・背景の安定を確認します。保留した結果も含めて再試行の数と時間を記録してください。両社の公開資料だけでは特定の写真に対する勝者は決まりません。ここで示すのは再現可能な方法であり、編集部の架空の実験結果ではありません。"],
        ["クレジットと保存を最後まで見る", "SpicyBox の規約は不満な結果でも使用済みクレジットの返還を広く認めていません。Playbox はプラン枠と追加購入の仕組みを公開していますが、条件は変化します。両社のプライバシー文書は明示的に削除するまで素材が保存されると説明します。原画像、出力、アカウントの削除操作を事前に探してください。"]
      ],
      verdict: "本人画像という条件を受け入れ、短いテンプレート操作を重視するなら SpicyBox を試す理由があります。幅広いカタログや制作者向けの導線が必要なら Playbox AI を比較してください。試行費用と削除のしやすさまで含めて判断するべきで、他人の肖像にはどちらも使わないでください。"
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI：本人写真の短編か、文章からも作れる動画制作か",
      description: "SpicyBox と Musebox AI を動画の入力方法、延長制作、画像の権利、クレジット、保存と公開条件から比較します。",
      intro: "両者には画像から動画を作る共通点があります。ただし SpicyBox は本人だけが写る写真とテンプレートによる短い処理が中心。Musebox AI は画像だけでなく文章からの動画、クリップの延長などを案内しています。",
      dimensions: [
        ["作業の開始", "本人だけの画像とテンプレート", "画像または文章の説明"],
        ["制作範囲", "短い視覚変換", "動画生成、延長、音・人物の補助"],
        ["肖像の扱い", "本人が唯一の被写体という規約", "他人の写真は許可と権利の確認が必要"],
        ["完成費用", "生成と再試行のクレジット", "生成・延長・画質やダウンロード条件"]
      ],
      sections: [
        ["開始素材が違う", "SpicyBox の規約では、アップロードする画像に写るのは本人だけです。肖像の使用許可があっても、この契約条件を上書きしません。Musebox の動画ページは写真だけでなく文章からも始められると説明します。公式の入口は他人の写真に無断で使わないよう求めていますが、これはどの実在者の肖像でも自由に使えるという意味ではありません。"],
        ["一回の変換か、続く制作か", "SpicyBox は構図の合うテンプレートを見つけられれば、選択から短い出力までの道筋が明快です。一方で動きの自由度は見本に制約されます。Musebox は文章による場面生成、既存画像の動画化、延長などの手順を用意します。長い場面や編集の連続性が必要なら、その追加機能と制限を調べる価値があります。"],
        ["同じ点数では測れない", "本人写真の変換を両方で比べる場合は、非敏感な画像一枚、単純な動き一つ、許可される入力条件を揃えます。顔の連続性、背景、書き出しや再試行費用を記録します。架空の場面を文章から作る場合は Musebox だけの別課題です。SpicyBox が同じ文章入力ツールであるかのように総合点を付けません。"],
        ["公開権とデータ保存", "SpicyBox の公式文書は使用済みクレジットの返還に厳格で、画像や出力の明示的削除を説明します。Musebox のページに書かれた出力の利用可能性も、他人の入力画像の権利を移すものではありません。素材の著作権、肖像の許諾、各サービスの入力規則、完成物を公開できる範囲を別々に確認してください。"]
      ],
      verdict: "本人だけの写真を短いテンプレート動画にしたい成人には SpicyBox の目的が明確です。文章から動画を起こし、場面を延長するなど制作工程を広げたいなら Musebox AI が検討対象になります。どちらも素材の権利、現在の費用と削除条件を利用時に確認してください。"
    },
    runway: {
      title: "SpicyBox vs Runway：成人向けテンプレートと一般映像制作を混同しない",
      description: "SpicyBox と Runway の違いを、許される制作内容、動画モデル、入力審査、編集、再試行費用とプライバシーから比較します。",
      intro: "どちらも画像を動かせますが、同じ制作依頼が両方で許可されるとは限りません。SpicyBox は成人向けの本人画像テンプレート、Runway は幅広い映像制作・編集ツールです。Runway では入力と出力がポリシーに従って審査されます。",
      dimensions: [
        ["中心となる用途", "適格な本人写真を短く変換", "一般的な映像制作・編集"],
        ["画像の条件", "本人が唯一の被写体", "利用規則と入力の権利に従う"],
        ["制作の指示", "テンプレートを選ぶ", "モデルや動きの指示、後続編集"],
        ["審査・費用", "成人向けでも規約とクレジットを確認", "入出力の審査、モデル別費用や失敗処理"]
      ],
      sections: [
        ["品質より先にポリシーを確認", "SpicyBox は本人だけが写る画像を求め、成人に利用を限定します。公開された画像だからといって他人の肖像を処理することはできません。Runway のヘルプは入力と出力の自動審査を説明し、サポートがその審査を解除できないと示します。禁止された依頼を繰り返すのではなく、許可される一般的な映像案に切り替えてください。"],
        ["テンプレートの早さと映像制作の幅", "SpicyBox は見本を選び、本人写真の構図が合えば短く仕上げる流れです。自由度はテンプレートとの相性に左右されます。Runway の現在の Gen-4.5 案内は画像から動画を作る方法と動きの指示を説明します。編集を続ける必要がある一般制作には選択肢が増えますが、モデル名や利用範囲は更新されます。"],
        ["共通して許される小さな課題で比較", "両方の現行規則に合う非露骨なファッション映像など、単純な動きを選びます。SpicyBox に本人画像を使う資格がある場合でも、住所などの識別情報を避け、顔・背景・動き・書き出しを確認してください。完成した一本までの試行回数を数えます。当サイトは両社で有料レンダリングを行った実測順位を主張しません。"],
        ["失敗とクレジットは一律ではない", "SpicyBox の規約は期待外れの出力に使ったクレジットの返還を広く認めません。Runway のヘルプは生成エラーとコンテンツ審査を区別し、扱いが同じとは限りません。利用するモデル、プラン、失敗理由ごとに現行の請求説明を確認してください。どちらでも入力画像の保存や共有の設定を見直しましょう。"]
      ],
      verdict: "本人だけの写真を成人向けテンプレートで短く動かす用途なら SpicyBox が近い候補です。規則に合う一般的な動画を演出し、後で編集したいなら Runway が適しています。どちらかのルールに反する企画なら、画質を比較する前にそのサービスを候補から外してください。"
    }
  },
  ko: {
    promptchan: {
      title: "SpicyBox vs Promptchan: 내 사진을 움직일까, 가상 인물을 처음부터 만들까",
      description: "SpicyBox와 Promptchan을 사진 업로드 조건, 글 기반 이미지 제작, 영상, 크레딧, 개인정보 보호 측면에서 비교합니다.",
      intro: "두 서비스 모두 성인용 AI 영상 제작과 관련되지만 출발점이 다릅니다. SpicyBox는 본인만 나온 사진에 템플릿을 적용합니다. Promptchan은 글로 가상 인물과 장면을 만들고 자세·구도를 바꿔 영상으로 이어갈 수 있습니다.",
      dimensions: [
        ["시작 자료", "본인 단독 사진과 템플릿", "글, 생성 이미지 또는 갤러리 리믹스"],
        ["제작 방향", "짧은 이미지 변환", "인물·스타일·자세를 단계적으로 설계"],
        ["영상 방식", "사진과 템플릿으로 짧은 클립", "이미지 또는 글에서 영상으로"],
        ["비용 확인", "생성·재시도에 드는 크레딧", "이미지·영상·고급·비공개 기능 범위"]
      ],
      sections: [
        ["원본 사진이 있는지부터 결정하세요", "SpicyBox의 Explore에서는 동작을 먼저 고르고 규정에 맞는 본인 사진을 넣습니다. 설정은 간단하지만 원본 구도와 템플릿이 맞지 않으면 결과가 흔들릴 수 있습니다. Promptchan의 공식 생성 화면은 글, 제외할 요소, 화풍, 자세와 구도를 조절하게 합니다. 가상 인물을 처음부터 설계하는 작업에는 이 차이가 중요합니다."],
        ["초상 사용 권한과 서비스 규칙은 별개입니다", "SpicyBox 약관은 업로더 본인만 이미지에 나와야 한다고 요구합니다. 상대의 동의나 구매한 스톡 사진은 이 특정 조건을 바꾸지 않습니다. Promptchan은 텍스트로 시작할 수 있어 실제 인물의 얼굴 없이도 성인 가상 캐릭터를 만들 수 있습니다. 이미지를 업로드한다면 Promptchan 자체의 최신 약관과 초상 규칙도 확인해야 합니다."],
        ["간단함과 세밀함의 맞교환", "SpicyBox에서는 템플릿이 움직임과 구도를 상당 부분 결정하므로 첫 클립까지 빠를 수 있습니다. 반면 사진이 잘 맞지 않을 때 제어할 수 있는 폭은 좁습니다. Promptchan의 리믹스와 자세·구도 조정은 원하는 장면에 가까워질 여지를 주지만 설정과 반복 횟수도 늘립니다. 광고 예시 하나로 어느 쪽의 실제 실패율을 판단할 수는 없습니다."],
        ["비공개 표시가 무처리를 뜻하지는 않습니다", "SpicyBox를 평가할 때는 원본 얼굴 사진의 보관과 삭제 경로가 가장 중요합니다. Promptchan은 유료 플랜에서 결과를 공개 갤러리에 올리지 않는 비공개 생성을 안내하지만, 이것이 서버에서 데이터를 처리하지 않는다는 뜻은 아닙니다. 두 서비스 모두 현재 결제 화면에서 완성 영상 한 편에 필요한 모든 시도의 크레딧을 계산하세요."]
      ],
      verdict: "본인 사진으로 짧은 변환을 빠르게 만들고 싶다면 SpicyBox의 템플릿 흐름을 검토하세요. 글에서 성인 가상 인물을 만들고 화풍과 자세를 다듬은 뒤 영상화하려면 Promptchan이 더 맞습니다. 비용과 업로드 규칙은 사용하는 날의 공식 화면으로 확인해야 합니다."
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI: 한 번의 영상인가, 이어지는 가상 인물인가",
      description: "SpicyBox와 OurDream AI의 본인 사진, 캐릭터 생성, 대화와 음성, 영상, 개인정보, 비용을 목적에 따라 비교합니다.",
      intro: "둘 다 영상을 언급하지만 같은 일을 하는 제품은 아닙니다. SpicyBox는 사용자 자신의 사진을 템플릿으로 짧게 움직입니다. OurDream AI는 가상 캐릭터를 만들고 대화, 목소리, 이미지, 영상에서 계속 활용합니다.",
      dimensions: [
        ["핵심 작업", "본인 사진을 짧은 영상으로 변환", "가상 인물과 대화·미디어를 이어감"],
        ["시작 단계", "본인만 나온 사진 업로드", "캐릭터 설정과 설명 입력"],
        ["지속성", "생성마다 개별 결과", "같은 인물과 여러 회차 상호작용"],
        ["비용 계산", "쓸 만한 영상 한 편까지의 시도", "대화·음성·이미지·영상의 총 사용량"]
      ],
      sections: [
        ["영상과 인물 관계는 다른 목표입니다", "SpicyBox에서는 이미 있는 사진과 어울리는 시각 효과를 고르면 됩니다. 성격이나 배경 이야기를 만들 필요가 없는 점이 장점입니다. OurDream AI의 공식 소개는 짧은 설명으로 인물을 만든 뒤 채팅, 목소리, 이미지와 영상으로 이어가는 과정을 보여 줍니다. 영상이 끝나도 캐릭터를 계속 사용할 수 있다는 점이 핵심입니다."],
        ["보호할 자료도 다릅니다", "SpicyBox의 업로드 이미지에는 본인만 등장해야 합니다. 얼굴뿐 아니라 집이나 직장을 드러내는 배경까지 개인 정보가 될 수 있습니다. OurDream AI는 가상의 성인 캐릭터로 시작할 수 있지만 장기간 대화에 자신의 일상이나 비밀을 적으면 또 다른 사생활 위험이 생깁니다. 어느 쪽이든 온라인 서비스에 남을 수 있는 정보로 취급하세요."],
        ["제품이 약속하는 것을 각각 시험하세요", "SpicyBox 사용 자격이 있다면 민감하지 않은 본인 사진과 간단한 움직임으로 얼굴 안정성, 배경 왜곡, 재시도 횟수와 크레딧을 봅니다. OurDream AI는 가상 인물이 여러 대화와 장면에서 이름, 성격, 모습, 목소리를 일관되게 유지하는지 따져 보세요. 이는 독자가 재현할 방법이지 이 사이트가 유료 실험을 마치고 매긴 점수가 아닙니다."],
        ["서로 다른 시간 단위의 가격", "SpicyBox는 실제로 남길 영상 한 편까지 버린 결과를 포함해 계산합니다. OurDream AI는 일주일 동안 메시지, 이미지, 음성, 영상에 얼마나 쓰는지 묶어 보는 편이 현실적입니다. 무료 사용량과 결제 단위는 바뀔 수 있으니 구매 직전 공식 화면에서 재확인하세요."]
      ],
      verdict: "내 사진을 한 번 짧게 움직이는 것이 목표라면 SpicyBox가 가깝습니다. 성인 가상 캐릭터를 오래 대화하며 여러 매체로 발전시키려면 OurDream AI가 가깝습니다. 자신의 사진과 장기간 채팅 중 어느 자료를 더 보호해야 하는지 먼저 정하세요."
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI: 본인 사진 영상 도구 두 개를 공정하게 비교하는 법",
      description: "SpicyBox와 Playbox AI가 공유하는 본인 단독 사진 규칙, 템플릿 탐색, 영상 안정성, 재시도 비용과 삭제 기능을 비교합니다.",
      intro: "Playbox AI는 다섯 대안 중 SpicyBox와 가장 비슷합니다. 두 서비스 모두 성인용 템플릿 기반 사진 영상화를 내세우며, 현행 약관에서는 업로더 본인만 이미지에 나와야 합니다. 어느 쪽이 타인의 사진을 허용하는지 찾는 비교는 적절하지 않습니다.",
      dimensions: [
        ["업로드 대상", "업로더 본인 한 명", "마찬가지로 업로더 본인 한 명"],
        ["탐색 화면", "Explore의 효과와 짧은 형식", "폭넓은 피드와 크리에이터 경로"],
        ["영상에서 볼 것", "얼굴·배경·원본과의 연속성", "같은 기준으로 움직임과 반복성"],
        ["비용·삭제", "사용 크레딧과 명시적 삭제", "플랜 할당량·추가 크레딧·명시적 삭제"]
      ],
      sections: [
        ["두 곳 모두 같은 선을 넘지 말아야 합니다", "SpicyBox와 Playbox AI의 공개 약관은 이미지 속 인물이 사진을 올리는 본인 한 명이어야 한다고 요구합니다. 구매한 모델 사진, 연인의 셀카, 유명인의 사진을 위한 우회 수단이 아닙니다. 실제 본인 사진을 서버에 올리기 싫다면 어느 쪽도 시험하지 않는 것이 합리적입니다."],
        ["템플릿 수보다 찾기 쉬운지가 중요합니다", "SpicyBox의 Explore는 특정 효과와 짧은 영상 형식을 전면에 둡니다. Playbox의 공개 화면은 더 넓어 보이는 피드와 크리에이터용 진입점을 제공합니다. 하지만 화면에 항목이 많다고 실제 영상 품질이 뛰어나다는 증거는 아닙니다. 내 사진의 구도에 맞는 무해한 동작 두 가지를 찾는 데 필요한 단계를 비교하세요."],
        ["광고 썸네일이 아니라 완성 과정을 보세요", "본인 사진 사용 자격이 있고 업로드에 동의한다면, 동일한 비민감 사진과 두 가지 간단한 동작으로 비교합니다. 완성된 클립의 얼굴, 손, 조명, 배경이 흔들리는지 보고 버린 결과와 걸린 시간도 기록하세요. 공개 자료만으로 특정 입력에 대한 승자를 알 수 없습니다. 이 글은 독자용 방법을 제안하며 자체 실험을 했다고 주장하지 않습니다."],
        ["크레딧과 보관의 끝을 확인하세요", "SpicyBox 약관은 결과가 만족스럽지 않아도 소진한 크레딧의 반환을 넓게 허용하지 않습니다. Playbox는 월별 할당량과 추가 구매를 안내하지만 세부 조건은 바뀔 수 있습니다. 두 개인정보 문서는 자료가 명시적인 삭제 전까지 저장될 수 있다고 설명합니다. 원본, 결과물, 계정의 삭제 위치를 먼저 찾으세요."]
      ],
      verdict: "본인 사진으로 짧은 템플릿 효과를 빠르게 얻는 것이 목적이라면 SpicyBox가 후보입니다. 더 넓은 카탈로그나 제작자용 진입점이 필요하다면 Playbox AI를 시험해 볼 만합니다. 비용과 삭제를 함께 보고 판단하되 타인의 얼굴은 어느 쪽에도 넣지 마세요."
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI: 본인 사진 효과와 글 기반 영상 제작의 차이",
      description: "SpicyBox와 Musebox AI를 시작 자료, 영상 확장, 이미지 권리, 크레딧, 저장과 게시 조건으로 비교합니다.",
      intro: "두 도구 모두 정지 이미지를 영상으로 바꿀 수 있지만 범위가 다릅니다. SpicyBox는 본인만 등장하는 사진과 템플릿이 중심입니다. Musebox AI는 이미지 외에 글에서 영상 만들기와 클립 연장을 소개합니다.",
      dimensions: [
        ["시작 자료", "본인 단독 사진과 템플릿", "이미지 또는 글 설명"],
        ["작업 범위", "짧은 시각 변환", "영상 생성·확장·캐릭터 도구"],
        ["인물 권리", "업로더만 등장한다는 명시 규정", "타인의 사진은 허락과 권리 확인 필요"],
        ["비용 항목", "생성·재시도 크레딧", "생성·확장·품질·내보내기 조건"]
      ],
      sections: [
        ["어떤 자료로 시작할 수 있나요", "SpicyBox에서는 업로드한 이미지에 업로더 본인만 나와야 합니다. 사진 사용 허락을 받았더라도 이 약관 조건은 그대로입니다. Musebox의 공식 영상 설명은 이미지와 글 설명 두 방식의 시작을 제시합니다. 다른 사람의 사진은 허락 없이 쓰지 말라는 안내가 있지만, 이는 어떤 실존 인물 사진이든 마음대로 쓸 수 있다는 허가가 아닙니다."],
        ["한 번의 효과와 이어지는 제작", "SpicyBox는 사진 구도에 맞는 템플릿을 찾으면 첫 짧은 클립까지의 길이 단순합니다. 움직임은 선택한 효과에 많이 의존합니다. Musebox는 글로 장면을 만들거나 사진을 애니메이션화하고 클립을 늘리는 흐름을 설명합니다. 긴 시퀀스가 필요하다면 추가 기능의 범위와 비용을 별도로 살펴야 합니다."],
        ["서로 다른 과제에는 서로 다른 평가", "두 곳에서 모두 허용되는 본인 사진 작업이라면 민감하지 않은 동일 사진과 단순 동작으로 얼굴·배경의 연속성, 내보내기, 재시도 비용을 기록하세요. 글만으로 가상 장면을 만드는 작업은 Musebox의 별도 장점이며 SpicyBox에 같은 점수를 요구할 수 없습니다. 우리는 독자용 점검법을 제시할 뿐 직접 렌더링한 승자를 주장하지 않습니다."],
        ["게시 가능성과 입력 권리를 분리하세요", "SpicyBox 공식 문서는 사용한 크레딧의 환불에 엄격하고 이미지·결과의 명시적 삭제를 설명합니다. Musebox에서 생성 영상의 사용을 안내하더라도 타인 원본의 권리까지 넘겨주지는 않습니다. 저작권, 초상 사용 허락, 서비스별 입력 자격, 공개 배포 권한을 각각 확인하세요."]
      ],
      verdict: "자신만 나온 사진을 짧은 템플릿 영상으로 바꾸려는 성인에게 SpicyBox의 목적이 분명합니다. 글에서 영상을 시작하거나 장면을 이어 제작하려면 Musebox AI가 더 적절한 후보입니다. 자료 권리, 현재 가격과 삭제 절차는 각각 다시 확인해야 합니다."
    },
    runway: {
      title: "SpicyBox vs Runway: 성인용 템플릿과 일반 영상 제작은 같은 일이 아닙니다",
      description: "SpicyBox와 Runway를 허용되는 작업, 영상 모델, 콘텐츠 심사, 편집, 오류와 크레딧, 개인정보로 비교합니다.",
      intro: "둘 다 이미지를 움직일 수 있지만 같은 요청이 양쪽에서 허용되지는 않습니다. SpicyBox는 성인용 본인 사진 템플릿입니다. Runway는 더 폭넓은 영상 제작·편집 환경이며 입력과 출력에 정책 심사가 적용됩니다.",
      dimensions: [
        ["주된 목적", "허용된 본인 사진을 빠르게 변환", "일반 영상 제작·편집"],
        ["입력 조건", "업로더가 유일한 인물", "권리와 이용 정책 준수"],
        ["연출 방법", "시각 템플릿 선택", "모델·동작 지정과 후속 편집"],
        ["심사·비용", "성인 서비스지만 약관·크레딧 확인", "입출력 심사와 모델별 비용·오류 처리"]
      ],
      sections: [
        ["렌더링보다 먼저 정책 적합성을 보세요", "SpicyBox는 성인 이용자가 본인만 나온 이미지를 제출하도록 요구합니다. 공개된 타인의 사진도 허용 대상이 아닙니다. Runway 도움말은 입력과 출력이 자동으로 검토되며 지원팀이 특정 프로젝트의 심사를 꺼 줄 수 없다고 설명합니다. 막힌 요청을 되풀이하기보다 양쪽 규칙에 맞는 비노골적 영상 아이디어로 바꾸세요."],
        ["간단한 효과와 넓은 제작 제어", "SpicyBox는 효과를 고르고 사진 구도가 맞으면 짧은 클립까지 곧바로 진행합니다. 선택이 쉬운 대신 세밀한 연출은 템플릿에 제한됩니다. Runway의 현재 Gen-4.5 안내는 이미지에서 영상으로 가는 과정과 동작 지시를 설명합니다. 촬영 움직임과 후속 편집이 필요한 일반 제작에 유리할 수 있지만 모델과 제공 범위는 바뀝니다."],
        ["공통으로 허용되는 작은 과제", "두 서비스의 현재 규칙에 맞는 비노골적 패션 또는 제품 영상처럼 단순한 동작을 골라 비교합니다. SpicyBox에 본인 사진을 쓸 자격이 있다면 주소 등 불필요한 식별 정보를 빼고 얼굴, 배경, 움직임과 내보내기를 확인하세요. 실제로 남길 한 편까지 모든 시도를 셉니다. 이 사이트는 유료 생성 실측 순위를 만들지 않았습니다."],
        ["오류마다 크레딧 처리도 다릅니다", "SpicyBox는 마음에 들지 않는 출력에 쓴 크레딧을 넓게 돌려주지 않습니다. Runway 도움말은 시스템 생성 오류와 정책 심사를 구분하며 환급도 같다고 볼 수 없습니다. 사용하는 모델, 요금제, 실패 원인에 대한 현행 설명을 확인하세요. 허용된 원본이라도 저장과 공유 설정을 살펴야 합니다."]
      ],
      verdict: "본인만 나온 사진을 성인용 템플릿으로 짧게 움직이려면 SpicyBox가 해당 목적에 가깝습니다. 규칙에 맞는 일반 영상을 연출하고 추가 편집까지 하려면 Runway가 후보입니다. 어느 한쪽의 정책에 맞지 않는 기획이라면 화질을 비교하기 전에 그 서비스를 제외하세요."
    }
  },
  "zh-hant": {
    promptchan: {
      title: "SpicyBox vs Promptchan：用自己的照片套模板，還是從文字創作虛構人物",
      description: "比較 SpicyBox 與 Promptchan 的上傳條件、文字生圖、影片製作、點數及隱私，先釐清是否真的需要使用本人照片。",
      intro: "兩者都涉及成人向 AI 影像，但起點並不相同。SpicyBox 讓使用者把只有自己入鏡的照片套用模板，Promptchan 則能從文字創作虛構人物、調整姿勢與構圖，再延伸為影片。",
      dimensions: [
        ["起始素材", "本人單獨入鏡的照片與模板", "文字、生成圖或圖庫再創作"],
        ["創作控制", "以模板與原圖匹配為主", "文字、排除詞、畫風、姿勢、構圖"],
        ["影片路徑", "照片產生短片", "圖片轉影片或文字轉影片"],
        ["花費重點", "每次生成與重試的點數", "生圖、影片、畫質及私人模式"]
      ],
      sections: [
        ["你已經有合規照片嗎", "SpicyBox 的 Explore 先呈現視覺效果，再由使用者提供符合規定的本人照片。少了撰寫提示詞的步驟，但原圖若是臉部特寫，未必適合需要全身動作的模板。Promptchan 的官方生成頁提供文字、排除詞、風格、姿勢及構圖控制，適合先打造一位完全虛構的成年人物。"],
        ["肖像同意不等於上傳資格", "SpicyBox 現行條款要求照片中的人物只有上傳者本人。即使伴侶同意，或你買下模特兒照片，也不等於符合這項平台特定限制。Promptchan 可由文字出發，降低為了虛構角色而使用真人臉部的必要；若仍要上傳素材，則需另讀 Promptchan 當下的權利及隱私條款。"],
        ["簡單操作與細節控制的交換", "SpicyBox 的模板把動作與畫面預先包好，可能較快做出第一支短片，卻也更依賴原圖構圖。Promptchan 可以反覆調整圖片、從圖庫變體再製或製作影片；較多選項意味著更多學習時間與可能的點數消耗。兩家的宣傳成品都不能代表你的輸入會得到相同品質。"],
        ["私人生成也要查資料處理", "SpicyBox 最敏感的是可識別的本人原圖，應先確認保存與刪除方法。Promptchan 把不進入公開圖庫的私人生成列為付費功能，但『不公開』不等於服務完全不處理資料。比較時要把失敗、重試、輸出與下載所需的所有點數列入。"]
      ],
      verdict: "若目標是快速讓自己的照片動起來，而且接受 SpicyBox 的本人單獨入鏡條件，可以先研究其模板流程。若想從文字建立虛構成年人物，並逐步控制畫風、姿勢與影片，Promptchan 更貼近需求。上傳規則與費用請以使用當日的官方頁面為準。"
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI：一次短片，還是可以持續互動的虛構人物",
      description: "從本人照片、角色建立、對話與語音、影片、隱私及整體花費比較 SpicyBox 和 OurDream AI。",
      intro: "只因兩個產品都能產出影像，就把它們視為同類工具，容易選錯。SpicyBox 著重把自己的照片變成短片；OurDream AI 則建立虛構人物，讓其延續於對話、聲音、圖片及影片。",
      dimensions: [
        ["核心工作", "本人照片的短片轉換", "虛構人物及長期互動"],
        ["起點", "只有本人入鏡的照片", "人物設定與文字描述"],
        ["後續連貫", "每次生成的獨立結果", "同一人物跨會話與媒體"],
        ["算費用的單位", "一支可用短片的總嘗試", "一週對話、語音、圖片、影片"]
      ],
      sections: [
        ["成品影片與角色關係不是同一目標", "使用 SpicyBox 時，選一個適合現有照片的效果並看結果即可，不必先寫人物性格。OurDream AI 的官方介紹則以簡短描述建立人物，接著聊天、使用聲音並產出影像；影片完成後，人物還能在下一次互動中出現。"],
        ["照片與對話各有私隱風險", "SpicyBox 嚴格要求原圖只出現上傳者本人，背景的住址或工作地點同樣可能暴露身分。OurDream AI 可以從虛構成年人物出發，但使用者若長期在對話中透露真實私事，也會留下另一類資料。請把兩者都當成線上服務處理的內容，而不是私密日記。"],
        ["用各自承諾的功能來檢驗", "合格且願意使用本人非敏感照片的讀者，可在 SpicyBox 看臉部一致性、背景扭曲、重試次數與點數。OurDream AI 則適合用虛構人物跨幾段對話與不同圖片，觀察名稱、個性、長相與聲音能否保持連貫。這是讀者可以自行執行的檢查，並非本站虛構的付費實測排名。"],
        ["結帳前採用不同時間尺度", "SpicyBox 要算到留下一支可用短片為止，包括捨棄的結果。OurDream AI 更適合統計一週內訊息、圖片、語音及影片的整體使用量。免費額度與點數規則可能改變，必須在付款當下查官方頁面。"]
      ],
      verdict: "只有一次本人照片轉換需求，就先看 SpicyBox。想與虛構成年角色長期互動，並延伸到多種媒體，才看 OurDream AI。選擇前要想清楚，你更不願意交出的是可識別的臉部照片，還是持續累積的個人對話。"
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI：同樣只收本人照片，還能比什麼",
      description: "SpicyBox 與 Playbox AI 均要求照片只出現上傳者本人；比較模板搜尋、動作穩定、重試點數與刪除流程才有意義。",
      intro: "Playbox AI 是這五個候選中最接近 SpicyBox 的產品。兩者都讓成人以模板製作短片，現行條款都要求上傳者是照片裡唯一的人。不要把它們當成可用來處理他人肖像的兩種選擇。",
      dimensions: [
        ["影像規則", "上傳者本人單獨入鏡", "同樣要求上傳者單獨入鏡"],
        ["探索方式", "Explore 裡的效果與短片類別", "較廣的模板與創作者入口"],
        ["品質問題", "臉部、手、背景與原圖穩定性", "以相同目標觀察動作及重現性"],
        ["付款及刪除", "已用點數及明確刪除", "方案額度、加購點數及明確刪除"]
      ],
      sections: [
        ["先接受共同的界線", "SpicyBox 與 Playbox AI 的現行使用條款，都要求影像只呈現上傳的那個人。伴侶照片、買來的模特兒照片或名人截圖不因取得許可就自然符合條件。若你不願把真實自拍照送往線上服務，合理選擇是兩者都不要測。"],
        ["模板數量與找到合適模板是兩回事", "SpicyBox 的 Explore 把不同視覺處理及短片形式擺在眼前。Playbox 公開頁面看起來有較廣的動態牆及創作者入口；這是介面觀察，不等於成品一定更好。先訂兩個不露骨的簡單動作，看哪個介面能讓你更快找到與照片畫角相合的模板。"],
        ["比較一整次工作，不只挑最好的一張", "如果有資格且願意用非敏感的本人照片，可以在兩邊使用相同原圖與兩種動作。檢查整支影片的臉部、手部、光線及背景，記下被捨棄的版本和耗時。公開資料不足以替特定原圖選出品質贏家；本站只提供可重複的測試步驟，沒有假稱完成親自拍攝的實驗。"],
        ["點數與資料保存都要看到終點", "SpicyBox 條款對不滿意的已用點數採取嚴格退款立場。Playbox 提供方案額度及額外點數，但細節隨時可能調整。兩邊隱私文件都提到內容可能留存到使用者明確刪除。付款與上傳前，先找到原圖、成品及帳號的刪除位置。"]
      ],
      verdict: "若 SpicyBox 的精簡模板能以可接受的再試成本完成你的本人照片短片，它適合先研究。若 Playbox AI 的目錄或創作者功能更符合工作流程，也值得以相同素材比較。兩者都不能因模板不同而忽略只限本人照片的共同規則。"
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI：本人照片模板與文字生影片的分界",
      description: "比較 SpicyBox 和 Musebox AI 的起始素材、影片延長、肖像及著作權、點數、儲存與公開使用條件。",
      intro: "兩者都能把圖片變成影片，但 SpicyBox 著重以僅有本人入鏡的照片快速套模板；Musebox AI 的公開資料另外介紹文字生影片、延長片段及其他製作工具。你需要的是一次轉換，還是一段可延續的製作流程？",
      dimensions: [
        ["開始素材", "本人單獨入鏡照片加模板", "圖片或文字描述"],
        ["工作範圍", "短片視覺轉換", "生成、延長及角色相關工具"],
        ["肖像界線", "條款明定本人是唯一人物", "他人照片須另查同意和權利"],
        ["完成成本", "生成及重試所耗點數", "生成、延長、畫質與輸出條件"]
      ],
      sections: [
        ["先看素材是否可以使用", "SpicyBox 的現行條款要求使用者本人是照片裡唯一的人。模特兒授權或第三人同意，不會自動解除平台的這項限制。Musebox 的影片頁面同時提供圖片與文字起步；入口告知不要在未經許可下使用他人照片。但這不是可以複製任何真人肖像的全面授權。素材權利和當地法規仍須個別確認。"],
        ["一次模板效果，還是逐段完成影片", "SpicyBox 若找到與本人照片構圖相合的模板，從選擇到短片的路徑較直接，卻也較受預設動作影響。Musebox 提供文字描述、圖片轉影片與延長等操作，更適合需要繼續組成場面的計畫。後續步驟同時增加點數與輸出權利需要核對的地方。"],
        ["不要用一個總分混合兩種測試", "以同一張符合雙方規則的非敏感本人照片比對時，應固定簡單動作，觀察臉部一致性、背景、匯出及重試費用。由文字創作虛構影片則是 Musebox 的另一種工作，不能假設 SpicyBox 是同等的文字生影片工具。本站建議讀者自測，並未宣稱編輯部付費實測出排名。"],
        ["作品可用，不表示原始肖像也有權用", "SpicyBox 官方文件對已用點數退款較嚴，並說明明確刪除影像的流程。Musebox 對成品用途的宣傳，也不會移轉原圖中他人的權利。著作權、肖像許可、平台輸入資格與公開散布權應分開檢查。"]
      ],
      verdict: "願意依規則用自己的照片，並只要一支短模板影片的成年人，可以研究 SpicyBox。若需要從文字創作場景、延長片段與處理更多製作步驟，Musebox AI 才是不同方向的候選。任何選擇都要核對現行素材規則、費用與刪除控制。"
    },
    runway: {
      title: "SpicyBox vs Runway：成人模板與一般影像製作不能直接畫等號",
      description: "以允許的內容、影像模型、審查、後製、失敗點數與私隱比較 SpicyBox 和 Runway。",
      intro: "雖然兩邊都與圖片轉影片相關，但相同題材未必在兩邊都符合規則。SpicyBox 是成人向的本人照片模板流程；Runway 則提供更廣的影像製作與編輯，而且會審查輸入和輸出。",
      dimensions: [
        ["主要工作", "把合格的本人照片快速套模板", "一般影片創作及編輯"],
        ["輸入界線", "上傳者是唯一入鏡人物", "依素材權利和使用政策"],
        ["創作指令", "選擇視覺效果", "選模型、引導動作並後製"],
        ["審查及點數", "成人服務仍須遵守規約", "入出審查與模型別成本、錯誤處理"]
      ],
      sections: [
        ["先問企劃能不能做", "SpicyBox 要求照片裡只有上傳者本人，並只供成人使用。公開或付費取得的他人照片仍不因此符合條件。Runway 的支援文件解釋它會審查輸入與輸出，而且支援團隊不能為個別專案關閉審查。遇到被拒的題材，應改為符合政策的非露骨創意，而不是反覆嘗試繞過限制。"],
        ["速度與控制範圍的交換", "SpicyBox 選模板後，如本人照片的角度合適，能較直接完成短片；細部動作由預設效果決定。Runway 現行 Gen-4.5 指南則介紹圖片轉影片與動作指示，可接續其他編輯步驟。需要鏡頭設計或反覆剪輯的一般作品，更值得研究這套工具，但模型與方案可能更新。"],
        ["用雙方都允許的簡單情境", "可選一段非露骨時尚或產品短片，且確定符合兩邊目前的規則。若有資格使用 SpicyBox，照片只應出現自己，並移除地址等多餘識別資訊。檢查完整影片的臉部、背景、動作與可輸出格式，記下每次失敗。本站沒有虛構編輯部付費生成的品質排行榜。"],
        ["錯誤與審查的點數處理不同", "SpicyBox 對不滿意結果所用點數的退還限制較嚴。Runway 的說明將技術生成錯誤與政策審查分開，不能假設每一種失敗都是免費重試。請按現用模型、方案與錯誤原因核對最新扣費說明；也要留意符合規則的原圖如何被保存及分享。"]
      ],
      verdict: "想把符合條件的本人照片快速製成成人向模板短片，SpicyBox 更接近需求。要製作符合政策的一般影片並後續編輯，Runway 才是相應工具。如果企劃不符合任何一方規則，就先剔除該服務，而非比較畫質高低。"
    }
  },
  es: {
    promptchan: {
      title: "SpicyBox vs Promptchan: animar tu foto o crear un personaje desde cero",
      description: "SpicyBox y Promptchan frente a frente: foto propia, creación desde texto, control visual, vídeo, créditos y privacidad.",
      intro: "Los dos servicios crean imágenes para adultos, pero piden empezar de formas distintas. SpicyBox aplica una plantilla a una foto en la que solo apareces tú. Promptchan permite describir a un personaje ficticio, ajustar su composición y después animar el resultado.",
      dimensions: [
        ["Punto de partida", "Foto propia y plantilla", "Texto, imagen generada o remix de la galería"],
        ["Control", "Elección de efecto y encuadre de origen", "Estilo, pose, composición y variaciones"],
        ["Vídeo", "Clip breve basado en una foto", "De imagen a vídeo o directamente de texto a vídeo"],
        ["Coste que importa", "Intentos, repeticiones y créditos", "Imágenes, vídeo, calidad y generación privada"]
      ],
      sections: [
        ["Primero decide si necesitas subir una foto", "Explore, en SpicyBox, reduce la decisión a elegir un tratamiento y aportar una foto que cumpla sus condiciones. Es rápido cuando el efecto encaja con el encuadre original; una selfie de rostro no siempre sirve para un movimiento de cuerpo entero. La página oficial de Promptchan, en cambio, ofrece descripción en lenguaje natural, instrucciones negativas, estilo, pose y composición para crear una figura ficticia desde el principio."],
        ["Permiso para usar una imagen no equivale a cumplir las condiciones", "Los términos actuales de SpicyBox exigen que la persona que sube cada imagen sea también la única retratada. Ni la autorización de tu pareja ni una licencia de stock sustituyen esa norma concreta. Promptchan puede empezar con texto sin exponer la cara de nadie real. Si decides subir una imagen allí, revisa sus propias reglas de semejanza, derechos y privacidad; las normas de SpicyBox no se trasladan a otro servicio."],
        ["La rapidez tiene un precio en control", "Una plantilla empaqueta movimiento y estética, por lo que SpicyBox requiere menos ajustes previos. Su límite aparece si la fuente no coincide con el efecto. Promptchan permite revisar una imagen, cambiar pose o estilo y producir variantes antes del vídeo; esa libertad puede aumentar tiempo y gasto. Ninguna muestra comercial demuestra la tasa de fallos que obtendrás con tus propios materiales."],
        ["Privacidad y presupuesto de una tarea completa", "En SpicyBox importa localizar el borrado de la foto original, el resultado y la cuenta. Promptchan anuncia generación privada en planes de pago, pero no aparecer en una galería no significa ausencia de procesamiento. Compara el saldo consumido para llegar a una imagen satisfactoria y a un clip útil, contando versiones descartadas. Comprueba las condiciones actuales justo antes de pagar."]
      ],
      verdict: "SpicyBox tiene sentido si eres adulto, solo aparece tu imagen y prefieres un efecto rápido mediante plantilla. Promptchan encaja si quieres inventar una persona adulta desde texto y dirigir estilo, pose y vídeo por etapas. La entrada permitida y el precio real se confirman en las páginas vigentes de cada proveedor."
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI: un clip puntual o un personaje que continúa",
      description: "Comparamos SpicyBox y OurDream AI por foto propia, personaje ficticio, conversación, voz, imagen, vídeo, datos y coste.",
      intro: "Que ambos produzcan vídeo no los convierte en sustitutos. SpicyBox transforma una foto del propio usuario con una plantilla. OurDream AI gira alrededor de un personaje ficticio que puede seguir apareciendo en conversaciones, voz, imágenes y vídeo.",
      dimensions: [
        ["Tarea central", "Transformar una foto propia", "Crear y mantener un personaje ficticio"],
        ["Entrada", "Foto en la que solo está quien la sube", "Descripción y configuración del personaje"],
        ["Continuidad", "Resultados breves por generación", "Interacción que se prolonga entre sesiones"],
        ["Presupuesto", "Intentos por clip conservado", "Mensajes, voz, imágenes y vídeo por periodo"]
      ],
      sections: [
        ["Una escena no es una relación con un personaje", "En SpicyBox eliges el efecto adecuado para una foto que ya tienes. No hace falta escribir una biografía ni mantener una charla; esa sencillez es parte del producto. La presentación oficial de OurDream AI comienza con una descripción de personaje y permite continuar con chat, voz y medios visuales. Si solo necesitas una escena, muchas de esas capas sobran; si quieres volver al mismo personaje, son el motivo principal para usarlo."],
        ["Se protege información distinta", "SpicyBox limita la subida a una foto donde solo aparezca el usuario. Incluso un retrato propio puede revelar casa, trabajo o ubicación por su fondo. OurDream AI permite partir de una figura ficticia, pero una conversación prolongada puede acumular datos personales reales del usuario. No trates el chat como un diario confidencial ni una foto subida como si desapareciera automáticamente."],
        ["Prueba cada producto según su promesa", "Si puedes y quieres usar una foto propia no sensible, en SpicyBox observa estabilidad del rostro, movimiento del fondo, intentos necesarios y créditos por clip útil. En OurDream AI plantea varias escenas ficticias y mira si el nombre, personalidad, aspecto y voz del personaje mantienen coherencia. Es un procedimiento sugerido a los lectores, no una clasificación basada en pruebas pagadas que hayamos realizado."],
        ["Dos escalas para calcular el coste", "SpicyBox se evalúa por generación, incluyendo versiones que descartas antes de conseguir un vídeo aprovechable. En OurDream AI conviene imaginar una semana de mensajes, modelos, voz, imágenes y vídeo. Las cuotas gratuitas y los créditos cambian; un precio antiguo en un artículo no reemplaza la pantalla de pago actual."]
      ],
      verdict: "Para convertir una foto propia y permitida en un clip breve, empieza por valorar SpicyBox. Para diseñar a un adulto ficticio y seguirlo en conversación y medios, valora OurDream AI. Antes de elegir, identifica qué dato quieres proteger más: tu rostro reconocible o el contenido acumulado de tus conversaciones."
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI: dos herramientas de vídeo con la misma regla de foto propia",
      description: "SpicyBox y Playbox AI comparten la obligación de que solo salga quien sube la foto; analizamos catálogos, movimiento, créditos y borrado.",
      intro: "Playbox AI es la alternativa más cercana a SpicyBox dentro de esta selección. Ambos ofrecen plantillas de vídeo para adultos y sus condiciones actuales exigen que el usuario sea la única persona retratada en el archivo enviado. Ninguno debe plantearse como una vía para animar la imagen de un tercero.",
      dimensions: [
        ["Foto admitida", "Solo la persona que la sube", "También solo la persona que la sube"],
        ["Exploración", "Tratamientos en Explore y formatos breves", "Catálogo amplio y rutas para creadores"],
        ["Calidad por comprobar", "Rostro, manos, fondo y movimiento", "Los mismos objetivos con igual material"],
        ["Gasto y datos", "Créditos consumidos y borrado explícito", "Asignación del plan, extras y borrado explícito"]
      ],
      sections: [
        ["La frontera compartida no admite atajos", "Los términos publicados de SpicyBox y Playbox AI requieren que en cada foto aparezca únicamente quien la envía. Una imagen de stock con licencia, una foto de tu pareja o un retrato famoso no se vuelven aptos por cambiar de plataforma. Si no quieres subir tu propia imagen identificable, la opción prudente es descartar los dos flujos de subida."],
        ["Un catálogo grande no es necesariamente mejor", "Explore, en SpicyBox, destaca efectos visuales y formatos cortos. La interfaz pública de Playbox muestra una oferta aparentemente más extensa, con caminos para creadores. Esto describe la navegación, no demuestra mayor calidad de vídeo. Busca dos movimientos no explícitos que realmente usarías y comprueba cuántos pasos hacen falta para encontrar un ejemplo ajustado a tu encuadre."],
        ["Compara la sesión entera", "Si reúnes las condiciones y aceptas subir una imagen propia no sensible, utiliza la misma fuente y las mismas dos metas sencillas en ambos servicios. Mira los clips completos, no solo la miniatura: continuidad facial, manos, iluminación y movimientos del fondo. Apunta intentos desechados, tiempo y saldo. Las páginas públicas no determinan un ganador para tu foto; este es un método reproducible, no una prueba realizada por nuestra redacción."],
        ["Repetición y eliminación también son calidad", "SpicyBox limita ampliamente la devolución de créditos consumidos por resultados que no satisfacen, conforme a la ley aplicable. Playbox anuncia asignaciones y compras adicionales, sujetos a cambios. Las políticas de privacidad de ambos describen conservación hasta una eliminación expresa. Localiza el borrado de fuente, resultado y cuenta antes de hacer una prueba."]
      ],
      verdict: "SpicyBox puede convenir si su recorrido de plantillas permite obtener pronto el movimiento deseado con un coste de repetición aceptable. Playbox AI merece examen si te sirven mejor su catálogo y sus opciones para creadores. Decide con intentos y borrado incluidos; ninguna de las dos autoriza por ello fotos de terceros."
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI: plantilla para tu foto o un estudio de vídeo más amplio",
      description: "SpicyBox y Musebox AI comparados por material de entrada, texto a vídeo, extensión, derechos, créditos y privacidad.",
      intro: "Ambos pueden mover una imagen fija, pero SpicyBox concentra el proceso en una foto del propio usuario y una plantilla. Musebox AI también presenta creación desde texto, ampliación de clips y más pasos de producción. La pregunta es si buscas una transformación puntual o una secuencia que seguirá creciendo.",
      dimensions: [
        ["Inicio", "Foto en la que solo sale el usuario", "Imagen o descripción escrita"],
        ["Alcance", "Clip breve mediante tratamiento elegido", "Generación, extensión y herramientas de personaje"],
        ["Identidad y derechos", "Regla estricta de único retratado", "Verificar permiso sobre fotos de terceros"],
        ["Coste final", "Generaciones y repeticiones", "Generación, extensión, calidad y exportación"]
      ],
      sections: [
        ["La entrada permitida cambia el proyecto", "Las condiciones de SpicyBox requieren que el usuario sea la única persona en la foto subida. Ni una licencia ni un consentimiento informal eliminan ese requisito contractual. Musebox explica que puede empezar desde una imagen o desde texto y su acceso advierte que no se usen fotos ajenas sin permiso. No conviertas esa diferencia en un permiso universal para copiar caras reales: comprueba derechos, condiciones completas y ley local."],
        ["Resultado rápido frente a escena en evolución", "SpicyBox evita varias decisiones creativas si la plantilla elegida encaja con el encuadre de una foto propia permitida. El movimiento, sin embargo, depende bastante del efecto predefinido. Musebox ofrece descripción textual, imagen a vídeo y extensión de clips. Puede resultar útil si necesitas continuidad, aunque cada etapa adicional plantea preguntas sobre créditos, límites técnicos y derechos de uso."],
        ["No mezcles dos experimentos en una sola nota", "Para comparar una imagen propia admitida en ambos servicios, mantén foto y objetivo de movimiento sencillos; registra estabilidad facial, fondo, exportación, tiempo y cada repetición. Crear una escena ficticia exclusivamente desde texto es otra tarea de Musebox. No tiene sentido penalizar a SpicyBox por no ser el mismo producto. Proponemos un protocolo, no fingimos un ranking medido por nuestros editores."],
        ["El derecho sobre la salida no limpia la entrada", "La política SpicyBox describe almacenamiento hasta borrado expreso y sus términos restringen la devolución de créditos usados. Aunque Musebox anuncie posibilidades de compartir lo generado, eso no transfiere derechos sobre una imagen ajena aportada como entrada. Separa derechos de autor, consentimiento de imagen, admisibilidad según la plataforma y publicación del resultado."]
      ],
      verdict: "SpicyBox es una opción clara para un adulto que acepta la regla de foto propia y quiere una transformación breve. Musebox AI merece atención si necesitas partir de texto, prolongar escenas o gestionar una producción con más fases. Revisa material permitido, coste total y controles de eliminación antes de comprar."
    },
    runway: {
      title: "SpicyBox vs Runway: plantillas para adultos frente a producción de vídeo general",
      description: "Comparación de SpicyBox y Runway por política de contenido, imagen a vídeo, control creativo, moderación, errores, créditos y datos.",
      intro: "Compartir la función de imagen a vídeo no significa que acepten el mismo proyecto. SpicyBox propone transformaciones breves de la foto propia en un contexto adulto. Runway es un entorno más general de creación y edición, y modera tanto las entradas como las salidas.",
      dimensions: [
        ["Trabajo principal", "Efecto rápido sobre foto propia admitida", "Vídeo creativo y edición general"],
        ["Entrada", "El usuario debe ser el único retratado", "Cumplir derechos y política de uso"],
        ["Dirección", "Elegir tratamiento visual", "Elegir modelo, orientar movimiento y editar"],
        ["Política y gasto", "Reglas para adultos y créditos por intento", "Moderación, errores y coste según modelo"]
      ],
      sections: [
        ["La política importa antes que la estética", "SpicyBox exige mayoría de edad y que solo el usuario aparezca en la imagen que sube. Una foto ajena no se vuelve admisible por ser pública o comprada. La ayuda de Runway explica que sus sistemas examinan entradas y resultados y que soporte no puede desactivar la moderación para una cuenta. Si una idea está prohibida, rediseña un concepto permitido y no insistas en forzar la petición bloqueada."],
        ["Velocidad de plantilla y amplitud de dirección", "En SpicyBox eliges el efecto y valoras si tu imagen encaja; pocos ajustes pueden acortar el camino al primer clip. En Runway, la guía actual de Gen-4.5 aborda imagen a vídeo y cómo orientar el movimiento dentro de un proceso más amplio. Un proyecto general que necesite cámara, iteraciones y edición puede aprovechar esa flexibilidad, pero modelos y prestaciones cambian."],
        ["Usa una prueba común, no explícita y permitida", "Una idea sencilla de moda o producto puede servir para observar una acción comparable, siempre que cumpla las reglas de ambos. Si puedes usar SpicyBox, la foto debe mostrarte solo a ti y carecer de datos de ubicación. Examina el clip completo: identidad, fondo, movimiento, resolución y exportación. Cuenta todas las versiones hasta una usable. Es una prueba sugerida, no un resultado medido por este sitio."],
        ["No todas las fallas devuelven créditos", "Los términos de SpicyBox no ofrecen, de forma amplia, reembolso por una salida que simplemente decepciona, sujeto a la ley aplicable. Runway distingue en su ayuda entre error de generación y bloqueo de contenido; los créditos pueden tratarse de manera distinta. Consulta las condiciones actuales del modelo, el plan y el motivo del fallo. También revisa almacenamiento y opciones de compartir cualquier fuente admitida."]
      ],
      verdict: "Si el proyecto consiste en un clip breve con una foto tuya admitida y plantillas para adultos, SpicyBox se ajusta más. Si buscas dirección y edición de vídeo general dentro de la política de uso, Runway es un candidato más pertinente. Una herramienta que no permite la idea no debe seguir en la comparación, por buena que parezca su imagen."
    }
  },
  "pt-br": {
    promptchan: {
      title: "SpicyBox vs Promptchan: animar sua foto ou criar uma pessoa fictícia do zero",
      description: "Compare SpicyBox e Promptchan por regra de foto própria, criação por texto, controle de imagem, vídeo, créditos e privacidade.",
      intro: "Os dois serviços têm ferramentas visuais para adultos, mas partem de materiais diferentes. SpicyBox aplica um modelo a uma foto que mostra apenas você. Promptchan pode criar uma pessoa fictícia a partir de texto, ajustar pose e enquadramento e animar o resultado.",
      dimensions: [
        ["Ponto de partida", "Foto própria e modelo visual", "Texto, imagem gerada ou remix da galeria"],
        ["Controle criativo", "Escolha do efeito e enquadramento", "Estilo, pose, composição e variações"],
        ["Vídeo", "Clipe curto derivado da foto", "Imagem para vídeo ou texto para vídeo"],
        ["Custo real", "Tentativas e créditos gastos", "Imagem, vídeo, qualidade e modo privado"]
      ],
      sections: [
        ["Decida primeiro se precisa enviar uma foto", "Em Explore, o SpicyBox mostra tratamentos visuais e pede uma foto pessoal que cumpra suas regras. O caminho pode ser rápido quando a posição e a luz da imagem combinam com o modelo; uma selfie de rosto não garante resultado em uma cena de corpo inteiro. A página oficial do Promptchan apresenta descrição em texto, prompt negativo, estilo, pose e composição para criar uma figura fictícia antes de animá-la."],
        ["Autorização de imagem e regra de entrada não são iguais", "Os termos atuais do SpicyBox exigem que só o usuário que envia apareça na foto. A autorização de outra pessoa ou a compra de uma imagem de banco não substitui essa exigência. Promptchan começa por texto e pode dispensar uma face real para criar um adulto fictício. Caso você suba uma imagem lá, confira suas próprias regras de direitos, sem presumir que as políticas das plataformas sejam intercambiáveis."],
        ["Rapidez versus direção detalhada", "A escolha de um modelo pronto concentra movimento e aparência em poucos passos no SpicyBox, mas limita o que pode ser corrigido se a foto não se ajustar bem. No Promptchan, remix, pose e estilo ajudam a refinar a imagem; mais opções também podem pedir mais tempo e créditos. A vitrine de qualquer serviço mostra exemplos escolhidos, não a taxa de erros com seus arquivos."],
        ["Privacidade e saldo até chegar a um clipe útil", "Ao usar SpicyBox, encontre a exclusão da foto original, do resultado e da conta antes de enviar uma imagem identificável. O Promptchan informa que a geração privada, fora da galeria pública, é um benefício pago; isso não significa ausência de processamento no servidor. Conte o saldo usado em versões descartadas, vídeo e exportação, e verifique a oferta atual no checkout."]
      ],
      verdict: "SpicyBox é mais direto se você é adulto, pretende animar uma foto que mostra só você e prefere escolher um efeito pronto. Promptchan se aproxima de quem quer inventar um adulto fictício pelo texto e controlar imagem e vídeo em etapas. Confirme regras de entrada e custo no dia do uso."
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI: um vídeo avulso ou um personagem que continua",
      description: "Entenda SpicyBox e OurDream AI por foto própria, criação de personagem, conversa, voz, imagem, vídeo, dados pessoais e gastos.",
      intro: "Produzir vídeo não faz desses serviços substitutos diretos. SpicyBox transforma uma foto do próprio usuário usando um modelo visual. OurDream AI se organiza em torno de uma pessoa fictícia que pode continuar no chat, na voz, nas imagens e nos vídeos.",
      dimensions: [
        ["Tarefa principal", "Transformação breve de foto própria", "Personagem fictício e interação continuada"],
        ["Entrada", "Foto apenas de quem a envia", "Descrição e configuração da personagem"],
        ["Continuidade", "Resultados separados por geração", "Uma identidade usada em várias sessões"],
        ["Como calcular", "Tentativas por clipe aproveitável", "Mensagens, voz, imagens e vídeo ao longo do tempo"]
      ],
      sections: [
        ["Uma cena pronta não é uma personagem persistente", "No SpicyBox, você escolhe um efeito compatível com uma foto existente. Não precisa construir personalidade nem história, o que é uma vantagem quando só se quer um resultado curto. A apresentação oficial do OurDream AI parte de uma descrição da personagem e segue para conversa, voz e mídia. Depois de um vídeo, a interação pode continuar."],
        ["Os dados sensíveis mudam de forma", "SpicyBox só aceita imagem na qual aparece a própria pessoa que faz o upload. Além do rosto, o ambiente pode mostrar endereço ou local de trabalho. OurDream AI pode partir de uma personagem fictícia, mas uma conversa longa pode reunir informações reais que o usuário revela espontaneamente. Nenhum desses dados deve ser tratado como invisível só porque o serviço é de entretenimento."],
        ["Teste a promessa de cada produto", "Se você puder e quiser usar uma foto sua não sensível, avalie no SpicyBox estabilidade do rosto, fundo, tentativas e créditos por vídeo útil. No OurDream AI, compare cenas e conversas de uma pessoa fictícia: nome, personalidade, aparência e voz permanecem coerentes? É um roteiro de avaliação para o leitor, não resultado de testes pagos que esta publicação afirma ter feito."],
        ["Um clipe ou uma semana de uso", "O gasto no SpicyBox faz mais sentido por vídeo guardado, incluindo saídas descartadas. No OurDream AI, simule uma semana com mensagens, modelos, voz, imagens e vídeo. Limites grátis e valores podem mudar; confira a tela oficial no momento da compra."]
      ],
      verdict: "Para uma transformação única de foto própria admitida, examine SpicyBox. Para criar um adulto fictício e continuar a relação em conversa e diferentes mídias, examine OurDream AI. Antes, decida qual informação pesa mais para sua privacidade: uma foto reconhecível ou uma sequência de conversas pessoais."
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI: dois geradores que exigem foto apenas do usuário",
      description: "SpicyBox e Playbox AI compartilham a regra da foto própria; compare busca de modelos, movimento, novas tentativas, créditos e exclusão.",
      intro: "Entre as cinco alternativas, Playbox AI é a mais próxima de SpicyBox. Ambos oferecem modelos de vídeo para adultos e seus termos atuais exigem que a única pessoa na imagem seja quem a enviou. Nenhum é solução para animar retratos de terceiros.",
      dimensions: [
        ["Foto permitida", "Só aparece quem faz o upload", "A mesma exigência de pessoa única"],
        ["Catálogo", "Tratamentos e formatos curtos em Explore", "Feed amplo e caminhos para criadores"],
        ["Qualidade a observar", "Rosto, mãos, fundo e movimento", "Mesmos critérios com a mesma foto"],
        ["Pagamento e dados", "Créditos usados e exclusão explícita", "Cota do plano, extras e exclusão explícita"]
      ],
      sections: [
        ["A fronteira comum vem antes da comparação", "Os termos publicados de SpicyBox e Playbox AI pedem que o usuário retratado seja o mesmo que envia a imagem, sem outras pessoas no quadro. Foto de modelo licenciada, selfie de parceiro ou retrato público não viram entradas adequadas ao trocar de serviço. Se você não quer subir sua própria imagem reconhecível, é sensato dispensar os dois fluxos."],
        ["Catálogo maior não garante resultado melhor", "O Explore do SpicyBox dá destaque a tratamentos visuais e formatos curtos. A interface pública do Playbox parece expor mais modelos e acessos para criadores. Isso é uma diferença de navegação, não uma medição de qualidade. Procure dois movimentos neutros que você realmente usaria e veja onde é mais fácil encontrar exemplos que combinem com seu enquadramento."],
        ["Avalie a sessão inteira, não a melhor miniatura", "Se você atende às regras e aceita usar uma foto própria não sensível, mantenha a mesma imagem e os mesmos dois objetivos em ambos. Assista ao clipe todo, verificando rosto, mãos, luz e fundo. Registre versões abandonadas, tempo e saldo gasto. Páginas públicas não provam qual serviço vencerá com sua foto; oferecemos um método repetível, não fingimos um teste feito pelos editores."],
        ["Créditos e retenção também contam", "Os termos do SpicyBox são restritivos quanto a devolver créditos já usados por uma saída insatisfatória, observada a lei. Playbox divulga franquias do plano e compras adicionais, mas as condições podem mudar. As duas políticas mencionam armazenamento de imagens e resultados até exclusão expressa. Localize as opções para apagar original, saída e conta antes do upload."]
      ],
      verdict: "SpicyBox pode servir se seus modelos levarem rápido ao movimento desejado, com custo aceitável de repetição. Playbox AI pode ser preferível se o catálogo ou as opções para criadores facilitarem sua tarefa. Compare tudo até a exclusão dos dados e não coloque fotos de terceiros em nenhum deles."
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI: modelo de foto própria ou produção de vídeo em etapas",
      description: "Compare SpicyBox e Musebox AI por tipo de entrada, texto para vídeo, extensão, direitos de imagem, créditos e privacidade.",
      intro: "Os dois podem animar uma imagem, mas SpicyBox se concentra em foto do próprio usuário com um modelo pronto. Musebox AI apresenta também vídeo criado a partir de texto, extensão de clipes e outras etapas de produção. A escolha depende de querer um efeito rápido ou uma cena que evolui.",
      dimensions: [
        ["Como começa", "Foto só do usuário e modelo visual", "Imagem ou descrição escrita"],
        ["Alcance", "Transformação visual curta", "Geração, extensão e recursos de personagem"],
        ["Regra de pessoas", "Upload da pessoa retratada sozinha", "Fotos alheias exigem autorização e direitos"],
        ["Custo até terminar", "Gerações e repetições", "Geração, extensão, qualidade e exportação"]
      ],
      sections: [
        ["A entrada possível define o projeto", "Os termos do SpicyBox exigem que a foto mostre apenas quem a envia. Uma licença de imagem ou consentimento de terceiros não revoga essa condição contratual. A página de vídeo do Musebox mostra caminhos por imagem e por texto, e sua entrada orienta a não usar fotos de outras pessoas sem permissão. Isso não autoriza livremente qualquer retrato real: confira direitos e regras atuais."],
        ["Uma transformação ou uma sequência", "SpicyBox simplifica o primeiro clipe quando o modelo escolhido combina com a posição da foto própria. Ao mesmo tempo, o movimento depende do efeito pronto. Musebox descreve geração por texto, animação de imagem e extensão de clipes; essas opções ajudam quando uma narrativa precisa continuar. Cada etapa adicional traz perguntas sobre créditos, limites técnicos e uso final."],
        ["Não misture tarefas diferentes em uma nota única", "Se um projeto com foto própria for permitido nas duas ferramentas, use uma imagem não sensível e um movimento simples, anotando estabilidade facial, fundo, exportação e repetição. Criar uma cena inteiramente fictícia por texto é outra tarefa do Musebox, não um defeito do SpicyBox por não fazer o mesmo. Propomos uma comparação justa, sem inventar medições dos editores."],
        ["Direito sobre o vídeo não resolve a origem da imagem", "SpicyBox limita devolução de créditos usados e descreve conservação até exclusão explícita. A possibilidade divulgada pelo Musebox de compartilhar vídeos gerados não entrega automaticamente direitos sobre uma foto de terceiro usada como fonte. Verifique separadamente autoria, direito de imagem, elegibilidade da entrada e permissão para publicar."]
      ],
      verdict: "SpicyBox atende melhor à tarefa de um adulto que aceita a regra de foto própria e busca um clipe curto baseado em modelo. Musebox AI é mais pertinente quando a ideia começa por texto ou exige extensão e mais etapas. Confirme direitos, custos e exclusão antes de investir."
    },
    runway: {
      title: "SpicyBox vs Runway: modelos adultos não são o mesmo que edição de vídeo geral",
      description: "Entenda diferenças entre SpicyBox e Runway em política de conteúdo, imagem para vídeo, moderação, edição, erros, créditos e dados.",
      intro: "As duas plataformas incluem imagem para vídeo, mas isso não significa que aceitem a mesma ideia. SpicyBox usa modelos adultos para fotos da própria pessoa. Runway é uma ferramenta mais ampla de criação e edição, com moderação de entradas e resultados.",
      dimensions: [
        ["Trabalho principal", "Efeito rápido em foto própria permitida", "Produção e edição audiovisual geral"],
        ["Entrada", "Usuário é a única pessoa retratada", "Direitos da mídia e política de uso"],
        ["Direção", "Escolher um tratamento visual", "Modelo, instrução de movimento e edição"],
        ["Moderação e gasto", "Regras do serviço e créditos por tentativa", "Moderação, custo por modelo e tratamento de erros"]
      ],
      sections: [
        ["Veja a política antes de pensar na estética", "SpicyBox exige um adulto e uma imagem em que só apareça a própria pessoa que a envia. Uma foto pública ou comprada de outra pessoa não atende a essa regra. A ajuda do Runway informa que o sistema examina entradas e saídas, e que o suporte não pode desligar a moderação para um projeto. Quando uma solicitação for proibida, mude para um conceito permitido, não tente insistir no mesmo conteúdo bloqueado."],
        ["Velocidade de modelo contra controle de produção", "SpicyBox oferece poucos passos: escolher efeito, combinar a foto e ver o clipe. Isso pode ser rápido, mas a direção visual fica presa ao tratamento escolhido. O guia atual do Gen-4.5 no Runway descreve imagem para vídeo e orientações de movimento em um processo maior de criação. Para vídeo geral que precisa de câmera, versões e edição, pode valer o esforço; modelos e direitos de uso mudam."],
        ["Compare com uma ideia neutra permitida nos dois", "Um movimento simples de moda ou produto, não explícito e conforme ambas as regras, dá uma base melhor de observação. No SpicyBox, se você puder usar a própria foto, retire dados de localização e qualquer outra pessoa do quadro. Verifique o vídeo inteiro, identidade, fundo, movimento e exportação; conte tentativas até uma saída aproveitável. Este site não apresenta um ranking de renderizações pagas que não fez."],
        ["Erros diferentes, créditos diferentes", "SpicyBox não costuma restituir créditos só porque o resultado decepcionou, sujeita à lei aplicável. O Runway distingue erro técnico de geração de bloqueio por política, e o tratamento de créditos não deve ser presumido igual. Confira o modelo, o plano e a causa concreta no suporte e no checkout atual. Mesmo uma mídia permitida merece revisão de armazenamento e compartilhamento."]
      ],
      verdict: "Para um clipe rápido de uma foto própria admitida em um modelo adulto, SpicyBox corresponde ao objetivo. Para vídeo geral dentro da política do serviço, com mais direção e edição, Runway é o candidato apropriado. Se a ideia violar a regra de uma plataforma, descarte-a antes de comparar qualidade."
    }
  },
  ru: {
    promptchan: {
      title: "SpicyBox и Promptchan: оживить своё фото или придумать персонажа с нуля",
      description: "Сравнение SpicyBox и Promptchan по допустимым исходникам, генерации из текста, управлению изображением, видео, кредитам и приватности.",
      intro: "Оба сервиса связаны с визуальным контентом для взрослых, но начинают с разного материала. SpicyBox применяет шаблон к фотографии, где есть только пользователь. Promptchan позволяет описать вымышленного персонажа словами, настроить позу и кадр, а затем сделать видео.",
      dimensions: [
        ["Начало", "Фото только с самим пользователем", "Текст, созданная картинка или ремикс"],
        ["Контроль", "Подбор шаблона и исходного кадра", "Стиль, поза, композиция и вариации"],
        ["Видео", "Короткий ролик из личного фото", "Видео из изображения или текста"],
        ["Расходы", "Генерации, повторы и кредиты", "Изображения, видео, качество и приватный режим"]
      ],
      sections: [
        ["Нужно ли вам вообще отправлять фотографию", "Раздел Explore у SpicyBox ведёт от готового эффекта к фото, которое удовлетворяет правилам. Путь может быть коротким, если ракурс подходит; крупный портрет не всегда годится для движения в полный рост. На официальной странице Promptchan доступны обычное и отрицательное описание, стиль, поза и композиция. Это важно, если вы хотите сначала построить полностью вымышленного взрослого персонажа."],
        ["Согласие на снимок и правило сервиса — разные вещи", "В действующих условиях SpicyBox сказано, что на каждой загрузке должен быть только сам пользователь. Разрешение партнёра либо лицензия фотобанка не отменяют отдельного договорного ограничения. Promptchan допускает начало с текста без узнаваемого лица реального человека. Если загружаете изображение туда, проверяйте именно его текущие правила об авторских и личных правах."],
        ["Простота или точная настройка", "Шаблон SpicyBox сокращает число решений до первой попытки, но ограничивает изменение движения, если фотография не подходит. Promptchan предлагает дорабатывать изображения, позы и стиль, создавать варианты и переходить к видео. Больше контроля может потребовать времени и кредитов. Отобранные рекламные образцы обеих площадок не показывают частоту неудачных результатов с вашим материалом."],
        ["Данные и бюджет всей задачи", "Для SpicyBox главный риск — хранение личного исходника: найдите удаление фото, результата и аккаунта. Promptchan описывает приватную генерацию в платных планах; отсутствие картинки в публичной галерее не означает отсутствия обработки данных. Считайте все попытки до одного приемлемого изображения и ролика и сверяйте цену перед оплатой."]
      ],
      verdict: "SpicyBox подходит для быстрой анимации допустимого фото себя с готовым эффектом. Promptchan ближе к задаче создания вымышленного взрослого персонажа с настройкой внешности, позы и видео. Правила входных файлов и стоимость уточняйте на официальных страницах в день использования."
    },
    "ourdream-ai": {
      title: "SpicyBox и OurDream AI: разовый ролик или постоянный вымышленный персонаж",
      description: "Чем отличаются SpicyBox и OurDream AI: собственное фото, создание персонажа, переписка, голос, видео, личные данные и расходы.",
      intro: "То, что оба продукта умеют создавать видео, не делает их прямыми заменами. SpicyBox превращает фотографию пользователя в короткий клип по шаблону. OurDream AI строится вокруг вымышленного героя, который остаётся в переписке, голосе, изображениях и видео.",
      dimensions: [
        ["Главная задача", "Короткая обработка собственного фото", "Долгое взаимодействие с вымышленным героем"],
        ["Исходные данные", "Фото, где только загрузивший его человек", "Текстовое описание и настройки персонажа"],
        ["Продолжение", "Отдельные результаты генераций", "Одна личность в разных сессиях"],
        ["Цена", "Попытки до пригодного ролика", "Сообщения, голос, картинки и видео за период"]
      ],
      sections: [
        ["Сцена и персонаж нужны для разного", "В SpicyBox достаточно подобрать эффект к имеющейся фотографии; придумывать биографию и вести разговор не нужно. Официальная презентация OurDream AI предлагает создать героя коротким описанием, а затем общаться с ним и выпускать изображения, голос и видео. Если нужен только один ролик, дополнительные слои могут быть лишними. Если нужен герой, к которому хочется вернуться, в них и состоит смысл продукта."],
        ["Риски для приватности различаются", "SpicyBox требует фото только самого загрузившего человека; фон может показывать дом или работу. OurDream AI позволяет начать с вымышленного взрослого, но продолжительная переписка способна накопить реальные личные сведения пользователя. Не воспринимайте разговор как полностью закрытый дневник, а загруженный портрет — как временную картинку, исчезающую сама собой."],
        ["Проверяйте обещание каждого продукта", "Если вам подходит загрузка неинтимного собственного снимка, оцените в SpicyBox устойчивость лица, фон, число повторов и кредиты на пригодный ролик. В OurDream AI придумайте несколько безопасных сцен и посмотрите, остаются ли имя, характер, внешность и голос героя узнаваемыми. Это метод для читателей; редакция не приписывает себе проведённое платное тестирование."],
        ["Масштаб затрат разный", "В SpicyBox складывайте цену всех попыток, включая отбракованные до одного сохранённого клипа. В OurDream AI полезнее моделировать неделю с сообщениями, моделью, изображениями, голосом и видео. Бесплатные квоты и пакеты меняются: старый обзор не заменяет актуальный экран оплаты."]
      ],
      verdict: "Для одной короткой анимации допустимого фото себя рассмотрите SpicyBox. Для постоянного вымышленного взрослого персонажа с общением и разными медиа — OurDream AI. Сначала определите, какие данные для вас чувствительнее: собственное лицо или длинная история разговоров."
    },
    "playbox-ai": {
      title: "SpicyBox и Playbox AI: как сравнить два сервиса с правилом «только своё фото»",
      description: "SpicyBox и Playbox AI одинаково требуют фото только самого пользователя; разбираем выбор шаблонов, движение, повторы, кредиты и удаление.",
      intro: "Из пяти альтернатив Playbox AI ближе всего к SpicyBox. Оба предлагают шаблонные ролики для взрослых, а действующие условия требуют, чтобы на загрузке был только сам пользователь. Сравнивать их по тому, какой разрешает чужой портрет, бессмысленно: опубликованные правила этого не позволяют.",
      dimensions: [
        ["Кого можно показать", "Только загрузившего пользователя", "То же требование"],
        ["Поиск эффекта", "Explore и короткие форматы", "Более широкий каталог и вход для авторов"],
        ["Что проверять", "Лицо, руки, фон и движение", "Те же цели на том же снимке"],
        ["Деньги и данные", "Списания и явное удаление", "Лимит тарифа, дополнительные кредиты и удаление"]
      ],
      sections: [
        ["Общая граница важнее удобства", "Условия SpicyBox и Playbox AI говорят, что пользователь должен быть единственным человеком на загружаемом изображении. Стоковая модель с лицензией, фото партнёра или кадр знаменитости не становятся подходящими от выбора другой платформы. Если не хотите отправлять распознаваемое фото себя, рационально отказаться от обоих сценариев загрузки."],
        ["Количество шаблонов не равно качеству", "Explore у SpicyBox показывает визуальные эффекты и короткие форматы. Публичный Playbox выглядит как более широкий каталог с направлениями для авторов. Это наблюдение об интерфейсе, а не вывод о лучшем видео. Подумайте о двух простых, неоткровенных движениях и проверьте, где легче найти примеры, подходящие к вашему ракурсу."],
        ["Считайте весь сеанс, не лучший кадр", "Если вы соответствуете требованиям и согласны на неинтимное фото себя, возьмите одинаковый исходник и две одинаковые простые цели. Просматривайте клипы целиком: лицо, руки, освещение и фон. Запишите отвергнутые попытки, время и расход. Публичные страницы не определят победителя именно для вашей фотографии; наш подход воспроизводим, но это не отчёт о собственных платных испытаниях."],
        ["Цена повтора и удаление", "SpicyBox обычно не возвращает потраченные кредиты только потому, что результат не понравился, с учётом применимого закона. Playbox публикует лимиты плана и дополнительные кредиты, но детали могут меняться. Обе политики описывают хранение до явного удаления. До загрузки найдите управление исходником, результатом и аккаунтом."]
      ],
      verdict: "SpicyBox может быть удобнее, если нужный эффект быстро находится и цена повторов приемлема. Playbox AI стоит сравнить, если широкий каталог или авторские функции полезнее. Включайте в решение все попытки и удаление данных; чужие лица не загружайте никуда."
    },
    "musebox-ai": {
      title: "SpicyBox и Musebox AI: собственное фото по шаблону или видео из текста",
      description: "Разбираем SpicyBox и Musebox AI по входным материалам, продолжению клипа, правам на изображение, кредитам и хранению.",
      intro: "Оба сервиса могут анимировать изображение, но SpicyBox ориентирован на шаблон и фото самого пользователя. Musebox AI также описывает видео из текстового запроса, продолжение клипов и более длинный производственный процесс. Выбирайте по исходнику и конечной задаче.",
      dimensions: [
        ["Начало работы", "Фото только самого пользователя и шаблон", "Изображение или текст"],
        ["Производство", "Короткая трансформация", "Генерация, продолжение и инструменты персонажа"],
        ["Права на лица", "Сам пользователь — единственный в кадре", "На чужие снимки нужны права и разрешение"],
        ["Расходы", "Генерации и повторы", "Генерации, продолжение, качество, экспорт"]
      ],
      sections: [
        ["Допустимый материал меняет саму идею", "SpicyBox требует, чтобы на каждом загружаемом изображении был только его пользователь. Покупка снимка и согласие другого человека не отменяют это договорное правило. Musebox позволяет начинать с изображения либо слов; во входных правилах сказано не использовать чужие фотографии без разрешения. Это не универсальное разрешение копировать реальное лицо: нужно отдельно проверять права на файл, условия сервиса и местный закон."],
        ["Быстрый эффект или цепочка производства", "Шаблон SpicyBox может быстро дать короткий клип, если ваш допустимый снимок совпадает с образцом по композиции. Но сам эффект задаёт большую часть движения. Musebox описывает видео из текста, анимацию картинки и продление клипа. Для истории с несколькими сценами полезно больше шагов, но каждый шаг увеличивает требования к кредитам, времени и правам на публикацию."],
        ["Не сводите две разные проверки к одному баллу", "При работе с собственным фото, разрешённым обоими сервисами, используйте один неинтимный кадр и простое движение. Сравните лицо, фон, экспорт, попытки и расходы. Вымышленная сцена из одного текста — отдельный сценарий Musebox, а не тот же тест SpicyBox. Мы предлагаем читательскую методику, а не выдуманные измерения редакции."],
        ["Готовый файл и права на исходник", "Документы SpicyBox строго относятся к возврату использованных кредитов и описывают хранение материалов до явного удаления. Даже если Musebox предлагает публиковать полученный ролик, это не даёт прав на чужое исходное лицо. Авторское право, право на изображение, правила загрузки и право на публикацию результата следует проверять отдельно."]
      ],
      verdict: "SpicyBox ближе взрослому пользователю, который принимает правило личного фото и хочет короткую шаблонную анимацию. Musebox AI уместнее при работе от текста, продолжении сцены и более сложной цепочке производства. Проверяйте входные права, итоговую цену и удаление на момент использования."
    },
    runway: {
      title: "SpicyBox и Runway: взрослые шаблоны не равны универсальному видеоредактору",
      description: "Сравниваем SpicyBox и Runway по разрешённым задачам, моделям, модерации, монтажу, ошибкам, кредитам и данным.",
      intro: "Оба продукта умеют превращать изображения в видео, но одна и та же задумка может не соответствовать правилам обоих. SpicyBox предлагает взрослые шаблоны для фото самого пользователя. Runway — более широкий инструмент для создания и редактирования видео с модерацией входов и выходов.",
      dimensions: [
        ["Задача", "Быстрый эффект для допустимого личного фото", "Общее видеопроизводство и монтаж"],
        ["Исходник", "Пользователь один на изображении", "Права на материал и правила использования"],
        ["Управление", "Выбор визуального шаблона", "Модель, описание движения, последующий монтаж"],
        ["Ограничения", "Условия для взрослых и стоимость попытки", "Модерация и стоимость по модели и типу ошибки"]
      ],
      sections: [
        ["Сперва проверьте соответствие правилам", "SpicyBox требует совершеннолетия и фото с одним человеком — самим загрузившим. Чужой снимок не становится допустимым только потому, что размещён в открытом доступе. Runway сканирует входные и выходные материалы; поддержка не может отключить модерацию конкретной темы. Если запрос блокируется, скорректируйте идею до разрешённой, не пытайтесь многократно обойти запрет."],
        ["Простота шаблона и свобода постановки", "SpicyBox предлагает выбрать эффект, подобрать собственный исходник и проверить короткий результат. Меньше решений до первого ролика, но движение ограничено шаблоном. Действующее руководство Runway по Gen-4.5 описывает создание видео из изображения и управление движением как часть более широкой работы. Для обычного проекта с камерой и монтажом такой контроль полезен; названия моделей и доступность могут меняться."],
        ["Общая неоткровенная проверка", "Выберите простой модный или предметный сюжет, разрешённый обоими сервисами. Для SpicyBox допустим только неинтимный снимок себя одного; уберите адреса и лишние признаки места. Просмотрите ролик целиком: лицо, фон, движение, разрешение, экспорт. Считайте все попытки до одного пригодного результата. Это инструкция для читателя, не вымышленный рейтинг оплаченных нами генераций."],
        ["Не всякая ошибка одинаково влияет на кредиты", "SpicyBox, как правило, не возвращает кредиты лишь из-за разочарования результатом, в пределах применимого права. Справка Runway различает техническую ошибку генерации и блокировку политикой; последствия для кредита не следует считать одинаковыми. Проверьте текущие условия модели и тарифа и отдельно настройте хранение допустимого исходного материала."]
      ],
      verdict: "Для короткой взрослой анимации допустимого собственного фото подходит задача SpicyBox. Для разрешённого общего видеопроекта, которому нужны постановка и монтаж, рассматривайте Runway. Если идея противоречит правилам одной площадки, исключите её до сравнения визуального качества."
    }
  },
  de: {
    promptchan: {
      title: "SpicyBox vs Promptchan: Eigenes Foto animieren oder eine fiktive Figur entwerfen?",
      description: "SpicyBox und Promptchan im Vergleich: zulässige Bilder, Text-zu-Bild, Gestaltung, Video, Credits und Datenschutz.",
      intro: "Beide Dienste erstellen visuelle Inhalte für Erwachsene, setzen aber anders an. SpicyBox legt eine Vorlage über ein Foto, auf dem nur die hochladende Person zu sehen ist. Promptchan lässt eine erfundene Figur per Text entstehen, deren Pose und Bildaufbau sich verfeinern lassen.",
      dimensions: [
        ["Start", "Foto der hochladenden Person plus Vorlage", "Text, generiertes Bild oder Galerie-Remix"],
        ["Gestaltung", "Vorlage und Passung des Ausgangsbilds", "Stil, Pose, Komposition und Varianten"],
        ["Video", "Kurzer Clip aus einem Foto", "Bild-zu-Video oder Text-zu-Video"],
        ["Kostenfrage", "Versuche und verbrauchte Credits", "Bild, Video, Qualität und privater Modus"]
      ],
      sections: [
        ["Brauchen Sie überhaupt einen Foto-Upload?", "Explore bei SpicyBox zeigt fertige visuelle Behandlungen, für die ein regelkonformes Foto von Ihnen nötig ist. Das kann schnell zum ersten Clip führen, wenn Ausschnitt und Licht passen. Ein enges Porträt eignet sich nicht automatisch für eine Ganzkörperbewegung. Promptchans offizielle Generierungsseite bietet Beschreibung, Negativ-Prompt, Stil, Pose und Komposition, um zuerst eine fiktive erwachsene Person zu entwerfen."],
        ["Bilderlaubnis ersetzt keine Eingaberegel", "Die aktuellen SpicyBox-Bedingungen verlangen, dass ausschließlich die hochladende Person auf jedem Bild erscheint. Die Einwilligung einer anderen Person oder eine Stockfoto-Lizenz erfüllt diese besondere Vorgabe nicht. Promptchan kann mit Text beginnen, ohne ein echtes Gesicht hochzuladen. Bei Bild-Uploads dort müssen trotzdem dessen aktuelle Rechte- und Datenschutzregeln gelten."],
        ["Einfachheit gegen Feinsteuerung", "Eine SpicyBox-Vorlage bündelt Bewegung und Aussehen in einer Auswahl, lässt aber weniger Raum zum Korrigieren, falls das Quellfoto schlecht passt. Promptchan bietet Bildvarianten, Posen, Remix und Video; mehr Kontrolle kann mehr Zeit und Credits kosten. Ein ausgewähltes Werbebeispiel beider Anbieter belegt keine Trefferquote für Ihre eigenen Eingaben."],
        ["Privatsphäre und vollständiger Aufgabenpreis", "Bei SpicyBox steht die Speicherung des erkennbaren eigenen Fotos im Mittelpunkt. Suchen Sie vorab die Löschung von Original, Ergebnis und Konto. Promptchan nennt private Generierung als bezahlte Funktion; nicht in der öffentlichen Galerie zu erscheinen bedeutet nicht, dass keine Verarbeitung stattfindet. Rechnen Sie alle verworfenen Bild- und Videoversuche bis zum brauchbaren Clip zusammen."]
      ],
      verdict: "SpicyBox passt eher, wenn Sie als erwachsene Person nur Ihr eigenes zulässiges Foto schnell mit einer Vorlage animieren möchten. Promptchan ist näher am Ziel, wenn eine fiktive erwachsene Figur erst aus Text entstehen und gezielt ausgestaltet werden soll. Prüfen Sie Eingaberegeln und Preis jeweils aktuell."
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI: Einzelner Clip oder fortlaufende fiktive Figur?",
      description: "Vergleich von SpicyBox und OurDream AI bei Selbstbild, Figurenbau, Chat, Stimme, Bildern, Video, Datenschutz und Kosten.",
      intro: "Video als gemeinsame Funktion macht die Produkte nicht austauschbar. SpicyBox verändert ein Foto der nutzenden Person mit einer Vorlage. OurDream AI entwickelt eine fiktive Figur, die über Gespräche, Stimme, Bilder und Video hinweg bestehen soll.",
      dimensions: [
        ["Kernaufgabe", "Kurze Umwandlung eines eigenen Fotos", "Fortlaufende fiktive Figur"],
        ["Einstieg", "Foto nur der hochladenden Person", "Beschreibung und Figureneinstellungen"],
        ["Kontinuität", "Einzelne Ergebnisse pro Generierung", "Dieselbe Figur in mehreren Sitzungen"],
        ["Kostenmaßstab", "Versuche je brauchbarem Clip", "Nachrichten, Stimme, Bilder und Video über Zeit"]
      ],
      sections: [
        ["Eine Szene ist keine fortlaufende Figur", "Bei SpicyBox wählen Sie eine visuelle Behandlung für ein vorhandenes Foto. Persönlichkeit und Hintergrundgeschichte sind nicht nötig; genau das kann vorteilhaft sein, wenn nur ein kurzer Effekt gesucht wird. Die offizielle OurDream-AI-Seite beginnt mit einer Figurenbeschreibung und führt zu Chat, Stimme sowie visuellen Medien. Nach einem Video kann die Interaktion weitergehen."],
        ["Welche Daten sollen geschützt werden?", "SpicyBox erlaubt nur Bilder, auf denen die hochladende Person allein zu sehen ist. Selbst ein eigenes Foto kann im Hintergrund Wohnort oder Arbeitsplatz preisgeben. OurDream AI kann mit einem erfundenen Erwachsenen beginnen, doch lange Gespräche können echte persönliche Angaben sammeln. Behandeln Sie beides als Daten eines Online-Dienstes, nicht als verschwindendes Bild oder vertrauliches Tagebuch."],
        ["Prüfen Sie jedes Produkt an seinem Versprechen", "Wenn ein nicht sensibles Selbstbild für Sie zulässig und akzeptabel ist, betrachten Sie bei SpicyBox Gesichtsstabilität, Hintergrund, Wiederholungen und Credits pro nutzbarem Clip. Bei OurDream AI prüfen Sie mit fiktiven Szenen, ob Name, Verhalten, Aussehen und Stimme der Figur über Sitzungen hinweg stimmig bleiben. Das ist ein Vorschlag für Leser, kein von uns vorgetäuschter bezahlter Praxistest."],
        ["Eine Generierung oder eine Nutzungswoche", "SpicyBox lässt sich pro aufbewahrtem Video kalkulieren, einschließlich verworfener Versuche. Bei OurDream AI ist ein Wochenkorb aus Chat, Modellen, Stimme, Bildern und Video aussagekräftiger. Kostenlose Kontingente und Credits ändern sich; maßgeblich ist der aktuelle Bezahlvorgang."]
      ],
      verdict: "Für die einmalige Animation eines zulässigen eigenen Fotos ist SpicyBox näher an der Aufgabe. Für eine fiktive erwachsene Figur, mit der Sie länger sprechen und verschiedene Medien erstellen, ist OurDream AI passender. Entscheiden Sie auch, ob das Risiko eines erkennbaren Fotos oder angesammelter Gesprächsdaten schwerer wiegt."
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI: Zwei Video-Tools mit derselben Selbstbild-Regel",
      description: "SpicyBox und Playbox AI verlangen beide ein Foto nur der hochladenden Person; Vergleich von Vorlagen, Bewegung, Credits und Löschung.",
      intro: "Playbox AI ist SpicyBox unter den fünf Alternativen am ähnlichsten. Beide zeigen vorlagenbasierte Videoangebote für Erwachsene und verlangen laut aktuellen Bedingungen, dass die hochladende Person allein auf dem Bild ist. Keines sollte als Weg für fremde Porträts dargestellt werden.",
      dimensions: [
        ["Zulässiges Bild", "Nur die hochladende Person", "Dasselbe Erfordernis"],
        ["Suche", "Explore-Behandlungen und Kurzformate", "Breiteres Angebot und Creator-Einstieg"],
        ["Qualität prüfen", "Gesicht, Hände, Hintergrund, Bewegung", "Gleiche Ziele mit demselben Foto"],
        ["Kosten und Löschung", "Credits und ausdrückliche Löschung", "Plan-Kontingent, Zusatzcredits und Löschung"]
      ],
      sections: [
        ["Die gemeinsame Grenze zuerst", "Die veröffentlichten Bedingungen von SpicyBox und Playbox AI verlangen auf jedem Upload ausschließlich die Person, die das Foto einreicht. Ein lizenziertes Modelbild, das Porträt des Partners oder ein öffentliches Prominentenfoto wird durch den Plattformwechsel nicht zulässig. Wer kein eigenes erkennbares Foto hochladen möchte, kann beide Upload-Abläufe guten Gewissens auslassen."],
        ["Vorlagenmenge ist nicht Vorlagen-Nutzen", "SpicyBox stellt in Explore visuelle Behandlungen und kurze Formate in den Vordergrund. Playbox zeigt öffentlich einen breiter wirkenden Feed sowie Wege für Creator. Das beschreibt Bedienung, nicht Ergebnisqualität. Überlegen Sie sich zwei einfache, nicht explizite Bewegungen und prüfen Sie, wie leicht eine passende Vorschau für Ihren Bildausschnitt auffindbar ist."],
        ["Vergleichen Sie den gesamten Versuch", "Wenn Sie die Eingaberegeln erfüllen und ein unbedenkliches eigenes Foto verwenden möchten, nutzen Sie dieselbe Quelle und dieselben zwei Bewegungsziele. Sehen Sie die Clips vollständig an: Gesicht, Hände, Licht und Hintergrund. Notieren Sie aussortierte Versuche, Zeit und Credits. Öffentliche Seiten bestimmen keinen Sieger für Ihr Foto; wir nennen ein nachvollziehbares Verfahren, keinen erfundenen Redaktionsversuch."],
        ["Wiederholung und Speicherung gehören zum Produkt", "SpicyBox schränkt die Rückgabe verbrauchter Credits wegen unbefriedigender Ergebnisse stark ein, vorbehaltlich geltenden Rechts. Playbox beschreibt Plan-Kontingente und Zukäufe, deren Einzelheiten sich ändern können. Beide Datenschutzhinweise sprechen von Speicherung bis zur ausdrücklichen Löschung. Finden Sie die Bedienelemente für Quelle, Ergebnis und Konto vor dem Upload."]
      ],
      verdict: "SpicyBox kann passen, wenn sein konzentrierter Vorlagenweg mit vertretbaren Wiederholungskosten zur gewünschten Bewegung führt. Playbox AI lohnt sich, wenn sein Katalog oder Creator-Bereich den Ablauf erleichtert. Entscheiden Sie anhand eines ganzen Versuchs einschließlich Datenlöschung; fremde Personen gehören auf keinen Upload."
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI: Selbstbild-Vorlage oder Video auch aus Text?",
      description: "SpicyBox und Musebox AI bei Eingaben, Clip-Verlängerung, Bildrechten, Credits, Speicherung und Veröffentlichung vergleichen.",
      intro: "Beide Dienste können Standbilder animieren. SpicyBox konzentriert sich dabei auf eine Vorlage und ein Foto, auf dem nur der Nutzer selbst zu sehen ist. Musebox AI beschreibt zusätzlich Text-zu-Video, Clip-Verlängerung und weitere Produktionsschritte. Welche Art Ausgangsmaterial und fertige Szene brauchen Sie?",
      dimensions: [
        ["Ausgangsmaterial", "Selbstbild und Vorlage", "Bild oder Textbeschreibung"],
        ["Umfang", "Kurze visuelle Umwandlung", "Generieren, verlängern und Figurenfunktionen"],
        ["Bildrechte", "Uploader muss einzige Person sein", "Für fremde Fotos Rechte und Erlaubnis prüfen"],
        ["Fertigstellungskosten", "Generierung und Wiederholung", "Generierung, Verlängerung, Qualität und Export"]
      ],
      sections: [
        ["Zulässige Eingaben prägen das Projekt", "SpicyBox verlangt vertraglich, dass nur der Uploader selbst auf dem Bild zu sehen ist. Eine Lizenz oder die Zustimmung einer anderen Person hebt diese spezielle Anforderung nicht auf. Musebox beschreibt den Start mit Bild oder Text; seine Einstiegsregeln warnen vor fremden Fotos ohne Erlaubnis. Daraus folgt aber kein pauschales Recht, echte Gesichter zu kopieren: Bildrechte, volle Nutzungsbedingungen und örtliches Recht sind einzeln zu prüfen."],
        ["Ein schneller Effekt oder eine wachsende Sequenz", "SpicyBox kann mit passender Vorlage für ein zulässiges eigenes Foto einen kurzen Weg zum Clip bieten. Die Bewegung bleibt jedoch weitgehend an die Vorlage gebunden. Musebox beschreibt Video aus Text, Animation eines Bilds und Clip-Verlängerung. Für mehrere Szenen kann das helfen, verlangt aber mehr Aufmerksamkeit für Credits, technische Grenzen und Nutzungsrechte."],
        ["Unterschiedliche Aufgaben nicht in eine Note pressen", "Für ein in beiden Diensten zulässiges Selbstbildprojekt verwenden Sie einen nicht sensiblen Ausgangskader und ein schlichtes Bewegungsziel. Prüfen Sie Gesicht, Hintergrund, Export und alle Wiederholungskosten. Eine vollständig erfundene Textszene ist ein anderer Musebox-Anwendungsfall; SpicyBox ist kein gleichartiges Text-zu-Video-Angebot. Wir beschreiben einen Lesertest, keine bezahlte Redaktionsmessung."],
        ["Ausgaberecht ersetzt kein Eingaberecht", "SpicyBox beschreibt restriktive Erstattungen für gebrauchte Credits und Speicherung bis zur ausdrücklichen Löschung. Wenn Musebox eine Verwendung des fertigen Videos bewirbt, werden dadurch keine Rechte an einem fremden Quellbild übertragen. Trennen Sie Urheberrecht, Erlaubnis zur Nutzung eines Gesichts, Eingaberegel und Veröffentlichungsrecht."]
      ],
      verdict: "SpicyBox ist für Erwachsene interessant, die die Selbstbild-Regel akzeptieren und eine kurze Vorlagenumwandlung wollen. Musebox AI kommt für Text-zu-Video, längere Szenen und mehrstufige Produktion eher infrage. Prüfen Sie für beide Dienste Eingaberechte, Gesamtkosten und Löschmöglichkeiten."
    },
    runway: {
      title: "SpicyBox vs Runway: Erwachsenen-Vorlagen oder allgemeine Videoproduktion?",
      description: "SpicyBox und Runway nach zulässigen Projekten, Bild-zu-Video, Moderation, Bearbeitung, Fehlern, Credits und Datenschutz vergleichen.",
      intro: "Beide berühren Bild-zu-Video, aber nicht jedes Vorhaben ist auf beiden Plattformen erlaubt. SpicyBox erstellt kurze Vorlagenclips aus Bildern, die nur den erwachsenen Uploader zeigen. Runway ist eine breitere Produktions- und Bearbeitungsumgebung und moderiert Eingaben wie Ausgaben.",
      dimensions: [
        ["Hauptaufgabe", "Schneller Effekt aus zulässigem Selbstbild", "Allgemeines Video und Bearbeitung"],
        ["Eingabe", "Uploader als einzige abgebildete Person", "Rechte und Nutzungsrichtlinien einhalten"],
        ["Steuerung", "Visuelle Behandlung auswählen", "Modell und Bewegung wählen, danach bearbeiten"],
        ["Moderation und Preis", "Bedingungen und Credits pro Versuch", "Prüfung von Ein- und Ausgaben, modellabhängige Kosten"]
      ],
      sections: [
        ["Prüfen Sie zuerst die Inhaltsregeln", "SpicyBox setzt Volljährigkeit und Bilder voraus, die ausschließlich den Uploader zeigen. Ein fremdes Foto wird durch öffentliche Verfügbarkeit nicht geeignet. Runways Hilfe erklärt, dass Eingaben und Ergebnisse automatisch moderiert werden; der Support kann die Prüfung für ein Konto nicht abschalten. Bei einer Sperre sollte ein regelkonformes Konzept entstehen statt wiederholter Umgehungsversuche."],
        ["Vorlagengeschwindigkeit gegen Produktionskontrolle", "SpicyBox lässt eine Behandlung wählen und liefert bei passendem eigenen Ausgangsbild einen kurzen Clip mit wenig Vorarbeit. Feinere Bewegung hängt von der Vorlage ab. Das aktuelle Runway-Handbuch zu Gen-4.5 erklärt Bild-zu-Video und Bewegungsanweisungen als Teil eines umfassenderen Workflows. Für allgemeine Projekte mit Kameraführung und Nachbearbeitung kann das wichtig sein; Modellnamen und Ansprüche ändern sich."],
        ["Nur mit einem erlaubten neutralen Ziel vergleichen", "Ein schlichtes Mode- oder Produktvideo ohne explizite Inhalte ist ein besserer Überschneidungsbereich, sofern es beiden aktuellen Richtlinien entspricht. Für SpicyBox darf das Foto nur Sie zeigen; entfernen Sie Ortsmerkmale. Prüfen Sie den ganzen Clip auf Identität, Hintergrund, Bewegung, Auflösung und Export. Zählen Sie jeden Anlauf bis zum brauchbaren Ergebnis. Wir behaupten keine bezahlten Tests der Redaktion."],
        ["Fehler und Credits unterscheiden", "SpicyBox erstattet Credits nicht pauschal, weil ein fertiges Ergebnis enttäuscht; geltendes Recht bleibt maßgeblich. Runways Hilfe trennt technische Generierungsfehler von Richtlinienblockaden, sodass Kosten nicht für jede Art Scheitern gleich angenommen werden dürfen. Sehen Sie sich den aktuellen Tarif, das Modell und die konkrete Fehlermeldung an und prüfen Sie Speicherung und Teilen erlaubter Quellen."]
      ],
      verdict: "Für eine kurze Erwachsenen-Vorlage aus einem zulässigen eigenen Bild ist SpicyBox die passendere Kategorie. Für regelkonforme allgemeine Videoarbeit mit mehr Regie und Schnitt ist Runway geeigneter. Ein Anbieter, dessen Regeln das Vorhaben ausschließen, gehört schon vor einem Qualitätsvergleich nicht in die engere Wahl."
    }
  },
  fr: {
    promptchan: {
      title: "SpicyBox vs Promptchan : animer sa photo ou inventer un personnage",
      description: "Comparer SpicyBox et Promptchan : photo de soi, création par texte, cadrage, vidéo, crédits et confidentialité.",
      intro: "Ces deux services peuvent produire des images pour adultes, mais ils ne commencent pas au même endroit. SpicyBox applique un modèle à une photo où figure seulement l'utilisateur qui la dépose. Promptchan permet de décrire un personnage fictif, d'affiner pose et cadrage, puis de l'animer.",
      dimensions: [
        ["Départ", "Photo de soi et modèle", "Texte, image créée ou remix de galerie"],
        ["Direction", "Choix d'effet et cadrage source", "Style, pose, composition et variantes"],
        ["Vidéo", "Court clip issu d'une photo", "Image-vers-vidéo ou texte-vers-vidéo"],
        ["Budget", "Essais, reprises et crédits", "Image, vidéo, qualité et mode privé"]
      ],
      sections: [
        ["Faut-il vraiment déposer une photo ?", "Explore présente dans SpicyBox des traitements prêts à choisir. Il faut ensuite une image de soi conforme aux conditions ; la création peut aller vite si la pose de départ convient, mais un gros plan ne se prête pas à tout mouvement. La page officielle de Promptchan donne plutôt des commandes de texte, d'exclusion, de style, de pose et de composition pour construire d'abord une personne fictive adulte."],
        ["Permission et admissibilité sont deux questions", "Les conditions actuelles de SpicyBox imposent que la personne qui dépose l'image soit la seule représentée. L'accord d'un partenaire ou une licence de banque d'images ne remplacent pas cette règle précise. Promptchan peut fonctionner à partir d'un texte sans visage réel. Si vous y importez une image, lisez ses propres règles en vigueur sur les droits et la vie privée."],
        ["Moins de réglages ou plus de contrôle", "Le modèle SpicyBox assemble mouvement et ambiance en un choix rapide, mais laisse moins de marge quand le cadrage initial ne convient pas. Promptchan propose variations, changement de pose, remix et passage en vidéo ; cette souplesse peut aussi demander plus de temps et de crédits. Une vitrine publicitaire ne mesure pas la réussite sur votre image particulière."],
        ["Un résultat privé reste traité par un service", "Pour SpicyBox, repérez la suppression de l'original, du résultat et du compte avant de confier une photo reconnaissable. Promptchan présente la génération hors galerie publique comme une fonction payante : invisible aux visiteurs ne veut pas dire non traitée par le fournisseur. Comptez toutes les versions rejetées jusqu'au clip conservable et vérifiez le paiement actuel."]
      ],
      verdict: "SpicyBox répond mieux à l'animation rapide d'une photo autorisée où vous apparaissez seul, si vous êtes adulte. Promptchan correspond mieux à la création d'un personnage adulte fictif par texte, avec maîtrise de l'image et de la vidéo. Contrôlez les conditions d'entrée et le prix le jour de l'essai."
    },
    "ourdream-ai": {
      title: "SpicyBox vs OurDream AI : un clip unique ou un personnage qui dure",
      description: "SpicyBox et OurDream AI comparés selon la photo personnelle, le personnage, la discussion, la voix, la vidéo, les données et le coût.",
      intro: "Le mot « vidéo » apparaît dans les deux offres, mais les usages divergent. SpicyBox transforme une photo de l'utilisateur avec un modèle visuel. OurDream AI est centré sur un personnage fictif qui continue dans le chat, la voix, les images et les vidéos.",
      dimensions: [
        ["Mission", "Transformer brièvement sa photo", "Créer un personnage fictif suivi"],
        ["Entrée", "Photo de l'utilisateur seul", "Description et réglages du personnage"],
        ["Continuité", "Chaque production est distincte", "Même identité d'une session à l'autre"],
        ["Mesure du coût", "Tentatives par clip utile", "Messages, voix, images et vidéo sur une période"]
      ],
      sections: [
        ["Une scène n'est pas une relation avec un personnage", "SpicyBox demande de choisir un effet adapté à une photo existante. Pas de biographie à rédiger ni de conversation à entretenir ; cette simplicité est précieuse pour un seul clip. La présentation officielle d'OurDream AI part d'une description courte de personnage et propose ensuite échanges, voix et médias. Le personnage est destiné à exister au-delà de la première vidéo."],
        ["Ce que l'on protège diffère", "SpicyBox n'accepte que des images où l'utilisateur qui téléverse figure seul. L'arrière-plan d'un portrait peut révéler domicile ou lieu de travail. OurDream AI peut commencer avec une figure imaginaire adulte, mais une longue conversation peut accumuler des confidences réelles. Traitez ces deux parcours comme des services en ligne qui traitent des données, pas comme un miroir éphémère ou un journal secret."],
        ["Un contrôle adapté à chaque promesse", "Si une photo de vous non sensible est autorisée et acceptable, observez sur SpicyBox la stabilité du visage, le décor, les reprises et les crédits jusqu'au clip utilisable. Sur OurDream AI, testez quelques scènes fictives : nom, personnalité, apparence et voix restent-ils cohérents ? Nous suggérons un protocole reproductible, sans prétendre avoir mené des essais payants ou établi un classement mesuré."],
        ["Compter au bon rythme", "Pour SpicyBox, additionnez les essais abandonnés avant une seule vidéo que vous gardez. Pour OurDream AI, estimez plutôt une semaine de messages, modèles, voix, images et vidéos. Offres gratuites et unités de crédits évoluent ; vérifiez le paiement actuel plutôt qu'un ancien comparatif."]
      ],
      verdict: "Une transformation ponctuelle d'une photo personnelle autorisée pointe vers SpicyBox. Une personne fictive adulte avec laquelle discuter et créer plusieurs médias pointe vers OurDream AI. Demandez-vous aussi ce qui mérite le plus de protection : votre visage ou l'historique de vos confidences."
    },
    "playbox-ai": {
      title: "SpicyBox vs Playbox AI : comparer deux outils soumis à la règle de la photo de soi",
      description: "SpicyBox et Playbox AI exigent tous deux que seul l'utilisateur apparaisse : comparons modèles, mouvement, crédits et suppression.",
      intro: "Playbox AI est l'alternative la plus proche de SpicyBox dans cette sélection. Les deux proposent des vidéos à modèles pour adultes et leurs conditions actuelles demandent que l'utilisateur soit seul sur l'image déposée. Aucun n'est destiné à animer le portrait d'une autre personne.",
      dimensions: [
        ["Sujet autorisé", "Seulement l'utilisateur qui dépose", "Même exigence de sujet unique"],
        ["Découverte", "Effets Explore et formats courts", "Catalogue plus vaste et espace créateur"],
        ["Qualité à observer", "Visage, mains, décor, mouvement", "Même objectif avec la même source"],
        ["Dépense et données", "Crédits utilisés et suppression explicite", "Quota du forfait, extras et suppression explicite"]
      ],
      sections: [
        ["La limite commune ne se contourne pas", "Les conditions publiées de SpicyBox et Playbox AI veulent que la personne qui envoie l'image soit la seule qui y figure. Un portrait de mannequin sous licence, la photo d'un partenaire ou celle d'une célébrité ne deviennent pas admissibles en passant de l'un à l'autre. Si confier votre propre photo reconnaissable vous gêne, vous pouvez écarter ces deux parcours."],
        ["Un grand catalogue n'est pas une meilleure vidéo", "Explore chez SpicyBox met en avant des effets et formats courts. L'interface publique de Playbox semble proposer un fil plus large et des entrées pour créateurs. C'est une observation de navigation, non une mesure des résultats. Définissez deux mouvements simples non explicites et vérifiez où un modèle adapté au cadrage se trouve sans longues recherches."],
        ["Évaluez toute la séance, pas la miniature idéale", "Si vous remplissez les conditions et acceptez d'utiliser une photo de vous non sensible, gardez la même image et les deux mêmes mouvements. Regardez les clips entiers : visage, mains, lumière et arrière-plan. Notez temps, versions rejetées et crédits. Les pages officielles ne désignent pas de gagnant pour votre image ; nous proposons une méthode répétable, pas un essai personnel inventé."],
        ["Reprises et effacement pèsent dans le choix", "SpicyBox limite largement le remboursement de crédits dépensés pour un résultat décevant, sous réserve du droit applicable. Playbox annonce des quotas et achats supplémentaires qui peuvent évoluer. Les deux politiques parlent de conservation jusqu'à une action explicite de suppression. Repérez l'effacement de l'original, de la sortie et du compte avant l'essai."]
      ],
      verdict: "SpicyBox peut convenir si son parcours court livre l'effet voulu avec un coût de reprise acceptable. Playbox AI mérite d'être examiné si son catalogue ou ses fonctions créateur vous font gagner du temps. Comparez les essais et la suppression des données ; ne chargez le portrait d'autrui sur aucun des deux."
    },
    "musebox-ai": {
      title: "SpicyBox vs Musebox AI : modèle pour sa photo ou vidéo aussi créée par texte",
      description: "Comparez SpicyBox et Musebox AI selon les sources admises, texte-vers-vidéo, prolongement, droits, crédits et confidentialité.",
      intro: "Les deux savent animer une image, mais SpicyBox se concentre sur une photo où figure seul l'utilisateur et un modèle visuel. Musebox AI présente aussi la création par texte et le prolongement d'un clip. Cherchez-vous une transformation rapide ou un projet en plusieurs étapes ?",
      dimensions: [
        ["Départ", "Photo personnelle et modèle", "Image ou description textuelle"],
        ["Étendue", "Transformation courte", "Génération, prolongement et outils de personnage"],
        ["Droit à l'image", "Utilisateur seul sur l'entrée", "Permission à vérifier pour les portraits d'autrui"],
        ["Coût final", "Générations et reprises", "Création, prolongement, qualité et export"]
      ],
      sections: [
        ["Le matériau autorisé fixe le projet", "SpicyBox exige que l'utilisateur soit la seule personne dans chaque image qu'il charge. Une licence ou l'accord d'un tiers ne supprime pas cette clause particulière. La page vidéo de Musebox décrit un départ par image ou par texte ; son accès interdit les photos d'autrui sans autorisation. Cela n'autorise pas pour autant la copie générale de visages réels. Droits, conditions complètes et loi locale restent à vérifier."],
        ["Un effet unique ou une scène prolongée", "SpicyBox peut conduire vite à un petit clip lorsque le modèle choisi s'accorde à une photo personnelle admissible. Le mouvement dépend toutefois fortement du préréglage. Musebox évoque vidéo par texte, animation d'image et prolongement ; ces étapes peuvent servir une histoire plus longue, tout en multipliant les questions de crédits, de limites techniques et de droits sur la sortie."],
        ["Deux tâches ne font pas une note unique", "Pour une photo de soi autorisée dans les deux outils, prenez une source non sensible et un mouvement simple. Comparez stabilité du visage, décor, exportation et répétitions. Une scène fictive écrite de zéro est un autre cas d'usage de Musebox ; on ne doit pas présenter SpicyBox comme un outil texte-vers-vidéo équivalent. Nous proposons un test au lecteur, pas un classement réellement mesuré par la rédaction."],
        ["Droits de la sortie et droits de la source", "SpicyBox décrit une approche stricte pour le remboursement de crédits utilisés et la conservation jusqu'à suppression explicite. Même si Musebox annonce des usages possibles pour la vidéo créée, cela ne transfère pas les droits d'une photo tierce utilisée au départ. Distinguez auteur, droit à l'image, conditions d'entrée et autorisation de diffuser."]
      ],
      verdict: "SpicyBox répond à un adulte qui accepte la règle de la photo de soi et veut un effet bref. Musebox AI correspond mieux à un projet démarrant par texte ou nécessitant prolongement et autres étapes. Vérifiez droits, prix total et commandes d'effacement avant achat."
    },
    runway: {
      title: "SpicyBox vs Runway : modèles réservés aux adultes ou atelier vidéo général",
      description: "SpicyBox et Runway comparés selon politiques, image-vers-vidéo, modération, montage, erreurs, crédits et confidentialité.",
      intro: "Avoir l'image-vers-vidéo en commun ne rend pas tous les projets recevables par les deux plateformes. SpicyBox applique des modèles pour adultes à la photo de l'utilisateur. Runway est un environnement plus large de création et montage, qui modère les entrées et les sorties.",
      dimensions: [
        ["Usage", "Effet rapide sur une photo de soi admise", "Création et montage vidéo généraux"],
        ["Entrée", "Utilisateur seul représenté", "Droits et politique d'utilisation"],
        ["Direction", "Choix d'un traitement visuel", "Modèle, consigne de mouvement puis édition"],
        ["Modération et prix", "Règles et crédits par essai", "Contrôle des contenus, coûts par modèle et erreurs"]
      ],
      sections: [
        ["La politique précède la beauté du rendu", "SpicyBox impose la majorité et une image ne montrant que l'utilisateur qui l'envoie. La disponibilité publique d'un portrait d'autrui n'y change rien. L'aide de Runway explique que les entrées et sorties sont contrôlées automatiquement et que l'assistance ne peut désactiver cette modération pour un projet. Face à un blocage, reformulez un concept autorisé plutôt que de tenter de contourner la règle."],
        ["Rapidité du modèle ou ampleur de la réalisation", "Avec SpicyBox, quelques choix suffisent pour une courte vidéo si le cadrage source convient ; la mise en scène reste liée au modèle choisi. Le guide Runway actuel sur Gen-4.5 expose l'image-vers-vidéo et la direction du mouvement dans un ensemble plus vaste. Un projet général avec mouvements de caméra et montage peut bénéficier de ce contrôle, mais modèles et droits d'accès évoluent."],
        ["Comparer un petit projet permis des deux côtés", "Une courte scène non explicite de mode ou de produit constitue une base plus juste, à condition de respecter les deux politiques. Pour SpicyBox, si votre propre photo est admissible, retirez toute indication de domicile et toute autre personne. Examinez le clip entier : visage, arrière-plan, mouvement, résolution et export. Comptez toutes les tentatives. Nous ne prétendons pas avoir acheté des rendus pour établir un classement."],
        ["Une erreur n'est pas toujours remboursée pareil", "SpicyBox ne rend pas largement les crédits dépensés pour une sortie simplement décevante, sous réserve de la loi applicable. La documentation Runway distingue échec technique de génération et refus lié à la politique ; il faut vérifier le traitement des crédits selon le cas. Lisez les indications actuelles du modèle et du forfait, ainsi que le stockage et le partage des sources autorisées."]
      ],
      verdict: "Un clip bref, issu d'une photo de soi conforme et d'un modèle pour adultes, relève plutôt de SpicyBox. Une vidéo générale permise par la politique, à diriger puis monter, relève davantage de Runway. Si une idée enfreint les règles d'un outil, écartez-le avant même de comparer sa qualité."
    }
  },
  ar: {
    promptchan: {
      title: "SpicyBox مقابل Promptchan: تحريك صورتك أم ابتكار شخصية من النص؟",
      description: "مقارنة SpicyBox وPromptchan من حيث شروط الصورة الشخصية والإنشاء بالنص والتحكم في المشهد والفيديو والرصيد والخصوصية.",
      intro: "تنتج الخدمتان مواد مرئية للبالغين، لكن نقطة البداية مختلفة. يستخدم SpicyBox قالباً مع صورة لا يظهر فيها إلا من يرفعها. يتيح Promptchan وصف شخصية خيالية بالنص، وضبط الوضعية وتكوين الصورة، ثم تحويل النتيجة إلى فيديو.",
      dimensions: [
        ["البداية", "صورة المستخدم وحده مع قالب", "نص أو صورة مولدة أو تعديل من المعرض"],
        ["التحكم", "اختيار القالب وملاءمة الصورة", "الأسلوب والوضعية والتكوين والتنويعات"],
        ["الفيديو", "مقطع قصير من صورة شخصية", "تحويل الصورة أو النص إلى فيديو"],
        ["التكلفة", "محاولات التوليد وإعادتها", "الصورة والفيديو والجودة والوضع الخاص"]
      ],
      sections: [
        ["هل تحتاج إلى رفع صورة أصلاً؟", "تعرض صفحة Explore في SpicyBox مؤثرات جاهزة ثم تطلب صورة شخصية مستوفية للشروط. قد تقصر الطريق إلى مقطع أول إذا ناسبت زاوية الصورة القالب، لكن صورة الوجه القريبة لا تناسب بالضرورة حركة كاملة. تعرض صفحة Promptchan الرسمية أوامر للنص والاستبعاد والأسلوب والوضعية وتكوين المشهد، وهي أنسب عندما تريد تصميم شخص بالغ خيالي من البداية."],
        ["موافقة صاحب الصورة لا تكفي وحدها", "تشترط أحكام SpicyBox الحالية أن يكون رافع الصورة هو الشخص الوحيد فيها. إذن الشريك أو شراء صورة مرخّصة لا يلغي هذا الشرط التعاقدي المحدد. يستطيع Promptchan البدء بالنص دون استعمال وجه حقيقي. وإذا رفعت صورة هناك، فاقرأ قواعده الحالية الخاصة بالحقوق والهوية والخصوصية بدلاً من افتراض تطابق القواعد بين الخدمتين."],
        ["البساطة مقابل التحكم الدقيق", "يجمع قالب SpicyBox الحركة والمظهر في اختيار واحد، لكنه يترك مجالاً أقل للتصحيح إذا لم تلائم الصورة الأصلية التأثير. يوفر Promptchan تنويعات للصورة وإعادة التعديل وضبط الوضعية قبل صنع الفيديو؛ قد تتطلب هذه المرونة وقتاً ورصيداً إضافيين. أمثلة التسويق المختارة لا تقيس معدل النجاح بموادك أنت."],
        ["خصوصية الصورة وكلفة المهمة كلها", "في SpicyBox تكون الصورة الشخصية القابلة للتعرف عليك هي أهم بياناتك؛ ابحث عن حذف الأصل والنتيجة والحساب. يصف Promptchan الإنشاء الخاص بعيداً عن المعرض العام بأنه ميزة مدفوعة، لكن عدم الظهور للآخرين لا يعني انعدام معالجة البيانات. احسب رصيد الصور والمقاطع المرفوضة حتى تصل إلى نتيجة تحفظها."]
      ],
      verdict: "إذا كنت بالغاً وتريد تحريك صورة مطابقة لقاعدة ظهورك وحدك بسرعة، فمسار SpicyBox أقرب إلى طلبك. وإذا أردت ابتكار بالغ خيالي من النص وضبط مظهره ووضعه ثم تحريكه، فابحث في Promptchan. تحقق من شروط الملفات والسعر يوم الاستخدام."
    },
    "ourdream-ai": {
      title: "SpicyBox مقابل OurDream AI: مقطع واحد أم شخصية خيالية تستمر؟",
      description: "تعرّف إلى الفرق بين SpicyBox وOurDream AI في الصورة الشخصية وبناء الشخصية والمحادثة والصوت والفيديو والخصوصية والتكلفة.",
      intro: "وجود الفيديو في الخدمتين لا يجعلهما بديلين متطابقين. يحوّل SpicyBox صورة المستخدم بقالب إلى مقطع قصير. أما OurDream AI فيتمحور حول شخصية خيالية يمكن مواصلة التفاعل معها بالمحادثة والصوت والصور والفيديو.",
      dimensions: [
        ["الهدف", "تحويل قصير لصورتك", "شخصية خيالية وتفاعل مستمر"],
        ["المدخل", "صورة يظهر فيها رافعها وحده", "وصف الشخصية وإعداداتها"],
        ["الاستمرار", "نتائج منفصلة لكل توليد", "هوية واحدة عبر جلسات ووسائط"],
        ["حساب الكلفة", "محاولات حتى مقطع قابل للاستخدام", "رسائل وصوت وصور وفيديو خلال فترة"]
      ],
      sections: [
        ["المشهد الواحد غير العلاقة المستمرة", "في SpicyBox تختار التأثير المناسب لصورة موجودة لديك؛ لا حاجة إلى كتابة سيرة أو إدارة حوار. هذه البساطة مفيدة إن أردت نتيجة قصيرة فقط. يبدأ العرض الرسمي لـ OurDream AI بوصف شخصية ثم يضيف المحادثة والصوت والوسائط. بعد انتهاء الفيديو يمكن متابعة التفاعل مع الشخصية نفسها."],
        ["نوع البيانات المعرضة يختلف", "تفرض شروط SpicyBox أن يظهر المستخدم الذي يرفع الصورة وحده. قد يكشف الخلفية عنوان المنزل أو العمل أيضاً. يمكن بدء OurDream AI بشخصية بالغة خيالية، لكن محادثة طويلة قد تجمع تفاصيل حقيقية يفصح عنها المستخدم تدريجياً. تعامل مع الصورتين من البيانات كمواد على خدمة عبر الإنترنت، لا كصورة تتبخر أو دفتر سري."],
        ["اختبر وعد كل خدمة على حدة", "إذا قبلت استخدام صورة شخصية غير حساسة وتحققت شروط الرفع، راقب في SpicyBox ثبات الوجه والخلفية وعدد المحاولات والرصيد لمقطع نافع. في OurDream AI أنشئ مشاهد خيالية متعددة واسأل هل يبقى الاسم والطبع والمظهر والصوت متسقة. نقترح طريقة للقارئ، ولا نزعم أننا أجرينا اختباراً مدفوعاً ورتبنا الخدمتين."],
        ["وحدة الحساب ليست واحدة", "في SpicyBox احسب جميع النتائج التي رفضتها حتى احتفظت بمقطع واحد. في OurDream AI قدّر أسبوعاً من الرسائل والنماذج والصوت والصور والفيديو. تتغير الحصص المجانية وأسعار الرصيد؛ لا تستبدل شاشة الدفع الحالية بمقال قديم."]
      ],
      verdict: "إذا كان المطلوب مقطعاً واحداً من صورة شخصية مسموح بها فافحص SpicyBox. وإذا أردت بالغاً خيالياً تستمر محادثته ووسائطه فافحص OurDream AI. حدّد أولاً أيهما أشد حساسية لك: وجهك الحقيقي أو تاريخ المحادثات الطويل."
    },
    "playbox-ai": {
      title: "SpicyBox مقابل Playbox AI: خدمتان تشترطان صورة المستخدم وحده",
      description: "تشترط SpicyBox وPlaybox AI ظهور رافع الصورة وحده؛ قارن العثور على القوالب والحركة والرصيد وإعادة المحاولة والحذف.",
      intro: "يعد Playbox AI الأقرب إلى SpicyBox بين البدائل الخمسة. كلاهما يعرض قوالب فيديو للبالغين، وتشترط الأحكام المنشورة أن يكون رافع الصورة هو الشخص الوحيد فيها. ليست المقارنة بحثاً عن خدمة تسمح بمعالجة صورة شخص آخر.",
      dimensions: [
        ["الصورة المقبولة", "رافع الصورة وحده", "الشرط نفسه"],
        ["اختيار القالب", "مؤثرات Explore والأنماط القصيرة", "فهرس أوسع ومسارات للمنشئين"],
        ["فحص النتيجة", "الوجه واليدان والخلفية والحركة", "الهدف نفسه مع الصورة نفسها"],
        ["الرصيد والبيانات", "أرصدة مستهلكة وحذف صريح", "حصة الخطة والإضافات والحذف الصريح"]
      ],
      sections: [
        ["الحد المشترك يأتي أولاً", "تطالب شروط SpicyBox وPlaybox AI بأن يكون المستخدم الذي يرفع الصورة هو الشخص الوحيد الظاهر. صورة عارض أزياء مرخّصة أو صورة شريك أو مشهور لا تصبح مؤهلة بمجرد تغيير المنصة. إذا لم ترغب في إرسال صورة شخصية واضحة، فمن المنطقي ترك مساري الرفع معاً."],
        ["وفرة القوالب لا تعني جودة أفضل", "تقدّم Explore في SpicyBox مؤثرات مرئية وأنماطاً قصيرة. تعرض واجهة Playbox العامة قائمة أوسع ظاهرياً ومداخل للمنشئين. هذه ملاحظة عن سهولة التصفح لا قياس لجودة المقاطع. حدد حركتين بسيطتين غير صريحتين وابحث عن قالب يناسب زاوية صورتك قبل الإنفاق."],
        ["قارن جلسة كاملة لا أفضل لقطة", "إذا استوفيت القاعدة ووافقت على استخدام صورة شخصية غير حساسة، أبقِ الصورة وهدفي الحركة متماثلين في الخدمتين. شاهد المقطع كله لفحص الوجه واليدين والإضاءة والخلفية. سجّل النتائج التي تركتها والوقت والرصيد. لا تستطيع الصفحات العامة تحديد فائز لصورتك؛ نقدم طريقة يمكن تكرارها لا تجربة مدفوعة مختلقة."],
        ["الإعادة والاحتفاظ جزء من الجودة", "تقيّد شروط SpicyBox استرجاع الرصيد المستخدم بسبب نتيجة لم تعجبك، مع مراعاة القانون. يعلن Playbox حصص خطط وشراء أرصدة إضافية قد تتغير تفاصيلها. تصف سياستا الخصوصية بقاء المحتوى حتى الحذف الصريح. ابحث عن حذف الصورة الأصلية والمقطع والحساب قبل رفع أي ملف."]
      ],
      verdict: "قد يناسبك SpicyBox إذا وصلت قوالبه بسرعة إلى الحركة المطلوبة مع تكلفة إعادة مقبولة. وقد يفيد Playbox AI إذا سهّل فهرسه أو أدوات المنشئين المهمة أكثر. احسب المحاولات والحذف معاً، ولا ترفع صورة غيرك على أي منهما."
    },
    "musebox-ai": {
      title: "SpicyBox مقابل Musebox AI: قالب لصورتك أم فيديو يبدأ من النص؟",
      description: "مقارنة SpicyBox وMusebox AI وفق نوع المدخل وتمديد المقطع وحقوق الصور والأرصدة والتخزين والنشر.",
      intro: "يمكن للخدمتين تحريك صورة ثابتة، لكن SpicyBox يركز على قالب مع صورة يظهر فيها رافعها وحده. يصف Musebox AI أيضاً إنتاج الفيديو من النص وتمديد المقاطع ومراحل إنتاج أخرى. قرر هل تحتاج تحويلاً واحداً أم مشهداً يتطور.",
      dimensions: [
        ["البداية", "صورة المستخدم وحده وقالب", "صورة أو وصف نصي"],
        ["نطاق العمل", "تحويل مرئي قصير", "توليد وتمديد وأدوات شخصية"],
        ["حقوق الوجوه", "شرط ظهور رافع الصورة وحده", "تحقق من إذن صور الآخرين وحقوقها"],
        ["التكلفة", "التوليد والإعادة", "التوليد والتمديد والجودة والتصدير"]
      ],
      sections: [
        ["المادة المسموح بها تحدد المشروع", "تلزم شروط SpicyBox بأن يكون رافع الصورة وحده فيها. الترخيص أو موافقة شخص آخر لا يلغيان هذا القيد التعاقدي. تعرض صفحة Musebox بداية بصورة أو نص، وتحذر صفحة الدخول من صور الآخرين دون إذن. لكن هذا لا يتيح نسخ وجوه حقيقية عموماً؛ راجع حقوق الصورة والشروط الكاملة والقانون المحلي على حدة."],
        ["تأثير واحد أم تسلسل إنتاج", "إذا لائم القالب صورة ذاتية مسموحاً بها، فقد يصل SpicyBox إلى مقطع قصير بخطوات أقل. في المقابل تتحكم الإعدادات المسبقة بمعظم الحركة. يصف Musebox فيديو بالنص وتحريك الصور وتمديد المقاطع؛ تفيد هذه الأدوات قصة أطول، لكنها تضيف أسئلة عن الرصيد والحدود التقنية وحق استخدام المخرجات."],
        ["لا تجمع مهمتين مختلفتين في درجة واحدة", "عند مقارنة صورة شخصية مسموح بها في الخدمتين، استخدم صورة غير حساسة وحركة بسيطة، وسجّل ثبات الوجه والخلفية والتصدير وتكاليف الإعادة. إنشاء مشهد خيالي من النص فقط مهمة أخرى لدى Musebox؛ ليس من العدل اعتبار SpicyBox أداة نص إلى فيديو مماثلة. نقترح اختباراً للقارئ ولا ندعي قياسات تحريرية مدفوعة."],
        ["حق استخدام النتيجة لا يمنح حق استخدام المدخل", "تتخذ وثائق SpicyBox موقفاً مقيداً من رد الرصيد المستخدم وتشرح الاحتفاظ حتى الحذف الصريح. حتى إذا أعلن Musebox إمكان نشر الفيديو، فهذا لا ينقل حقوق صورة شخص آخر استُخدمت مصدراً. افصل بين حق المؤلف وحق الصورة وشروط إدخال الملف وحق توزيع النتيجة."]
      ],
      verdict: "SpicyBox أوضح لمن يقبل شرط صورته الشخصية ويريد مقطع قالب قصيراً. Musebox AI أكثر صلة بمن يبدأ من النص أو يحتاج تمديد المشهد وعدة مراحل. تحقق من حقوق المدخل والسعر الكامل والحذف قبل الشراء."
    },
    runway: {
      title: "SpicyBox مقابل Runway: قوالب للبالغين أم أدوات فيديو عامة؟",
      description: "قارن SpicyBox وRunway وفق المشاريع المسموحة وتحريك الصور والمراجعة والتحرير والأخطاء والرصيد والخصوصية.",
      intro: "وجود تحويل الصورة إلى فيديو في الخدمتين لا يعني أن المشروع نفسه مسموح في كليهما. يستخدم SpicyBox قوالب للبالغين مع صورة المستخدم. أما Runway فهو بيئة أوسع لإنشاء الفيديو وتحريره وتراجع مدخلاتها ومخرجاتها.",
      dimensions: [
        ["العمل الرئيسي", "تأثير سريع على صورة ذاتية مسموحة", "إنتاج وتحرير فيديو عام"],
        ["المدخل", "المستخدم وحده في الصورة", "حقوق المادة وسياسة الاستخدام"],
        ["الإخراج", "اختيار معالجة مرئية", "اختيار النموذج ووصف الحركة ثم التحرير"],
        ["المراجعة والكلفة", "شروط البالغين ورصيد المحاولات", "مراجعة المدخلات والمخرجات وكلفة كل نموذج"]
      ],
      sections: [
        ["السياسة قبل جمال المقطع", "يشترط SpicyBox البلوغ وصورة لا يظهر فيها إلا من يرفعها. كون صورة الآخر عامة أو مشتراة لا يجعلها صالحة. توضح مساعدة Runway أن النظام يفحص المدخلات والنتائج، ولا يستطيع الدعم تعطيل المراجعة لمشروع معيّن. إذا رُفضت فكرة، انتقل إلى مفهوم مسموح بدلاً من تكرار محاولة تجاوز المنع."],
        ["سهولة القالب واتساع أدوات الإخراج", "في SpicyBox تختار تأثيراً يناسب الصورة الشخصية وتراجع مقطعاً قصيراً، مع خيارات إخراج أقل. يشرح دليل Runway الحالي لـ Gen-4.5 تحويل الصورة إلى فيديو وتوجيه الحركة ضمن مسار أوسع. يحتاج مشروع فيديو عام إلى تحريك كاميرا أو تعديلات لاحقة؟ قد تكون هذه المرونة مهمة، لكن النماذج والحدود تتغير."],
        ["اختبار محايد ومسموح للطرفين", "اختر لقطة أزياء أو منتج بسيطة وغير صريحة إذا وافقت قواعد الطرفين الحالية. في SpicyBox لا تُستخدم إلا صورة ذاتية غير حساسة يظهر فيها صاحبها وحده، بلا عنوان أو دلالات مكان. افحص المقطع كله: ثبات الوجه والخلفية والحركة والدقة والتصدير، واحسب جميع المحاولات حتى نتيجة صالحة. هذا اقتراح للقارئ وليس ترتيباً مبنياً على اختبارات مدفوعة نزعم إجراؤها."],
        ["ليست كل الأخطاء متساوية في الرصيد", "لا يرد SpicyBox الرصيد عادة لمجرد عدم رضاك عن ناتج مكتمل، رهناً بالقانون المطبق. تميّز مساعدة Runway بين خطأ توليد تقني وطلب أوقفته السياسة؛ لا تفترض أن معالجة الرصيد واحدة. راجع شروط النموذج والخطة ورسالة الخطأ الحالية، ثم تحقق من حفظ المواد المسموحة ومشاركتها."]
      ],
      verdict: "إذا أردت مقطعاً سريعاً من صورتك الذاتية المسموحة باستخدام قالب للبالغين، فهدف SpicyBox أقرب. وإذا أردت فيديو عاماً مطابقاً للسياسة مع توجيه وتحرير، فافحص Runway. الخدمة التي تمنع فكرتك لا تدخل المقارنة حتى لو بدت جودة صورها مغرية."
    }
  }
};
