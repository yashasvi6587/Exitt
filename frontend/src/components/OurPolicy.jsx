import React from 'react'
import { assets } from '../assets/assets'
import '../Styles/OurPolicy.css'

const policies = [
  {
    icon: assets.exchange_icon,
    title: "Easy Exchange Policy",
    desc: "We offer hassle free exchange policy"
  },
  {
    icon: assets.quality_icon,
    title: "7 Days Return Policy",
    desc: "We provide 7 days free return policy"
  },
  {
    icon: assets.support_img,
    title: "Best Customer Support",
    desc: "We provide best 24/7 customer support"
  }
]

const OurPolicy = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="group policy-card border border-gray-200 dark:border-zinc-800 p-6 rounded-xl text-center shadow-md hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={policy.icon}
              alt={policy.title}
              className="w-16 h-16 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110"
            />
            <p className="text-lg font-semibold mb-2">{policy.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{policy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPolicy
