export interface ServiceItem {
  num: string;
  id: string;
  nameEn: string;
  nameAr: string;
  headlineEn: string;
  headlineAr: string;
  descEn: string;
  descAr: string;
  scopeEn: string[];
  scopeAr: string[];
  image: string;
  alt: string;
  client?: string;
  amsRoleEn?: string;
  amsRoleAr?: string;
  has3DShowcase?: boolean;
  hasAIShowcase?: boolean;
  isPrUgcSplit?: boolean;
  prScopeEn?: string[];
  prScopeAr?: string[];
  ugcScopeEn?: string[];
  ugcScopeAr?: string[];
}

export const SERVICES_8: ServiceItem[] = [
  {
    num: "01",
    id: "strategy",
    nameEn: "Strategy",
    nameAr: "الاستراتيجية وبناء العلامة",
    headlineEn: "Before we speak, we listen.",
    headlineAr: "قبل أن نتحدث، ننصت بعمق.",
    descEn:
      "We start with your business, market, and audience to give every message and execution a clear purpose.",
    descAr:
      "نبدأ بفهم أهداف عملك، دراسة السوق، وتحليل الجمهور المستهدف لنمنح كل رسالة وتنفيذ هدفاً تجارياً واضحاً ومؤثراً.",
    scopeEn: [
      "Market & competitor research",
      "Brand & communication strategy",
      "Content & social strategy",
      "Campaign & go-to-market planning",
      "Objectives & KPI frameworks",
    ],
    scopeAr: [
      "أبحاث السوق والمنافسين وتحليل الفرص",
      "استراتيجية العلامة والاتصال المؤسسي",
      "استراتيجية المحتوى والتواجد الرقمي",
      "تخطيط الحملات الإعلانية ودخول السوق",
      "تحديد الأهداف وأطر قياس الأداء (KPIs)",
    ],
    image: "/assets/images/about-director.webp",
    alt: "AMS Strategic Workshop",
    client: "Regional Brands",
    amsRoleEn: "Market Positioning & Communication Strategy",
    amsRoleAr: "استراتيجية التموضع والاتصال الإبداعي",
  },
  {
    num: "02",
    id: "creative-content",
    nameEn: "Creative Content",
    nameAr: "المحتوى الإبداعي والسرد القصصي",
    headlineEn: "The right thing, said differently.",
    headlineAr: "الفكرة الصحيحة، بطريقة استثنائية.",
    descEn:
      "We turn business objectives and audience insight into distinctive campaign ideas, stories, and content formats.",
    descAr:
      "نحوّل أهدافك التجارية ورؤى الجمهور إلى أفكار حملات ملهمة، وسرد قصصي مبتكر، وقوالب محتوى تفرض حضورها.",
    scopeEn: [
      "Creative concepts & campaign development",
      "Scriptwriting & storytelling",
      "Arabic & English copywriting",
      "Content concepts & formats",
      "Creative & art direction",
    ],
    scopeAr: [
      "ابتكار المفاهيم الإبداعية وتطوير الحملات",
      "كتابة السيناريو والسرد القصصي السينمائي",
      "صناعة النصوص الإعلانية (عربي وإنجليزي)",
      "قوالب وأشكال المحتوى المبتكرة للمنصات",
      "الإخراج الإبداعي والفني المتكامل",
    ],
    image: "/assets/images/service-3-motion.png",
    alt: "AMS Creative Content",
    client: "E-Commerce & Commercial Clients",
    amsRoleEn: "Creative Direction & Campaign Concepts",
    amsRoleAr: "الإخراج الإبداعي وسيناريوهات الحملات",
  },
  {
    num: "03",
    id: "social-media-management",
    nameEn: "Social Media Management",
    nameAr: "إدارة منصات التواصل الاجتماعي",
    headlineEn: "We run the channel, not just the posts.",
    headlineAr: "ندير القناة كمنظومة، وليس مجرد منشورات.",
    descEn:
      "We manage your social presence from planning and publishing to community management and monthly reporting.",
    descAr:
      "ندير حضورك على منصات التواصل من التخطيط المسبق والجدولة وحتى إدارة المجتمع والردود والتقارير الشهرية التحليلية.",
    scopeEn: [
      "Platform & channel planning",
      "Monthly content calendars",
      "Publishing & scheduling",
      "Community management & moderation",
      "Performance reporting & benchmarking",
    ],
    scopeAr: [
      "تخطيط القنوات والمنصات الرقمية",
      "تقويم وجداول المحتوى الشهرية",
      "النشر والجدولة التلقائية الذكية",
      "إدارة وتفاعل المجتمع والجمهور باحترافية",
      "تقارير الأداء ومقارنة المؤشرات الشهرية",
    ],
    image: "/assets/images/contact-studio.webp",
    alt: "AMS Social Channel Management",
    client: "Lifestyle & Retail Brands",
    amsRoleEn: "Full Channel Stewardship & Community Engagement",
    amsRoleAr: "إدارة القنوات والتفاعل المستمر وبناء المجتمع",
  },
  {
    num: "04",
    id: "media-production-house",
    nameEn: "Media Production House",
    nameAr: "بيت الإنتاج الإعلامي والسينمائي",
    headlineEn: "A good idea deserves to be well made.",
    headlineAr: "الفكرة العظيمة تستحق تنفيذاً فائق الإتقان.",
    descEn:
      "Our production team brings the creative direction to life through film, photography, 3D visualization, AI-assisted production, and post-production.",
    descAr:
      "فريق الإنتاج لدينا يحوّل الرؤية الإبداعية إلى واقع من خلال الأفلام، التصوير الفوتوغرافي، الرؤية ثلاثية الأبعاد (3D)، الإنتاج المدعوم بالذكاء الاصطناعي (AI)، وعمليات ما بعد الإنتاج.",
    scopeEn: [
      "Commercial & campaign films",
      "Social-first video & Reels",
      "Product photography & video",
      "Fashion & lifestyle production",
      "Food & hospitality production",
      "3D Solutions — Modeling, Rendering & CGI",
      "AI-Assisted Creative Production",
      "Editing, color grading & retouching",
    ],
    scopeAr: [
      "أفلام الحملات والإعلانات التجارية الكبرى",
      "فيديوهات السوشيال والريلز عالية التفاعل",
      "تصوير المنتجات الاحترافي فوتوغرافي وفيديو",
      "إنتاج محتوى الأزياء والموضة (Fashion)",
      "إنتاج المطاعم والضيافة (Food & Hospitality)",
      "حلول 3D — النمذجة والرندرة و CGI",
      "الإنتاج الإبداعي المدعوم بالـ AI",
      "المونتاج، تصحيح الألوان، والريتاتش الدقيق",
    ],
    image: "/assets/images/hero-mama-studio.webp",
    alt: "AMS Production Studio",
    client: "Commercial & Regional Partners",
    amsRoleEn: "End-to-End Live Action, 3D CGI & AI Production",
    amsRoleAr: "إنتاج سينمائي كامل، وحلول 3D CGI والذكاء الاصطناعي",
    has3DShowcase: true,
    hasAIShowcase: true,
  },
  {
    num: "05",
    id: "pr-and-ugc",
    nameEn: "PR & UGC",
    nameAr: "العلاقات العامة وصناع المحتوى",
    headlineEn: "Reputation is earned. So is a recommendation.",
    headlineAr: "السمعة تُبنى بالجدارة، والتوصية كذلك.",
    descEn:
      "We connect media relations and creator-led content to build credibility, communicate launches, and bring real voices into the brand story.",
    descAr:
      "نربط بين العلاقات الإعلامية والمحتوى الذي يقوده المبدعون لبناء المصداقية، إطلاق الحملات، وإشراك أصوات حقيقية في قصة علامتك.",
    isPrUgcSplit: true,
    prScopeEn: [
      "Press & media relations",
      "Launch & event communication",
      "Reputation management",
      "Spokesperson positioning",
      "Press kits & official statements",
    ],
    prScopeAr: [
      "العلاقات الإعلامية والصحفية المعتمدة",
      "تغطية الإطلاقات والفعاليات الكبرى",
      "إدارة السمعة والصورة الذهنية المؤسسية",
      "تموضع وإعداد المتحدث الرسمي",
      "الملفات الصحفية والبيانات الرسمية",
    ],
    ugcScopeEn: [
      "Creator sourcing & briefing",
      "UGC content production",
      "Influencer campaign management",
      "Product seeding & activations",
      "Reach & impact tracking",
    ],
    ugcScopeAr: [
      "اختيار المبدعين وتوجيههم إبداعياً",
      "إنتاج محتوى UGC أصيل يلامس الجمهور",
      "إدارة حملات المؤثرين والشخصيات البارزة",
      "توزيع وتفعيل تجارب المنتجات (Seeding)",
      "قياس الوصول والأثر التجاري للمبيعات",
    ],
    scopeEn: [
      "Press & Media Relations",
      "Launch & Event Communication",
      "Reputation & Crisis Management",
      "Creator Sourcing & UGC Production",
      "Influencer Campaigns & Seeding",
    ],
    scopeAr: [
      "العلاقات الإعلامية والصحفية",
      "تغطية الإطلاقات والفعاليات",
      "إدارة السمعة المؤسسية",
      "إنتاج محتوى UGC وصناع المحتوى",
      "حملات المؤثرين وتفعيل المنتجات",
    ],
    image: "/assets/images/about-clarity-hd.webp",
    alt: "AMS PR and UGC Campaign Activations",
    client: "FMCG, Tech & Fashion Brands",
    amsRoleEn: "Media Relations & Influencer Campaign Architecture",
    amsRoleAr: "العلاقات الإعلامية وهندسة حملات المؤثرين",
  },
  {
    num: "06",
    id: "design",
    nameEn: "Design",
    nameAr: "التصميم الفني والتطبيقات البصرية",
    headlineEn: "Craft is part of the idea.",
    headlineAr: "الإتقان جزء لا يتجزأ من الفكرة.",
    descEn:
      "We create visual assets that carry your brand consistently across campaigns, platforms, and everyday communication.",
    descAr:
      "نبتكر أصولاً وتطبيقات بصرية تحمل هوية علامتك بتناسق تام عبر الحملات والمنصات الرقمية والتواصل اليومي.",
    scopeEn: [
      "Graphic design & art direction",
      "Key visuals & campaign assets",
      "Social & digital design",
      "Packaging, print & collateral",
      "Presentations & brand documents",
    ],
    scopeAr: [
      "التصميم الجرافيكي والإخراج الفني",
      "المفاهيم البصرية الرئيسية (Key Visuals)",
      "تصاميم السوشيال والمنصات الرقمية",
      "تصميم التغليف والعبوات والمطبوعات الفاخرة",
      "العروض التقديمية والوثائق المؤسسية",
    ],
    image: "/assets/images/service-4-branding.png",
    alt: "AMS Design Systems",
    client: "Consumer Goods & Luxury Brands",
    amsRoleEn: "Graphic Assets, Campaign Visuals & Packaging",
    amsRoleAr: "تصميم الأصول البصرية ومطبوعات التغليف الفاخرة",
  },
  {
    num: "07",
    id: "branding",
    nameEn: "Branding",
    nameAr: "استراتيجية وبناء الهوية التجارية",
    headlineEn: "Make your brand unmistakable.",
    headlineAr: "اجعل علامتك التجارية فريدة لا تُنسى.",
    descEn:
      "We define how your brand is positioned, expressed, and recognised through a connected verbal and visual identity.",
    descAr:
      "نحدد تموضع علامتك وصوتها وحضورها في السوق من خلال هوية بصرية ولفظية متكاملة تفرض هيبتها وتخلق صلة عميقة مع العملاء.",
    scopeEn: [
      "Brand naming & story",
      "Brand positioning",
      "Brand identity & visual systems",
      "Messaging frameworks",
      "Brand guidelines & rebrands",
    ],
    scopeAr: [
      "تسمية العلامة وصياغة قصتها الملهمة",
      "استراتيجية التموضع والمكانة في السوق",
      "تصميم أنظمة الهوية البصرية المتكاملة",
      "أطر الرسائل ونبرة الصوت (Tone of Voice)",
      "أدلة استخدام الهوية وتحديث العلامات (Rebranding)",
    ],
    image: "/assets/images/ams-mama-house-logo.jpg",
    alt: "AMS Branding Architecture",
    client: "Founding Startups & Established Enterprises",
    amsRoleEn: "Holistic Verbal & Visual Identity Architecture",
    amsRoleAr: "بناء وتطوير الهوية البصرية واللفظية المتكاملة",
  },
  {
    num: "08",
    id: "media-buying-and-performance",
    nameEn: "Media Buying & Performance",
    nameAr: "الإعلانات الممولة وإدارة الأداء",
    headlineEn: "Attention only matters when it moves something.",
    headlineAr: "الوصول لا قيمة له إلا إذا حقق أثراً ملموساً.",
    descEn:
      "We plan, test, and optimize paid campaigns around clear business objectives, with reporting that helps guide the next decision.",
    descAr:
      "نخطط، نختبر، ونحسّن الحملات الإعلانية الممولة بناءً على أهداف تجارية دقيقة، مع تقارير واضحة توجه القرارات القادمة.",
    scopeEn: [
      "Media planning & budget allocation",
      "Paid campaigns on Meta, Google, TikTok & LinkedIn",
      "Audience & creative testing",
      "Lead-generation & conversion campaigns",
      "Monitoring & optimization",
      "Reporting & recommendations",
    ],
    scopeAr: [
      "التخطيط الإعلامي وتوزيع الميزانيات الذكي",
      "حملات ممولة على Meta و Google و TikTok و LinkedIn",
      "اختبار الجماهير والتصميمات الإعلانية (A/B Testing)",
      "حملات استقطاب العملاء والمبيعات (Conversions)",
      "المراقبة اللحظية والتحسين المستمر لمعدل العائد",
      "التقارير التحليلية والتوصيات المستقبلية الواضحة",
    ],
    image: "/assets/images/about-sculpture.webp",
    alt: "AMS Media Buying and Performance Marketing",
    client: "E-Commerce & High-Growth Ventures",
    amsRoleEn: "Paid Media Strategy, Optimization & Conversion ROI",
    amsRoleAr: "إدارة الحملات الممولة وتحسين العائد على الإنفاق الإعلاني",
  },
];

