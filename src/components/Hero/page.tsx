"use client"
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import { scrollToSection } from '@/lib/utils'
import { useEffect, useState } from 'react';
import { fetchDataApi, getText } from '@/services/apiServices'

export default function Hero() {
  const [Text, setText] = useState([]);  // Simpan array name dari hasil fetch
  const [Picturess, setPicturess] = useState<string>('');

  const fetchData = async () => {
    try {
      const fetchedText = await fetchDataApi('text');
      const names = fetchedText.data.texts.map((item: { name: any; }) => item.name);
      setText(names);
      setPicturess(fetchedText.data.images);
      // console.log(fetchedText);
    } catch (error) {
      console.error('Error fetching text:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])

  // Membuat sequence menggunakan forEach
  const sequence: (string | number | ((element: HTMLElement | null) => void | Promise<void>))[] = [];
  Text.forEach((name) => {
    sequence.push(name);
    sequence.push(2000);  // Waktu delay antar kata
  });

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      {/* Bagian atas di tengah */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex-shrink-0">
          <Image
            src={Picturess || "/assets/images/depan.jpg"} // Ganti dengan path gambar Anda
            alt="Your Picture"
            width={200} // Sesuaikan ukuran gambar
            height={200} // Sesuaikan ukuran gambar
            className="rounded-full" // Membuat gambar berbentuk bulat
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hizkia Albertian L</h1>
        <p className="text-xl">
          I'm a{' '}
          {Text.length > 0 && (
            <TypeAnimation
              sequence={sequence}  // Gunakan sequence yang telah dibuat dengan forEach
              wrapper="span"
              repeat={Infinity}
            />
          )}
        </p>
      </div>

      {/* Bagian bawah */}
      <div className="flex flex-col items-center mb-[60px]">
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
          onClick={() => scrollToSection('garis-about')}
          className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Scroll for next information
        </button>
      </div>
    </div>
  );
}
