export default function BlogDetails() {
  return (
    <>
      <article className="bg-[#0a0a0a] min-h-screen">
        <div className="relative h-[60vh] min-h-125 overflow-hidden">
          <img
            alt="أسرار تصوير البورتريه: كيف تلتقط روح الشخصية"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent" />
          <div className="absolute top-8 right-8 left-8">
            <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <a
                className="text-white/70 hover:text-white transition-colors"
                href="/"
                data-discover="true"
              >
                <i className="fa-solid fa-home" />
              </a>
              <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
              <a
                className="text-white/70 hover:text-white transition-colors"
                href="/blog"
                data-discover="true"
              >
                المدونة
              </a>
              <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
              <span className="text-orange-400 font-medium truncate max-w-50">
                بورتريه
              </span>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                  href="/blog?category=بورتريه"
                  data-discover="true"
                >
                  بورتريه
                </a>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar" />
                    ١٢ يناير ٢٠٢٦
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-clock" />6 دقائق للقراءة
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
              </h1>
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  alt="محمد علي"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                />
                <div>
                  <p className="font-bold text-white">محمد علي</p>
                  <p className="text-sm text-white/60">مصور بورتريه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية
                  الموضوع الحقيقية."
                </p>
              </div>
              <div className="prose-custom">
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس
                  مجرد توثيق الملامح، بل كشف القصة خلف العيون.
                </p>
                <h2
                  id="section-0"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  التواصل مع الموضوع
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة.
                  الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك
                  الموضوع.
                </p>
                <h2
                  id="section-1"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  اختيار العدسة المناسبة
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً
                  مثالياً للملامح وخلفية ضبابية جميلة.
                </p>
                <h2
                  id="section-2"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  الإضاءة الطبيعية
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع
                  بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد
                  رائعة.
                </p>
                <h2
                  id="section-3"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  التركيز على العيون
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة.
                  استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.
                </p>
                <h2
                  id="section-4"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  الخلفية والتكوين
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع
                  العيون في النقاط القوية.
                </p>
                <h2
                  id="section-5"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  الخلاصة
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل
                  الإنساني، تخلق صوراً خالدة.
                </p>
              </div>
              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-tags text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                    #بورتريه
                  </span>
                  <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                    #تصوير أشخاص
                  </span>
                  <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                    #إضاءة طبيعية
                  </span>
                </div>
              </div>
              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-share-nodes text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-x-twitter" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-linkedin-in" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-whatsapp" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-solid fa-link" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    alt="محمد علي"
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                  />
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      محمد علي
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      مصور بورتريه
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-list text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    <a
                      href="#section-0"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        1
                      </span>
                      <span className="text-sm">التواصل مع الموضوع</span>
                    </a>
                    <a
                      href="#section-1"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        2
                      </span>
                      <span className="text-sm">اختيار العدسة المناسبة</span>
                    </a>
                    <a
                      href="#section-2"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        3
                      </span>
                      <span className="text-sm">الإضاءة الطبيعية</span>
                    </a>
                    <a
                      href="#section-3"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        4
                      </span>
                      <span className="text-sm">التركيز على العيون</span>
                    </a>
                    <a
                      href="#section-4"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        5
                      </span>
                      <span className="text-sm">الخلفية والتكوين</span>
                    </a>
                    <a
                      href="#section-5"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        6
                      </span>
                      <span className="text-sm">الخلاصة</span>
                    </a>
                  </nav>
                </div>
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                      <p className="text-white font-bold">6 دقائق للقراءة</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                      <p className="text-white font-bold text-sm">١٢ يناير</p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-envelope text-orange-500 text-xl" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <a
                      className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                      href="/blog"
                      data-discover="true"
                    >
                      تصفح المزيد
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-images text-orange-500 text-xl" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <a
                className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                href="/blog"
                data-discover="true"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                href="/blog/street-photography-guide"
                data-discover="true"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="تصوير الشارع: فن التقاط الحياة اليومية"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    بورتريه
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                    تصوير الشارع: فن التقاط الحياة اليومية
                  </h3>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span className="flex items-center gap-2">
                      <img
                        alt="نادر سعيد"
                        className="w-6 h-6 rounded-full"
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face"
                      />
                      نادر سعيد
                    </span>
                    <span>7 دقائق للقراءة</span>
                  </div>
                </div>
              </a>
              <a
                className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                href="/blog/wedding-photography-guide"
                data-discover="true"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="تصوير حفلات الزفاف: دليل المصور المحترف"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    بورتريه
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                    تصوير حفلات الزفاف: دليل المصور المحترف
                  </h3>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span className="flex items-center gap-2">
                      <img
                        alt="منصور الزهراني"
                        className="w-6 h-6 rounded-full"
                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face"
                      />
                      منصور الزهراني
                    </span>
                    <span>11 دقائق للقراءة</span>
                  </div>
                </div>
              </a>
              <a
                className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                href="/blog/sports-action-photography"
                data-discover="true"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt="تصوير الرياضة والحركة: تجميد اللحظة الحاسمة"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    بورتريه
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                    تصوير الرياضة والحركة: تجميد اللحظة الحاسمة
                  </h3>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span className="flex items-center gap-2">
                      <img
                        alt="أحمد الشهري"
                        className="w-6 h-6 rounded-full"
                        src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face"
                      />
                      أحمد الشهري
                    </span>
                    <span>10 دقائق للقراءة</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
