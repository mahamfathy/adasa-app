import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
};
export default function SubmitForm({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (e: Inputs) => {
    console.log(e.email);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="relative w-full">
          {" "}
          <input
            {...register("email", {
              required: "* البريد الإلكتروني مطلوب",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "* عنوان بريد إلكتروني غير صالح",
              },
            })}
            placeholder="أدخل بريدك الإلكتروني"
            className={`w-full px-5 py-4 rounded-xl bg-[#0a0a0a] border ${errors.email ? "border-red-500" : "border-[#262626]"} focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors`}
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-right text-sm absolute -bottom-6 right-2">
              {errors.email.message}
            </p>
          )}
        </div>
        {children}
      </form>
    </>
  );
}
