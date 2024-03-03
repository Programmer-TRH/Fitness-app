import React from 'react'

export default function MoodDisplay({mood}) {
    const getColor = (mood) => {
      if(!mood) return "bg-gray-400"
      let color

      switch(mood.toLowerCase()) {
        case "amazing":
          color = "bg-green-300";
          break;
        case "solid job":
          color = "bg-yellow-300";
          break;
        case "glad its over":
          color = "bg-red-500"
          break;
        default:
          color: "bg-slate-600"
      }
      return color
    }
  return (
   <span className={`inline-block rounded-lg px-4 py-2 text-xs font-semibold text-gray-700 ${getColor(mood)}`}>
    {mood}
   </span>
  )
}
