import { derivative } from "mathjs";

export function gradient(f, system) {

  try {

    if(system === "cartesian"){

      const dx = derivative(f,"x").toString();
      const dy = derivative(f,"y").toString();
      const dz = derivative(f,"z").toString();

      return `(${dx}) i + (${dy}) j + (${dz}) k`;

    }

    if(system === "cylindrical"){

      const dr = derivative(f,"r").toString();
      const dtheta = derivative(f,"theta").toString();
      const dz = derivative(f,"z").toString();

      return `(${dr}) ar + (1/r)*(${dtheta}) aθ + (${dz}) az`;

    }

    if(system === "spherical"){

      const dr = derivative(f,"r").toString();
      const dtheta = derivative(f,"theta").toString();
      const dphi = derivative(f,"phi").toString();

      return `(${dr}) ar + (1/r)*(${dtheta}) aθ + (1/(r*sin(theta)))*(${dphi}) aφ`;

    }

  }
  catch{

    return "Invalid function";

  }

}