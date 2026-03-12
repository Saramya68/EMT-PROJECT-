import { derivative, simplify } from "mathjs";

export function curl(fx, fy, fz, system) {

  try {

    if(system === "cartesian"){

      const cx = simplify(`${derivative(fz,"y")} - ${derivative(fy,"z")}`).toString();
      const cy = simplify(`${derivative(fx,"z")} - ${derivative(fz,"x")}`).toString();
      const cz = simplify(`${derivative(fy,"x")} - ${derivative(fx,"y")}`).toString();

      return `${cx} i + ${cy} j + ${cz} k`;
    }


    if(system === "cylindrical"){

      const ar = simplify(
        `(1/r)*(${derivative(fz,"theta")} - ${derivative(`r*(${fy})`,"z")})`
      ).toString();

      const atheta = simplify(
        `${derivative(fx,"z")} - ${derivative(fz,"r")}`
      ).toString();

      const az = simplify(
        `(1/r)*(${derivative(`r*(${fy})`,"r")} - ${derivative(fx,"theta")})`
      ).toString();

      return `${ar} ar + ${atheta} aθ + ${az} az`;
    }


    if(system === "spherical"){

      const ar = simplify(
        `(1/(r*sin(theta)))*(${derivative(`sin(theta)*(${fz})`,"theta")} - ${derivative(fy,"phi")})`
      ).toString();

      const atheta = simplify(
        `(1/r)*(${derivative(fx,"phi")} - ${derivative(`r*(${fz})`,"r")})`
      ).toString();

      const aphi = simplify(
        `(1/r)*(${derivative(`r*(${fy})`,"r")} - ${derivative(fx,"theta")})`
      ).toString();

      return `${ar} ar + ${atheta} aθ + ${aphi} aφ`;
    }

  }

  catch{

    return "Invalid vector field";

  }

}