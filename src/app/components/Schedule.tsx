import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';
import { scheduleInfoData, pricingData } from '../data/scheduleData';
import { AnimatedSection } from './AnimatedSection';
import { CountUp } from "./CountUp";

const iconMap = {
  '수업 기간': Calendar,
  '수업 시간': Clock,
  '수업 장소': MapPin,
};

export function Schedule() {
  return (
    <AnimatedSection delay={0.05} className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">수업 정보</h2>
          <p className="text-gray-600">편리한 시간대에 수업을 선택하실 수 있습니다</p>
        </div>

        {/* Schedule Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {scheduleInfoData.map((info) => {
            const Icon = iconMap[info.label as keyof typeof iconMap];
            return (
              <div 
                key={info.label}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-900 text-sm mb-1">{info.value}</p>
                    <p className="text-sm text-gray-600 leading-snug">{info.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">수강료 안내</h3>
          </div>

          {/* Pricing Cards - Better for mobile */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {pricingData.map((item) => (
              <div 
                key={item.title}
                className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-blue-600"><CountUp value={item.price} /></span>
                  </div>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.frequency}
                    </span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">• 등록 안내:</span> 교재비 별도 | 조기 등록 시 10% 할인 (매월 20일까지)
            <br />
            <span className="font-bold text-gray-900">• 환불 규정:</span> 학원법 시행령 제18조 제3항에 따라 환불
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}