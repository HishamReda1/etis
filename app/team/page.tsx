'use client'
import React, { JSX, Suspense, useState } from 'react';
import { Canvas} from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import CanvasLoader from '@/components/Loading';
import Developer from '@/components/Developer';
import Mohamed from '@/components/Mohamed';
import Mostafa from '@/components/Mostafa';
import { cn } from '@/lib/utils';
import Ahmed from '@/components/Ahmed';
import Roz from '@/components/Roz';
import Mina from '@/components/Mina';
import Ghazy from '@/components/Ghazy';
import Ceo from '@/components/Ceo';
import Sagan from '@/components/Sagan';
import Taha from '@/components/Taha';
import { EffectComposer,Bloom } from '@react-three/postprocessing'
import Ground from '@/components/Ground';
import { useParams } from 'next/navigation';
import teamContent from '@/src/content/team.content';


interface Skill {
  key: string;
  level: number;
}

interface TeamMember {
  name: string;
  roleKey: string;
  Component: React.ComponentType<JSX.IntrinsicElements['mesh']>;
  skills: Skill[];
  image: string;
}

interface TeamNames {
  en: Record<string, string>;
  ar: Record<string, string>;
  fr: Record<string, string>;
  es: Record<string, string>;
  de: Record<string, string>;
  zh: Record<string, string>;
}

const teamNames: TeamNames = {
  en: {
    'Alaa Omar': 'Alaa Omar',
    'Mohamed Ghazy': 'Mohamed Ghazy',
    'Hisham Reda': 'Hisham Reda',
    'Mohamed Hamada': 'Mohamed Hamada',
    'Mostafa Bakry': 'Mostafa Bakry',
    'Ahmed Hamada': 'Ahmed Hamada',
    'Hussien Amr': 'Hussien Amr',
    'Mina Assaad': 'Mina Assaad',
    'Ahmed Sagan': 'Ahmed Sagan',
    'Taha': 'Taha',
  },
  ar: {
    'Alaa Omar': 'علاء عمر',
    'Mohamed Ghazy': 'محمد غازي',
    'Hisham Reda': 'هشام رضا',
    'Mohamed Hamada': 'محمد حمادة',
    'Mostafa Bakry': 'مصطفى بكري',
    'Ahmed Hamada': 'أحمد حمادة',
    'Hussien Amr': 'حسين عمرو',
    'Mina Assaad': 'مينا أسعد',
    'Ahmed Sagan': 'أحمد سجان',
    'Taha': 'طه',
  },
  fr: {
    'Alaa Omar': 'Alaa Omar',
    'Mohamed Ghazy': 'Mohamed Ghazy',
    'Hisham Reda': 'Hisham Reda',
    'Mohamed Hamada': 'Mohamed Hamada',
    'Mostafa Bakry': 'Mostafa Bakry',
    'Ahmed Hamada': 'Ahmed Hamada',
    'Hussien Amr': 'Hussien Amr',
    'Mina Assaad': 'Mina Assaad',
    'Ahmed Sagan': 'Ahmed Sagan',
    'Taha': 'Taha',
  },
  es: {
    'Alaa Omar': 'Alaa Omar',
    'Mohamed Ghazy': 'Mohamed Ghazy',
    'Hisham Reda': 'Hisham Reda',
    'Mohamed Hamada': 'Mohamed Hamada',
    'Mostafa Bakry': 'Mostafa Bakry',
    'Ahmed Hamada': 'Ahmed Hamada',
    'Hussien Amr': 'Hussien Amr',
    'Mina Assaad': 'Mina Assaad',
    'Ahmed Sagan': 'Ahmed Sagan',
    'Taha': 'Taha',
  },
  de: {
    'Alaa Omar': 'Alaa Omar',
    'Mohamed Ghazy': 'Mohamed Ghazy',
    'Hisham Reda': 'Hisham Reda',
    'Mohamed Hamada': 'Mohamed Hamada',
    'Mostafa Bakry': 'Mostafa Bakry',
    'Ahmed Hamada': 'Ahmed Hamada',
    'Hussien Amr': 'Hussien Amr',
    'Mina Assaad': 'Mina Assaad',
    'Ahmed Sagan': 'Ahmed Sagan',
    'Taha': 'Taha',
  },
  zh: {
    'Alaa Omar': 'Alaa Omar',
    'Mohamed Ghazy': 'Mohamed Ghazy',
    'Hisham Reda': 'Hisham Reda',
    'Mohamed Hamada': 'Mohamed Hamada',
    'Mostafa Bakry': 'Mostafa Bakry',
    'Ahmed Hamada': 'Ahmed Hamada',
    'Hussien Amr': 'Hussien Amr',
    'Mina Assaad': 'Mina Assaad',
    'Ahmed Sagan': 'Ahmed Sagan',
    'Taha': 'Taha',
  },
};

