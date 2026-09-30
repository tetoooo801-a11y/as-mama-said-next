"use client";

import React from "react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { language, dir } = useLanguage();
  const isRTL = language === "ar" || dir === "rtl";

  const servicesData = [
    {
      num: "01",
      category: isRTL ? "الهوية البصرية وتصميم العلامات" : "Brand Identity",
      superKicker: isRTL ? "أربع طرق بنخلي بيها علامتك حديث الناس" : "Four ways we get a business talked about",
      badge: isRTL ? "تأسيس وتموضع استراتيجي" : "Strategy & Visual Systems",
      headline: isRTL
        ? "أسماء، علامات، وصوت يلهم الناس."
        : "Names, Marks, And The Voice Behind Them.",
      lead: isRTL
        ? "تحديد التموضع، وتطوير نظم الشعارات، وبناء نبرة صوت يقدر فريقك كله يكتب بيها من غير ما يبان كأنه كتالوج جاف. إحنا مش بس بنصمم لوجو؛ إحنا بنبني منظومة بصرية وثقافية حية بتخلي علامتك علامة فارقة في السوق من القاهرة لدبي وتفضل محفورة في ذاكرة الناس."
        : "Positioning, logotype systems, and a tone of voice a whole team can write in without sounding like a manual. We don't just design logos; we architect living brand ecosystems rooted in culture and crafted to withstand market shifts. From Cairo to Dubai, we make brands unmistakable, authoritative, and deeply resonant.",
      bg: "#D2392A", // Signature Studio Red
      text: "#FAF6F0",
      hrColor: "border-white/20",
      boxBg: "bg-black/15 border-white/10",
      quote: isRTL
        ? "العلامة اللي ملهاش روح مجرد رسمة تجارية. إحنا بنبني الروح والتموضع الأول."
        : "A brand without a soul is just a trademark. We build the soul and cultural footprint first.",
      pillars: isRTL
        ? [
            {
              title: "استراتيجية التموضع والذكاء التنافسي",
              desc: "دراسة عميقة لسلوك المستهلك ورسم خريطة المنافسين لاقتناص المساحة الفريدة التي تمتلكها علامتك حصرياً.",
            },
            {
              title: "تصميم ورسم الخطوط العربية واللاتينية",
              desc: "تطوير عائلات خطوط مخصصة تحقق تكاملاً بصرياً راقياً بين أصالة الحرف العربي والعصرية اللاتينية.",
            },
            {
              title: "الأنظمة البصرية وقواعد التصميم المرن",
              desc: "باليتات ألوان مدروسة، وأشكال جرافيكية، وإرشادات تصوير فوتوغرافي تضمن ثبات هيبة العلامة عبر كل القنوات.",
            },
            {
              title: "نبرة الصوت والهوية اللفظية والمانيفستو",
              desc: "صياغة المانيفستو، والرسائل الترويجية الأساسية، ونبرة الخطاب اليومية التي تخاطب عقل وقلب العميل.",
            },
            {
              title: "التغليف والطباعة وتجربة المنتج الملموسة",
              desc: "انتقاء الخامات الفاخرة، وتصميم عبوات المنتجات، ومؤثرات البصمة الحرارية والقص لتجربة فتح تبهر العميل.",
            },
            {
              title: "دليل الهوية الرقمي الشامل الموحد",
              desc: "كتيب إرشادات إلكتروني تفاعلي يحدد كل قواعد الاستخدام والأخطاء الشائعة لتسهيل عمل فريقك وشركائك.",
            },
          ]
        : [
            {
              title: "Strategic Positioning & Market Intelligence",
              desc: "Audience psychology mapping, competitor audit, and defining the single undeniable value your brand owns.",
            },
            {
              title: "Custom Bilingual Typography (Arabic & Latin)",
              desc: "Handcrafted typographic hierarchies ensuring seamless harmony across modern digital and editorial formats.",
            },
            {
              title: "Living Visual Systems & Graphic Tokens",
              desc: "Curated palettes, responsive iconographies, art direction guidelines, and scalable digital component libraries.",
            },
            {
              title: "Tone of Voice & Verbal Messaging Framework",
              desc: "Manifesto writing, narrative pillars, taglines, and practical copywriting playbooks your entire team can deploy.",
            },
            {
              title: "Structural Packaging & Tactile Unboxing",
              desc: "Material curation, die-line architecture, custom foil/emboss specs, and sensory-driven package design.",
            },
            {
              title: "Master Digital Brand Guidelines & Governance",
              desc: "An interactive living guideline detailing responsive rules, asset libraries, and clear governance for scale.",
            },
          ],
    },
    {
      num: "02",
      category: isRTL ? "صناعة المحتوى والانتشار الرقمي" : "Social & Content",
      superKicker: isRTL ? "أربع طرق بنخلي بيها علامتك حديث الناس" : "Four ways we get a business talked about",
      badge: isRTL ? "محتوى وبناء مجتمع" : "Community & Virality",
      headline: isRTL
        ? "محتوى الناس بتتابعه وتشاركه."
        : "A Feed People Actually Follow.",
      lead: isRTL
        ? "جداول نشر تحريرية، وإدارة مجتمعية ذكية، ومحتوى معمول عشان ينتشر ويتشير مش بس ينزل على الصفحة. في زمن السكرول اللانهائي، المنشور العادي بيختفي في أجزاء من الثانية. إحنا بنخلق بيئة تفاعلية حقيقية وأفكار بصرية مبهرة تحول المتابع العابر لمحب ومدافع دائم عن علامتك."
        : "Editorial calendars, community management, and content built to be shared, not just posted. In an era of endless scrolling and algorithmic saturation, mediocre posts vanish in milliseconds. We build high-engagement social ecosystems with cultural hooks, viral show formats, and authentic community connections that transform passive scrollers into passionate advocates.",
      bg: "#081F20", // Deep Pine
      text: "#FAF6F0",
      hrColor: "border-white/20",
      boxBg: "bg-black/20 border-white/10",
      quote: isRTL
        ? "المحتوى مش هو الملك إلا لو خلى الناس تقف وتبتسم وتشاركه مع أصحابها."
        : "Content is not king unless it stops the thumb, sparks curiosity, and gets forwarded.",
      pillars: isRTL
        ? [
            {
              title: "استراتيجية وبرامج المحتوى الحصرية",
              desc: "ابتكار برامج وسلاسل حلقات دورية، وسرد قصصي شيق مصمم للانتشار العضوي وبناء قاعدة جماهيرية وفية.",
            },
            {
              title: "إنتاج سريع لفيديوهات الريلز وتيك توك",
              desc: "فيديوهات طولية (9:16) بهوكات بصرية قوية ومونتاج سريع يستغل أحدث التريندات والصوتيات الرائجة.",
            },
            {
              title: "إدارة وبناء المجتمعات التفاعلية",
              desc: "إدارة التعليقات والرسائل بأسلوب إنساني جذاب، وإشعال النقاشات اليومية التي توطد علاقة الجمهور بالبراند.",
            },
            {
              title: "التنسيق البصري وإخراج الـ Grid",
              desc: "تنسيق بصري متكامل للصفحة، وقوالب موشن جرافيك حصرية، وتصاميم لافتة للنظر تجبر الزائر على المتابعة.",
            },
            {
              title: "إدارة التعاونات مع صناع المحتوى المؤثرين",
              desc: "انتقاء المبدعين الأكثر ملاءمة لقيم علامتك، وإدارة البريف الإبداعي لضمان مصداقية الرسالة وأعلى وصول.",
            },
            {
              title: "تحليلات المشاهدة والاحتفاظ بالجمهور",
              desc: "متابعة دقيقة لمعدلات الإكمال (Retention) والمشاركات لضبط بوصلة المحتوى وتطوير الأداء أسبوعياً.",
            },
          ]
        : [
            {
              title: "Original Show Formats & Series Architecture",
              desc: "Episodic storytelling, recurring visual franchises, and cultural commentary engineered for organic virality.",
            },
            {
              title: "Rapid-Fire 9:16 Short-Form Video Engine",
              desc: "High-velocity Reels and TikTok production pairing trending cultural hooks with retention-first editing.",
            },
            {
              title: "Active Community Moderation & Advocacy",
              desc: "Humanized direct responses, sparking conversations, and nurturing casual commenters into loyal superfans.",
            },
            {
              title: "Aesthetic Grid Choreography & Motion Kits",
              desc: "Custom editorial templates, typographic animation packs, and signature cover art that commands authority.",
            },
            {
              title: "Curated Creator & Ambassador Collaborations",
              desc: "Strategic creator matchmaking, high-fidelity briefs, and seamless co-created storytelling that feels authentic.",
            },
            {
              title: "Retention Analytics & Algorithmic Iteration",
              desc: "Granular weekly audits on completion rates, save metrics, and audience velocity to continuously refine strategy.",
            },
          ],
    },
    {
      num: "03",
      category: isRTL ? "الإنتاج والإخراج السينمائي" : "Cinematic Video",
      superKicker: isRTL ? "أربع طرق بنخلي بيها علامتك حديث الناس" : "Four ways we get a business talked about",
      badge: isRTL ? "إنتاج سينمائي مبهر" : "Cinema & Narrative",
      headline: isRTL
        ? "أفلام سينمائية، مش مجرد حشو."
        : "Films, Not Just Filler.",
      lead: isRTL
        ? "إخراج، وإنتاج، ومونتاج سينمائي لأفلام العلامات التجارية، وإطلاق المنتجات، والإعلانات الكبرى. بنتعامل مع كل عمل إعلاني كأنه فيلم سينمائي متكامل: إضاءة مدروسة، وهندسة صوتية مخصصة، وإيقاع يشد الانتباه من أول مشهد لآخره. بنصنع تجارب بصرية تسيب انطباع هيبة وتأثير عاطفي لا يُمحى."
        : "Direction, production, and edit for brand films, product launches, and commercials shot to hold attention. We approach commercial productions like high-craft cinema: cinematic lighting, bespoke soundscapes, intentional pacing, and narrative depth. We craft visually arresting stories that command total respect and evoke unforgettable emotion.",
      bg: "#15100C", // Dark Ink
      text: "#FAF6F0",
      hrColor: "border-white/15",
      boxBg: "bg-white/5 border-white/10",
      quote: isRTL
        ? "لو أول خمس ثواني ما خطفتش عين المشاهد، الباقي ملوش لازمة. إحنا بنهتم بكل كادر."
        : "If the opening frames don't arrest the eye, the budget was wasted. We make every frame sing.",
      pillars: isRTL
        ? [
            {
              title: "الرؤية الإخراجية والسيناريو السينمائي",
              desc: "كتابة معالجات إخراجية وسيناريوهات عاطفية ملهمة، ورسم ستوريبورد تفصيلي يجسد الفكرة قبل التصوير.",
            },
            {
              title: "طواقم تصوير محترفة ومعدات سينما متطورة",
              desc: "كاميرات سينمائية عالمية، وعدسات أنامورفيك، وأطقم إضاءة مسرحية تمنح العمل مظهر الأفلام الضخمة.",
            },
            {
              title: "إعلانات تدشين المنتجات والعلامات الكبرى",
              desc: "أفلام إطلاق منتجات فخمة، وحملات تلفزيونية ورقمية تنقل البراند لمكانة رائدة في أذهان الجمهور.",
            },
            {
              title: "المونتاج الدقيق والإيقاع الدرامي",
              desc: "مونتاج متناغم يربط المشاهد بحبكة جذابة وسرعة تناسب العصر وتمنع المشاهد من تجاوز الإعلان.",
            },
            {
              title: "التلوين السينمائي (Color Grading) والمؤثرات",
              desc: "تصحيح وتلوين احترافي بباليتات سينمائية خاصة ومؤثرات بصرية تعزز الفخامة والواقعية.",
            },
            {
              title: "التأليف الموسيقي والمكساج الصوتي المحيطي",
              desc: "تأليف مقطوعات موسيقية أصلية، ومؤثرات صوتية هادرة تضفي عمقاً وتأثيراً نفسياً لا يُقاوم.",
            },
          ]
        : [
            {
              title: "Narrative Screenwriting & Visual Treatments",
              desc: "Evocative conceptual scripting, cinematic storyboards, and emotional treatments tailored to client ambitions.",
            },
            {
              title: "High-End Cinema Camera Packages & Lighting",
              desc: "ARRI/RED workflows, master anamorphic lenses, specialized rigging, and award-winning cinematography crews.",
            },
            {
              title: "Commercials & Global Launch Campaign Films",
              desc: "Hero brand anthems, luxury product reveals, and cinematic commercials crafted for broadcast and digital premiere.",
            },
            {
              title: "Rhythmic Editing & Precision Match-Cutting",
              desc: "Pacing designed to hold modern attention spans, seamless continuity, and narrative momentum from start to finish.",
            },
            {
              title: "Filmic Color Grading & Photo-Real VFX",
              desc: "Bespoke show LUTs, film stock emulation, seamless CGI integration, and high-fashion beauty cleanup.",
            },
            {
              title: "Original Scoring & Dolby Spatial Soundscapes",
              desc: "Custom musical scores, immersive foley sound design, atmospheric mixing, and broadcast master audio delivery.",
            },
          ],
    },
    {
      num: "04",
      category: isRTL ? "الحملات الإعلانية المدفوعة والأداء" : "Paid Campaigns",
      superKicker: isRTL ? "أربع طرق بنخلي بيها علامتك حديث الناس" : "Four ways we get a business talked about",
      badge: isRTL ? "عائد ونمو تجاري مثبت" : "ROAS & Scaled Growth",
      headline: isRTL
        ? "إعلانات بتغطي تكلفتها وتكسبك."
        : "Media That Pays For Itself.",
      lead: isRTL
        ? "شراء مساحات إعلانية واختبارات إبداعية مستمرة مبنية على أرقام وحقائق، مش مجرد توقعات — بتقارير واضحة ومباشرة كل أسبوع. الإبداع من غير انتشار ذكي وموجه استنزاف للميزانية. إحنا بنربط بين المحتوى البصري الفخم والشراء الإعلاني الموجه، وبنبني مسارات تحويل تضمن إن كل قرش تصرفه يرجعلك بأرباح ومبيعات حقيقية."
        : "Cross-platform buying and creative testing built around numbers, not vibes — reported plainly, every week. Great creative without surgical distribution is wasted capital. We bridge the gap between world-class creative and quantitative media buying, engineering dynamic funnel systems where every ad dollar spent returns measurable commercial revenue and tangible brand equity.",
      bg: "#F2E6DC", // Warm Studio Cream
      text: "#15100C", // Dark Ink
      hrColor: "border-black/15",
      boxBg: "bg-black/5 border-black/10",
      quote: isRTL
        ? "الإبداع بيفتح الباب، والبيانات والتوزيع الذكي هما اللي بيقفلوا الصفقة ويجيبوا المبيعات."
        : "Creativity earns attention. Quantitative buying and funnel architecture turn that attention into revenue.",
      pillars: isRTL
        ? [
            {
              title: "إدارة الحملات الممولة عبر جميع المنصات",
              desc: "شراء وتوزيع إعلاني مدروس على ميتا (إنستغرام/فيسبوك)، تيك توك، جوجل، يوتيوب، ولينكد إن.",
            },
            {
              title: "منظومة الاختبار الإبداعي المستمر (Creative Testing)",
              desc: "تجارب متواصلة لعشرات الزوايا والافتتاحيات والرسائل لاكتشاف الإعلانات الأعلى ربحية وتوسيع ميزانيتها.",
            },
            {
              title: "البنية التحتية للتتبع وقياس التحويلات",
              desc: "إعداد متقدم للـ Conversion API وبكسل التتبع وربط الأنظمة لضمان دقة قياس المبيعات والعائد الحقيقي.",
            },
            {
              title: "استهداف الجماهير وإعادة التوجيه الذكي",
              desc: "بناء جماهير مخصصة ومماثلة بدقة واستهداف جغرافي في أسواق القاهرة ودبي والخليج لتحقيق أعلى مبيعات.",
            },
            {
              title: "تقارير أداء حية ومباشرة بدون تعقيد",
              desc: "لوحات تحكم لحظية توضح تكلفة اكتساب العميل (CAC) والعائد على الإنفاق (ROAS) بأرقام صريحة كل أسبوع.",
            },
            {
              title: "مضاعفة الميزانيات والتوسع التجاري السريع",
              desc: "خوارزميات لتوزيع الميزانيات الذكي تزيد الإنفاق على الحملات الرابحة دون رفع تكلفة الطلب.",
            },
          ]
        : [
            {
              title: "Omnichannel Paid Media Buying & Management",
              desc: "Surgical buying across Meta Ads, TikTok For Business, Google Search & Display, YouTube, and LinkedIn Ads.",
            },
            {
              title: "High-Frequency Creative Testing Engine",
              desc: "Rapid multivariate testing of hooks, angles, visuals, and CTAs to discover breakout winning ads weekly.",
            },
            {
              title: "Attribution Infrastructure & Server-Side CAPI",
              desc: "Bulletproof Meta/Google Conversion API setups, first-party cookie tracking, and transparent UTM data flow.",
            },
            {
              title: "High-Intent Audience Segmentation & Retargeting",
              desc: "Lookalike modeling, custom CRM audience integration, regional geo-fencing, and dynamic retargeting funnels.",
            },
            {
              title: "Plain-English Real-Time Revenue Dashboards",
              desc: "Transparent live reporting focused on true blended ROAS, CAC, and pipeline revenue — zero fluff metrics.",
            },
            {
              title: "Algorithmic Budget Scaling & Unit Economics",
              desc: "Systematic capital scaling behind validated creative assets while protecting margin and lowering acquisition cost.",
            },
          ],
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[var(--theme-bg)]">
      <FlowArt aria-label="Services Story Scroll" as="div" className="relative w-full">
        
        {/* CARD 01: Manifesto / Capabilities & Craft Intro Card (Off-white/Beige) */}
        <FlowSection
          aria-label={isRTL ? "خدمات الاستوديو المتكاملة" : "Capabilities & Craft"}
          style={{ backgroundColor: "#FAF6F0", color: "#15100C" }}
          className="border-none shadow-none"
        >
          {/* Top Row Meta - Centered */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full opacity-70">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              {isRTL ? "استوديو أس ماما سيد — القاهرة · دبي" : "As Mama Said Studio — Cairo · Dubai"}
            </span>
            <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-black/5 border border-black/10">
              {isRTL ? "٤ مسارات عمل متكاملة" : "4 Core Disciplines"}
            </span>
          </div>

          <hr className="my-2 border-none border-t border-black/10 w-full" />

          {/* Centered Content Block (Dead Center of the Card) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-4 sm:py-8 px-4 max-w-4xl mx-auto w-full">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--red)] uppercase mb-4 px-4 py-1.5 rounded-full bg-[var(--red)]/10 border border-[var(--red)]/20 mx-auto">
              {isRTL ? "خدمات الاستوديو المتكاملة" : "Capabilities & Craft"}
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-display text-[#15100C] mb-6 text-center mx-auto">
              {isRTL ? "أربع طرق بنخلي بيها علامتك حديث الناس." : "Four ways we get a business talked about."}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--theme-text-muted)] max-w-2xl text-center mx-auto leading-relaxed font-normal">
              {isRTL
                ? "كل مشروع بيمر من نفس الغرفة الإبداعية: الاستراتيجية الأول، وبعدها الحرفة اللي بتخلي الناس توقف سكرول وتتأمل."
                : "Every project runs through the same room: strategy first, then the craft that makes people stop scrolling."}
            </p>
          </div>

          <hr className="my-2 border-none border-t border-black/10 w-full" />

          {/* Bottom Row Scroll Prompt - Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-1 text-xs sm:text-sm font-semibold opacity-75 text-center">
            <span>
              {isRTL ? "مرر للأسفل لاكتشاف المسارات الأربعة" : "Scroll down to explore the 4 tracks"}
            </span>
            <span className="flex items-center gap-2 text-[var(--red)] font-bold">
              <span>01 — 04</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </div>
        </FlowSection>

        {/* CARDS 02 to 05: The 4 Detailed Disciplines (All content centered) */}
        {servicesData.map((item, idx) => (
          <FlowSection
            key={idx}
            aria-label={item.category}
            style={{ backgroundColor: item.bg, color: item.text }}
            className="border-t border-black/10 shadow-2xl"
          >
            {/* Top Bar: Centered */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full text-center">
              <span className="font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded bg-black/20 backdrop-blur-sm">
                {item.num}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] opacity-90">
                {item.category}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
                {item.badge}
              </span>
            </div>

            <hr className={`my-2 sm:my-3 border-none border-t ${item.hrColor} w-full`} />

            {/* Headline: Centered */}
            <div className="w-full text-center">
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight font-display text-center mx-auto max-w-4xl">
                {item.headline}
              </h3>
            </div>

            <hr className={`my-2 sm:my-3 border-none border-t ${item.hrColor} w-full`} />

            {/* Expanded Narrative: Centered */}
            <p className="max-w-3xl text-xs sm:text-sm md:text-base font-normal leading-relaxed opacity-95 text-center mx-auto">
              {item.lead}
            </p>

            <hr className={`my-2 sm:my-3 border-none border-t ${item.hrColor} w-full`} />

            {/* 6 Capability Boxes: Centered items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 my-1 w-full max-w-5xl mx-auto">
              {item.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-3 sm:p-3.5 rounded-xl ${item.boxBg} backdrop-blur-md flex flex-col items-center justify-center text-center transition-colors`}
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60 block mb-1">
                    {item.num}.{pIdx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold mb-1 tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs leading-relaxed opacity-85">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className={`my-2 sm:my-3 border-none border-t ${item.hrColor} w-full`} />

            {/* Bottom Quote & CTA: Centered */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full mt-auto pt-1 text-center">
              <p className="text-[11px] sm:text-xs font-semibold tracking-wide opacity-80 italic max-w-xl text-center">
                "{item.quote}"
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full border border-current hover:bg-white hover:text-black transition-all shrink-0 shadow-sm mx-auto sm:mx-0"
              >
                <span>{isRTL ? "ابدأ هذا المسار" : "Start this track"}</span>
                <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </FlowSection>
        ))}
      </FlowArt>
    </section>
  );
}
