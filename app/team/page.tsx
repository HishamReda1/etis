'use client'
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import CanvasLoader from '@/components/Loading';
import Karim from '@/components/Karim';
import Developer from '@/components/Developer';
import Hussein from '@/components/Hussein';
import Mohamed from '@/components/Mohamed';
import Mostafa from '@/components/Mostafa';
import { cn } from '@/lib/utils';
import Ahmed from '@/components/Ahmed';
import Roz from '@/components/Roz';
import Mina from '@/components/Mina';
import Alaa from '@/components/Alaa';
import Ghazy from '@/components/Ghazy';
import Ceo from '@/components/Ceo';
interface Skill {
  title: string;
  level: number;
}

interface TeamMember {
  name: string;
  role: string;
  Component: React.ComponentType<JSX.IntrinsicElements['mesh']>;
  skills: Skill[];
  image: string;
}

const TeamPage: React.FC = () => {
  const characters: TeamMember[] = [

    {
      name: 'Alaa Omar',
      role: 'CEO',
      Component: Ceo,
      image: '/team/ceo.jpeg',
      skills: [
        { title: 'Strategic Planning', level: 95 },
        { title: 'Leadership', level: 92 },
        { title: 'Business Development', level: 90 },
        { title: 'Decision Making', level: 88 },
        { title: 'Financial Management', level: 85 },
    
      ],
    }
    ,


    {
      name: 'Mohamed Ghazy',
      role: 'Managing Director',
      Component: Ghazy,
      image: '/team/ghazy.jpg',
      skills: [
        { title: 'Strategic Planning', level: 95 },
        { title: 'Leadership', level: 92 },
        { title: 'Business Development', level: 90 },
        { title: 'Decision Making', level: 88 },
        { title: 'Financial Management', level: 85 },
    
    
      ],
    }
,


    {
      name: 'Hisham Reda',
      role: 'Frontend Developer- Multimedia designer',
      Component: Developer,
      image: '/team/hisham.jpg',
      skills: [
        { title: 'Next.js', level: 90 },
        { title: 'React js', level: 85 },
        { title: 'Photoshop', level: 80 },
        { title: 'Illustrator', level: 75 },
        { title: 'After Effects', level: 65 },
      ],
    },
    {
      name: 'Karim Mahmoud',
      role: 'BMS Engineer',
      Component: Karim,
      image: '/team/karim.jpeg',
      skills: [
        { title: 'BMS Systems', level: 88 },
        { title: 'Alerton Compass', level: 75 },
        { title: 'Communication Protocol', level: 82 },
        { title: 'System Design', level: 80 },
      ],
    },
    // {
    //   name: 'Hussein Abdulnasser',
    //   role: 'Project Manager',
    //   Component: Hussein,
    //   image: '/team/hussein.jpg',
    //   skills: [
    //     { title: 'Project Management', level: 90 },
    //     { title: 'Team Management', level: 85 },
    //     { title: 'Risk Management', level: 90 },
    //     { title: 'Communication', level: 90 },
    //     { title: 'Leadership', level: 85 },
    //     { title: 'Problem Solving', level: 80 },
    //   ],
    // },
    {
      name: 'Mohamed Hamada',
      role: 'Supply Chain Manager',
      Component: Mohamed,
      image: '/team/mohamed.jpg',
      skills: [
        { title: 'Supply Chain Management', level: 88 },
        { title: 'Inventory Management', level: 75 },
        { title: 'Procurement', level: 82 },
        { title: 'Logistics', level: 80 },
      ],
    },
    {
      name: 'Mostafa Bakry',
      role: 'Technical Office Engineer',
      Component: Mostafa,
      image: '/team/mostafa.jpeg',
      skills: [
        { title: 'Technical Office', level: 88 },
        { title: 'Shop Drawings', level: 75 },
      ],
    },
    {
      name: 'Ahmed Hamada',        
      role: 'Technical Office - DC Engineer',
      Component: Ahmed,
      image: '/team/ahmed.jpeg',
      skills: [
        { title: 'AutoCAD', level: 88 },
        { title: 'Technical Office', level: 88 },
        { title: 'Electrical Engineering', level: 75 }
      ],
    },
    {
      name: 'Hussien Amr',
      role: 'Accountant',
      Component: Roz,
      image: '/team/roz.jpeg',
      skills: [
        { title: 'Accounting', level: 88 },
        { title: 'Financial Reporting', level: 75 },
        { title: 'Tax Compliance', level: 82 },
        { title: 'Financial Analysis', level: 80 },
      ],
    },
    {
      name: 'Mina Assaad',
      role: 'Sales Engineer',
      Component: Mina,
      image: '/team/mina.jpg',
      skills: [
        { title: 'Client Consultation', level: 88 },
        { title: 'Technical Presentation', level: 75 },
        { title: 'Sales', level: 82 },
        { title: 'Communication', level: 80 },
        { title: 'Negotiation', level: 80 },
      ],
    },

    {
      name: 'Alaa Nabil',
      role: 'Storekeeper',
      Component: Alaa,
      image: '/team/alaa.jpeg',
      skills: [
        { title: 'Inventory Management', level: 88 },
        { title: 'Stock Control', level: 75 },
        { title: 'Warehouse Organization', level: 82 },
       
      ],
    },


  ];

  const [current, setCurrent] = useState<number>(0);
  const character = characters[current];
  const CharacterComponent = character.Component;

  return (
    <div className="relative py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
          Our <span className="text-[#8DC63F] dark:text-[#00AEEF]">Team</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          Meet the dedicated professionals behind our innovative solutions, combining technical expertise with passion for excellence.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative">
          <div className={cn(
            "absolute inset-0 rounded-3xl backdrop-blur-sm",
          "dark:bg-gradient-to-br dark:from-[#001e30] dark:via-[#003a5c] dark:to-[#005b94] dark:border-[#005b94]/30",
          "bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f] border-[#56ab2f]/30"
          )} />
        <Canvas className="h-full w-full">
  {/* خفّض شدة الـ ambient light علشان ماتغطيش على الـ Environment */}
  <ambientLight intensity={0.3} />
  <directionalLight position={[5, 5, 5]} intensity={0.4} />
  
  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
  
  <Suspense fallback={<CanvasLoader />}>
    <CharacterComponent position={[0, -3, 0]} scale={3} />
    
    {/* خلي الـ environment زي Avaturn */}
    <Environment preset="apartment" />
  </Suspense>
</Canvas>

        </div>

        <div className={cn(
          "w-full lg:w-1/2 rounded-3xl border shadow-xl p-6",
          "dark:bg-gradient-to-br dark:from-[#001e30] dark:via-[#003a5c] dark:to-[#005b94] dark:border-[#005b94]/30",
          "bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f] border-[#56ab2f]/30"
        )}>
          <motion.div 
            className="w-full" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-3">
              {character.name}
            </h2>
            <h3 className="text-xl font-semibold dark:text-white/80 text-gray-800 mb-6">
              {character.role}
            </h3>

            <div className="mt-6 space-y-3">
              {character.skills.map((skill, index) => (
                <div className="w-full" key={index}>
                  <h4 className="text-base font-semibold dark:text-white/90 text-gray-800 mb-1">
                    {skill.title}
                  </h4>
                  <div className="h-2 w-full bg-white/20 rounded-full mt-1 relative">
                    <motion.div
                      className={cn(
                        "h-full rounded-full shadow-lg",
                        "dark:bg-gradient-to-r dark:from-[#005b94] dark:to-[#00AEEF]",
                        "bg-gradient-to-r from-[#78c850] to-[#a8e063]"
                      )}
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-8 gap-1 mt-8">
              {characters.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "cursor-pointer overflow-hidden rounded-lg border-2 transition-all",
                    current === index 
                      ? "border-[#8DC63F] dark:border-[#00AEEF] opacity-100"
                      : "opacity-50 grayscale border-transparent hover:opacity-75",
                  )}
                  onClick={() => setCurrent(index)}
                >
               <img
  src={member.image}
  alt={member.name}
  className="w-full aspect-square object-cover"
/>

                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;