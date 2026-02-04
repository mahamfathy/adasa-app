import {
  FaCamera,
  FaMountainSun,
  FaSliders,
  FaSun,
  FaUser,
} from "react-icons/fa6";
export default function getCategoryIcon(name: string) {
  if (name === "إضاءة") {
    return <FaSun className="text-xl text-orange-500 group-hover:text-white" />;
  } else if (name === "مناظر طبيعية") {
    return (
      <FaMountainSun className="text-xl text-orange-500 group-hover:text-white" />
    );
  } else if (name === "معدات") {
    return (
      <FaSliders className="text-xl text-orange-500 group-hover:text-white" />
    );
  } else if (name === "بورتريه") {
    return (
      <FaUser className="text-xl text-orange-500 group-hover:text-white" />
    );
  } else {
    return (
      <FaCamera className="text-xl text-orange-500 group-hover:text-white" />
    );
  }
}
