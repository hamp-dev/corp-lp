import Image from "next/image";

const operations = [
  {
    no: "01",
    title: "複数の参加枠",
    text: "一般参加、DJ・VJ、出演者、スタッフ。最大30の枠ごとに説明・定員・招待制を設定できます。",
  },
  {
    no: "02",
    title: "招待URL",
    text: "招待枠のURLを発行。誰が受け取ったか、参加したかを一覧で確認できます。",
  },
  {
    no: "03",
    title: "参加者への連絡",
    text: "参加者全員、または参加枠ごとに、アプリ内・メール・プッシュ通知で一斉連絡できます。",
  },
  {
    no: "04",
    title: "連絡先の登録",
    text: "参加時に確認済みメールアドレスの登録を必須化。閲覧できる運営権限も分けられます。",
  },
  {
    no: "05",
    title: "締切・受付管理",
    text: "イベント全体の受付締切日時を設定。現在の参加数に合わせ、必要な枠だけを締める操作もできます。",
  },
  {
    no: "06",
    title: "イベントアンケート",
    text: "選択式、自由記述、評価式に対応。回答期限や匿名回答、参加枠別の集計も設定できます。",
  },
  {
    no: "07",
    title: "複数管理者・権限",
    text: "スタッフを招待し、編集・閲覧・個人情報・参加者管理・通知送信などの権限を分担できます。",
  },
  {
    no: "08",
    title: "専用タイムライン",
    text: "イベント告知も参加者の投稿もhamp内に。画像、返信、メンション、ハッシュタグにも対応します。",
  },
];

const scenes = [
  {
    index: "A",
    title: "DJイベント / アニクラ",
    body: "DJ・VJ・一般来場を別枠に。出演枠だけ締めて、来場者の受付は続ける運用にも。",
    tags: ["DJ / VJ枠", "一般参加", "出演者リンク"],
  },
  {
    index: "B",
    title: "クラブイベント",
    body: "一般・ゲスト・スタッフ・招待枠をひとつの名簿へ。直前変更は対象の枠だけに連絡。",
    tags: ["招待URL", "連絡先", "共同管理"],
  },
  {
    index: "C",
    title: "音楽ライブ",
    body: "出演者、タイムテーブル、会場案内を一枚に。終演後はプロフィールや作品へつなげます。",
    tags: ["告知LP", "アンケート", "作品情報"],
  },
];

const faqs = [
  {
    q: "次のイベント1件だけでも使えますか？",
    a: "はい。hampにログインしたら、イベントページと参加枠を設定して、そのまま募集を始められます。まずは次に開催する1件から使えます。",
  },
  {
    q: "参加者はXアカウントが必要ですか？",
    a: "X（Twitter）に加えてGoogleログインにも対応しています。Xアカウントを持たない出演者や参加者も、自分のアカウントで参加登録できます。",
  },
  {
    q: "一般、出演者、スタッフなどを分けて募集できますか？",
    a: "はい。複数の参加枠を作成し、枠ごとに説明・定員・招待制・表示順などを設定できます。イベント全体の受付締切日時も設定できます。",
  },
  {
    q: "参加者への連絡はどのように行いますか？",
    a: "参加者全員、または参加枠ごとに、hamp内・メール・プッシュ通知でメッセージを送れます。確認済みメールアドレスを参加時に登録してもらう設定も可能です。",
  },
  {
    q: "複数の主催者やスタッフで管理できますか？",
    a: "できます。オーナー、編集、閲覧の役割に加え、個人情報閲覧、参加者編集、通知送信などの権限を分けて共同運営できます。",
  },
  {
    q: "有料チケットの販売や入場用QRには対応していますか？",
    a: "現在、hampには有料チケットの販売・決済・入場用QR機能はありません。チケット機能は将来的な提供を予定していますが、それまでは使い慣れたプレイガイドをご利用ください。",
  },
  {
    q: "どこからイベントを作れますか？",
    a: "hampのイベント主催者ページから作れます。XまたはGoogleでログインすると、イベント作成を始められます。",
  },
];

