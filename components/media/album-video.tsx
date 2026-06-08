type AlbumVideoProps = {
  src: string;
  className?: string;
  autoPlay?: boolean;
};

export function AlbumVideo({
  src,
  className = 'album-video',
  autoPlay = true,
}: AlbumVideoProps) {
  return (
    <video
      className={className}
      src={src}
      controls
      playsInline
      muted
      loop={autoPlay}
      autoPlay={autoPlay}
      preload="metadata"
    />
  );
}
