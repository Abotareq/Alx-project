import React from 'react'

export default function ({subtitle, title}) {
  return (
    <>    <div className="text-center my-12">
    {/* Subtitle */}
    <h3 className="text-[#fc80a2] font-medium text-sm md:text-base font-mono">
      {subtitle}
    </h3>

    {/* Main title */}
    <h2 className="mt-2 font-extrabold text-[#484c74] text-2xl md:text-4xl font-mono">
      {title}
    </h2>
  </div></>
  )
}
