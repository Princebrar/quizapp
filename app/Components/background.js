import Image from "next/image";

export default function Background() {
  return (
      <div className="fixed flex flex-col items-center -z-50 justify-end bg-red-200 w-screen h-screen">
        <div className="absolute w-full flex flex-col translate-y-1/2 items-center justify-center rounded-full bg-red-300 aspect-square">
        <div className="absolute w-5/6 flex flex-col items-center justify-center rounded-full bg-red-400 aspect-square">
        <div className="absolute w-4/5 flex flex-col items-center justify-center rounded-full bg-red-500 aspect-square">
        <div className="absolute w-3/4 flex flex-col items-center justify-center rounded-full bg-red-600 aspect-square">
        <div className="absolute w-2/3 flex flex-col items-center justify-center rounded-full bg-red-700 aspect-square">
        <div className="w-1/2 rounded-full bg-red-800 aspect-square"/>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
  );
}
