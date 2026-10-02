"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

interface ClientBrand {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
}

const ALL_CLIENT_LOGOS: ClientBrand[] = [
  { id: "01", name: "Tie House", nameAr: "تاي هاوس", logo: "/assets/images/clients/01_Tie_House.png" },
  { id: "02", name: "Game Gear Nutrition", nameAr: "جيم جير نيوتريشن", logo: "/assets/images/clients/02_Game_Gear_Nutrition.png" },
  { id: "03", name: "1650 Specialty Coffee", nameAr: "1650 كافيه", logo: "/assets/images/clients/03_1650_Specialty_Coffee.png" },
  { id: "04", name: "El Robaa Dental Clinic", nameAr: "عيادات الربع للأسنان", logo: "/assets/images/clients/04_El_Robaa_Dental_Clinic.png" },
  { id: "05", name: "OYO Asian Food", nameAr: "أويو", logo: "/assets/images/clients/05_OYO_Asian_Food.png" },
  { id: "06", name: "Fit Factory Health Club", nameAr: "فيت فاكتوري", logo: "/assets/images/clients/06_Fit_Factory_Health_Club.png" },
  { id: "07", name: "Surgimedic", nameAr: "سيرجيميديك", logo: "/assets/images/clients/07_Surgimedic.png" },
  { id: "08", name: "Egy Spring", nameAr: "إيجي سبرنج", logo: "/assets/images/clients/08_Egy_Spring.png" },
  { id: "09", name: "Fun Day", nameAr: "فان داي", logo: "/assets/images/clients/09_Fun_Day.png" },
  { id: "10", name: "Nine", nameAr: "ناين", logo: "/assets/images/clients/10_Nine.png" },
  { id: "11", name: "Walk 10", nameAr: "ووك 10", logo: "/assets/images/clients/11_Walk_10.png" },
  { id: "12", name: "Opium", nameAr: "أوبيوم", logo: "/assets/images/clients/12_Opium.png" },
  { id: "13", name: "Auto Wolf", nameAr: "أوتو ولف", logo: "/assets/images/clients/13_Auto_Wolf.png" },
  { id: "14", name: "Friends Motors", nameAr: "فريندز موتورز", logo: "/assets/images/clients/14_Friends_Motors.png" },
  { id: "15", name: "Pure Fitness Equipment", nameAr: "بيور فيتنس", logo: "/assets/images/clients/15_Pure_Fitness_Equipment.png" },
  { id: "16", name: "Kenwood", nameAr: "كينوود", logo: "/assets/images/clients/16_Kenwood.png" },
  { id: "17", name: "Hyper One", nameAr: "هايبر وان", logo: "/assets/images/clients/17_Hyper_1.png" },
  { id: "18", name: "KIKO Milano", nameAr: "كيكو ميلانو", logo: "/assets/images/clients/18_KIKO_Milano.png" },
  { id: "19", name: "King Salman University", nameAr: "جامعة الملك سلمان الدولية", logo: "/assets/images/clients/19_King_Salman_International_University.png" },
  { id: "20", name: "Ahmed Khateeb MP", nameAr: "النائب أحمد الخطيب", logo: "/assets/images/clients/20_Ahmed_Khateeb_MP.png" },
  { id: "21", name: "Ahmed Helmy MP", nameAr: "النائب أحمد حلمي", logo: "/assets/images/clients/21_Ahmed_Helmy_MP.png" },
  { id: "22", name: "Hamouda MP & Businessman", nameAr: "النائب ورجل الأعمال حمودة", logo: "/assets/images/clients/22_Hamouda_MP_and_Businessman.png" },
  { id: "23", name: "Zewail City", nameAr: "مدينة زويل للعلوم والتكنولوجيا", logo: "/assets/images/clients/23_Zewail_City.png" },
  { id: "24", name: "Memaar Degla", nameAr: "معمار دجلة", logo: "/assets/images/clients/24_Memaar_Degla.png" },
  { id: "25", name: "Memaar Almorshedy", nameAr: "معمار المرشدي", logo: "/assets/images/clients/25_Memaar_Almorshedy.png" },
  { id: "26", name: "Wild Burger", nameAr: "وايلد برجر", logo: "/assets/images/clients/26_Wild_Burger.png" },
  { id: "27", name: "Cadbury", nameAr: "كادبوري", logo: "/assets/images/clients/27_Cadbury.png" },
  { id: "28", name: "L'azurde", nameAr: "لازوردي", logo: "/assets/images/clients/28_LAzurde.png" },
  { id: "29", name: "Arma", nameAr: "آرما", logo: "/assets/images/clients/29_Arma.png" },
  { id: "30", name: "Woods", nameAr: "وودز", logo: "/assets/images/clients/30_Woods.png" },
  { id: "31", name: "Hyde Park Development", nameAr: "هايد بارك للتطوير العقاري", logo: "/assets/images/clients/31_Hyde_Park_Development.png" },
  { id: "32", name: "Diamond Land", nameAr: "دايموند لاند", logo: "/assets/images/clients/32_Diamond_Land.png" },
  { id: "33", name: "Future Leaders Language School", nameAr: "مدارس قادة المستقبل", logo: "/assets/images/clients/33_Future_Leaders_Language_School.png" },
  { id: "34", name: "Green Heights American Schools", nameAr: "مدارس جرين هايتس الأمريكية", logo: "/assets/images/clients/34_Green_Heights_Egypt_American_Schools.png" },
];

