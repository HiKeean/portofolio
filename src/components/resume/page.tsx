import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import type { EducationItem, ExperienceItem, TimelineItemProps } from "./types"
import { scrollToSection } from "@/lib/utils"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function ModernResumeWithTimeline() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-12" {...fadeIn}>
          Resume
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Education</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-black" aria-hidden="true"></div>
              {educationData.map((item, index) => {
                return (
                  <TimelineItem company={""} key={index} {...item} isLast={index === educationData.length - 1} />
                )
              })}
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Professional Experience</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-black" aria-hidden="true"></div>
              {experienceData.map((item, index) => (
                <TimelineItem key={index} {...item} isLast={index === experienceData.length - 1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[70px]">
        <div className="animate-bounce mb-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
        <div className="animate-bounce mb-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
        <div className="animate-bounce mb-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
        <button
          onClick={() => scrollToSection('garis-skills')}
          className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Scroll for next information
        </button>
      </div>
    </div>
  )
}

function TimelineItem({
  title,
  period,
  institution,
  company,
  additionalInfo,
  isLast,
}: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const showAdditionalInfo = isHovered || isClicked

  return (
    <motion.div
      className="mb-8 flex"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-300"></div>}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{period}</p>
        <p className="text-gray-700 mt-2 italic">{institution || company}</p>
        <AnimatePresence>
          {showAdditionalInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-gray-100 rounded-md"
            >
              {additionalInfo && (
          <ul className="list-disc list-inside mt-3 text-gray-700">
            {additionalInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const educationData: EducationItem[] = [
  {
    title: "Undergraduate",
    period: "Sept. 2021 - now",
    institution: "Universitas Bina Nusantara (Binus), Kemanggisan, Jakarta Barat, Indonesia",
    additionalInfo: ["Belajar Computer Science dengan minor Artificial Intelligence dan Web Engineer."],
  },
  {
    title: "College",
    period: "Jan. 2019 - Jan. 2020",
    institution: "Studienkolleg Kaiserslautern, Kaiserslautern Germany",
    additionalInfo: [],
  },
  {
    title: "Sekolah Menengah Atas",
    period: "Jul 2015 - May 2018",
    institution: "SMAK IPEKA TOMANG II, Greenville, Jakarta Barat, Indonesia",
    additionalInfo: []
  },
]

const experienceData: ExperienceItem[] = [
  {
    title: "Information Technology Mobile and Website Application Developer",
    period: "Aug 2024 - Feb 2025",
    company: "PT. BCA Finance",
    additionalInfo: ["Membantu menambahkan fitur pada aplikasi internal Dis-APP", "Membantu menambahkan fitur pada aplikasi User-Management","Membantu SIT aplikasi One ME", "Membantu SIT aplikasi new DMS", "Membantu SIT aplikasi Profiling Showroom", "Membantu SIT Aplikasi Test Drive untuk Expo BCA"],
    institution:""
  },
  {
    title: "Web and Mobile Engineer Internship",
    period: "Feb 2024 - Aug 2024",
    company: "PT. BCA MultiFinance",
    additionalInfo: ["Membuat Order-Simulation untuk Expo BCA Offline", "Membantu menyelesaikan website Kredit Usaha Rakyat", "Membatu membuat API Merger antara BCA Multifinance dengan BCA Finance", "Membuat aplikasi internal karyawan 'PESONA' dengan bahasa pemograman Flutter"],
    institution:""
  },
  {
    title: "Accounting & Cashier",
    period: "Feb. 2022 - Feb 2024",
    company: "PT. Berkat Satria Mandiri",
    additionalInfo: ["Membuat Faktur dari semua transaksi", "Membuat Pembukuan dan sistem pembukuan"],
    institution: ""
  },
  {
    title: "Aktivis Education",
    period: "May 2023 - Now",
    company: "UKM TFISC Binus",
    additionalInfo: ["Mengajar Bahasa Inggris anak kelas 6 SD", "Mengajar Bahasa Inggris anak kelas 9 SMP"],
    institution: ""

  },
  {
    title: "Pengurus kerohanian Kristen",
    period: "2019-2020",
    company: "Pemuda Pelajar Indonesia (PPI) Kaiserslautern",
    additionalInfo: ["Panitia acara natal PPI Kaiserslautern", "Ketua pemusik ibadah setiap minggu"],
    institution: ""

  },
]

