import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  equipmentName: string;
}

export default function ImageGallery({ images, equipmentName }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [rotation, setRotation] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
    setRotation(0);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
    setRotation(0);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const rotateImage = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const getImageLabel = (index: number) => {
    const labels = ['Front View', 'Side View', 'Perspective View'];
    return labels[index] || `View ${index + 1}`;
  };

  return (
    <div className="relative h-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      {/* Main Image Display */}
      <div className="relative h-full flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt={`${equipmentName} - ${getImageLabel(currentImageIndex)}`}
          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={toggleZoom}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Control Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={toggleZoom}
            className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          
          <button
            onClick={rotateImage}
            className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Rotate image"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsZoomed(false);
                  setRotation(0);
                }}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-blue-500 scale-110'
                    : 'border-white/50 hover:border-white/80'
                }`}
              >
                <img
                  src={image}
                  alt={`${equipmentName} - ${getImageLabel(index)}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Image Label */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
        {getImageLabel(currentImageIndex)}
      </div>
    </div>
  );
}

