/**
 * types.ts
 * --------------------------------------------------
 * 통합형 데이터 구조를 위한 타입 정의 파일입니다.
 * 
 * 이 파일의 목적
 * - data.ts 안의 구조를 안정적으로 유지
 * - 고객별 데이터를 바꿀 때 필수 항목 누락 방지
 * - Cursor에서 JSON → TS 변환 시 기준 스키마 역할 수행
 */

import type { LucideIcon } from 'lucide-react';

/** 공통 이미지 객체 */
export interface ImageAsset {
  /** 이미지 경로 또는 외부 URL */
  src: string;
  /** 접근성 및 SEO를 위한 대체 텍스트 */
  alt: string;
}

/** 헤더/모바일 메뉴 등에 공통으로 사용하는 네비게이션 항목 */
export interface NavItem {
  label: string;
  href: string;
}

/** 사이트 전체 공통 설정 */
export interface SiteConfig {
  siteName: string;
  image: ImageAsset;
  phone: string;
  email: string;
  address: {
    street: string;
    building: string;
    subway: string;
  };
  map: {
    lat?: number;
    lng?: number;
    fullAddress: string;
    googleMapEmbedUrl?: string;
    googleMapLink: string;
    naverMapLink: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    consultationHours: string;
  };
  cta: {
    primary: string;
    secondary: string;
    short: string;
  };
  kakaoTalkUrl: string;
}

/** 히어로 통계 카드 */
export interface HeroStat {
  value: string;
  label: string;
}

/** 첫 화면 히어로 섹션 */
export interface HeroContent {
  headline: string;
  headlineHighlight: string;
  headlineEnd: string;
  subheadline: string;
  image: ImageAsset;
  stats: HeroStat[];
}

/** 수업 과정 상단 섹션 설명 */
export interface ClassCategoriesSection {
  title: string;
  subtitle: string;
  cta: {
    description: string;
    buttonText: string;
  };
}

/** 수업 과정 카드 */
export interface ClassCategory {
  title: string;
  description: string;
  duration: string;
  sessions: string;
  targets: string[];
}

/** 커리큘럼 단계 */
export interface CurriculumStage {
  title: string;
  weeks: string;
  topics: string[];
}

/** 강사진 정보 */
export interface Instructor {
  name: string;
  title: string;
  experience: string;
  education: string;
  specialties: string[];
  achievements: string;
  certifications: string[];
  image: string;
}

/** 수업 정보 카드 */
export interface ScheduleInfo {
  label: string;
  value: string;
  detail: string;
}

/** 수강료 카드 */
export interface PricingItem {
  title: string;
  duration: string;
  frequency: string;
  price: string;
  features: string[];
}

/** 후기 카드 */
export interface Review {
  name: string;
  course: string;
  rating: number;
  date: string;
  content: string;
  result: string;
}

/** 후기 상단 통계 */
export interface ReviewStat {
  value: string;
  label: string;
}

/** FAQ 항목 */
export interface FAQ {
  question: string;
  answer: string;
}

/** 오시는 길 하단 교통 안내 */
export interface TransportationInfo {
  icon: string;
  label: string;
  detail: string;
}

/** 문의 섹션 내부 문구 */
export interface ContactContent {
  sectionTitle: string;
  sectionDescription: string;
  consultationTitle: string;
  labels: {
    phone: string;
    email: string;
    hours: string;
    address: string;
  };
  buttons: {
    naverMap: string;
    googleMap: string;
    phoneConsultation: string;
    kakaoConsultation: string;
    emailInquiry: string;
  };
  transportationTitle: string;
  ctaDescription: string;
}

/** 푸터 소셜 링크 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

/** 푸터 데이터 */
export interface FooterContent {
  description: string;
  socialLinks: SocialLink[];
  copyright: string;
}
