/**
 * App.tsx
 * --------------------------------------------------
 * 아카데미형 표준 템플릿의 전체 페이지 조립 파일입니다.
 * 섹션 순서를 여기서 관리합니다.
 */
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClassCategories } from './components/ClassCategories';
import { Curriculum } from './components/Curriculum';
import { Instructors } from './components/Instructors';
import { Schedule } from './components/Schedule';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollIndicator } from './components/ScrollIndicator';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ClassCategories />
        <Curriculum />
        <Instructors />
        <Schedule />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
