import type { Locale } from "./locales";

export interface SpicyHomeCopy {
  description: string;
  imageAlt: [string, string];
  eyebrow: string;
  tagline: string;
  lead: string;
  overview: { heading: string; paragraphs: [string, string] };
  workflow: { heading: string; lead: string; steps: [string, string][] };
  compare: { heading: string; lead: string; cards: [string, string][] };
  costs: { heading: string; paragraphs: [string, string] };
  privacy: { heading: string; paragraphs: [string, string] };
  faqs: [string, string][];
}

// Draft copy stays source-only until all page types pass the publication gate.
export const home: Record<Locale, SpicyHomeCopy> = {
  ja: {
    description: "SpicyBox の画像から短い動画を作る仕組み、本人画像だけという利用条件、テンプレート、追加費用、保存・削除、代替ツールを独立した立場で解説します。",
    imageAlt: ["成人の架空人物を描いたスタジオ風ポートレート", "ピンク色の背景にいる成人の架空人物の編集用ポートレート"],
    eyebrow: "成人向け動画ツールを安全に見極める",
    tagline: "一枚の自分の写真から、短い動く場面へ。",
    lead: "SpicyBox はテンプレートを選び、画像をもとに短い動画などを作るサービスです。ただし公式規約では、アップロードする画像に写る人物は利用者本人だけでなければなりません。使い始める前に、権利・費用・データの扱いを確かめましょう。",
    overview: {
      heading: "SpicyBox は何をするサービスか",
      paragraphs: [
        "SpicyBox の中心は会話型 AI ではなく、静止画像に動きを与える制作フローです。Explore で処理の種類を探し、条件に合う本人画像を使って結果を確認します。広告の完成例だけでは、自分の画像で同じ品質になるか判断できません。",
        "このサイトは運営元ではありません。特徴を数えるより、テンプレート選びから保存・削除までの一連の作業を、公式規約と照らし合わせて説明します。露骨な画像や他人の写真の提出を勧めるものではありません。"
      ]
    },
    workflow: {
      heading: "生成前に三つの確認を",
      lead: "料金画面より先に、入力条件と保存先を確認すると無駄なリスクを減らせます。",
      steps: [
        ["本人だけが写る画像か", "規約は、画像の被写体がアップロードする本人のみであることを要求します。許可を得た他人の写真や購入素材でも、この条件を満たすとは限りません。"],
        ["テンプレートと画角が合うか", "顔だけの写真に全身の動きを期待するなど、入力と見本の構図が違えば結果を評価しにくくなります。最初は無害で個人情報の少ない画像を検討してください。"],
        ["費用と削除方法が分かるか", "使用したクレジットが戻るとは限りません。公式の現行料金とプライバシー文書を読み、アップロード・完成物・アカウントの削除操作を事前に探します。"]
      ]
    },
    compare: {
      heading: "目的が違えば代替サービスも違う",
      lead: "五つを一列の優劣に並べず、入力方法と完成させたい作品で選びます。",
      cards: [
        ["Promptchan", "文章から架空の人物や画像を作り、細部を調整してから動画にしたい人向け。現在は会話や音声機能もあり、画像制作だけのサービスではありません。"],
        ["OurDream AI", "同じ架空の人物を会話、音声、画像、動画へ展開したい場合の候補。SpicyBox の一回ごとの本人画像処理とは出発点が異なります。"],
        ["Playbox AI", "本人のみの画像という条件を共有する近い競合。テンプレートの探しやすさ、動きの安定、再試行費用、削除操作を直接比べます。"],
        ["Musebox AI", "画像からの動画だけでなく、文章からの動画や延長制作も検討したい場合。各種の入力権限と公開条件を別途確認します。"],
        ["Runway", "一般的な映像制作と編集の幅を重視する場合。投稿内容の審査があるため、成人向けテンプレートの置き換えと考えないでください。"]
      ]
    },
    costs: {
      heading: "一回の広告価格より、使える一本までの費用",
      paragraphs: [
        "SpicyBox の規約は、結果が気に入らない場合でも使用済みクレジットの返還を広く認めていません。ただし適用法や現行画面を確認してください。月額や無料枠だけでなく、失敗・再生成・保存まで数えるのが実際的です。",
        "同じ構図で二つの簡単な動きを試すなら、何回やり直したか、何本を残せたか、完成物をどこまで使えるかを記録します。ここで示すのは読者向けの比較手順であり、当サイトが実写画像を投稿して測定した順位ではありません。"
      ]
    },
    privacy: {
      heading: "画像の裏にある個人情報も守る",
      paragraphs: [
        "背景に住所、勤務先、ほかの人の顔が写っていないか確認してください。SpicyBox のプライバシー文書は、画像や生成物に加えて、アカウント情報、利用記録、派生データを扱うと説明します。『自動で消える』と想定せず、実際の削除手順を確認しましょう。",
        "本人画像のアップロードに抵抗があるなら、比較のためだけに登録する必要はありません。架空の人物を文章から作るツールなど、目的そのものを変える選択もあります。この独立サイトは画像のアップロードを受け付けません。"
      ]
    },
    faqs: [
      ["SpicyBox はチャットサービスですか？", "いいえ。公式画面では画像をもとにした写真・短い動画の生成が中心です。会話型の人物制作とは分けて評価してください。"],
      ["他人が許可した写真なら使えますか？", "公式規約はアップロードする本人だけが画像に写っていることを要求します。許可があることと、契約上の入力条件を満たすことは別です。"],
      ["無料で試せますか？", "公式画面は無料体験への入口を示していますが、対象や回数は変わり得ます。登録時の表示とクレジット条件を確認してください。"],
      ["作品や元画像はいつ消えますか？", "公式プライバシー文書は明示的な削除操作まで保存されると説明します。現行の削除手順と適用法を確認してください。"]
    ]
  },
  ko: {
    description: "SpicyBox의 사진 기반 짧은 영상 제작, 본인 단독 사진 규칙, 템플릿, 크레딧, 저장·삭제와 다섯 대안을 독립적으로 살펴봅니다.",
    imageAlt: ["성인 가상 인물의 스튜디오 스타일 초상", "분홍색 배경의 성인 가상 인물 편집용 초상"],
    eyebrow: "성인용 영상 도구를 선택하기 전에",
    tagline: "내 사진 한 장에서 짧은 움직임까지.",
    lead: "SpicyBox는 사진과 템플릿으로 짧은 영상을 만드는 서비스입니다. 다만 공식 약관은 업로드한 사진에 이용자 본인만 나와야 한다고 요구합니다. 결제하기 전에 이 조건과 결과물의 비용, 보관 방식을 함께 확인하세요.",
    overview: {
      heading: "SpicyBox는 대화형 AI가 아니라 영상 제작 도구입니다",
      paragraphs: [
        "핵심은 캐릭터와 오랜 대화를 나누는 일이 아니라 정지 사진을 움직이는 장면으로 바꾸는 것입니다. Explore에서 템플릿을 고르고, 규칙에 맞는 본인 사진을 사용한 뒤 결과를 살펴보는 순서입니다. 홍보용 예시만 보고 내 사진의 결과까지 예측할 수는 없습니다.",
        "이 사이트는 SpicyBox 운영사가 아닌 독립 편집 사이트입니다. 기능 이름을 반복하기보다 입력 조건, 실패한 시도, 저장과 삭제를 실제 선택 기준으로 풀어 설명합니다. 타인의 사진이나 노골적인 자료의 제출을 권하지 않습니다."
      ]
    },
    workflow: {
      heading: "생성 버튼 앞에서 세 가지를 확인하세요",
      lead: "본인 여부와 데이터 보관 위치를 먼저 알아두면 불필요한 위험과 지출을 줄일 수 있습니다.",
      steps: [
        ["사진의 유일한 인물이 나인가", "약관은 업로드한 이미지에 나온 사람이 업로더 본인 한 명이어야 한다고 합니다. 타인에게 허락받았거나 사진을 구매했다는 사실만으로 조건을 충족하지 않습니다."],
        ["원본 구도와 템플릿이 맞는가", "얼굴만 찍힌 사진과 전신 동작 예시는 서로 맞지 않을 수 있습니다. 개인 정보가 드러나지 않는 비민감한 사진을 고려하고, 완성 영상 전체를 확인하세요."],
        ["크레딧과 삭제 경로를 찾았는가", "만족스럽지 않은 결과에도 크레딧이 소진될 수 있습니다. 현재 결제 화면, 업로드 보관, 결과물 및 계정 삭제 절차를 먼저 확인하세요."]
      ]
    },
    compare: {
      heading: "대안 다섯 가지, 같은 순위표로 고르지 마세요",
      lead: "사진을 어디서 시작하는지와 결국 어떤 결과가 필요한지에 따라 적합한 도구가 달라집니다.",
      cards: [
        ["Promptchan", "글로 가상 캐릭터와 이미지를 만들고 스타일·포즈를 다듬은 후 영상으로 이어가려는 경우. 현재는 대화와 음성 기능도 있으므로 단순 이미지 생성기로만 보지 않습니다."],
        ["OurDream AI", "하나의 가상 인물을 대화, 음성, 이미지, 영상에 걸쳐 발전시키려는 경우. 본인 사진을 한 번 처리하는 SpicyBox와 목적이 다릅니다."],
        ["Playbox AI", "본인만 나온 사진 규칙을 공유하는 가까운 비교 대상입니다. 템플릿 검색, 얼굴 안정성, 재시도 비용과 삭제 절차를 나란히 확인하세요."],
        ["Musebox AI", "이미지에서 영상뿐 아니라 글에서 영상, 클립 연장, 캐릭터 기능까지 필요할 때 살펴볼 만합니다. 입력 권리와 게시 조건은 따로 확인해야 합니다."],
        ["Runway", "일반 영상 제작의 모델 선택과 편집이 중요한 경우. 입력과 출력에 대한 정책 심사가 있으므로 성인 템플릿의 우회 수단으로 생각하면 안 됩니다."]
      ]
    },
    costs: {
      heading: "한 달 요금보다 쓸 만한 영상 한 편의 비용",
      paragraphs: [
        "SpicyBox 약관은 결과가 마음에 들지 않아도 사용된 크레딧의 환불을 폭넓게 인정하지 않습니다. 적용 법률과 현재 결제 화면은 반드시 다시 확인해야 합니다. 무료 체험 문구만 보지 말고 재생성 횟수와 추가 구매 여부까지 계산하세요.",
        "같은 사진으로 서로 다른 두 가지 무해한 동작을 시험할 때 걸린 시간, 포기한 결과, 실제 남길 영상의 수를 기록해 보세요. 이 내용은 독자가 따라 해 볼 평가 방법이지, 편집진이 직접 영상을 생성해 얻은 실측 순위가 아닙니다."
      ]
    },
    privacy: {
      heading: "원본 사진 밖에 보이는 정보도 개인 정보입니다",
      paragraphs: [
        "집 주소, 직장 표식, 다른 사람의 얼굴처럼 배경에 남은 단서를 살피세요. 공식 개인정보처리방침은 업로드 사진과 생성 결과 외에 계정, 이용 기록, 파생 데이터도 다룬다고 설명합니다. 자동 삭제된다고 가정하지 말고 명시적 삭제 방법을 확인하세요.",
        "실제 내 얼굴을 온라인에 올리는 일이 불편하다면 비교를 위해 억지로 가입할 필요가 없습니다. 글에서 출발해 가상 인물을 만드는 다른 도구가 목적에 더 맞을 수 있습니다. 이 독립 사이트는 방문자의 사진을 받지 않습니다."
      ]
    },
    faqs: [
      ["SpicyBox는 AI 채팅 서비스인가요?", "아니요. 공식 화면에서 중심 기능은 사진을 바탕으로 이미지나 짧은 영상을 만드는 것입니다."],
      ["상대가 허락하면 그 사진을 올릴 수 있나요?", "현재 약관은 업로더 본인만 사진에 나와야 한다고 합니다. 동의 여부와 서비스의 입력 자격은 다른 문제입니다."],
      ["무료로 시작할 수 있나요?", "공식 화면에 체험 시작 경로가 있지만 제공 범위와 크레딧은 달라질 수 있습니다. 가입 시점의 조건을 확인하세요."],
      ["원본과 결과물은 언제 삭제되나요?", "공식 방침은 이용자가 명시적으로 삭제할 때까지 보관한다고 설명합니다. 현재 삭제 경로와 예외를 확인하세요."]
    ]
  },
  "zh-hant": {
    description: "獨立整理 SpicyBox 的照片轉短片流程、僅限本人單獨入鏡的上傳規則、模板、點數、保存與刪除，以及五種替代工具。",
    imageAlt: ["成年虛構人物的攝影棚風格肖像", "粉紅背景前的成年虛構人物編輯肖像"],
    eyebrow: "使用成人影像工具之前",
    tagline: "從自己的照片，走到一段短影片。",
    lead: "SpicyBox 以照片和模板產生短片；但官方條款要求上傳者本人是每張照片中唯一的人物。先弄清楚這項限制、每次重試的費用與影像保存方式，再決定是否使用。",
    overview: {
      heading: "SpicyBox 做的是影像轉換，不是陪聊",
      paragraphs: [
        "主要流程是在 Explore 找到合適的模板，再以符合規則的本人照片製作影像或短片。展示頁面上的漂亮成品，不能代表你的照片也會得到同樣效果；畫面構圖、光線與動作是否相稱，都值得單獨觀察。",
        "本站不是 SpicyBox 的營運方。我們把官方政策與實際選擇連在一起，討論授權、點數、重試、保存及刪除，不收集訪客照片，也不鼓勵使用他人的肖像。"
      ]
    },
    workflow: {
      heading: "動手前先過三道關",
      lead: "檢查輸入資格，比看見免費試用或優惠字樣更重要。",
      steps: [
        ["照片只有你本人嗎", "官方條款要求上傳者是照片裡唯一的人物。即使對方同意，或你買到該張照片的授權，也不等於符合這個特定上傳條件。"],
        ["模板適合原圖構圖嗎", "正面半身照未必適合需要全身動作的模板。先看示例的角度與光線，並避免照片裡出現地址、證件或其他人的臉。"],
        ["點數與刪除在哪裡", "不理想的結果也可能消耗點數。付款前核對現行價格、取消與退款規則，並找出原圖、成品與帳號的刪除位置。"]
      ]
    },
    compare: {
      heading: "五種替代工具，對應五種不同需求",
      lead: "不是把工具排成一個總排名，而是先決定你要處理自己的照片，還是創作虛構內容。",
      cards: [
        ["Promptchan", "從文字創作虛構人物與影像，再調整風格、姿勢並延伸影片；目前也有聊天與語音功能，不能只稱它為圖片工具。"],
        ["OurDream AI", "讓同一個虛構角色跨越對話、聲音、圖片及影片。它的連續創作流程，與 SpicyBox 的單次本人照片轉換不同。"],
        ["Playbox AI", "同樣要求上傳照片只出現本人。比較重點應是模板搜尋、動作穩定度、重試花費、輸出與刪除操作。"],
        ["Musebox AI", "除了圖片轉影片，也描述文字轉影片、延長片段及角色工具。素材權利與公開使用條件仍須個別查證。"],
        ["Runway", "適合一般影像製作與後續剪輯。它會依使用政策審查輸入與輸出，不是繞過成人內容限制的替代品。"]
      ]
    },
    costs: {
      heading: "算的是留下來的成品，不只是試用價",
      paragraphs: [
        "SpicyBox 條款對已使用點數及不滿意的結果採取嚴格退款立場，仍須以當地法律與最新付款頁面為準。若一支可用短片需要多次嘗試，總費用可能與首頁標示的起步價格大不相同。",
        "若你有資格且願意使用非敏感的本人照片，可以用同一張圖、兩種簡單且非露骨的動作，記下每次耗時、重試與保留的成品。這是提供給讀者的自測方法，並非本站假稱做過的實測評分。"
      ]
    },
    privacy: {
      heading: "影像不只是一張臉",
      paragraphs: [
        "背景可能洩露住址、工作場所或他人身分。官方隱私政策列有上傳圖像、生成內容、帳號與技術資料，以及衍生資料；並表示內容會留存到使用者明確刪除為止。請先找出目前可用的刪除流程。",
        "若不願上傳真實自拍照，完全可以不做這項比較。先從文字創作虛構人物，可能更符合你的目標與隱私界線。本站只是獨立資訊網站，沒有上傳或生成功能。"
      ]
    },
    faqs: [
      ["SpicyBox 是 AI 聊天網站嗎？", "不是；官方頁面以照片生成圖片與短片的流程為主。"],
      ["有對方同意就能上傳他的照片嗎？", "現行條款要求上傳照片只出現使用者本人。取得同意與滿足平台的上傳條件是不同的事。"],
      ["可以免費試用嗎？", "官方頁面有試用入口，但內容及額度可能變動。請在註冊時核對條件。"],
      ["何時會刪除我的照片？", "官方隱私政策表示需要使用者明確執行刪除。請確認現行操作與可能的法定保存例外。"]
    ]
  },
  es: {
    description: "Una mirada independiente a SpicyBox: fotos convertidas en vídeos breves, regla de imagen propia, plantillas, créditos, privacidad y cinco alternativas.",
    imageAlt: ["Retrato de estudio de un personaje adulto ficticio", "Retrato editorial de un personaje adulto ficticio con fondo rosa"],
    eyebrow: "Antes de probar una herramienta visual para adultos",
    tagline: "De tu propia foto a una escena en movimiento.",
    lead: "SpicyBox permite crear imágenes y clips cortos a partir de una foto y una plantilla. Sus condiciones exigen que la única persona que aparezca en cada imagen subida seas tú. Conviene revisar esa norma, el coste de repetir una generación y el destino de los archivos antes de pagar.",
    overview: {
      heading: "Una herramienta de imagen a vídeo, no un chat de compañía",
      paragraphs: [
        "El recorrido empieza en el catálogo Explore: eliges un tratamiento visual, aportas una foto que cumpla las condiciones y examinas el resultado. Las muestras de portada no permiten prever cómo se moverá una foto propia; importan el encuadre, la luz, la continuidad del rostro y los artefactos.",
        "Esta web no pertenece a SpicyBox. Ordenamos la información oficial alrededor de decisiones concretas: qué puedes subir, cuándo se gastan los créditos, qué se guarda y cómo se borra. No recibimos fotos ni recomendamos subir imágenes de terceros."
      ]
    },
    workflow: {
      heading: "Tres comprobaciones antes de generar",
      lead: "La primera decisión no es qué plantilla elegir, sino si la imagen cumple la norma de entrada.",
      steps: [
        ["¿Apareces tú y nadie más?", "Las condiciones piden que quien sube la imagen sea su única persona retratada. El permiso de otra persona o una licencia de stock no sustituyen ese requisito particular."],
        ["¿Encaja el encuadre con la plantilla?", "Una foto de primer plano no ofrece el mismo material que una plantilla de cuerpo entero. Evita identificadores en el fondo, compara ángulo y luz, y revisa el clip completo."],
        ["¿Conoces los créditos y el borrado?", "Un resultado que no te guste también puede consumir saldo. Consulta la pantalla de pago vigente y localiza cómo eliminar originales, resultados y cuenta antes de subir nada."]
      ]
    },
    compare: {
      heading: "Cinco alternativas para necesidades distintas",
      lead: "La comparación útil separa animar una foto propia, crear personajes ficticios y editar vídeo general.",
      cards: [
        ["Promptchan", "Para crear personajes e imágenes ficticias desde texto, ajustar pose y estilo y luego animarlos. Su oferta actual también incluye chat y voz."],
        ["OurDream AI", "Para desarrollar un personaje ficticio coherente entre conversación, voz, imágenes y vídeo, no solo producir un clip puntual desde una foto propia."],
        ["Playbox AI", "El rival más cercano en plantillas con foto propia; comparte la regla de que solo aparezca quien sube la imagen. Compara catálogo, movimiento, reintentos y borrado."],
        ["Musebox AI", "Para combinar imagen a vídeo con texto a vídeo, ampliación de clips y herramientas de personaje. Revisa aparte derechos sobre el material y opciones de publicación."],
        ["Runway", "Para producción y edición audiovisual de propósito general. Modera entradas y salidas; no debe tratarse como una vía para eludir normas de contenido adulto."]
      ]
    },
    costs: {
      heading: "Calcula el coste por clip aprovechable",
      paragraphs: [
        "Las condiciones de SpicyBox restringen ampliamente la devolución de créditos usados cuando el resultado no satisface, sin perjuicio de la ley aplicable. La prueba gratuita o la tarifa inicial dicen poco si hacen falta varios intentos. Verifica el precio y las condiciones vigentes en el momento de contratar.",
        "Si decides probar con una foto propia no sensible, compara dos movimientos sencillos y anota intentos, tiempo, saldo gastado y clips que conservarías. Es un método propuesto al lector, no una clasificación basada en pruebas propias que esta web no ha realizado."
      ]
    },
    privacy: {
      heading: "La foto también revela lo que hay detrás",
      paragraphs: [
        "Un domicilio, una tarjeta de empleado o el rostro de otra persona en el fondo pueden identificarte. La política oficial contempla imágenes subidas, resultados, datos de cuenta, uso y datos derivados; explica que el contenido puede conservarse hasta un borrado explícito, con excepciones legales. Comprueba el proceso actual.",
        "Si no quieres entregar una foto reconocible, no tienes que registrarte para comparar productos. Quizá te convenga una herramienta que empiece por un personaje inventado mediante texto. Esta guía independiente no recibe imágenes ni genera vídeos."
      ]
    },
    faqs: [
      ["¿SpicyBox sirve para chatear con personajes?", "No es su función central: la interfaz oficial se centra en crear imágenes y clips a partir de fotos y plantillas."],
      ["¿Puedo subir una foto ajena con permiso?", "Las condiciones actuales exigen que seas la única persona retratada en la imagen subida. Consentimiento y admisibilidad contractual no son lo mismo."],
      ["¿Hay una prueba gratuita?", "La web oficial anuncia una forma de probar el servicio, pero el alcance y los créditos pueden cambiar. Confirma los términos al registrarte."],
      ["¿Cuándo se borran los archivos?", "La política oficial describe la conservación hasta que el usuario los elimine expresamente, con posibles excepciones. Busca la opción de borrado vigente."]
    ]
  },
  "pt-br": {
    description: "Entenda o SpicyBox antes de usar: foto para vídeo curto, regra de imagem própria, modelos, créditos, privacidade e cinco alternativas comparadas.",
    imageAlt: ["Retrato de estúdio de uma personagem adulta fictícia", "Retrato editorial de personagem adulta fictícia em cenário rosa"],
    eyebrow: "Antes de usar uma ferramenta visual adulta",
    tagline: "Da sua foto a uma cena curta em movimento.",
    lead: "O SpicyBox usa fotos e modelos prontos para criar imagens ou vídeos curtos. Pelos termos oficiais, cada imagem enviada deve mostrar apenas a própria pessoa que fez o upload. Vale conferir essa condição, o custo de novas tentativas e como os arquivos são armazenados antes de começar.",
    overview: {
      heading: "O foco é transformar imagem, não conversar com um personagem",
      paragraphs: [
        "O fluxo começa na área Explore: escolha um modelo, envie uma foto própria permitida e examine o resultado. Uma amostra bonita no catálogo não garante a mesma qualidade com outra foto. Enquadramento, iluminação, estabilidade do rosto e movimento precisam ser avaliados juntos.",
        "Este site é editorial e independente, não o serviço oficial. Relacionamos regras públicas a decisões práticas sobre upload, créditos, retenção e exclusão. Não coletamos imagens nem incentivamos o envio de fotos de outras pessoas."
      ]
    },
    workflow: {
      heading: "Três perguntas antes de clicar em gerar",
      lead: "A elegibilidade da foto vem antes de escolher o efeito ou comprar créditos.",
      steps: [
        ["Só você aparece na imagem?", "Os termos exigem que o usuário que envia a foto seja a única pessoa retratada. Autorização de terceiros ou licença de banco de imagens não substitui essa regra específica."],
        ["A foto combina com o modelo?", "Uma selfie aproximada pode não servir para um efeito de corpo inteiro. Compare ângulo e luz, remova pistas de localização e confira o vídeo inteiro, não só a prévia."],
        ["Você encontrou preço e exclusão?", "Mesmo uma geração que não agrade pode gastar créditos. Leia o checkout atual e saiba onde apagar a imagem original, o resultado e a conta."]
      ]
    },
    compare: {
      heading: "Cinco caminhos, sem ranking universal",
      lead: "A melhor escolha muda conforme você queira animar uma foto própria, criar alguém fictício ou editar vídeo em geral.",
      cards: [
        ["Promptchan", "Criação de personagem e imagem fictícia por texto, com ajustes de estilo e pose antes da animação. Hoje também oferece recursos de conversa e voz."],
        ["OurDream AI", "Personagens fictícios que continuam por chat, voz, imagens e vídeo; uma proposta diferente de transformar uma única foto pessoal."],
        ["Playbox AI", "Concorrente próximo com modelos de vídeo e a mesma exigência de foto só do usuário. Compare organização, movimento, custo de repetição e exclusão."],
        ["Musebox AI", "Combina imagem para vídeo com texto para vídeo, extensão de clipes e recursos de personagem. Direitos do material e regras de publicação pedem verificação própria."],
        ["Runway", "Plataforma de criação e edição audiovisual mais ampla, com moderação de entradas e saídas; não é atalho para contornar políticas de conteúdo adulto."]
      ]
    },
    costs: {
      heading: "O preço importante é o de um vídeo que você aproveita",
      paragraphs: [
        "Os termos do SpicyBox limitam bastante o reembolso de créditos já usados mesmo se você não gostar do resultado, sujeito à legislação aplicável. Uma experiência grátis pode não mostrar o custo de refazer clipes. Confira valores, renovação e condições na tela de pagamento atual.",
        "Quem decidir testar com uma foto própria não sensível pode usar dois movimentos simples, anotando tentativas, tempo, créditos gastos e resultados aproveitáveis. É uma sugestão de avaliação para o leitor, não uma nota atribuída a testes que este site não realizou."
      ]
    },
    privacy: {
      heading: "O cenário da foto também pode identificar você",
      paragraphs: [
        "Endereço, crachá ou outra pessoa ao fundo podem revelar mais do que o rosto. A política oficial abrange uploads, conteúdo gerado, conta, dados de uso e derivados; descreve retenção até exclusão explícita, ressalvadas exceções legais. Procure os controles atuais antes de enviar algo pessoal.",
        "Se não quiser colocar sua própria imagem on-line, não é necessário se cadastrar só para comparar serviços. Uma ferramenta que começa com um personagem fictício por texto pode combinar melhor com seu limite de privacidade. Este site não recebe fotos nem gera conteúdo."
      ]
    },
    faqs: [
      ["O SpicyBox é um aplicativo de conversa?", "Não é o foco do produto: a interface oficial se concentra em fotos, modelos e vídeos curtos."],
      ["Posso enviar a foto de alguém com autorização?", "Os termos atuais exigem que apenas o próprio usuário apareça na imagem enviada. Ter autorização não elimina essa exigência."],
      ["Existe teste grátis?", "O site oficial mostra uma entrada para experimentar, mas alcance e créditos podem mudar. Confira a oferta ao criar a conta."],
      ["Por quanto tempo minhas imagens ficam salvas?", "A política descreve conservação até a exclusão explícita pelo usuário, sujeita a exceções. Verifique o caminho de exclusão em vigor."]
    ]
  },
  ru: {
    description: "Независимый разбор SpicyBox: короткие видео из собственных фото, правило единственного человека в кадре, шаблоны, кредиты, хранение и альтернативы.",
    imageAlt: ["Студийный портрет вымышленного взрослого персонажа", "Редакционный портрет вымышленного взрослого персонажа на розовом фоне"],
    eyebrow: "Перед работой со взрослым видеосервисом",
    tagline: "Собственный снимок — короткая движущаяся сцена.",
    lead: "SpicyBox создаёт изображения и короткие ролики по фотографии и выбранному шаблону. По действующим условиям на загружаемом снимке должен быть только сам загрузивший его пользователь. До оплаты стоит разобраться с этим ограничением, стоимостью повторов и удалением материалов.",
    overview: {
      heading: "Это инструмент для анимации фото, а не чат-бот",
      paragraphs: [
        "В разделе Explore выбирают шаблон, загружают допустимое фото себя и оценивают результат. Красивый пример в каталоге не гарантирует того же эффекта с другим ракурсом: важны освещение, устойчивость лица, движение и заметные дефекты.",
        "Наш сайт не связан с оператором SpicyBox. Мы разбираем открытые правила применительно к реальным решениям: какой файл допустим, на что тратятся кредиты, где хранятся исходник и результат и как их удалить. Чужие фотографии мы не принимаем и загружать не советуем."
      ]
    },
    workflow: {
      heading: "Три проверки до запуска генерации",
      lead: "Право на загрузку изображения важнее выбора привлекательного шаблона.",
      steps: [
        ["На фото только вы?", "Условия требуют, чтобы пользователь был единственным изображённым человеком. Даже разрешение другого человека или лицензия на стоковый кадр не отменяют это требование."],
        ["Подходит ли кадр для шаблона?", "Крупный портрет может плохо сочетаться с движением в полный рост. Сравните ракурс и свет; уберите из фона адрес, документы и лица других людей."],
        ["Понятны ли списание и удаление?", "Неудачная попытка тоже может израсходовать кредиты. Проверьте актуальную страницу оплаты и заранее найдите удаление загрузок, результатов и учётной записи."]
      ]
    },
    compare: {
      heading: "Пять альтернатив с разными задачами",
      lead: "Отделите анимацию собственного фото от создания вымышленных персонажей и монтажа обычного видео.",
      cards: [
        ["Promptchan", "Текстовые запросы для вымышленного персонажа и изображения с настройкой стиля и позы, затем анимация. Сейчас есть также чат и голос."],
        ["OurDream AI", "Сквозной вымышленный персонаж для переписки, голоса, изображений и видео вместо разовой обработки своего кадра."],
        ["Playbox AI", "Близкий сервис с шаблонами и тем же правилом: на фото только загрузивший его человек. Сравнивайте выбор шаблонов, движение, стоимость повторов и удаление."],
        ["Musebox AI", "Видео из картинки и текста, продолжение клипов и инструменты персонажей. Права на исходники и публикацию необходимо проверять отдельно."],
        ["Runway", "Более широкий набор средств для производства и редактирования видео; входные и выходные данные модерируются. Это не обход ограничений на контент для взрослых."]
      ]
    },
    costs: {
      heading: "Считайте стоимость пригодного ролика",
      paragraphs: [
        "Условия SpicyBox ограничивают возврат уже потраченных кредитов, даже если результат не понравился, с учётом применимого законодательства. Пробный доступ не показывает цену серии неудачных попыток. Сверяйте тариф и условия на текущем экране оплаты.",
        "Если вы решите использовать собственный несекретный снимок, попробуйте два простых нейтральных движения и запишите число повторов, время, расход и количество сохранённых роликов. Это метод для читателя, а не выдуманный результат наших испытаний."
      ]
    },
    privacy: {
      heading: "Личные данные скрываются не только в лице",
      paragraphs: [
        "Адрес, бейдж или другой человек на заднем плане тоже раскрывают личность. Официальная политика описывает обработку загрузок, результатов, данных аккаунта и использования, а также производных данных; контент может храниться до явного удаления с законными исключениями. Уточните нынешний порядок удаления.",
        "Если не хотите отправлять собственный узнаваемый снимок, не нужно регистрироваться ради сравнения. Для вымышленного персонажа могут подойти инструменты, работающие от текста. Наш независимый сайт не принимает изображения и не генерирует видео."
      ]
    },
    faqs: [
      ["SpicyBox — сервис для общения с ИИ?", "Нет. Основной сценарий на официальном сайте — создание изображения или короткого видео по фото и шаблону."],
      ["Можно загрузить фото другого человека с его согласия?", "Действующие условия требуют, чтобы на изображении был только сам загрузивший его пользователь. Согласие и соблюдение правила платформы — разные вещи."],
      ["Есть ли бесплатная проба?", "Официальный сайт предлагает пробный вход, но объём и кредиты могут меняться. Проверяйте условия при регистрации."],
      ["Когда удаляются исходники и результаты?", "Политика говорит о хранении до явного удаления пользователем с возможными исключениями. Найдите актуальные настройки удаления."]
    ]
  },
  de: {
    description: "SpicyBox unabhängig erklärt: Kurzvideos aus eigenen Fotos, die Nur-eigene-Bilder-Regel, Vorlagen, Credits, Datenschutz und fünf Alternativen.",
    imageAlt: ["Studioporträt einer fiktiven erwachsenen Figur", "Redaktionelles Porträt einer fiktiven erwachsenen Figur vor rosa Hintergrund"],
    eyebrow: "Vor dem Einsatz eines Bild-zu-Video-Dienstes für Erwachsene",
    tagline: "Aus dem eigenen Foto wird eine kurze bewegte Szene.",
    lead: "SpicyBox erzeugt mit Vorlagen Bilder und kurze Clips aus hochgeladenen Fotos. Laut Nutzungsbedingungen darf auf jedem Upload ausschließlich die hochladende Person selbst zu sehen sein. Prüfe diese Eingabevorgabe, Kosten für weitere Versuche und den Umgang mit den Dateien, bevor du bezahlst.",
    overview: {
      heading: "Bild-zu-Video statt KI-Gespräch",
      paragraphs: [
        "Der typische Ablauf führt über Explore: Vorlage auswählen, ein regelkonformes Foto von dir hochladen und den fertigen Clip prüfen. Ein gelungenes Werbebeispiel sagt wenig über dein Bild aus. Ausschnitt, Licht, Gesichtstreue und Bewegungsfehler gehören zur Bewertung.",
        "Diese Website ist eine unabhängige Redaktion und nicht der Betreiber von SpicyBox. Wir verbinden die offiziellen Regeln mit Fragen zu zulässigen Bildern, Credits, Speicherung und Löschung. Wir nehmen keine Fotos entgegen und empfehlen keine Bilder Dritter."
      ]
    },
    workflow: {
      heading: "Drei Fragen vor dem Rendern",
      lead: "Die Eignung des Ausgangsbilds ist wichtiger als die attraktivste Vorschau.",
      steps: [
        ["Bist nur du auf dem Foto?", "Die Bedingungen verlangen, dass der hochladende Nutzer die einzige abgebildete Person ist. Eine Einwilligung Dritter oder eine Bildlizenz ersetzt diese spezielle Vorgabe nicht."],
        ["Passt der Bildausschnitt zur Vorlage?", "Ein enges Porträt passt nicht automatisch zu einer Ganzkörperbewegung. Vergleiche Perspektive und Licht und entferne Adressen, Ausweise oder andere Personen aus dem Hintergrund."],
        ["Kennst du Kosten und Löschweg?", "Auch ein unbrauchbares Ergebnis kann Credits verbrauchen. Prüfe den aktuellen Bezahlvorgang und suche vor dem Upload die Löschoptionen für Originale, Ergebnisse und Konto."]
      ]
    },
    compare: {
      heading: "Fünf Alternativen für unterschiedliche Vorhaben",
      lead: "Eigene Bilder animieren, fiktive Figuren entwickeln und allgemeine Videos bearbeiten sind verschiedene Aufgaben.",
      cards: [
        ["Promptchan", "Fiktive Figuren und Bilder per Texteingabe erstellen, Stil und Pose verfeinern und anschließend animieren. Inzwischen umfasst das Angebot auch Chat und Sprache."],
        ["OurDream AI", "Eine erfundene Figur über Chat, Stimme, Bild und Video hinweg entwickeln statt einen einzelnen Clip aus einem eigenen Foto zu erstellen."],
        ["Playbox AI", "Ein naher Vorlagen-Konkurrent mit derselben Vorgabe, dass nur die hochladende Person abgebildet sein darf. Vergleiche Katalog, Bewegung, Wiederholungskosten und Löschung."],
        ["Musebox AI", "Bild-zu-Video und Text-zu-Video, Clip-Verlängerung und Figurenwerkzeuge. Rechte an Eingaben und Regeln zur Veröffentlichung separat prüfen."],
        ["Runway", "Breiteres Werkzeug für Videoproduktion und Schnitt mit Moderation von Eingaben und Ausgaben; kein Umweg um Regeln für Erwachsenen-Inhalte."]
      ]
    },
    costs: {
      heading: "Entscheidend ist der Preis pro brauchbarem Clip",
      paragraphs: [
        "Die SpicyBox-Bedingungen schränken Erstattungen für verbrauchte Credits bei unbefriedigenden Ergebnissen stark ein; geltendes Recht bleibt maßgeblich. Ein kostenloser Einstieg zeigt nicht die Kosten mehrerer Wiederholungen. Aktuelle Preise und Bedingungen stehen im Bezahlvorgang.",
        "Wer ein unbedenkliches eigenes Bild verwenden möchte, kann zwei einfache Bewegungen vergleichen und Versuche, Zeit, Credits und tatsächlich nutzbare Clips notieren. Das ist ein Prüfverfahren für Leser, keine von uns behauptete Testwertung."
      ]
    },
    privacy: {
      heading: "Auch der Hintergrund verrät persönliche Daten",
      paragraphs: [
        "Wohnadresse, Namensschild oder eine weitere Person im Hintergrund können identifizierend sein. Die offizielle Datenschutzerklärung nennt Uploads, Ergebnisse, Konto-, Nutzungs- und abgeleitete Daten; Inhalte können bis zur ausdrücklichen Löschung gespeichert bleiben, vorbehaltlich rechtlicher Ausnahmen. Prüfe den aktuellen Löschweg.",
        "Wenn du kein erkennbares Selbstbild online stellen möchtest, musst du dich für einen Vergleich nicht anmelden. Ein textbasiert erschaffener fiktiver Charakter kann besser zu deiner Privatsphäre passen. Diese unabhängige Website nimmt keine Bilder an."
      ]
    },
    faqs: [
      ["Ist SpicyBox ein KI-Chatdienst?", "Nein. Im Mittelpunkt stehen auf der offiziellen Oberfläche Bilder und kurze Clips aus Fotos und Vorlagen."],
      ["Darf ich mit Erlaubnis das Foto einer anderen Person nutzen?", "Nach den aktuellen Bedingungen darf nur die hochladende Person selbst auf dem Bild zu sehen sein. Eine Erlaubnis erfüllt diese Regel nicht."],
      ["Gibt es einen kostenlosen Test?", "Die offizielle Seite zeigt eine Testmöglichkeit; Umfang und Credits können sich ändern. Prüfe die Bedingungen bei der Anmeldung."],
      ["Wann werden Fotos gelöscht?", "Die Datenschutzerklärung beschreibt Aufbewahrung bis zur ausdrücklichen Löschung, mit möglichen Ausnahmen. Prüfe die aktuellen Einstellungen."]
    ]
  },
  fr: {
    description: "Comprendre SpicyBox avant de l'utiliser : photo transformée en courte vidéo, règle du portrait de soi seul, modèles, crédits, confidentialité et alternatives.",
    imageAlt: ["Portrait en studio d'un personnage adulte fictif", "Portrait éditorial d'un personnage adulte fictif sur fond rose"],
    eyebrow: "Avant d'utiliser un outil vidéo réservé aux adultes",
    tagline: "Votre propre photo, puis une courte scène animée.",
    lead: "SpicyBox produit des images et de brèves vidéos à partir d'une photo et d'un modèle. Ses conditions imposent que la personne qui téléverse l'image en soit l'unique sujet. Cette règle, le coût des nouveaux essais et la conservation des fichiers méritent d'être vérifiés avant tout paiement.",
    overview: {
      heading: "Animer une image, pas discuter avec un compagnon IA",
      paragraphs: [
        "Le parcours passe par Explore : choisir un modèle, fournir une photo de soi conforme aux règles, puis examiner le résultat. Une démonstration réussie ne prédit pas le rendu de votre image. Le cadrage, la lumière, la stabilité du visage et les défauts de mouvement comptent.",
        "Ce site éditorial est indépendant de SpicyBox. Nous relions les textes officiels aux choix concrets : quelles images sont admises, comment les crédits sont dépensés, ce qui est conservé et comment supprimer les fichiers. Nous ne recevons aucune photo."
      ]
    },
    workflow: {
      heading: "Trois vérifications avant de lancer la création",
      lead: "La conformité de la photo compte davantage que l'effet le plus séduisant du catalogue.",
      steps: [
        ["Êtes-vous seul sur la photo ?", "Les conditions exigent que l'utilisateur soit la seule personne représentée. L'autorisation d'un tiers ou une licence d'image ne remplace pas cette règle précise."],
        ["Le cadrage convient-il au modèle ?", "Un portrait serré ne correspond pas forcément à un mouvement en pied. Comparez angle et lumière, et écartez adresses, badges ou visages d'autrui à l'arrière-plan."],
        ["Avez-vous trouvé prix et suppression ?", "Un résultat décevant peut tout de même consommer des crédits. Consultez le paiement actuel et repérez la suppression des originaux, des créations et du compte."]
      ]
    },
    compare: {
      heading: "Cinq alternatives, cinq usages distincts",
      lead: "Animer sa propre photo, inventer un personnage et monter une vidéo générale ne répondent pas au même besoin.",
      cards: [
        ["Promptchan", "Créer par texte des personnages et images fictifs, affiner style et pose, puis les animer. Le service propose aussi désormais conversation et voix."],
        ["OurDream AI", "Développer un personnage fictif suivi à travers discussion, voix, images et vidéo, plutôt qu'un seul clip issu d'une photo personnelle."],
        ["Playbox AI", "Concurrent proche fondé sur les modèles et la même règle d'image ne montrant que l'utilisateur. Comparez catalogue, mouvement, coût des essais et suppression."],
        ["Musebox AI", "Associer image-vers-vidéo, texte-vers-vidéo, prolongement de clips et outils de personnage. Vérifiez séparément les droits sur les contenus et leur diffusion."],
        ["Runway", "Production et montage vidéo plus généralistes, avec modération des entrées et des résultats. Ce n'est pas un moyen de contourner les règles sur les contenus adultes."]
      ]
    },
    costs: {
      heading: "Comptez le coût d'une vidéo réellement utilisable",
      paragraphs: [
        "Les conditions de SpicyBox limitent largement le remboursement des crédits consommés quand un résultat déçoit, sous réserve du droit applicable. Une offre d'essai ne révèle pas le prix de plusieurs reprises. Vérifiez tarifs et modalités sur la page de paiement en vigueur.",
        "Si vous choisissez une photo personnelle non sensible, comparez deux mouvements simples et notez durée, tentatives, crédits et clips conservables. C'est une méthode proposée aux lecteurs, pas un classement fondé sur des tests que nous prétendrions avoir réalisés."
      ]
    },
    privacy: {
      heading: "Le décor d'une photo peut aussi vous identifier",
      paragraphs: [
        "Adresse, badge professionnel ou autre visage à l'arrière-plan sont des indices personnels. La politique officielle décrit le traitement des images, créations, données de compte et d'usage ainsi que de données dérivées ; le contenu peut rester jusqu'à suppression explicite, sous réserve d'exceptions légales. Cherchez la procédure actuelle.",
        "Si vous ne voulez pas mettre en ligne un portrait reconnaissable, nul besoin de vous inscrire pour comparer. Un outil qui part d'un personnage imaginaire écrit peut mieux respecter votre limite de confidentialité. Ce site indépendant ne reçoit pas d'images."
      ]
    },
    faqs: [
      ["SpicyBox est-il un service de discussion IA ?", "Non. L'interface officielle se concentre sur des images et des clips courts créés à partir de photos et de modèles."],
      ["Puis-je utiliser la photo d'une personne qui accepte ?", "Les conditions actuelles exigent que seul l'utilisateur qui téléverse l'image y apparaisse. Son accord ne suffit pas à satisfaire cette règle."],
      ["Existe-t-il un essai gratuit ?", "Le site officiel présente une possibilité d'essai, mais ses limites et crédits peuvent évoluer. Vérifiez l'offre lors de l'inscription."],
      ["Quand les photos sont-elles effacées ?", "La politique prévoit une conservation jusqu'à la suppression explicite par l'utilisateur, avec des exceptions possibles. Vérifiez les commandes disponibles."]
    ]
  },
  ar: {
    description: "دليل مستقل لفهم SpicyBox: تحويل صورتك إلى فيديو قصير، شرط ظهور صاحب الصورة وحده، القوالب والرصيد والخصوصية وخمسة بدائل.",
    imageAlt: ["صورة تحريرية في الاستوديو لشخصية خيالية بالغة", "صورة تحريرية لشخصية خيالية بالغة أمام خلفية وردية"],
    eyebrow: "قبل استخدام أداة فيديو مخصصة للبالغين",
    tagline: "من صورتك الشخصية إلى مشهد قصير متحرك.",
    lead: "يستخدم SpicyBox الصورة والقالب لإنشاء صورة جديدة أو مقطع قصير. وتشترط أحكامه أن يكون الشخص الذي يرفع الصورة هو الشخص الوحيد الظاهر فيها. افهم هذا القيد وتكلفة إعادة المحاولة وطريقة حفظ الملفات قبل الدفع.",
    overview: {
      heading: "تحريك الصورة لا الدردشة مع شخصية ذكاء اصطناعي",
      paragraphs: [
        "تبدأ العملية من قسم Explore لاختيار قالب، ثم رفع صورة شخصية تستوفي الشروط ومراجعة النتيجة. المشهد المعروض في الإعلان لا يضمن النتيجة نفسها لصورتك؛ يؤثر إطار الصورة والإضاءة وثبات الوجه وجودة الحركة في المخرجات.",
        "هذا موقع تحريري مستقل وليس الجهة المشغلة لـ SpicyBox. نشرح القواعد الرسمية من خلال قرارات عملية تتعلق بالصورة المسموح بها والرصيد وحفظ الملفات وحذفها. لا نستقبل الصور ولا نشجع على رفع صور أشخاص آخرين."
      ]
    },
    workflow: {
      heading: "ثلاث مراجعات قبل إنشاء المقطع",
      lead: "أهلية الصورة أهم من جاذبية القالب أو عرض التجربة المجانية.",
      steps: [
        ["هل تظهر أنت وحدك؟", "تُلزم الشروط المستخدم بأن يكون الشخص الوحيد في كل صورة يرفعها. موافقة شخص آخر أو ترخيص صورة جاهزة لا يحقق هذا الشرط الخاص."],
        ["هل يناسب القالب إطار الصورة؟", "قد لا تصلح صورة الوجه القريبة لحركة تتطلب ظهور الجسم كاملاً. قارن الزاوية والإضاءة، واحذف العناوين والوثائق ووجوه الآخرين من الخلفية."],
        ["هل عرفت تكلفة المحاولة وطريقة الحذف؟", "قد تُستهلك الأرصدة حتى إن لم تعجبك النتيجة. راجع صفحة الدفع الحالية وابحث عن حذف الصور الأصلية والمخرجات والحساب قبل الرفع."]
      ]
    },
    compare: {
      heading: "خمسة بدائل لأهداف مختلفة",
      lead: "فرّق بين تحريك صورتك، وإنشاء شخصية خيالية، وإنتاج فيديو عام قبل اختيار الأداة.",
      cards: [
        ["Promptchan", "إنشاء شخصية وصورة خياليتين بالنص، ثم تعديل الشكل والوضعية وتحريكهما. تتضمن الخدمة الآن ميزات محادثة وصوت أيضاً."],
        ["OurDream AI", "تطوير شخصية خيالية متصلة عبر المحادثة والصوت والصور والفيديو، بدلاً من معالجة صورة شخصية واحدة."],
        ["Playbox AI", "خيار قريب يعتمد القوالب ويشترط أيضاً أن يظهر رافع الصورة وحده. قارن تنظيم القوالب والحركة وتكلفة الإعادة والحذف."],
        ["Musebox AI", "يجمع تحويل الصورة أو النص إلى فيديو مع تمديد المقاطع وأدوات الشخصيات. تحقق منفصلاً من حقوق المدخلات وشروط النشر."],
        ["Runway", "أدوات أوسع لإنتاج الفيديو وتحريره مع مراجعة للمدخلات والمخرجات، وليس وسيلة للالتفاف على قيود المحتوى المخصص للبالغين."]
      ]
    },
    costs: {
      heading: "احسب كلفة المقطع الذي يمكن استخدامه",
      paragraphs: [
        "تُقيّد شروط SpicyBox استرداد الأرصدة المستعملة عندما لا ترضى عن النتيجة، مع مراعاة القانون المطبق. التجربة الأولية لا تكشف دائماً كلفة تكرار التوليد. تحقق من السعر والأحكام الحالية أثناء الدفع.",
        "إذا قررت استخدام صورة شخصية غير حساسة، جرّب حركتين بسيطتين وسجّل الوقت وعدد المحاولات والأرصدة وعدد المقاطع المقبولة. هذه طريقة مقترحة للقارئ وليست نتيجة اختبار ميداني نزعم أننا أجريناه."
      ]
    },
    privacy: {
      heading: "خلفية الصورة قد تكشف هويتك أيضاً",
      paragraphs: [
        "قد يظهر عنوان أو بطاقة عمل أو وجه شخص آخر في الخلفية. تذكر سياسة الخصوصية الرسمية الصور المرفوعة والنتائج وبيانات الحساب والاستخدام والبيانات المشتقة؛ وقد يبقى المحتوى حتى حذفه صراحةً مع استثناءات قانونية. تحقق من خطوات الحذف الحالية.",
        "إذا لم ترغب في رفع صورة يمكن التعرف عليك منها، فلا حاجة لإنشاء حساب لمجرد المقارنة. قد تكون أداة تبدأ بشخصية خيالية موصوفة بالنص أنسب لخصوصيتك. هذا الموقع المستقل لا يستقبل الصور ولا ينتج مقاطع."
      ]
    },
    faqs: [
      ["هل SpicyBox خدمة دردشة مع شخصية افتراضية؟", "لا؛ يركز الموقع الرسمي على إنشاء الصور والمقاطع القصيرة من الصور والقوالب."],
      ["هل يمكن رفع صورة شخص آخر بموافقته؟", "تشترط الأحكام الحالية أن يكون رافع الصورة هو الوحيد الظاهر فيها. الموافقة وحدها لا تستوفي هذا الشرط."],
      ["هل توجد تجربة مجانية؟", "يشير الموقع الرسمي إلى طريقة للتجربة، لكن حدودها والأرصدة قد تتغير. راجع العرض عند التسجيل."],
      ["متى تُحذف الصور والنتائج؟", "تصف السياسة الاحتفاظ بالمحتوى حتى يحذفه المستخدم صراحةً مع استثناءات محتملة. ابحث عن أدوات الحذف الحالية."]
    ]
  }
};
