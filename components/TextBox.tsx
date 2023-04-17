import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  buttonLabel?: string;
  buttonLink?: string;
};

const TextBox = ({
  title,
  description,
  icon,
  buttonLabel,
  buttonLink,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md px-8 py-6">
      <div className="flex items-center mb-4">
        <div className="bg-gray-600 rounded-md p-3">{icon}</div>
        <h2 className="text-xl font-bold text-gray-800 ml-4">{title}</h2>
      </div>

      <p className="text-gray-600 text-lg mb-6">{description}</p>

      {buttonLabel && buttonLink && (
        <a
          href={buttonLink}
          className="bg-gray-600 text-white px-4 py-2 rounded-md inline-flex items-center hover:bg-gray-700 transition-colors duration-200"
        >
          {buttonLabel}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 text-white text-lg"
          />
        </a>
      )}
    </div>
  );
};

export default TextBox;
