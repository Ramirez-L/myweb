import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes: string;
};

const ImageComponent = ({
  src,
  width = 1024,
  height = 404,
  alt = `image-${src}`,
  sizes = "100vw",
}: Props) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      quality={100}
      className="rounded-lg border-2 border-slate-600 shadow-md"
    />
  );
};

export default ImageComponent;