export const HOW_WORK_CONNECTS = {
  titleEn: "HOW THE WORK CONNECTS",
  titleAr: "كيف تترابط المنظومة الإبداعية",
  quoteEn:
    "You can work with us on a focused brief or bring the full system together around your brand.",
  quoteAr:
    "يمكنك التعاقد معنا على مهمة إبداعية مركزة، أو تشغيل المنظومة الكاملة المترابطة حول علامتك التجارية.",
  steps: [
    {
      step: "01",
      nameEn: "Strategy",
      nameAr: "الاستراتيجية",
      descEn: "Market analysis, brand positioning, and campaign roadmap.",
      descAr: "تحليل السوق، تموضع العلامة، ورسم خارطة الطريق.",
    },
    {
      step: "02",
      nameEn: "Creative",
      nameAr: "الإبداع والسرد",
      descEn: "Big ideas, narrative scripts, and distinctive visual hooks.",
      descAr: "الأفكار الإعلانية، كتابة السيناريو، والهوية البصرية.",
    },
    {
      step: "03",
      nameEn: "Production",
      nameAr: "الإنتاج والتنفيذ",
      descEn: "Commercial film, photography, 3D CGI & AI-assisted craft.",
      descAr: "التصوير السينمائي، الفوتوغرافي، وحلول 3D والـ AI.",
    },
    {
      step: "04",
      nameEn: "Publishing & Paid Media",
      nameAr: "النشر والإعلانات",
      descEn: "Targeted media buying across platforms, community management, and PR.",
      descAr: "الحملات الممولة الموجهة، إدارة المنصات، والعلاقات العامة.",
    },
    {
      step: "05",
      nameEn: "Reporting & Optimization",
      nameAr: "التحليل والتطوير",
      descEn: "Rigorous performance analysis guiding iterative commercial scaling.",
      descAr: "مراقبة النتائج وتحليل الأداء لتوجيه القرارات القادمة.",
    },
  ],
};
