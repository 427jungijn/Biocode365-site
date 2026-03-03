/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Check, 
  ArrowDown, 
  MessageCircle, 
  Shield, 
  GraduationCap, 
  BarChart3, 
  Calendar,
  ArrowRight, 
  AlertCircle, 
  Activity, 
  ChevronUp,
  Award,
  Users
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bio-black selection:bg-bio-lime selection:text-bio-black font-sans text-bio-text">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-bio-lime z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Top Banner */}
      <div className="hidden md:block bg-bio-surface py-3 border-b border-gray-800 relative z-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-[10px] sm:text-xs md:text-sm text-white font-bold tracking-wide text-center">
          <span className="flex items-center">
            <Shield className="text-bio-lime w-3 h-3 md:w-4 md:h-4 mr-2 shrink-0" /> 
            국내 유일 고혈압 분석 특허 보유
          </span>
          <span className="hidden md:block w-px h-3 bg-gray-600"></span>
          <span className="flex items-center">
            <GraduationCap className="text-bio-lime w-3 h-3 md:w-4 md:h-4 mr-2 shrink-0" /> 
            KAIST 박사팀 자체 개발 알고리즘
          </span>
        </div>
      </div>

      {/* Sticky Header */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 border-b ${isScrolled ? "bg-bio-black/90 backdrop-blur-md border-gray-800 py-3" : "bg-bio-black border-gray-900 py-4 md:py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
            <div className="w-8 h-8 bg-bio-lime rounded-lg flex items-center justify-center">
              <Activity className="text-bio-black w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">BIOCODE<span className="text-bio-lime">365</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          </div>
          <button 
            onClick={() => scrollToSection('kakao-section')}
            className="bg-bio-lime text-bio-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition active:scale-95"
          >
            무료 입장
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-6 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-bio-lime opacity-5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-900 opacity-10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-bio-black border border-bio-lime/40 px-6 py-2.5 rounded-full text-bio-lime text-xs md:text-base font-bold mb-6 md:mb-8 shadow-[0_0_20px_rgba(210,232,35,0.1)]"
          >
            <Award className="w-4 h-4 md:w-5 md:h-5" />
            <span>국내 유일 고혈압 특화 AI 코칭 서비스</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-[100px] font-black mb-4 md:mb-6 leading-[1] text-white tracking-tighter"
          >
            "혈압약, 평생 드실<br />건가요?"
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-6xl font-black mb-10 text-white tracking-tight"
          >
            <span className="text-bio-lime highlight-underline decoration-bio-lime/40">진짜 원인</span>, AI가 찾아드립니다.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light text-bio-gray px-4"
          >
            병원 3분 진료로는 찾을 수 없었던 내 몸의 신호.<br className="hidden md:block" />
            <strong className="text-bio-lime font-medium">KAIST 박사의 알고리즘</strong>이 당신의 데이터를 정밀 분석하여<br className="hidden md:block" />
            약 없이 조절하는 과학적 해답을 드립니다.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('kakao-section')}
              className="group relative inline-flex items-center gap-3 bg-bio-lime text-bio-black font-black text-lg md:text-2xl py-5 px-10 md:px-14 rounded-full shadow-[0_0_20px_rgba(210,232,35,0.3)] hover:shadow-[0_0_40px_rgba(210,232,35,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>AI 분석 코칭룸 무료 입장</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white text-xs md:text-sm font-medium mt-6 opacity-80 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              *매주 수요일, 실제 환자 분석 리포트가 공개됩니다.
            </p>
          </motion.div>

          {/* Success Case Card */}
          <motion.div 
            id="solution"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-24 max-w-4xl mx-auto bg-gradient-to-b from-gray-800/50 to-bio-surface/50 backdrop-blur-md rounded-[2.5rem] p-1 shadow-2xl border border-white/10"
          >
            <div className="bg-bio-surface rounded-[2.4rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
              
              <div className="text-center mb-12 relative z-10">
                <span className="bg-bio-lime/10 text-bio-lime border border-bio-lime/20 font-bold px-4 py-1 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 inline-block">CASE STUDY</span>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                  수축기 175 → <span className="text-bio-lime">120 정상화</span>
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-400 mt-4">
                  50대 남성, AI 맞춤 코칭 <span className="text-white border-b border-bio-lime/50">단 14일 만의 변화</span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10 my-12">
                {/* Before */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-red-900/10 border-2 border-red-500/30 flex flex-col items-center justify-center shadow-inner relative">
                    <span className="text-red-500 font-black text-5xl tracking-tighter">175</span>
                    <span className="text-red-500/70 text-[10px] font-bold uppercase tracking-widest mt-1">High</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-4 font-bold uppercase tracking-widest">Day 01</p>
                </div>

                {/* Arrow Animation */}
                <div className="flex-1 max-w-[240px] flex flex-col items-center justify-center relative py-8 md:py-0">
                  <div className="hidden md:block w-full">
                    <svg className="w-full h-12 text-bio-lime/60" viewBox="0 0 200 40" fill="none">
                      <motion.path 
                        d="M10 20H190" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeDasharray="8 8"
                        animate={{ strokeDashoffset: [-16, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <path d="M180 10L195 20L180 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-bio-lime" />
                    </svg>
                  </div>
                  
                  {/* Mobile Arrows (Vertical Dashed Line) */}
                  <div className="md:hidden h-32 w-12 flex items-center justify-center">
                    <svg className="h-full w-12 text-bio-lime/60" viewBox="0 0 40 200" fill="none">
                      <motion.path 
                        d="M20 10V190" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeDasharray="8 8"
                        animate={{ strokeDashoffset: [-16, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <path d="M10 180L20 195L30 180" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-bio-lime shadow-glow" />
                    </svg>
                  </div>
                  
                  <div className="bg-bio-lime text-bio-black px-4 py-1.5 rounded-full font-black text-xs shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-20 uppercase tracking-wider">
                    AI Coaching
                  </div>
                </div>

                {/* After */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-bio-lime/10 border-2 border-bio-lime flex flex-col items-center justify-center shadow-[0_0_30px_rgba(210,232,35,0.15)] relative">
                    <div className="absolute -top-2 -right-2 bg-bio-lime text-bio-black rounded-full p-1.5 shadow-lg">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                    <span className="text-bio-lime font-black text-5xl tracking-tighter">120</span>
                    <span className="text-bio-lime text-[10px] font-bold uppercase tracking-widest mt-1">Normal</span>
                  </div>
                  <p className="text-bio-lime text-xs mt-4 font-bold uppercase tracking-widest">Day 14</p>
                </div>
              </div>

              <div className="bg-bio-black/40 rounded-2xl p-6 border border-white/5 relative z-10">
                <p className="text-center text-gray-300 text-sm md:text-lg font-medium leading-relaxed italic">
                  "매일 8키로씩 달려도 내려가지 않았는데, <br className="md:hidden" />
                  <span className="text-white font-bold border-b-2 border-bio-lime/50 not-italic">원인을 알고 실천하니 혈압은 2주만에 120으로 정상화</span> 되었습니다."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="pt-12 pb-32 bg-bio-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              <span className="highlight-underline">관리를 해도 왜 혈압은 개선되지 않을까요?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-bio-surface rounded-[2rem] shadow-xl transition-all border border-white/5 hover:border-bio-lime/30 group"
            >
              <div className="mb-6 text-5xl md:text-6xl">
                🤷‍♂️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-bio-lime transition">원인 모를 답답함</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                "살 빼세요, 싱겁게 드세요" 같은 뻔한 조언 말고,<br className="hidden md:block" />
                내 몸의 데이터가 말하는 <span className="text-white font-medium">진짜 이유</span>를 알고 싶지 않으신가요?
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-10 bg-bio-surface rounded-[2rem] shadow-xl transition-all border border-white/5 hover:border-bio-lime/30 group"
            >
              <div className="mb-6 text-5xl md:text-6xl">
                📉
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-bio-lime transition">단편적인 진료의 한계</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                3분 진료로는 수천 가지 생활 변수와 <br className="hidden md:block" />
                유전적 요인을 모두 분석하여 <span className="text-white font-medium">개인화된 해답</span>을 낼 수 없습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section id="kakao-section" className="pt-12 pb-32 bg-bio-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-bio-lime font-bold tracking-[0.3em] uppercase mb-4 block text-xs">AI Analysis Coaching Room</span>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 text-white tracking-tight">
              <span className="text-bio-lime">바이오코드365</span><br className="md:hidden" /> 분석 코칭룸 초대
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              어려운 공부가 아닙니다. <strong className="text-white font-medium">실제 분석 사례</strong>를<br className="md:hidden" /> 편안하게 시청하고 내 상태를 확인하세요.
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-bio-black rounded-[3rem] shadow-3xl overflow-hidden border border-white/5">
            <div className="grid lg:grid-cols-2">
              {/* Left Side */}
              <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-bio-surface/50 to-transparent flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-bio-lime/10 text-bio-lime border border-bio-lime/20 font-bold px-4 py-1.5 rounded-full text-xs mb-8 w-fit">
                  <Activity className="w-4 h-4" />
                  <span>정기 리포트 서비스</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">매주 수요일 저녁 7시<br />실제 환자 분석 영상 공개</h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-lg font-light">
                  특허 알고리즘이 환자의 데이터를 어떻게 분석해서 원인을 찾아내는지 <strong className="text-white font-medium">영상으로 쉽게</strong> 보여드립니다.
                </p>
                <ul className="space-y-5">
                  {[
                    { title: "Case Study", desc: "실제 완치 사례 정밀 분석" },
                    { title: "Easy Check", desc: "나의 혈압 유형 자가 진단" },
                    { title: "Q&A Session", desc: "전문가와 함께하는 궁금증 해결" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-bio-lime/20 p-1 rounded-md">
                        <Check className="text-bio-lime h-4 w-4" strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-white font-bold block">{item.title}</span>
                        <span className="text-gray-500 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center bg-bio-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-bio-lime opacity-[0.03] blur-[80px] rounded-full -mr-32 -mt-32"></div>
                
                <div className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/10 font-bold px-4 py-1.5 rounded-full text-xs mb-8 w-fit">
                  <Award className="w-4 h-4" />
                  <span>Welcome Gift</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">입장 즉시 영상 리포트 증정</h3>
                <div className="bg-bio-surface/50 border border-white/5 p-6 rounded-2xl mb-10">
                  <p className="text-bio-lime font-black text-lg mb-2">"AI로 어떻게 고혈압이 정상혈압이 될 수 있었을까?"</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    KAIST 박사팀이 분석한 고혈압 관리의 핵심 리포트 풀버전 영상을 입장 즉시 보내드립니다.
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert('카카오톡 오픈채팅방 링크로 연결됩니다.')}
                  className="w-full bg-bio-lime text-bio-black font-black text-xl py-6 rounded-2xl text-center shadow-[0_10px_30px_rgba(210,232,35,0.2)] transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-7 h-7 fill-current" />
                  코칭방 무료 입장하기
                </motion.button>
                <p className="text-xs text-gray-500 text-center mt-6 font-medium tracking-wide">
                  익명 참여 가능 • 광고 및 스팸 금지 • 누구나 무료 입장
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="pt-12 pb-32 bg-bio-black text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              바이오코드365는 <span className="text-bio-lime highlight-underline decoration-bio-lime/30">데이터</span>로 증명합니다.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {[
              { icon: "🎓", title: "KAIST 박사 개발", desc: "고도화된 생체 데이터 분석 알고리즘" },
              { icon: "🛡️", title: "국내 유일 특허", desc: "고혈압 원인 분석 특화 기술 보유" },
              { icon: "📊", title: "임상 데이터 학습", desc: "3만 편 이상의 의학 논문 기반 AI" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 bg-bio-surface border border-white/5 rounded-[2rem] flex items-center justify-center mb-8 text-4xl shadow-lg group-hover:border-bio-lime/50 transition-all duration-500 group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="font-black text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-8 bg-bio-surface/30 rounded-3xl border border-white/5 text-gray-500 text-xs md:text-sm leading-relaxed text-center backdrop-blur-sm">
            <p className="flex items-center justify-center gap-2 mb-2 text-gray-400 font-bold">
              <AlertCircle className="w-4 h-4" />
              서비스 이용 안내
            </p>
            본 서비스는 의료인의 진단·처방을 대체하지 않으며, 생활습관 관리와 자기 관리를 돕기 위한 
            <strong className="text-gray-300 font-medium">논문+AI 비교분석을 통한 비의료 건강관리 코칭서비스</strong>입니다.
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-12 pb-32 bg-bio-surface text-center relative overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-bio-lime opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-bio-lime font-black mb-8 tracking-[0.4em] text-sm md:text-base uppercase"
          >
            Limited Access
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-12 leading-[1.1] text-white tracking-tight">
            내 혈압의 해답,<br />이제 <span className="text-bio-lime">AI</span>로 찾으세요.
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('kakao-section')}
            className="inline-flex items-center gap-4 bg-bio-lime text-bio-black font-black text-xl md:text-3xl py-6 px-12 md:px-20 rounded-full shadow-[0_20px_50px_rgba(210,232,35,0.3)] hover:shadow-[0_20px_70px_rgba(210,232,35,0.5)] transition-all cursor-pointer"
          >
            <span>무료 코칭룸 입장하기</span>
            <ArrowRight className="w-8 h-8" />
          </motion.button>
          
          <footer className="mt-32 pt-12 border-t border-white/5 text-xs text-white space-y-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium">
              <p>(주)바이오코드365</p>
              <p>대표이사: 서정진</p>
              <p>사업자등록번호: 753-87-0339</p>
            </div>
            <p className="opacity-60">특허출원: 10-2025-0194080</p>
            <p className="max-w-2xl mx-auto opacity-40 leading-relaxed pt-4">
              © 2026 BIOCODE365. All rights reserved. 본 서비스는 비의료 건강관리 코칭 서비스입니다.
            </p>
          </footer>
        </div>
      </section>

      {/* Floating Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-bio-surface border border-white/10 rounded-full flex items-center justify-center text-white shadow-2xl z-50 hover:bg-bio-lime hover:text-bio-black transition-all"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

