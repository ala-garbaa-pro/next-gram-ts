import Photo from "@/components/frame";
import Modal from "@/components/modal";
import swagPhotos from "@/data/photos";

type PhotoModalProps = {
  params: {
    id: string;
  };
};

export default function PhotoModal({
  params: { id: photoId },
}: PhotoModalProps) {
  const photos = swagPhotos;
  const photo = photoId && photos.find((p) => p.id === photoId);

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}
