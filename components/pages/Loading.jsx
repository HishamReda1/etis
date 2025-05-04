import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        {/* Optional Spinner */}
        <div className="animate-spin w-6 h-6 border-4 border-t-transparent border-white rounded-full" />
        <p className="mt-4 text-sm text-white font-bold">
          {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
