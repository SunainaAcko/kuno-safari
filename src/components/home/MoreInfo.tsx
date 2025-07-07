

const MoreInfo = () => {
  return (
    <section className="flex flex-col gap-16 pt-20 pb-20 lg:py-100 xl:flex-row border-0 border-spacing-0">
      {/* Text Section */}
      <div className="flex flex-1 flex-col justify-center xl:w-1/2 px-10">
        <h2 className="text-3xl font-bold mb-6">Witness the Indian Cheetah’s</h2>
        <p className="text-neutral-600 text-lg md:text-s mb-8 max-w-xl">
          Be among the privileged few to witness these magnificent cheetahs in their natural habitat, a powerful testament to India's remarkable conservation success. Our expertly guided safaris offer you the unparalleled opportunity to spot these swift and elusive predators, alongside Kuno's diverse and fascinating wildlife. Traverse the scenic landscapes of Kuno National Park, home to thriving populations of leopards, sloth bears, hyenas, wolves, various deer species, and a vibrant array of birdlife, all while experiencing the thrill of the search – with your camera, of course! Book your unforgettable cheetah safari today and create memories that will last a lifetime.
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-primary-600 transition"
          >
            More info
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src="src/public/more_info.jpg"
          alt="Kuno National Park"
         
          className="rounded-tl-3xl rounded-bl-3xl shadow-lg object-cover w-full"
        />
      </div>
    </section>
  );
};

export default MoreInfo;