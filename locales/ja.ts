export default {
  hero: {
    hi: "私は{name}です",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "ビルダー・エージェンティックAI",
    headline: "問題をくれ。システムで返す。",
    sub: "17歳、中学2年生からコーディング。頭の中では常にタブが6つくらい開きっぱなし。それでもちゃんと形にする。スタートアップ、フリーランスのクライアント、そして自分がリリースしたものをインストールした3,700人以上のために、本番アプリとAIエージェントを作っている。一度始めたら、最後までやり遂げる。何があっても。",
    cta: {
      primary: "実績を見る",
      copied: "コピーしました",
      copyEmail: "メールをコピー",
    },
    card: {
      role: "ビルダー — エージェンティックAIシステム",
      base: "拠点",
      local: "現地時間",
      focus: "フォーカス",
      focusValue: "エージェンティックAIシステム",
      status: "ステータス",
      statusValue: "パートナー募集中",
    },
  },
  proof: {
    title: "実績",
    items: {
      downloads: { label: "PyPIダウンロード数", note: "Gemini Starter Agent、オープンソース" },
      repos: { label: "公開リポジトリ", note: "GitHub上のリリース済みコード" },
      sites: { label: "クライアントサイト", note: "Reintechsでエンドツーエンドに納品" },
      hackathons: { label: "ハッカソン", note: "ファイナリスト、トップ10、2位、2024年から" },
      age: { label: "年齢", note: "中学2年生からコーディング" },
    },
  },
  deployments: {
    eyebrow: "実績",
    title: "実際にリリースしたもの",
    lede: "5つのシステム、エンドツーエンド。きっかけとなった摩擦、設計の前提となった制約、そしてそれによって動いたもの。",
    origin: {
      self: "自主開発",
      hackathon: "ハッカソン作品",
    },
    beats: {
      friction: "摩擦",
      constraint: "制約",
      system: "システム",
      impact: "インパクト",
      stack: "スタック",
    },
    status: {
      won: "優勝",
      live: "稼働中",
      shipped: "リリース済み",
    },
    architecture: "アーキテクチャ",
    collapse: "閉じる",
    expand: "詳細を見る",
    items: {
      docsamajh: {
        friction: "請求書とPOの照合は手作業で1行ずつ、ハッカソンの課題そのものだったボトルネック。",
        constraint: "請求書はスキャンや写真として届き、フォーマットも不揃い。クリーンなテキスト入力もなく、モデルの抽出精度を評価する正解データもない。",
        system: "LandingAI ADEがスキャンされたPDFから構造化された明細を抽出し、Geminiがそれを正規化、OpenAI Agents SDKのエージェントが請求書と発注書をマッチング。マッチングだけでは解決できない例外はStreamlitのレビュー層で対応。",
      },
      textbook: {
        friction: "ドキュメント形式のコース内容で、質問をしても実際のカリキュラムに基づいた答えを得る手段がなかった。",
        constraint: "ホスティング予算ゼロ、1人でdocs・auth・RAGという3つの独立したサービスを3つの異なるプラットフォームで構築。",
        system: "GitHub Pages上のDocusaurusフロントエンド、Express + Better Authサービス、CohereのエンベディングをQdrantで使うRailway上のFastAPI RAGバックエンド。3つのサービス、3つのプラットフォームを1人で維持。",
      },
      vault: {
        friction: "対応すべきシグナル（メール、WhatsApp、ファイルシステムの変更）が複数のチャネルに散らばり、確認して承認する一元的な場所がなかった。",
        constraint: "自分に代わって書き込みを行う自動化には、実際に何かに触れる前に人間の承認ステップが必要。例外なし。",
        system: "シグナルウォッチャーがカスタムMCPサーバーに情報を送り、Claude Codeが承認ゲートに対して実行、すべてのアクションはObsidianボールトに読みやすい監査証跡として記録される。",
      },
      "gemini-starter": {
        friction: "新しいエージェントプロジェクトはどれも、実際のエージェントロジックを1行書く前に同じ30分のプロバイダー定型作業から始まっていた。",
        constraint: "GeminiとOpenAIの両方に対応しつつ、プロバイダーを切り替えるユーザーにエージェントコードを書き直させない必要があった。",
        system: "1つのCLIコマンドで動作するエージェントをスキャフォールド、その下でプロバイダーシムがGeminiとOpenAIのAgents SDKを切り替え、1分足らずで動くエージェントが手に入る。",
      },
      hekto: {
        friction: "家具のECプラットフォーム一式（カタログ、カート、チェックアウト、配送）を何もない状態から作るハッカソンの課題。",
        constraint: "6日間、1人、最後にGIAICのデモデイが待っている。ドキュメント化されていない判断やテストされていないチェックアウトフローの余地はない。",
        system: "カート状態にReduxを使うNext.js 14のストアフロント、ヘッドレスカタログにSanity、認証にClerk、配送にShipEngine。ビジネスゴールからデプロイまで6つのドキュメント化されたフェーズで構築し、2つの構造化されたCSVレポートに18件のQAテストケースを記録、公開前にCore Web Vitalsの計測も実施。",
      },
    },
  },
  capabilities: {
    eyebrow: "できること",
    title: "私の動き方",
    lede: "言語ではなく、解決する問題ごとにグループ化。実際の仕事の進み方に沿って読めるように。",
    items: {
      ship: {
        title: "インターフェースをリリースする",
        body: "ユーザーが実際に触れる層: 高速でアクセシブル、どのプロジェクトでも同じスタックで構築し、使い捨てにしない。",
      },
      reason: {
        title: "データを元に推論する",
        body: "エージェント、検索、マルチエージェントオーケストレーション。システムの中で応答するだけでなく判断する部分。",
      },
      serve: {
        title: "確実に提供する",
        body: "デモが終わった後も動き続けるAPI、認証、ストレージ。",
      },
      run: {
        title: "本番で運用する",
        body: "予算ゼロと実際の稼働率のために選んだコンテナ、CI、ホスティング。履歴書のための選択ではない。",
      },
    },
  },
  principles: {
    eyebrow: "METHOD",
    title: "問題を任されたときの働き方",
    lede: "5つの習慣、それぞれに裏付けがある。証拠のない原則はただのスローガン。",
    receipt: "裏付け：",
    closer: "上記はすべて検証可能。それが狙い。鵜呑みにするより、抜けている部分を自分の目で確かめてほしい。",
    items: {
      friction: {
        title: "摩擦から始める",
        body: "ポートフォリオ映えする問題ではなく、本物の摩擦がある問題を選ぶ。そのうえで解決策の作り方を見つける。",
      },
      constraint: {
        title: "制約こそがブリーフ",
        body: "ライブタイマー付きの3時間ビルドが、OpenAI Agents SDKのソースコードを、使うだけでなく機能をコントリビュートできるほど深く読むきっかけになった。",
      },
      ownership: {
        title: "エンドツーエンドで責任を持つ",
        body: "5〜7件のクライアントサイトを1人で。CMSからチェックアウト、クライアントが実際に読むレポートまで。楽しくない部分も他人に任せない。",
      },
      systems: {
        title: "システムで考える",
        body: "3つのサービス、3つのプラットフォーム、1人。本物のシステムはデモではなく、一部が壊れたときに何が起きるかで評価されるから。",
      },
      measure: {
        title: "検証可能にする",
        body: "3,723件以上のPyPIダウンロード、「開発者に使われている」ではなく。このサイトに数字があれば、それは自分で確認できる数字。",
      },
    },
  },
  shipLog: {
    eyebrow: "LOG",
    title: "リリースしてきたすべて",
    lede: "2年間、1つのタイムライン。新しい順。",
    kinds: {
      won: "優勝",
      shipped: "リリース",
      published: "公開",
      joined: "参加",
      started: "開始",
      attended: "出席",
    },
    fieldNoteLabel: "現場メモ",
    entries: {
      khinext: {
        title: "KhiNext テックサミット、カラチ",
        detail: "「AI、コマースと未来の消費者」パネル。",
      },
      mlsa: {
        title: "マイクロソフト学生アンバサダー、カラチ",
        detail: "イベント運営チーム。",
      },
      naxasware: {
        title: "Naxasware、フルスタック開発者",
        detail: "創業チームと一緒にプロダクション機能をリリース。",
      },
      landingai: {
        title: "AI Financial ハッカソン、提出済み",
        detail: "LandingAI、DocSamajh AI。",
      },
      devfest: {
        title: "DevFest カラチ、GDG Kolachi 10周年",
        detail: "NASTPでのコミュニティイベント。",
      },
      ibm: {
        title: "Agentic AI ハッカソン、ファイナリスト",
        detail: "IBM watsonx、lablab.ai。",
      },
      hacktoberfest: {
        title: "Cloudways x DigitalOcean Hacktoberfest、2位",
        detail: "3時間のビルド。OpenAI Agents SDKに機能をコントリビュート。",
        note: "チームリーダー。2時間経っても何も動いていなかった。SDKにブリーフに必要なものがなかった。ギャップを見つけ、回避策を構築し、最終1時間までに動作するデモがなかった。2位、審査員のAaqib Sayedの隣に立った。",
      },
      nasa: {
        title: "NASA Space Apps、Kalkia",
        detail: "44年間のNASAデータから天気の確率を算出。",
        note: "初めて何かのアンバサダーになる。Googleフォームを作り、学校に投稿し、16件の回答を獲得。その後、チャレンジのために自分でKalkiaを構築：44年間のNASAデータからの天気確率。",
      },
      pypi: {
        title: "Gemini Starter Agent、PyPI",
        detail: "3,723以上のダウンロード。",
      },
      reintechs: {
        title: "Reintechs、Web開発者（フリーランス）",
        detail: "5ヶ月で5〜7つのプロダクションクライアントサイト。",
      },
      gdg: {
        title: "Google Build with AI、トップ10",
        detail: "GDG Kolachi、Hunar Bazaar。",
        note: "トップ10、GDG Kolachi。Hunar Bazaarを構築、パキスタンの田舎の女性向けのフリーランスプラットフォーム、AI生成のギグ説明付き。",
      },
      innovista: {
        title: "National Agentic AI ハッカソン、Innovista Indus",
        detail: "初めてのハッカソン。ウルドゥー語、シンドゥー語、パンジャブ語、パシュトー語でのEdTech。",
        note: "初めてのハッカソン。アイデアは正しかった、ウルドゥー語、シンドゥー語、パンジャブ語、パシュトー語でのAI応答だが、今の kadar速さや組織力はなかった。それ以来、そのアイデアに追いついてきた。",
      },
      giaic: {
        title: "GIAIC、Agentic AI とクラウドエンジニアリング",
        detail: "中学卒業と並行して。",
      },
    },
  },
  roadmap: {
    eyebrow: "ロードマップ",
    body: "ロードマップの一番上にあるのは、フォワード・デプロイド・エンジニア・エージェント・ファクトリー（FDE-AF）モデルによるAIネイティブ企業を作ること。実際の企業にエージェントを届ける、デモじゃない。野心的なスタートアップとのパートナーシップが、その始まりだ。",
    disclaimer: "このページの他の部分と違って、これは証拠じゃない。方向性だ。",
  },
  palette: {
    label: "コマンドパレット",
    placeholder: "セクション、連絡先、設定を検索…",
    close: "閉じる",
    empty: "「{query}」に一致する結果はありません",
    groups: {
      jump: "移動",
      contact: "連絡先",
      settings: "設定",
      language: "言語",
    },
    actions: {
      copyEmail: "メールをコピー",
      copied: "コピーしました",
      github: "GitHubを開く",
      linkedin: "LinkedInを開く",
      light: "ライトモードに切り替え",
      dark: "ダークモードに切り替え",
    },
    legend: {
      move: "移動",
      select: "選択",
    },
  },
  nav: {
    method: "METHOD",
    deployments: "実績",
    capabilities: "できること",
    log: "LOG",
    roadmap: "ロードマップ",
    contact: "連絡先",
  },
  contact: {
    title: "お問い合わせ",
    letsConnect: "問題を持ってきて",
    description: "AIスタートアップで、どこの国でも構わないから、システムをスケールアップまで責任を持って任せられる長期的なパートナーを探しているなら、それが自分の探しているものだ。肩書きじゃない。{email}か{linkedin}で連絡を。",
    emailLink: "メール",
    linkedinLink: "LinkedIn",
  },
  common: {
    notAvailable: "N/A",
    pageNotFound: "ページが見つかりません",
    pageNotFoundDescription: "お探しのページは存在しないか、移動した可能性があります。",
    goToHome: "ホームに戻る",
    selectLanguage: "言語を選択",
  },
} as const;
