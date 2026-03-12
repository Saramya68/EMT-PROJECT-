import { derivative, simplify } from "mathjs";

export function divergence(fx, fy, fz, system) {

  try {

    /* CARTESIAN */

    if(system === "cartesian"){

      const dx = derivative(fx,"x").toString();
      const dy = derivative(fy,"y").toString();
      const dz = derivative(fz,"z").toString();

      return simplify(`${dx} + ${dy} + ${dz}`).toString();
    }


    /* CYLINDRICAL */

    if(system === "cylindrical"){

      const term1 = derivative(`r*${fx}`,"r").toString();
      const term2 = derivative(fy,"theta").toString();
      const term3 = derivative(fz,"z").toString();

      const result =
      `(1/r)*(${term1}) + (1/r)*(${term2}) + ${term3}`;

      return simplify(result).toString();


    /* SPHERICAL */

    if(system === "spherical"){

      const term1 = derivative(`r^2*${fx}`,"r").toString();
      const term2 = derivative(`sin(theta)*${fy}`,"theta").toString();
      const term3 = derivative(fz,"phi").toString();

      const result =
      `(1/r^2)*(${term1}) + (1/(r*sin(theta)))*(${term2}) + (1/(r*sin(theta)))*(${term3})`;

      return simplify(result).toString();
    }

  }
}

  catch{

    return "Invalid vector field";

  }

}