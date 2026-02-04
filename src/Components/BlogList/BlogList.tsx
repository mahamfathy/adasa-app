import type { Data } from "../../Interfaces/data.interface";
import FilterSection from "../FilterSection/FilterSection";

export default function BlogList({ data }: { data: Data }) {
  return (
    <>
      <FilterSection data={data} />
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض <span className="font-bold text-white">9</span> مقالات
              <span>
                {" "}
                في{" "}
                <span className="font-bold text-orange-500 capitalize">
                  تقنيات
                </span>
              </span>
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  className="p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                  title="عرض شبكي"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                  title="عرض قائمة"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <button className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                مسح الفلاتر
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              className="group card overflow-hidden"
              style={{ animationDelay: "0ms" }}
            >
              <a
                className="block"
                href="/blog/camera-settings-basics"
                data-discover="true"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      7 دقائق للقراءة
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>٨ يناير ٢٠٢٦</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
                  </h3>
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم
                    الكامل في صورك.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="داود خالد"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          داود خالد
                        </p>
                        <p className="text-xs text-neutral-500">مدرب تصوير</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article
              className="group card overflow-hidden"
              style={{ animationDelay: "100ms" }}
            >
              <a
                className="block"
                href="/blog/photo-composition-rules"
                data-discover="true"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      9 دقائق للقراءة
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>٥ يناير ٢٠٢٦</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
                  </h3>
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون
                    لإنشاء صور مؤثرة بصرياً.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="ليث محمود"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          ليث محمود
                        </p>
                        <p className="text-xs text-neutral-500">فنان بصري</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article
              className="group card overflow-hidden"
              style={{ animationDelay: "200ms" }}
            >
              <a
                className="block"
                href="/blog/food-photography-basics"
                data-discover="true"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="تصوير الطعام: كيف تجعل أطباقك تبدو شهية"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      8 دقائق للقراءة
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>٢٥ ديسمبر ٢٠٢٥</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    تصوير الطعام: كيف تجعل أطباقك تبدو شهية
                  </h3>
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية
                    وتجذب العيون.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="هاني الشمري"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          هاني الشمري
                        </p>
                        <p className="text-xs text-neutral-500">مصور طعام</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article
              className="group card overflow-hidden"
              style={{ animationDelay: "300ms" }}
            >
              <a
                className="block"
                href="/blog/black-white-photography"
                data-discover="true"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="التصوير بالأبيض والأسود: فن الضوء والظل"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      9 دقائق للقراءة
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>٢٠ ديسمبر ٢٠٢٥</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    التصوير بالأبيض والأسود: فن الضوء والظل
                  </h3>
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون
                    ألوان.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="فارس العلي"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          فارس العلي
                        </p>
                        <p className="text-xs text-neutral-500">
                          فنان فوتوغرافي
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article
              className="group card overflow-hidden"
              style={{ animationDelay: "400ms" }}
            >
              <a
                className="block"
                href="/blog/macro-photography-world"
                data-discover="true"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="عالم التصوير الماكرو: اكتشف التفاصيل الخفية"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      10 دقائق للقراءة
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>١٥ ديسمبر ٢٠٢٥</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    عالم التصوير الماكرو: اكتشف التفاصيل الخفية
                  </h3>
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة
                    التي تفوتنا بالعين المجردة.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="رامي الخطيب"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          رامي الخطيب
                        </p>
                        <p className="text-xs text-neutral-500">مصور ماكرو</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
            <article
              className="group card overflow-hidden"
              style={{ animationDelay: "500ms" }}
            >
              <a
                className="block"
                href="/blog/product-photography-essentials"
                data-discover="true"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt="تصوير المنتجات: أساسيات التصوير التجاري"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      تقنيات
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      8 دقائق للقراءة
                    </span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span>٥ ديسمبر ٢٠٢٥</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    تصوير المنتجات: أساسيات التصوير التجاري
                  </h3>
                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو
                    عملائك التجاريين.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="لؤي الصالح"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          لؤي الصالح
                        </p>
                        <p className="text-xs text-neutral-500">مصور تجاري</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </div>
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              disabled
              className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex items-center gap-1">
              <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white">
                1
              </button>
              <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
                2
              </button>
            </div>
            <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]">
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <p className="text-center text-neutral-500 mt-4 text-sm">
            صفحة 1 من 2
          </p>
        </div>
      </section>
    </>
  );
}
