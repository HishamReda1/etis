"use client";
import { Suspense, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useTexture, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

import CanvasLoader from "./Loading";

interface Location {
  id: string;
  position: [number, number]; // [lat, lng]
  thumbnailUrl: string;
  fullSizeUrl: string;
  title: string;
  description: string;
}

const GLOBE_RADIUS = 3;

const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

const LocationPin = ({
  location,
  onClick,
}: {
  location: Location;
  onClick: () => void;
}) => {
  const position = latLngToVector3(...location.position, GLOBE_RADIUS);

  return (
    <group position={position}>
      <Html distanceFactor={15} center>
        <motion.div
          className="flex flex-col items-center text-center cursor-pointer"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <svg
            className="w-4 h-4 text-red-500 mb-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>
          <img
            src={location.thumbnailUrl}
            alt={location.title}
            className="w-[10px] h-[10px] object-cover rounded-sm shadow"
            loading="lazy"
          />
          <p className="text-xs mb-1 text-white">{location.title} </p>
        </motion.div>
      </Html>
    </group>
  );
};

const GlobeContent = ({
  locations,
  setSelectedLocation,
}: {
  locations: Location[];
  setSelectedLocation: (location: Location) => void;
}) => {
  const texture = useTexture("/earth-small.jpg");

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 24, 24]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      {locations.map((location) => (
        <LocationPin
          key={location.id}
          location={location}
          onClick={() => setSelectedLocation(location)}
        />
      ))}

      <OrbitControls
        enableZoom={true}
        minDistance={GLOBE_RADIUS * 1.5}
        maxDistance={GLOBE_RADIUS * 2.5}
        autoRotate
        autoRotateSpeed={0.3}
      />

      <Stars radius={100} depth={20} count={500} factor={2} />
    </>
  );
};

const Globe = ({ locations }: { locations: Location[] }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);


  // حساب مكان الكاميرا عشان تبص على أول location في القائمة
  const initialCameraPosition = useMemo(() => {
    if (locations.length === 0) {
      return new THREE.Vector3(0, 0, GLOBE_RADIUS * 2.2);
    }
    const targetVec = latLngToVector3(
      locations[0].position[0],
      locations[0].position[1],
      GLOBE_RADIUS
    );
    const cameraDistance = GLOBE_RADIUS * 2.2;
    return targetVec.clone().normalize().multiplyScalar(cameraDistance);
  }, [locations]);

  return (
    <div className="relative h-[300px] w-full md:h-[400px]">
      <Canvas
        camera={{
          position: [
            initialCameraPosition.x,
            initialCameraPosition.y,
            initialCameraPosition.z,
          ],
          fov: 80,
        }}
        gl={{ antialias: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <GlobeContent locations={locations} setSelectedLocation={setSelectedLocation} />
        </Suspense>
      </Canvas>

      {selectedLocation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2">
          <div className="bg-white/95 rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-xl">
            <div className="p-2 flex justify-between items-center border-b border-gray-200/30">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  {selectedLocation.title}
                </h2>
                <p className="text-xs text-gray-600/90">{selectedLocation.description}</p>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                ✕
              </button>
            </div>
            <div className="p-1 bg-gray-50 flex items-center justify-center z-50">
              <img
                src={selectedLocation.fullSizeUrl}
                alt={selectedLocation.title}
                className="max-h-[40vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export function WorldMapDemo() {
  const locations: Location[] = useMemo(
    () => [
      {
        id: "dubai",
        position: [25.2048, 55.2708],
        thumbnailUrl: "/golden.webp",
        fullSizeUrl: "/golden.webp",
        title: "Dubai",
        description: "Golden Partner in the Egyptian Market for Honeywell Alerton BMS.",
      },
      {
        id: "mauritius",
        position: [-20.3484, 57.5522],
        thumbnailUrl: "/platinum-6.jpeg",
        fullSizeUrl: "/platinum-6.jpeg",
        title: "Mauritius",
        description: "Platinum Partner in the Egyptian Market for Honeywell Alerton BMS.",
      },
      {
        id: "uk",
        position: [51.5074, -0.1278],
        thumbnailUrl: "/sontay3.jpeg",
        fullSizeUrl: "/sontay3.jpeg",
        title: "UK",
        description: "Our CEO at Sontay headquarters in the UK",
      },
      {
        id: "schneider",
        position: [30.0478, 31.2357],
        thumbnailUrl: "/shnider1.jpeg",
        fullSizeUrl: "/shnider1.jpeg",
        title: "Egypt",
        description: "Participation in Schneider Electric Event at Baron Hotel.",
      },
    ],
    []
  );

  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <Globe locations={locations} />
    </div>
  );
}
