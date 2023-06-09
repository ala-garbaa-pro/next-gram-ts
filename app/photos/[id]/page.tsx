import React from "react";
import Photo from "@/components/frame";
import swagPhotos from "@/data/photos";

type PhotoPageProps = {
  params: {
    id: string;
  };
};

export default function PhotoPage({ params: { id } }: PhotoPageProps) {
  const photo = swagPhotos.find((p) => p.id === id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        {photo && <Photo photo={photo} />}
        {!photo && "Photo not found"}
      </div>
    </div>
  );
}
