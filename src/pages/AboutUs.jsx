import React from "react";

export const AboutUs = () => {
  return (
    <section className="h-screen">
      <div className="flex flex-col items-center justify-between">
        <div className="text-center pt-8 pb-2">
          <h1 className="text-3xl font-bold text-slate-900">Get to know Me</h1>
        </div>
        <div className="rounded-full mx-auto bg-slate-700 h-1 w-20 mt-1 mb-10"></div>
        <div className="font-medium text-slate-700">
          Menjaga kualitas dan integritas dalam semua aspek bisnis dengan mengedepankan prinsip etika dan kebijakan yang tepat.
        </div>
      </div>
    </section>
  )
}