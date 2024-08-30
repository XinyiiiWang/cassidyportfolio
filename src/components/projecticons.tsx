"use client";
import { useState } from "react";
import Image from "next/image";
import Icon11 from "../../public/img/project/11.png";
import Modal from "./modal"; // Import the Modal component

const images = [
  { id: 1, src: Icon11, style: "top-10 left-1/2 transform -translate-x-1/2" },
  { id: 2, src: Icon11, style: "top-1/4 left-3/4" },
  { id: 3, src: Icon11, style: "top-1/2 left-3/4" },
  { id: 4, src: Icon11, style: "top-3/4 left-3/4" },
  { id: 5, src: Icon11, style: "top-3/4 left-1/2 transform -translate-x-1/2" },
  { id: 6, src: Icon11, style: "top-3/4 left-1/4" },
  { id: 7, src: Icon11, style: "top-1/2 left-1/4" },
  { id: 8, src: Icon11, style: "top-1/4 left-1/4" },
];

const ProjectIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full h-screen">
      {images.map((image) => (
        <div key={image.id} onClick={openModal}>
          <Image
            src={image.src}
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className={`absolute ${image.style} cursor-pointer`}
            alt={`Image ${image.id}`}
          />
        </div>
      ))}

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProjectIcons;
