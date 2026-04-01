/**
 * Site Configuration
 * 
 * This file contains global site settings and shared data.
 * Edit this file to customize basic site information.
 * 
 * Section-specific content is organized in separate data files:
 * - heroData.ts
 * - classCategoriesData.ts
 * - curriculumData.ts
 * - instructorsData.ts
 * - scheduleData.ts
 * - reviewsData.ts
 * - faqData.ts
 * - contactData.ts
 * - footerData.ts
 */

import type { SiteConfig, NavItem } from './types';

// =============================================================================
// SITE CONFIGURATION
// =============================================================================

export const siteConfig: SiteConfig = {
  // Basic site information
  siteName: '청담아카데미',

  image: {
    src: '/images/logo.png',
    alt: '청담아카데미 수업 환경',
  },
  
  // Contact information
  phone: '02-1234-5678',
  email: 'info@cheongdam-academy.com',
  
  // Address
  address: {
    street: '서울특별시 강남구 청담동 123-45',
    building: '청담타워 5층',
    subway: '지하철 7호선 청담역 3번 출구 도보 5분',
  },
  
  // Map settings
  // Replace these coordinates with your actual location
  map: {
    // Coordinates (latitude, longitude) - example: Gangnam Station area
    lat: 37.5172,
    lng: 127.0473,
    // Full address for map URLs
    fullAddress: '서울특별시 강남구 청담동 123-45 청담타워',
    // Google Maps iframe embed URL
    // Get this from Google Maps > Share > Embed a map > copy src URL only
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6330.882367633331!2d127.0180146697754!3d37.49751140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2cc3f2a7%3A0xd2e44a2795272fca!2z6rCV64Ko7Jet!5e0!3m2!1sko!2skr!4v1774879454333!5m2!1sko!2skr',
    // External map links
    googleMapLink: 'https://maps.app.goo.gl/9G3jmroxcBC7rQt96',
    naverMapLink: 'https://naver.me/FM1XyM8D',
  },
  
  // Business hours
  hours: {
    weekday: '평일 09:00 - 21:00',
    saturday: '토요일 09:00 - 18:00',
    sunday: '일요일 및 공휴일 휴무',
    consultationHours: '평일 09:00 - 20:00',
  },
  
  // CTA button text
  cta: {
    primary: '수강 상담 신청',
    short: '수업 과정 보기',
  },
  
  // KakaoTalk consultation link
  // Replace with your actual KakaoTalk open chat or channel URL
  // Example: https://pf.kakao.com/_xYOURID or https://open.kakao.com/o/YOUR_CHAT_ID
  kakaoTalkUrl: 'https://pf.kakao.com/_xexaGxj/chat',
};

// =============================================================================
// NAVIGATION MENU
// =============================================================================

export const navItems: NavItem[] = [
  { label: '수업과정', href: '#classes' },
  { label: '커리큘럼', href: '#curriculum' },
  { label: '강사진', href: '#instructors' },
  { label: '수강후기', href: '#reviews' },
  { label: '오시는길', href: '#contact' },
];