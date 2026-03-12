import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { ArrowHelper, Vector3 } from "three";

function VectorArrow({origin,direction}){

 const {scene} = useThree();

 useEffect(()=>{

   const dir = new Vector3(...direction).normalize();
   const orig = new Vector3(...origin);

   const arrow = new ArrowHelper(dir,orig,1,0xff0000);

   scene.add(arrow);

   return ()=>scene.remove(arrow);

 },[origin,direction]);

 return null;

}

export default VectorArrow;