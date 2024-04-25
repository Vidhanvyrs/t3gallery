import { getImage } from "~/server/queries";

import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return (
    <div className="h-full">
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}