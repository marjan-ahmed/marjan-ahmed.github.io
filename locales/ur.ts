export default {
  hero: {
    hi: "میں {name} ہوں",
    description: "Full-Stack Developer & Agentic AI Engineer building production web apps and shipped AI agent systems.",
    eyebrow: "فل سٹیک · ایجنٹک AI",
    headline: "میں سسٹمز بناتا ہوں، الگ تھلگ پروجیکٹس نہیں۔",
    sub: "17 سالہ، کلاس 8 سے کوڈنگ کر رہا ہوں۔ ایک اسٹارٹ اپ، فری لانس کلائنٹس، اور 3,700+ لوگوں کے لیے پروڈکشن ایپس اور AI ایجنٹس بناتا ہوں جنہوں نے میری بنائی ہوئی کوئی چیز انسٹال کی۔",
    cta: {
      primary: "کام دیکھیں",
      copied: "کاپی ہو گیا",
      copyEmail: "ای میل کاپی کریں",
    },
    card: {
      role: "فل سٹیک ڈویلپر اور ایجنٹک AI انجینئر",
      base: "مقام",
      local: "مقامی وقت",
      focus: "فوکس",
      focusValue: "ایجنٹک AI سسٹمز",
      status: "حالت",
      statusValue: "کام کے لیے دستیاب",
    },
  },
  proof: {
    title: "ثبوت",
    items: {
      downloads: { label: "PyPI ڈاؤنلوڈز", note: "Gemini Starter Agent، اوپن سورس" },
      repos: { label: "عوامی repos", note: "GitHub پر جاری کردہ کوڈ" },
      sites: { label: "کلائنٹ سائٹس", note: "Reintechs میں مکمل طور پر بنائی گئیں" },
      hackathons: { label: "Hackathons", note: "فائنلسٹ، ٹاپ 10، دوسرا مقام — 2024 سے" },
      age: { label: "عمر", note: "کلاس 8 سے کوڈنگ کر رہا ہوں" },
    },
  },
  deployments: {
    eyebrow: "کام",
    title: "جو واقعی بنایا",
    lede: "پانچ سسٹمز، شروع سے آخر تک — وہ رکاوٹ جس نے شروع کیا، وہ حد جس کے اردگرد ڈیزائن کیا، اور اس کی وجہ سے کیا بدلا۔",
    beats: {
      friction: "رکاوٹ",
      constraint: "حد",
      system: "سسٹم",
      impact: "اثر",
      stack: "اسٹیک",
    },
    status: {
      won: "جیتا",
      live: "لائیو",
      shipped: "مکمل",
    },
    architecture: "آرکیٹیکچر",
    collapse: "کم دکھائیں",
    expand: "مکمل تفصیل پڑھیں",
    items: {
      docsamajh: {
        friction: "انوائس-ٹو-PO ملاپ دستی تھا، لائن بہ لائن — وہ اصل رکاوٹ جس کے گرد hackathon کا موضوع بنایا گیا تھا۔",
        constraint: "انوائسز اسکین اور تصاویر کی صورت میں غیر یکساں فارمیٹس کے ساتھ آتی ہیں — نہ صاف ٹیکسٹ ان پٹ، نہ ماڈل کی extraction جانچنے کے لیے کوئی معیاری ڈیٹا۔",
        system: "LandingAI ADE نے اسکین شدہ PDFs سے منظم لائن آئٹمز نکالے، Gemini نے انہیں یکساں کیا، اور OpenAI Agents SDK ایجنٹس نے انوائسز کو پرچیز آرڈرز سے ملایا — Streamlit کی ریویو لیئر ان استثنائی کیسز کے لیے جنہیں میچنگ خود حل نہیں کر سکتی تھی۔",
      },
      textbook: {
        friction: "دستاویز طرز کا کورس مواد جس میں سوال پوچھ کر اصل نصاب پر مبنی جواب حاصل کرنے کا کوئی طریقہ نہیں تھا۔",
        constraint: "ہوسٹنگ بجٹ صفر، ایک شخص تین الگ سروسز — docs، auth، RAG — تین مختلف پلیٹ فارمز پر بنا رہا ہے۔",
        system: "GitHub Pages پر Docusaurus فرنٹ اینڈ، Express + Better Auth سروس، اور Railway پر FastAPI RAG بیک اینڈ جو Cohere embeddings کو Qdrant میں استعمال کرتا ہے — تین سروسز، تین پلیٹ فارمز، ایک شخص کے ذریعے چلائے گئے۔",
      },
      vault: {
        friction: "توجہ کے قابل سگنلز — ای میل، WhatsApp، فائل سسٹم تبدیلیاں — متعدد چینلز میں بکھرے ہوئے، جائزہ لینے اور منظوری دینے کی کوئی ایک جگہ نہیں۔",
        constraint: "میری طرف سے لکھنے والی کوئی بھی آٹومیشن کسی حقیقی چیز کو چھونے سے پہلے انسانی منظوری کے مرحلے کی محتاج ہے — کوئی استثنا نہیں۔",
        system: "سگنل واچرز ایک کسٹم MCP سرور کو ڈیٹا دیتے ہیں؛ Claude Code منظوری گیٹ کے خلاف عمل کرتا ہے؛ ہر ایکشن Obsidian vault میں پڑھنے کے قابل آڈٹ ٹریل کے طور پر محفوظ ہوتا ہے۔",
      },
      "gemini-starter": {
        friction: "ہر نیا ایجنٹ پروجیکٹ اصل ایجنٹ لاجک کی ایک لائن لکھنے سے پہلے اسی تیس منٹ کے provider boilerplate سے شروع ہوتا تھا۔",
        constraint: "Gemini اور OpenAI دونوں کے ساتھ کام کرنا تھا بغیر یوزرز کو provider تبدیل کرنے پر اپنا ایجنٹ کوڈ دوبارہ لکھنے پر مجبور کیے۔",
        system: "ایک CLI کمانڈ ایک کام کرنے والا ایجنٹ تیار کرتی ہے، ایک provider shim نیچے Gemini اور OpenAI کے Agents SDK کے درمیان تبدیل کرتا ہے، اور ایک منٹ سے کم میں چلتا ہوا ایجنٹ مل جاتا ہے۔",
      },
      hekto: {
        friction: "ایک مکمل فرنیچر ای کامرس پلیٹ فارم — کیٹلاگ، کارٹ، چیک آؤٹ، شپنگ — بنانے کا hackathon بریف، جبکہ کچھ بھی نہیں بنا تھا۔",
        constraint: "چھ دن، اکیلے، آخر میں GIAIC demo day کے ساتھ — غیر دستاویزی فیصلوں یا غیر ٹیسٹ شدہ چیک آؤٹ فلوز کی کوئی گنجائش نہیں۔",
        system: "Next.js 14 اسٹور فرنٹ جس میں کارٹ کی حالت کے لیے Redux، ہیڈلیس کیٹلاگ کے لیے Sanity، auth کے لیے Clerk، اور شپنگ کے لیے ShipEngine — بزنس اہداف سے لے کر ڈیپلائمنٹ تک چھ دستاویزی مراحل میں بنایا گیا، 18 QA ٹیسٹ کیسز دو منظم CSV رپورٹس میں درج، اور لانچ سے پہلے Core Web Vitals کی جانچ۔",
      },
    },
  },
  capabilities: {
    eyebrow: "صلاحیتیں",
    title: "میں کہاں کارآمد ہوں",
    lede: "زبان کے بجائے اس مسئلے کے حساب سے گروپ کیا گیا جسے ہر ایک حل کرتی ہے — تاکہ یہ اسی طرح پڑھا جائے جیسے کام واقعی ہوتا ہے۔",
    items: {
      ship: {
        title: "انٹرفیس بنانا",
        body: "وہ لیئر جسے یوزر واقعی چھوتا ہے — تیز، قابل رسائی، اور ہر پروجیکٹ میں ایک ہی اسٹیک کے ساتھ بنائی گئی تاکہ کچھ بھی الگ تھلگ نہ ہو۔",
      },
      reason: {
        title: "ڈیٹا پر استدلال کرنا",
        body: "ایجنٹس، retrieval، اور ملٹی ایجنٹ آرکسٹریشن — سسٹم کا وہ حصہ جو فیصلہ کرتا ہے، صرف جواب نہیں دیتا۔",
      },
      serve: {
        title: "قابل اعتماد طریقے سے فراہم کرنا",
        body: "APIs، auth، اور اسٹوریج جو ڈیمو ختم ہونے کے بعد بھی چلتے رہتے ہیں۔",
      },
      run: {
        title: "پروڈکشن میں چلانا",
        body: "کنٹینرز، CI، اور ہوسٹنگ جو صفر بجٹ اور حقیقی uptime کے لیے منتخب کی گئی، ریزیومے کی لائن کے لیے نہیں۔",
      },
    },
  },
  principles: {
    eyebrow: "طریقہ کار",
    title: "جب مجھے کسی مسئلے میں ڈالا جاتا ہے تو میں کیسے کام کرتا ہوں",
    lede: "پانچ عادات، ہر ایک ثبوت کے ساتھ — بغیر ثبوت کے اصول محض ایک نعرہ ہے۔",
    receipt: "ثبوت:",
    closer: "اوپر بتائی گئی ہر چیز قابل تصدیق ہے۔ یہ جان بوجھ کر ہے۔",
    items: {
      friction: {
        title: "رکاوٹ سے شروعات",
        body: "میں ان مسائل کا انتخاب کرتا ہوں جن میں حقیقی رکاوٹ ہو، نہ کہ وہ جو portfolio میں اچھے لگیں — پھر حل بنانے کا طریقہ ڈھونڈتا ہوں۔",
      },
      constraint: {
        title: "حدیں ہی اصل بریف ہیں",
        body: "لائیو کلاک کے ساتھ تین گھنٹے کی build نے مجھے OpenAI Agents SDK کا سورس کوڈ اتنی گہرائی سے پڑھنے پر مجبور کیا کہ میں نے صرف استعمال ہی نہیں بلکہ ایک فیچر بھی contribute کیا۔",
      },
      ownership: {
        title: "شروع سے آخر تک ذمہ داری لینا",
        body: "5 سے 7 کلائنٹ سائٹس، اکیلے — CMS سے چیک آؤٹ تک، اور اس رپورٹ تک جو کلائنٹ واقعی پڑھتا ہے۔ غیر دلچسپ کاموں کے لیے کوئی handoff نہیں۔",
      },
      systems: {
        title: "سسٹمز میں سوچنا",
        body: "تین سروسز، تین پلیٹ فارمز، ایک شخص — کیونکہ حقیقی سسٹم کا فیصلہ اس بات سے ہوتا ہے کہ جب اس کا کوئی حصہ ناکام ہو تو کیا ہوتا ہے، ڈیمو سے نہیں۔",
      },
      measure: {
        title: "اسے قابل تصدیق بنانا",
        body: "3,723+ PyPI ڈاؤنلوڈز، نہ کہ «ڈویلپرز استعمال کرتے ہیں»۔ اگر اس سائٹ پر کوئی نمبر ہے، تو وہ ایسا نمبر ہے جسے آپ خود جا کر تصدیق کر سکتے ہیں۔",
      },
    },
  },
  shipLog: {
    eyebrow: "لاگ",
    title: "جو کچھ بھی مکمل ہوا",
    lede: "دو سال، ایک ٹائم لائن — تازہ ترین پہلے۔",
    kinds: {
      won: "جیتا",
      shipped: "مکمل",
      published: "شائع",
      joined: "شامل ہوا",
      started: "شروع کیا",
    },
  },
  palette: {
    label: "کمانڈ پیلیٹ",
    placeholder: "سیکشنز، رابطہ، سیٹنگز تلاش کریں…",
    close: "بند کریں",
    empty: "«{query}» کے لیے کوئی نتیجہ نہیں",
    groups: {
      jump: "جائیں",
      contact: "رابطہ",
      settings: "سیٹنگز",
      language: "زبان",
    },
    actions: {
      copyEmail: "ای میل کاپی کریں",
      copied: "کاپی ہو گیا",
      github: "GitHub کھولیں",
      linkedin: "LinkedIn کھولیں",
      light: "لائٹ موڈ میں تبدیل کریں",
      dark: "ڈارک موڈ میں تبدیل کریں",
    },
    legend: {
      move: "نیویگیٹ",
      select: "منتخب کریں",
    },
  },
  nav: {
    method: "طریقہ کار",
    deployments: "کام",
    capabilities: "صلاحیتیں",
    log: "لاگ",
    contact: "رابطہ",
  },
  about: {
    title: "مارے بارے میں",
    summary: "17 سالہ، کلاس 8 سے کوڈنگ کر رہا ہوں۔ میں پروڈکشن ویب ایپس اور AI ایجنٹس بناتا ہوں جو حقیقی مسائل حل کرتے ہیں۔ Naxasware میں میں نے MERN stack میں پروڈکشن فیچرز دلیے۔ Reintechs میں میں نے 5-7 کلائنٹ سائٹیں بنائیں۔ میں نے Gemini Starter Agent CLI ٹول بنایا جس کے PyPI ڈاؤنلوڈز 3,723+ ہیں۔ LandingAI Financial Hackathon کے لیے DocSamajh AI بنایا، جس نے مینوئل effort 70% کم کی۔ میں فی الحال RAG چیٹ بوٹس اور ملٹی ایجنٹ سسٹمز کے ساتھ AI native learning platforms بنا رہا ہوں۔ میں systems کے بارے میں سوچتا ہوں، one-off builds نہیں۔",
  },
  work: {
    title: "کام کا تجربہ",
    present: "موجودہ",
    items: {
      naxasware: {
        title: "فال سٹیک ڈویلپر (انٹرن)",
        description: "MERN stack میں پروڈکشن فیچرز دلیے۔ اینڈ ٹو اینڈ ڈیبگنگ، ٹیم میں وقت پر ڈلیوری۔",
      },
      reintechs: {
        title: "ویب ڈویلپر (فری لانس)",
        description: "5-7 کلائنٹ سائٹیں بنائیں اور ڈیپلوی کیں۔ Next.js + WooCommerce۔ قیادت سے تعریفی خط ملا۔",
      },
    },
  },
  education: {
    title: "تعلیم",
    items: {
      giaic: {
        degree: "ایجنٹک AI اور کلاؤڈ انجینئرنگ - ایجنسی کی ٹیکنیکل بنیاد بنا رہا ہوں",
      },
      nasra: {
        degree: "میٹریکولیشن (AKU-EB Board) - پروڈکشن سسٹمز بناتے ہوئے اور hackathons جیتتے ہوئے اسکول مکمل کر رہا ہوں",
      },
    },
  },
  skills: {
    title: "تکنیکل مہارتیں",
  },
  favouriteTools: {
    title: "پسندیدہ ٹولز",
  },
  certifications: {
    title: "سپٹیفیکیشنز اور انعامات",
  },
  volunteering: {
    title: "volunteerism",
  },
  contact: {
    title: "رابطہ",
    letsConnect: "جڑیں",
    description: "کوئی پروجیکٹ کا خیال ہے یا ساتھ کام کرنا چاہتے ہیں؟ {email} یا {linkedin} پر رابطہ کریں۔ میں کنٹریکٹ ورک کے لیے کھلا ہوں۔",
    emailLink: "ای میل",
    linkedinLink: "LinkedIn",
  },
  hackathons: {
    title: "Hackathons اور انعامات",
    tagline: "مسئلہ پہلے، کود بعد میں",
    description: "2024 سے چھ hackathons۔ Google Build with AI میں ٹاپ 10، Hacktoberfest میں دوسرا، IBM watsonx میں فائنلسٹ۔ میں ان مسائل کا انتخاب کرتا ہوں جن میں حقیقی رکاوٹ ہو - پھر میں حل بنانا سیکھتا ہوں۔",
    items: {
      landingai: {
        description: "DocSamajh AI: 85-90% درستگی کے ساتھ ملٹی ایجنٹ انوائس-ٹو-PO میچنگ۔ جمع کرایا، کوئی پوزیشن نہیں ملی۔",
      },
      hacktoberfest: {
        description: "دوسرا۔ تین گھنٹے کا hackathon، آخری گھنٹے میں سب کچھ بنایا۔",
      },
      gdg: {
        description: "ٹاپ 10 فائنلسٹ ٹیم۔ Hunar Bazaar: پاکستان کی دیہی خواتین کے لیے فری لانسنگ پلیٹ فارم۔",
      },
      ibm: {
        description: "فائنلسٹ۔ ملٹی ایجنٹ آرکسٹریشن سسٹم۔",
      },
      nasa: {
        description: "Kalkia: 44 سال کے NASA ڈیٹا سے موسم کے امکانات کی جانچ۔",
      },
      innovista: {
        description: "اردو، سندھی، پنجابی، پشتو میں AI جوابات والا EdTech ایپ۔ پہلا hackathon۔",
      },
    },
  },
  projects: {
    title: "پروجیکٹس",
    tagline: "منتخب کام",
    description: "پروڈکشن ایپس، اوپن سورس ٹولز، اور AI systems - جو میں نے واقعی بنایا۔",
    imageAlt: "{title} تصویر",
    openLink: "{title} کھولیں",
    items: {
      textbook: {
        description: "AI native learning platform جس میں RAG چیٹ بوٹ یکجھ ہے۔ 3 سروس: Docusaurus، FastAPI RAG، Express auth۔",
      },
      aiVault: {
        description: "Human-in-the-loop خودکاری۔ Obsidian vault + Claude Code + MCP server۔ منظوری سے چلنے والے ایکشن۔",
      },
      geminiAgent: {
        description: "AI agent پروجیکٹس کے لیے اوپن سورس CLI۔ OpenAI Agents SDK + ملٹی پرووائیڈر۔ 3,723+ PyPI ڈاؤنلوڈز۔",
      },
      docSamajh: {
        description: "LandingAI Financial Hackathon کے لیے بنایا۔ LandingAI ADE، Gemini، اور OpenAI Agents SDK کے ساتھ انوائس-ٹو-PO ہم آہنگی۔",
      },
      shooter: {
        description: "براؤزر بیسڈ شوٹر گیم۔ Canvas رنڈرنگ، کولاژن ڈیٹیکشن، ریئل ٹائم فزکس۔",
      },
    },
  },
  common: {
    notAvailable: "دستیاب نہیں",
    pageNotFound: "صفحہ نہیں ملا",
    pageNotFoundDescription: "آپ جو صفحہ تلاش کر رہے ہیں وہ موجود نہیں ہے یا شاید منتقل ہو گیا ہو۔",
    goToHome: "ہوم پیج پر جائیں",
    selectLanguage: "زبان منتخب کریں",
  },
} as const;
