/**
 * images.ts
 * --------------------------------------------------
 * 아카데미 템플릿에서 사용하는 이미지 경로를 한곳에서 관리하는 파일입니다.
 * 
 * 왜 분리하나요?
 * 1) 고객이 사진만 교체할 때 data.ts 전체를 건드릴 필요가 없습니다.
 * 2) Tally / Zapier / Notion / Cursor 자동화 시 이미지 URL만 별도로 주입하기 쉽습니다.
 * 3) 추후 로컬 이미지 → CDN URL 변경 시에도 이 파일만 수정하면 됩니다.
 */

export const images = {
  /** 사이트 로고 */
  logo: {
    src: '/images/logo.png',
    alt: '청담아카데미 로고',
  },

  /** 메인 히어로 이미지 */
  hero: {
    src: '/images/hero_img.jpg',
    alt: '청담아카데미 수업 환경',
  },

  /** 강사진 이미지 */
  instructors: {
    main: '/images/instructor01_img.jpg',
    sub: '/images/instructor02_img.jpg',
  },
} as const;