// Row 1: 17 selected brands
const ROW_1 = [
  ALL_CLIENT_LOGOS[0],  // Tie House
  ALL_CLIENT_LOGOS[2],  // 1650 Coffee
  ALL_CLIENT_LOGOS[4],  // OYO Asian Food
  ALL_CLIENT_LOGOS[6],  // Surgimedic
  ALL_CLIENT_LOGOS[8],  // Fun Day
  ALL_CLIENT_LOGOS[10], // Walk 10
  ALL_CLIENT_LOGOS[12], // Auto Wolf
  ALL_CLIENT_LOGOS[14], // Pure Fitness
  ALL_CLIENT_LOGOS[16], // Hyper 1
  ALL_CLIENT_LOGOS[17], // KIKO Milano
  ALL_CLIENT_LOGOS[22], // Zewail City
  ALL_CLIENT_LOGOS[24], // Memaar Almorshedy
  ALL_CLIENT_LOGOS[26], // Cadbury
  ALL_CLIENT_LOGOS[27], // L'azurde
  ALL_CLIENT_LOGOS[28], // Arma
  ALL_CLIENT_LOGOS[30], // Hyde Park
  ALL_CLIENT_LOGOS[32], // Future Leaders
];

// Row 2: 17 selected brands
const ROW_2 = [
  ALL_CLIENT_LOGOS[1],  // Game Gear Nutrition
  ALL_CLIENT_LOGOS[3],  // El Robaa Clinic
  ALL_CLIENT_LOGOS[5],  // Fit Factory
  ALL_CLIENT_LOGOS[7],  // Egy Spring
  ALL_CLIENT_LOGOS[9],  // Nine
  ALL_CLIENT_LOGOS[11], // Opium
  ALL_CLIENT_LOGOS[13], // Friends Motors
  ALL_CLIENT_LOGOS[15], // Kenwood
  ALL_CLIENT_LOGOS[18], // King Salman University
  ALL_CLIENT_LOGOS[19], // Ahmed Khateeb MP
  ALL_CLIENT_LOGOS[20], // Ahmed Helmy MP
  ALL_CLIENT_LOGOS[21], // Hamouda MP
  ALL_CLIENT_LOGOS[23], // Memaar Degla
  ALL_CLIENT_LOGOS[25], // Wild Burger
  ALL_CLIENT_LOGOS[29], // Woods
  ALL_CLIENT_LOGOS[31], // Diamond Land
  ALL_CLIENT_LOGOS[33], // Green Heights
];

// Duplicated rows for seamless infinite wrap
const ROW_1_ITEMS = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_ITEMS = [...ROW_2, ...ROW_2, ...ROW_2];

