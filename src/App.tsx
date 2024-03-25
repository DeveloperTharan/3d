import { gsap } from "gsap";

export default function App() {
  const a = gsap.version;
  console.log(a);

  return (
    <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-green-600">
      3d
    </div>
  );
}
