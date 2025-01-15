import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateAge, scrollToSection } from '@/lib/utils';
import { fetchDataApi } from '@/services/apiServices'; 

interface PersonalInfo {
  phone: string;
  address: string;
  email: string;
  degree: string;
  pekerjaan: string;
  picture : string;
}

export default function About() {
  // Set birth date
  const birthDate = '2000-02-21';
  const age = calculateAge(birthDate);

  // State untuk menyimpan data API
  const [aboutText, setAboutText] = useState('');
  const [PI, setPI] = useState<PersonalInfo | null>(null);

  const fetchAboutData = async () => {
    try {
      const response = await fetchDataApi('pi');
      if (response.success) {
        setAboutText(response.data.abtMe[0].name);
        setPI({
          phone: response.data.pi.phone,
          address: response.data.pi.address,
          email: response.data.pi.email,
          degree: response.data.pi.degree,
          pekerjaan: response.data.pi.pekerjaan,
          picture : response.data.pi.picture
        });
      } else {
        console.error('Failed to fetch About data');
      }
    } catch (error) {
      console.error('Error fetching About data:', error);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <section id='about' className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0">
          <div className="flex-shrink-0">
          <Image
            src={PI?.picture || "/assets/images/profile.jpg"}
            alt="Hizkia Albertian"
            width={200}
            height={200}
            priority
            layout="intrinsic"
            className="rounded-full"
          />
          </div>
          <div className="space-y-6 ml-10 max-w-5xl">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg">
              {aboutText || 'Loading about content...'}
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                {PI ?
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="font-semibold">Birthday:</dt>
                    <dd>21 Feb 2000</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Age:</dt>
                    <dd>{age} years old</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Phone:</dt>
                    <dd>
                      {PI ? (
                        <a href={`tel:${PI.phone}`} className="hover:underline">{PI.phone}</a>
                      ) : 'Loading phone...'}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Degree:</dt>
                    <dd>{PI?.degree || 'Loading degree...'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Address:</dt>
                    <dd>{PI?.address || 'Loading address...'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Email:</dt>
                    <dd>
                      {PI ? (
                        <a href={`mailto:${PI.email}`} className="hover:underline">{PI.email}</a>
                      ) : 'Loading email...'}
                    </dd>
                  </div>
                </dl>:
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                Loading..
              </dl>}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center mb-[30px] mt-10">
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
          <div className="animate-bounce">
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
            className="text-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Scroll for next information
          </button>
        </div>
      </div>
    </section>
  );
}