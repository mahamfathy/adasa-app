import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import type { Author, Data } from "../../Interfaces/data.interface";
import SharedButton from "../SharedButton/SharedButton";
import SubmitForm from "../SharedSubmitForm/SharedSubmitForm";

export default function NewsSubscribtionSection() {
  const data = useContext(dataContext) as Data;
  const author = data.posts.map((blog) => blog.author);
  return (
    <>
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="linear-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <SubmitForm className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10 items-start">
              <SharedButton
                className="btn-primary hover:from-orange-600 hover:to-orange-700 rounded-2xl h-14.5 sm:w-auto w-full"
                type="submit"
              >
                اشترك الآن
              </SharedButton>
            </SubmitForm>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  {author.slice(0, 3).map((author: Author) => (
                    <img
                      key={author.avatar}
                      className="w-8 h-8 rounded-full border-2 border-[#161616]"
                      alt={author.name}
                      src={author.avatar}
                    />
                  ))}
                </div>
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
