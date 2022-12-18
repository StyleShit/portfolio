import React from "react";

type Props = {
  url: string;
  fallback: string | undefined;
  alt: string;
};

export default function Picture({ url, fallback, alt }: Props) {
  const [extension] = url.split(".").slice(-1);
  fallback = fallback || url;

  return (
    <picture>
      <source srcSet={url} type={`image/${extension}`} />
      <img src={fallback} alt={alt} />
    </picture>
  );
}