function MediaSlot({
  label,
  note,
  className = "",
  src,
  alt,
  fit = "contain",
  position = "center",
  tone = "dark",
  sizes = "(max-width: 820px) 100vw, 50vw",
}: {
  label: string;
  note: string;
  className?: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  position?: string;
  tone?: "dark" | "light";
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`media-slot has-image image-${fit} image-${tone} ${className}`}>
        <div className="media-image-stage">
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes={sizes}
            style={{ objectFit: fit, objectPosition: position }}
          />
        </div>
        <i className="corner corner-tl" aria-hidden="true" />
        <i className="corner corner-br" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`media-slot ${className}`} role="img" aria-label={`${label}の画像差し替え枠`}>
      <span className="media-slot-label">{label}</span>
      <small>{note}</small>
      <i className="corner corner-tl" aria-hidden="true" />
      <i className="corner corner-br" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="hamp events トップ">
          <Image className="brand-logo" src="/logo.svg" alt="hamp" width={300} height={104} priority />
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#switch">こんなときに</a>
          <a href="#features">できること</a>
          <a href="#artists">イベントの先へ</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="https://hamp.ai/organizer" target="_blank" rel="noreferrer">
          イベントを作る <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <h1>
            <span className="hero-line">DJもゲストも</span>
            <span className="hero-line">スタッフも</span>
            <em className="hero-line">イベントの受付は</em>
            <em className="hero-line">ひとつに。</em>
          </h1>
          <p className="hero-lead">
            <span>告知ページを作り、枠ごとに参加を募集。</span>
            <span>招待、連絡、アンケートまで、hampひとつで回せます。</span>
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="https://hamp.ai/organizer" target="_blank" rel="noreferrer">
              イベント募集を作る <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#features">
              できることを見る <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="visual-accent accent-one" aria-hidden="true" />
          <div className="visual-accent accent-two" aria-hidden="true" />
          <MediaSlot
            label="MAIN VISUAL"
            note="DJ BOOTH"
            className="hero-media"
            src="/660152_m.jpg"
            alt="DJブースのメインビジュアル"
            fit="cover"
            position="51% 50%"
            sizes="(max-width: 1120px) 84vw, 42vw"
          />
        </div>
      </section>

      <section className="signal-bar" aria-label="主な機能">
        <div className="signal-label">募集から連絡まで</div>
        <div className="signal-track">
          <span>簡易LP</span><i />
          <span>参加募集</span><i />
          <span>複数枠</span><i />
          <span>招待</span><i />
          <span>一斉連絡</span><i />
          <span>アンケート</span><i />
          <span>複数管理者</span>
        </div>
      </section>

      <section className="research section-shell" id="switch">
        <div className="section-intro compact">
          <p className="section-kicker">01 / こんなときに</p>
          <h2>
            <span className="heading-line">告知はX、受付はフォーム、連絡はDM。</span>
            <span className="heading-line">いくつものサービスをまたいでいませんか？</span>
          </h2>
        </div>
        <div className="research-grid">
          <article className="research-card">
            <div className="card-meta"><span>参加者への連絡</span><b>01</b></div>
            <h3>参加表明はここ、<br />連絡はDM</h3>
            <p>誰に何を伝えたか。開催が近づくほど、DMをさかのぼる時間が増えていく。</p>
            <span className="card-outcome">参加者へまとめて連絡</span>
          </article>
          <article className="research-card featured">
            <div className="card-meta"><span>枠と定員</span><b>02</b></div>
            <h3>DJ、VJ、一般を<br />分けて受け付けたい</h3>
            <p>出演枠だけ締めたい。ゲストだけ招待したい。本文の注意書きだけでは管理しきれない。</p>
            <span className="card-outcome">枠ごとに定員・招待を設定</span>
          </article>
          <article className="research-card">
            <div className="card-meta"><span>スタッフとの分担</span><b>03</b></div>
            <h3>複数人で主催していても、<br />対応できるのは一人だけ</h3>
            <p>名簿や連絡先を共有できず、ページ更新や問い合わせ対応を分担しにくい。</p>
            <span className="card-outcome">必要な権限だけ渡して分担</span>
          </article>
        </div>
      </section>

      <section className="inherit section-shell">
        <div className="section-intro compact">
          <p className="section-kicker">02 / まずはここから</p>
          <h2>
            <span className="heading-line">イベントページを作ったら、</span>
            <span className="heading-line">URLをシェアして募集開始。</span>
          </h2>
        </div>
        <div className="inherit-grid">
          <article>
            <span className="big-number">01</span>
            <p className="mini-label">イベントページ</p>
            <h3>告知を一枚にまとめる</h3>
            <p>フライヤー、出演者、タイムテーブル、会場案内、注意事項。必要な情報を一枚のページにまとめられます。</p>
          </article>
          <article>
            <span className="big-number">02</span>
            <p className="mini-label">参加受付</p>
            <h3>参加を受け付ける</h3>
            <p>イベントページから参加、変更、キャンセル。満員や受付終了もその場で分かります。</p>
          </article>
          <article>
            <span className="big-number">03</span>
            <p className="mini-label">ログイン</p>
            <h3>XでもGoogleでも</h3>
            <p>XかGoogleでログイン。Xアカウントを持っていない出演者や参加者も、自分で登録できます。</p>
          </article>
        </div>
        <div className="inherit-arrow" aria-hidden="true">
          <span>さらに</span><i>↓</i>
        </div>
      </section>

      <section className="operations section-shell" id="features">
        <div className="section-intro split">
          <div>
            <p className="section-kicker">03 / 募集と運営</p>
            <h2>
              <span className="heading-line">募集から当日まで</span>
              <em className="heading-line">hampで回せる。</em>
            </h2>
          </div>
          <p>
            誰を何人募集するか。誰に招待を送るか。どのスタッフが連絡するか。
            イベントごとのやり方に合わせて設定できます。
          </p>
        </div>

        <div className="feature-showcase">
          <div className="showcase-copy">
            <span className="showcase-index">参加枠</span>
            <h3>
              <span className="heading-line">DJ・VJ・一般。</span>
              <span className="heading-line">枠ごとに募集。</span>
            </h3>
            <p>
              最大30の参加枠を作り、枠ごとに説明、定員、無制限、招待制を設定。
              DJ枠が埋まっても、来場者枠の募集はそのまま続けられます。
            </p>
            <ul>
              <li>一般／出演者／スタッフなど役割別に募集</li>
              <li>招待URLの発行・無効化・状態管理</li>
              <li>参加者一覧の公開範囲も選択</li>
            </ul>
          </div>
          <MediaSlot
            label="FEATURE SCREEN"
            note="EVENT MANAGEMENT"
            className="feature-media"
            src="/sozai2.png"
            alt="hampのイベント管理画面"
            fit="contain"
            tone="dark"
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </div>

        <div className="operation-grid">
          {operations.slice(1).map((item) => (
            <article className="operation-card" key={item.no}>
              <div className="operation-top">
                <span>{item.no}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flow-section">
        <div className="section-shell">
          <div className="section-intro split">
            <div>
              <p className="section-kicker">当日までの流れ</p>
              <h2>ページ公開から、<br />イベント後まで。</h2>
            </div>
            <p>募集、招待、連絡。イベント後は出演者のプロフィールや作品も、同じアカウントから見てもらえます。</p>
          </div>
          <ol className="flow-list">
            <li><span>01</span><strong>ページを公開</strong><small>出演者・会場・注意事項</small></li>
            <li><span>02</span><strong>枠別に募集</strong><small>X / Googleで参加</small></li>
            <li><span>03</span><strong>招待・名簿管理</strong><small>必要な連絡先も登録</small></li>
            <li><span>04</span><strong>対象者へ連絡</strong><small>メール / PUSH / hamp</small></li>
            <li><span>05</span><strong>出演者を知る</strong><small>プロフィール / 作品 / 投稿</small></li>
          </ol>
        </div>
      </section>

      <section className="artists section-shell" id="artists">
        <div className="artists-copy">
          <p className="section-kicker">04 / 終演後も</p>
          <h2>気になった出演者を、<br /><em>あとから見つけられる。</em></h2>
          <p>
            出演者本人のプロフィール、グループ（サークル）ページ、作品情報をhampに。
            来場者が気になったアーティストを知り、イベント後も投稿や作品へたどれる導線をつくります。
          </p>
        </div>
        <div className="artist-media-grid">
          <MediaSlot
            label="ARTIST PROFILE"
            note="PROFILE SCREEN"
            className="artist-media portrait"
            src="/sozai3.png"
            alt="hampのアーティストプロフィール画面"
            fit="contain"
            tone="light"
            sizes="(max-width: 820px) 50vw, 24vw"
          />
          <MediaSlot
            label="GROUP PAGE"
            note="GROUP SCREEN"
            className="artist-media portrait offset"
            src="/sozai4.png"
            alt="hampのグループページ"
            fit="contain"
            tone="light"
            sizes="(max-width: 820px) 50vw, 24vw"
          />
          <MediaSlot
            label="WORKS / TIMELINE"
            note="TIMELINE SCREEN"
            className="artist-media wide"
            src="/sozai5.png"
            alt="hampのイベントタイムライン画面"
            fit="contain"
            tone="dark"
            sizes="(max-width: 820px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="scenes section-shell" id="scenes">
        <div className="section-intro split">
          <div>
            <p className="section-kicker">05 / イベント別</p>
            <h2>
              <span className="heading-line">イベントごとに</span>
              <span className="heading-line">必要な枠で募集。</span>
            </h2>
          </div>
          <p>アニクラ、クラブイベント、音楽ライブ。それぞれ必要な枠と連絡方法で使えます。</p>
        </div>
        <div className="scene-grid">
          {scenes.map((scene) => (
            <article key={scene.index}>
              <div className="scene-head"><span>{scene.index}</span></div>
              <h3>{scene.title}</h3>
              <p>{scene.body}</p>
              <ul>{scene.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="comparison section-shell" id="compare">
        <div className="section-intro compact">
          <p className="section-kicker">06 / まとめると</p>
          <h2>告知、受付、連絡、名簿。<br />バラバラだった作業をひとつに。</h2>
        </div>
        <div className="comparison-table" role="table" aria-label="従来運用とhampの比較">
          <div className="comparison-row head" role="row">
            <div role="columnheader">運営場面</div>
            <div role="columnheader">いまの運用</div>
            <div role="columnheader">hamp</div>
          </div>
          {[
            ["参加導線", "Xだけでは登録できない人がいる", "X または Googleで参加"],
            ["DJ・VJ・一般", "本文や別フォームで見分ける", "参加枠で分けて管理"],
            ["招待", "参加の返事がDMやLINEに散らばる", "招待URLで参加状況をまとめて確認"],
            ["参加者連絡", "個別DMで一人ずつ送る", "全員／枠ごとに一斉連絡"],
            ["共同運営", "管理や対応が一人に偏る", "役割・権限を分けて管理"],
            ["イベント後", "出演者情報や投稿が流れていく", "プロフィール・作品・投稿が残る"],
          ].map(([stage, before, after]) => (
            <div className="comparison-row" role="row" key={stage}>
              <div role="cell"><strong>{stage}</strong></div>
              <div role="cell">{before}</div>
              <div role="cell"><span className="after-mark">+</span>{after}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="truth-section">
        <div className="truth-inner section-shell">
          <div>
            <p className="section-kicker">できることの範囲</p>
            <h2>イベント募集で、<br />できること。</h2>
          </div>
          <ul>
            <li><span>01</span><p><strong>外部SNSの自動取り込みではありません。</strong>タイムラインはhamp内のイベント専用機能です。</p></li>
            <li><span>02</span><p><strong>連絡先は同意を前提に扱います。</strong>参加者への表示と、閲覧できる運営権限を分けます。</p></li>
            <li><span>03</span><p><strong>現在、チケット販売には対応していません。</strong>有料イベントでは、使い慣れたプレイガイドをご利用ください。</p></li>
          </ul>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="section-intro compact">
          <p className="section-kicker">07 / よくある質問</p>
          <h2 className="faq-title">使う前に<br />知っておきたいこと</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.q}<i aria-hidden="true">＋</i></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell" id="contact">
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-copy">
          <p className="section-kicker">次のイベントで使ってみる</p>
          <h2>ログインしたら、<br /><em>そのまま作れます。</em></h2>
          <p>
            イベントページと参加枠を設定して、URLをシェア。
            次の1本からhampで募集を始められます。
          </p>
          <div className="hero-actions">
            <a className="primary-button acid" href="https://hamp.ai/organizer" target="_blank" rel="noreferrer">
              イベント募集を作る <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#features">
              できることを見る <span aria-hidden="true">↑</span>
            </a>
          </div>
          <small>hampのイベント主催者ページが開きます。</small>
        </div>
        <MediaSlot label="EVENT POSTER" note="KEY VISUAL / 4:5" className="cta-media" />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="hamp events トップ"><Image className="brand-logo" src="/logo.svg" alt="hamp" width={300} height={104} /></a>
        <p>DJ・クラブ・音楽イベントの募集と運営を、ひとつに。</p>
        <div>
          <a href="https://hamp.ai/organizer" target="_blank" rel="noreferrer">イベントを作る</a>
          <a href="https://hamp.ai/about/feature" target="_blank" rel="noreferrer">hampの機能</a>
          <a href="https://www.filix.jp/" target="_blank" rel="noreferrer">運営会社</a>
        </div>
        <small>© Filix Inc.</small>
      </footer>

      <a className="mobile-cta" href="https://hamp.ai/organizer" target="_blank" rel="noreferrer">
        イベント募集を作る <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
