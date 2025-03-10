import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import Image from "next/image";

export default function Home() {
  const dispatch = useAppDispatch();
  
  const handleClick = () => {
      dispatch(toggleMode());
  }
  
  return (
    <>
      <h1 className="text-blue-500">This is a heading</h1>
      
      <button onClick={handleClick}></button>
    </>
  );
}
