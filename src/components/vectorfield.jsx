import { Canvas } from "@react-three/fiber";
import VectorArrow from "./vectorarrow";

function VectorField(){

 const arrows=[];

 for(let x=-2;x<=2;x++){

   for(let y=-2;y<=2;y++){

     for(let z=-2;z<=2;z++){

       arrows.push(

        <VectorArrow
         key={`${x}-${y}-${z}`}
         origin={[x,y,z]}
         direction={[x,y,z]}
        />

       );

     }

   }

 }

 return(

   <Canvas camera={{position:[5,5,5]}}>
     {arrows}
   </Canvas>

 );

}

export default VectorField;