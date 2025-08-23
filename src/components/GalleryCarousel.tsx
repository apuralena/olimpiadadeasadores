"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='basis-full'>
              <div className='p-2'>
                <div className='group h-full'>
                  {/* Imagen sin cuadro */}
                  <div className='relative w-full h-[32rem] overflow-hidden rounded-xl'>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='absolute inset-0 w-full h-full object-contain object-center  transition-transform duration-300 shadow-lg hover:shadow-xl rounded-xl'
                      loading='lazy'
                      onError={(e) => {
                        // Fallback en caso de error de imagen (formato vertical)
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=600&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-white/80 backdrop-blur-sm border-[--color-wood-light]/40 hover:bg-white/90 text-[--color-ink] -left-4' />
        <CarouselNext className='bg-white/80 backdrop-blur-sm border-[--color-wood-light]/40 hover:bg-white/90 text-[--color-ink] -right-4' />
      </Carousel>
    </div>
  );
}
