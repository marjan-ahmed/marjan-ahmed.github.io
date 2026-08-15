export default {
  hero: {
    hi: "私は{name}です",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "フルスタック・エージェンティックAI",
    headline: "単発ではなく、システムを作る。",
    sub: "17歳、中学2年生からコーディング。スタートアップ、フリーランスのクライアント、そして自分がリリースしたものをインストールした3,700人以上のために、本番アプリとAIエージェントを作っている。",
    cta: {
      primary: "実績を見る",
      copied: "コピーしました",
      copyEmail: "メールをコピー",
    },
    card: {
      role: "フルスタック開発者・エージェンティックAIエンジニア",
      base: "拠点",
      local: "現地時間",
      focus: "フォーカス",
      focusValue: "エージェンティックAIシステム",
      status: "ステータス",
      statusValue: "対応可能",
    },
  },
  proof: {
    title: "実績",
    items: {
      downloads: { label: "PyPIダウンロード数", note: "Gemini Starter Agent、オープンソース" },
      repos: { label: "公開リポジトリ", note: "GitHub上のリリース済みコード" },
      sites: { label: "クライアントサイト", note: "Reintechsでエンドツーエンドに納品" },
      hackathons: { label: "ハッカソン", note: "ファイナリスト、トップ10、2位 — 2024年から" },
      age: { label: "年齢", note: "中学2年生からコーディング" },
    },
  },
  deployments: {
    eyebrow: "実績",
    title: "実際にリリースしたもの",
    lede: "5つのシステム、エンドツーエンド — きっかけとなった摩擦、設計の前提となった制約、そしてそれによって動いたもの。",
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
        friction: "請求書とPOの照合は手作業で1行ずつ — ハッカソンの課題そのものだったボトルネック。",
        constraint: "請求書はスキャンや写真として届き、フォーマットも不揃い — クリーンなテキスト入力もなく、モデルの抽出精度を評価する正解データもない。",
        system: "LandingAI ADEがスキャンされたPDFから構造化された明細を抽出し、Geminiがそれを正規化、OpenAI Agents SDKのエージェントが請求書と発注書をマッチング — マッチングだけでは解決できない例外はStreamlitのレビュー層で対応。",
      },
      textbook: {
        friction: "ドキュメント形式のコース内容で、質問をしても実際のカリキュラムに基づいた答えを得る手段がなかった。",
        constraint: "ホスティング予算ゼロ、1人でdocs・auth・RAGという3つの独立したサービスを3つの異なるプラットフォームで構築。",
        system: "GitHub Pages上のDocusaurusフロントエンド、Express + Better Authサービス、CohereのエンベディングをQdrantで使うRailway上のFastAPI RAGバックエンド — 3つのサービス、3つのプラットフォームを1人で維持。",
      },
      vault: {
        friction: "対応すべきシグナル — メール、WhatsApp、ファイルシステムの変更 — が複数のチャネルに散らばり、確認して承認する一元的な場所がなかった。",
        constraint: "自分に代わって書き込みを行う自動化には、実際に何かに触れる前に人間の承認ステップが必要 — 例外なし。",
        system: "シグナルウォッチャーがカスタムMCPサーバーに情報を送り、Claude Codeが承認ゲートに対して実行、すべてのアクションはObsidianボールトに読みやすい監査証跡として記録される。",
      },
      "gemini-starter": {
        friction: "新しいエージェントプロジェクトはどれも、実際のエージェントロジックを1行書く前に同じ30分のプロバイダー定型作業から始まっていた。",
        constraint: "GeminiとOpenAIの両方に対応しつつ、プロバイダーを切り替えるユーザーにエージェントコードを書き直させない必要があった。",
        system: "1つのCLIコマンドで動作するエージェントをスキャフォールド、その下でプロバイダーシムがGeminiとOpenAIのAgents SDKを切り替え、1分足らずで動くエージェントが手に入る。",
      },
      hekto: {
        friction: "家具のECプラットフォーム一式 — カタログ、カート、チェックアウト、配送 — を何もない状態から作るハッカソンの課題。",
        constraint: "6日間、1人、最後にGIAICのデモデイが待っている — ドキュメント化されていない判断やテストされていないチェックアウトフローの余地はない。",
        system: "カート状態にReduxを使うNext.js 14のストアフロント、ヘッドレスカタログにSanity、認証にClerk、配送にShipEngine — ビジネスゴールからデプロイまで6つのドキュメント化されたフェーズで構築し、2つの構造化されたCSVレポートに18件のQAテストケースを記録、公開前にCore Web Vitalsの計測も実施。",
      },
    },
  },
  capabilities: {
    eyebrow: "できること",
    title: "自分が役立つ領域",
    lede: "言語ではなく、解決する問題ごとにグループ化 — 実際の仕事の進み方に沿って読めるように。",
    items: {
      ship: {
        title: "インターフェースをリリースする",
        body: "ユーザーが実際に触れる層 — 高速でアクセシブル、どのプロジェクトでも同じスタックで構築し、使い捨てにしない。",
      },
      reason: {
        title: "データを元に推論する",
        body: "エージェント、検索、マルチエージェントオーケストレーション — システムの中で応答するだけでなく判断する部分。",
      },
      serve: {
        title: "確実に提供する",
        body: "デモが終わった後も動き続けるAPI、認証、ストレージ。",
      },
      run: {
        title: "本番で運用する",
        body: "予算ゼロと実際の稼働率のために選んだコンテナ、CI、ホスティング — 履歴書のための選択ではない。",
      },
    },
  },
  principles: {
    eyebrow: "METHOD",
    title: "問題を任されたときの働き方",
    lede: "5つの習慣、それぞれに裏付けがある — 証拠のない原則はただのスローガン。",
    receipt: "裏付け：",
    closer: "上記はすべて検証可能。それが狙い。",
    items: {
      friction: {
        title: "摩擦から始める",
        body: "ポートフォリオ映えする問題ではなく、本物の摩擦がある問題を選ぶ — そのうえで解決策の作り方を見つける。",
      },
      constraint: {
        title: "制約こそがブリーフ",
        body: "ライブタイマー付きの3時間ビルドが、OpenAI Agents SDKのソースコードを、使うだけでなく機能をコントリビュートできるほど深く読むきっかけになった。",
      },
      ownership: {
        title: "エンドツーエンドで責任を持つ",
        body: "5〜7件のクライアントサイトを1人で — CMSからチェックアウト、クライアントが実際に読むレポートまで。楽しくない部分も他人に任せない。",
      },
      systems: {
        title: "システムで考える",
        body: "3つのサービス、3つのプラットフォーム、1人 — 本物のシステムはデモではなく、一部が壊れたときに何が起きるかで評価されるから。",
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
    lede: "2年間、1つのタイムライン — 新しい順。",
    kinds: {
      won: "優勝",
      shipped: "リリース",
      published: "公開",
      joined: "参加",
      started: "開始",
    },
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
    contact: "連絡先",
  },
  about: {
    title: "自己紹介",
    summary: "17歳、中学2年生からコーディング。本番環境のWebアプリとAIエージェントを開発し、実際の問題を解決している。NaxaswareではMERNスタック全体で本番機能をリリース。Reintechsでは5〜7件のクライアントサイトを構築し、Next.js + ヘッドレスWooCommerceストアフロントを実現。CLIオープンソースツール（Gemini Starter Agent）でPyPIダウンロード3,723超。LandingAI Financial Hackathon向けにDocSamajh AIを開発、手動作業を70%削減。現在、RAGチャットボットとマルチエージェントシステムを備えたAIネイティブ学習プラットフォームを構築中。システム思考で一発のビルドではなく、持続可能な仕組みを考える。",
  },
  work: {
    title: "職歴",
    present: "現在",
    items: {
      naxasware: {
        title: "フルスタック開発者（インターン）",
        description: "MERNスタック全体で本番機能をリリース。エンドツーエンドのデバッグ、リモートチームで期日通りに納品。",
      },
      reintechs: {
        title: "Web開発者（フリーランス）",
        description: "5〜7件のクライアントサイトを構築・デプロイ。Next.js + ヘッドレスWooCommerce。経営陣から感謝状を授与。",
      },
    },
  },
  education: {
    title: "学歴",
    items: {
      giaic: {
        degree: "エージェンティックAI＆クラウドエンジニアリング - エージェンシーの技術基盤を構築中",
      },
      nasra: {
        degree: "マトリキュレーション（AKU-EB Board）- 本番システム構築とハッカソン優勝しながら学校を卒業",
      },
    },
  },
  skills: {
    title: "技術スキル",
  },
  favouriteTools: {
    title: "お気に入りツール",
  },
  certifications: {
    title: "資格・受賞歴",
  },
  volunteering: {
    title: "ボランティア",
  },
  contact: {
    title: "お問い合わせ",
    letsConnect: "つながりましょう",
    description: "プロジェクトのアイデアがある方、一緒に働きたい方は{email}または{linkedin}でご連絡ください。現在、契約制の仕事に応募可能です。",
    emailLink: "メール",
    linkedinLink: "LinkedIn",
  },
  hackathons: {
    title: "ハッカソン＆受賞歴",
    tagline: "問題が先、コードは後",
    description: "2024年から6回のハッカソン参加 — Google Build with AIでトップ10、Hacktoberfestで2位、IBM watsonxでファイナリスト。本質的な摩擦がある問題を選んで、解決策をbuildする。",
    items: {
      landingai: {
        description: "DocSamajh AI：マルチエージェントによる請求書-Pオーマッチング、精度85-90%。応募のみ、入賞なし。",
      },
      hacktoberfest: {
        description: "2位。3時間のハッカソン、最後の1時間で全てを構築。",
      },
      gdg: {
        description: "トップ10ファイナリストチーム。Hunar Bazaar：パキスタン農村女性向けフリーランスプラットフォーム。",
      },
      ibm: {
        description: "ファイナリスト。マルチエージェントオーケストレーションシステム。",
      },
      nasa: {
        description: "Kalkia：44年分のNASAデータを使用した気象確率チェッカー。",
      },
      innovista: {
        description: "ウルドゥー語、シンド語、パンジャブ語、パシュトー語でAI応答するEdTechアプリ。初ハッカソン。",
      },
    },
  },
  projects: {
    title: "プロジェクト",
    tagline: "注目の作品",
    description: "本番アプリ、オープンソースツール、AIシステム - 実際にリリースしたもの。",
    imageAlt: "{title} 画像",
    openLink: "{title} を開く",
    items: {
      textbook: {
        description: "RAGチャットボットを組み込んだAIネイティブ学習プラットフォーム。3サービス：Docusaurus、FastAPI RAG、Express認証。",
      },
      aiVault: {
        description: "ヒューマンインザループ自動化。Obsidianボールト + Claude Code + MCP。承認制アクション。",
      },
      geminiAgent: {
        description: "AIエージェントプロジェクト用オープンソースCLI。OpenAI Agents SDK + マルチプロバイダー。PyPI 3,723+ダウンロード。",
      },
      docSamajh: {
        description: "LandingAI Financial Hackathon向けに開発。LandingAI ADE、Gemini、OpenAI Agents SDKによる請求書-P調和。",
      },
      shooter: {
        description: "ブラウザベースシューティングゲーム。Canvasレンダリング、衝突検出、リアルタイム物理学。",
      },
    },
  },
  common: {
    notAvailable: "N/A",
    pageNotFound: "ページが見つかりません",
    pageNotFoundDescription: "お探しのページは存在しないか、移動した可能性があります。",
    goToHome: "ホームに戻る",
    selectLanguage: "言語を選択",
  },
} as const;