const TeamPage: React.FC = () => {
  const params = useParams();
  const locale = params?.locale as keyof typeof teamContent.content || "en";
  const content = teamContent;
  const validLocale = locale in content.content ? locale : "en";
  const t = content.content[validLocale];
  const names = teamNames[validLocale];

  const characters: TeamMember[] = [
    {
      name: 'Alaa Omar',
      roleKey: 'ceo',
      Component: Ceo,
      image: '/team/ceo.jpeg',
      skills: [
        { key: 'strategicPlanning', level: 95 },
        { key: 'leadership', level: 92 },
        { key: 'businessDevelopment', level: 90 },
        { key: 'decisionMaking', level: 88 },
        { key: 'financialManagement', level: 85 },
      ],
    },
    {
      name: 'Mohamed Ghazy',
      roleKey: 'manager',
      Component: Ghazy,
      image: '/team/ghazy.jpg',
      skills: [
        { key: 'strategicPlanning', level: 95 },
        { key: 'leadership', level: 92 },
        { key: 'businessDevelopment', level: 90 },
        { key: 'decisionMaking', level: 88 },
        { key: 'financialManagement', level: 85 },
      ],
    },
    {
      name: 'Hisham Reda',
      roleKey: 'frontendDeveloper',
      Component: Developer,
      image: '/team/hisham.jpg',
      skills: [
        { key: 'nextjs', level: 90 },
        { key: 'reactjs', level: 85 },
        { key: 'photoshop', level: 80 },
        { key: 'illustrator', level: 75 },
        { key: 'afterEffects', level: 65 },
      ],
    },
   
    {
      name: 'Mohamed Hamada',
      roleKey: 'supplyChainManager',
      Component: Mohamed,
      image: '/team/mohamed.jpg',
      skills: [
        { key: 'supplyChainManagement', level: 88 },
        { key: 'inventoryManagement', level: 75 },
        { key: 'procurement', level: 82 },
        { key: 'logistics', level: 80 },
      ],
    },
    {
      name: 'Mostafa Bakry',
      roleKey: 'technicalOfficeEngineer',
      Component: Mostafa,
      image: '/team/mostafa.jpeg',
      skills: [
        { key: 'technicalOffice', level: 88 },
        { key: 'shopDrawings', level: 75 },
      ],
    },
    {
      name: 'Ahmed Hamada',
      roleKey: 'technicalOfficeEngineer',
      Component: Ahmed,
      image: '/team/ahmed.jpeg',
      skills: [
        { key: 'autocad', level: 88 },
        { key: 'technicalOffice', level: 88 },
        { key: 'electricalEngineering', level: 75 },
      ],
    },
    {
      name: 'Hussien Amr',
      roleKey: 'accountant',
      Component: Roz,
      image: '/team/roz.jpeg',
      skills: [
        { key: 'accounting', level: 88 },
        { key: 'financialReporting', level: 75 },
        { key: 'taxCompliance', level: 82 },
        { key: 'financialAnalysis', level: 80 },
      ],
    },
    {
      name: 'Mina Assaad',
      roleKey: 'salesEngineer',
      Component: Mina,
      image: '/team/mina.jpg',
      skills: [
        { key: 'clientConsultation', level: 88 },
        { key: 'technicalPresentation', level: 75 },
        { key: 'sales', level: 82 },
        { key: 'communication', level: 80 },
        { key: 'negotiation', level: 80 },
      ],
    },
    {
      name: 'Ahmed Sagan',
      roleKey: 'bmsEngineer',
      Component: Sagan,
      image: '/team/sagan.jpg',
      skills: [
        { key: 'bmsSystems', level: 95 },
        { key: 'automation', level: 90 },
        { key: 'systemIntegration', level: 88 },
        { key: 'energyManagement', level: 85 },
        { key: 'technicalSupport', level: 82 },
      ],
    },
    {
      name: 'Taha',
      roleKey: 'bmsTeamLeader',
      Component: Taha,
      image: '/team/taha.jpg',
      skills: [
        { key: 'bmsSystems', level: 98 },
        { key: 'automation', level: 95 },
        { key: 'systemIntegration', level: 92 },
        { key: 'energyManagement', level: 90 },
        { key: 'leadership', level: 90 },
        { key: 'technicalSupport', level: 85 },
      ],
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const character = characters[current];
  const CharacterComponent = character.Component;

  return (
    <div className={cn("relative py-10", validLocale === "ar" && "rtl")}>
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
          {t.title} <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.subtitle}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          {t.description}
        </p>
      </div>
    
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">

        <div className="w-full lg:w-1/3 relative h-[500px] lg:h-auto">
          <div className={cn(
            "absolute inset-0 rounded-3xl backdrop-blur-sm",
            "dark:bg-gradient-to-br dark:from-[#001e30] dark:via-[#003a5c] dark:to-[#005b94] dark:border-[#005b94]/30",
            "bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f] border-[#56ab2f]/30"
          )} />
      <Canvas className="h-full w-full rounded-3xl ">
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={5} />
          <CharacterComponent position={[0, -4, 0]} scale={3} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.01, 0]} receiveShadow>
            <planeGeometry args={[500, 500]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
          <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
     
            <Environment preset="sunset" />
         
          <EffectComposer multisampling={8}>
            <Bloom
              luminanceThreshold={5}
              mipmapBlur
              luminanceSmoothing={0.2}
              intensity={10}
            />
          </EffectComposer>
          <Ground />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.25}
            makeDefault
          />
        </Suspense>
      </Canvas>

        </div>

        <div className={cn(
          "w-full lg:w-2/3 rounded-3xl border shadow-xl p-6",
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
              {names[character.name as keyof typeof names] || character.name}
            </h2>
            <h3 className="text-xl font-semibold dark:text-white/80 text-gray-800 mb-6">
              {t.roles[character.roleKey as keyof typeof t.roles] || character.roleKey}
            </h3>

            <div className="mt-6 space-y-3">
              {character.skills.map((skill, index) => (
                <div className="w-full" key={index}>
                  <h4 className="text-base font-semibold dark:text-white/90 text-gray-800 mb-1">
                    {t.qualities[skill.key as keyof typeof t.qualities] || skill.key}
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