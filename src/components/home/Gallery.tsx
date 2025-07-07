import React, { useState } from 'react';

const images = [
  'src/public/GALLERY/bear.jpg',
  'src/public/GALLERY/cat.jpg',
  'src/public/GALLERY/cheetah.jpg',
  'src/public/GALLERY/COUPLE.jpg',
  'src/public/GALLERY/FAMILY.jpg',
   'src/public/GALLERY/feature_1.jpg',
  'src/public/GALLERY/cheetah.jpg',
    'src/public/GALLERY/cheetah.jpg',
    'src/public/GALLERY/cheetah.jpg'
  // Add more images with different aspect ratios and sizes in your public folder
];

const RalphWenigGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const openModal = (img: string) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg('');
  };

  return (
    <main className="bg-black min-h-screen">

      {/* Masonry Gallery Grid */}
      <section className="container mx-auto my-auto px-2 pt-15 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="mb-6 break-inside-avoid cursor-pointer group relative overflow-hidden shadow-lg"
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Artwork ${idx + 1}`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 max-w-[1000px] mx-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* Modal for large image view */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImg}
            alt="Large artwork"
            className="max-h-[80vh] max-w-[90vw] shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
};

export default RalphWenigGallery;