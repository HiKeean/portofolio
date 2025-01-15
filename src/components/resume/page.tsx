"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Resume() {
  const education = [
    {
      title: "Sekolah Menengah atas",
      date: "Jul 2015 - May 2018",
      institution: "SMAK IPEKA TOMANG II, Greenville, Jakarta Barat, Indonesia.",
    },
    {
      title: "College",
      date: "Jan. 2019 - Jan. 2020",
      institution: "Studienkolleg Kaiserslautern, Kaiserslautern Germany.",
    },
    {
      title: "Undergraduate",
      date: "Sept. 2021 - now",
      institution: "Universitas Bina Nusantara (Binus), Kemanggisan, Jakarta Barat, Indonesia",
    },
  ]

  const experience = [
    {
      title: "Pemuda Pelajar Indonesia (PPI) Kaiserslautern",
      date: "2019-2020",
      role: "Pengurus kerohanian Kristen di PPI Kaiserslautern",
      details: [
        "Panitia acara natal PPI Kaiserslautern",
        "Ketua pemusik ibadah setiap minggu",
      ],
    },
    {
      title: "UKM TFISC Binus",
      date: "May 2023 - Now",
      role: "Aktivis Education",
      details: [
        "Mengajar Bahasa Inggris anak kelas 6 SD",
        "Mengajar Bahasa Inggris anak kelas 9 SMP",
      ],
    },
    {
      title: "PT. Berkat Satria Mandiri",
      date: "Feb. 2022 - Now",
      role: "Accounting & Cashier",
      details: [
        "Membuat Faktur dari semua transaksi",
        "Membuat Pembukuan dan sistem pembukuan",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Resume</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          {education.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p>{item.institution}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Professional and Organization Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {experience.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p><em>{item.role}</em></p>
              <ul className="list-disc pl-5 mt-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