export default function GalleryClients() {
  const { t, isRTL } = useLanguage();
  const section = t.results.clientsSection;

  if (!section) return null;

  return (
    <section className="relative z-10 w-full py-16 sm:py-20 md:py-24 bg-[#FAF6F0] dark:bg-[#061516] transition-colors border-t border-black/[0.06] dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D2392A]/10 text-[#D2392A] border border-[#D2392A]/25 mb-4 sm:mb-5">
            <Building2 size={14} className="shrink-0" />
            <span>{section.badge}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#15100C] dark:text-[#F2E6DC] leading-[1.08] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}
          >
            {section.title}
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#D2392A] mb-3">
            {section.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#15100C]/75 dark:text-[#F2E6DC]/75 leading-relaxed font-normal">
            {section.sub}
          </p>

          {/* Quick Credibility Trust Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 w-full max-w-2xl pt-6 border-t border-black/[0.08] dark:border-white/10">
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#D2392A]" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
                {section.stat1Num}
              </span>
              <span className="text-[11px] sm:text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-semibold mt-1">
                {section.stat1Label}
              </span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-black/[0.08] dark:border-white/10 px-2">
              <span className="text-2xl sm:text-3xl font-black text-[#15100C] dark:text-[#F2E6DC]" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
                {section.stat2Num}
              </span>
              <span className="text-[11px] sm:text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-semibold mt-1">
                {section.stat2Label}
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#D2392A]" style={{ fontFamily: "var(--font-kanit), 'Kanit', sans-serif" }}>
                {section.stat3Num}
              </span>
              <span className="text-[11px] sm:text-xs text-[#15100C]/70 dark:text-[#F2E6DC]/70 font-semibold mt-1">
                {section.stat3Label}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width Animated Scroll Velocity Showcase */}
      <div className="relative w-full my-6 overflow-hidden py-4" dir="ltr">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#FAF6F0] dark:from-[#061516] to-transparent z-10" />

        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#FAF6F0] dark:from-[#061516] to-transparent z-10" />

        <div className="flex flex-col space-y-4 sm:space-y-6">
          {/* Row 1 - Velocity: -0.8 (gentle glide to the left) */}
          <ScrollVelocity velocity={-0.8} pauseOnHover={true}>
            {ROW_1_ITEMS.map((client, idx) => (
              <div
                key={`row1-${client.id}-${idx}`}
                title={isRTL ? client.nameAr : client.name}
                className="group relative shrink-0 h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60 rounded-2xl bg-white border border-black/[0.08] dark:border-white/10 shadow-[0_4px_16px_rgba(21,16,12,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_28px_rgba(210,57,42,0.14)] hover:border-[#D2392A]/50 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3.5 cursor-pointer select-none overflow-hidden"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                    className="object-contain p-1.5 sm:p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </ScrollVelocity>

          {/* Row 2 - Velocity: 0.8 (gentle glide to the right) */}
          <ScrollVelocity velocity={0.8} pauseOnHover={true}>
            {ROW_2_ITEMS.map((client, idx) => (
              <div
                key={`row2-${client.id}-${idx}`}
                title={isRTL ? client.nameAr : client.name}
                className="group relative shrink-0 h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60 rounded-2xl bg-white border border-black/[0.08] dark:border-white/10 shadow-[0_4px_16px_rgba(21,16,12,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_28px_rgba(210,57,42,0.14)] hover:border-[#D2392A]/50 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3.5 cursor-pointer select-none overflow-hidden"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                    className="object-contain p-1.5 sm:p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </ScrollVelocity>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Verification Strip Badge */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-[#15100C]/60 dark:text-[#F2E6DC]/60">
          <CheckCircle2 size={15} className="text-[#D2392A]" />
          <span>
            {isRTL
              ? "34 علامة تجارية رائدة ومؤسسة دولية وثقت بخبرات سيراد التسويقية والإنتاجية"
              : "34+ Leading brands and multinational institutions powered by CIRAD"}
          </span>
        </div>

      </div>
    </section>
  );
}
