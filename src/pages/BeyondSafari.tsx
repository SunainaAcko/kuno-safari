import { motion } from 'framer-motion';

const highlights = [
  {
    title: "Wildlife Rescue & Rehabilitation",
    description: "Our trained team safely rescues wild animals that enter human areas due to habitat loss or conflict. Using proper techniques, we handle snakes, birds, leopards, and more with care. Injured animals are rehabilitated in coordination with the forest department and released back into the wild, ensuring the safety of both people and wildlife.",
    image: "src/public/Wildlife Rescue & Rehabilitation.jpg",
  },
  {
    title: "Educating Local Communities",
    description: "To protect wildlife, we engage with communities near Kuno National Park, educating them on safe animal interactions, the importance of each species, and dispelling harmful myths. This awareness fosters understanding, reduces fear, and encourages peaceful coexistence with wildlife.",
    image: "src/public/Educating_local.jpg",
  },
  {
    title: "Awareness Sessions with Forest Department",
    description: "We support the Madhya Pradesh Forest Department by conducting awareness and training sessions for students, forest guards, interns, and villagers. These sessions cover wildlife conservation, safe response to animal encounters, live rescue demos, and discussions on forest laws and habitat protection.",
    image: "src/public/awareness_sessions.jpg",
  },
];

const stories = [
  {
    title: "Cheetahs Return to India: A Historic First Glimpse",
    description: "We proudly captured India’s first wild cheetah photos—a milestone in conservation showcasing these majestic animals in their natural home.",
    image: "src/public/cheetah.jpg",
  },
  {
    title: "Rare Melanistic Indian Gray Wolf Puppies Spotted",
    description: "An extraordinary discovery—capturing the rare black-furred wolf pups thriving in the wild was a breathtaking experience.",
    image: "src/public/wolf_puppies.jpg",
  },
  {
    title: "Rare Melanistic Jungle Cat Captured in Kuno",
    description: "A remarkable discovery of this elusive, dark-coated jungle cat reveals the hidden marvels of India’s forests.",
    image: "src/public/jungle_cat.jpg",
  },
   {
    title: "Indian Rock Python Hatchlings Spotted",
    description: "A rare glimpse of hatchlings emerging—offering a powerful reminder of nature’s delicate balance and the wonder of new life.",
    image: "src/public/rock_python.jpg",
  },
];

const BeyondSafari = () => (
  <main className="bg-neutral-50">
    {/* Hero Section */}
    <section className="relative py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Saving Wildlife, Spreading Awareness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text text-neutral-700 max-w-2xl mx-auto"
        >
          At Kuno Cheetah Safari by Finding Fauna, we blend adventure with purpose—celebrating the beauty of the wild, protecting wildlife, uplifting communities, and driving real impact.
        </motion.p>
        <img
          src="src/public/more_info.jpg"
          alt="Google in Pakistan"
          className="mx-auto mt-10 rounded-lg shadow-lg w-full max-w-5xl object-cover"
        />
      </div>
    </section>

    {/* Highlights Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 flex-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stories Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Groundbreaking Moments</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-50 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img src={story.image} alt={story.title} className="h-56 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-neutral-600 flex-1">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-20 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn more about Google’s impact</h2>
        <p className="text-lg text-neutral-700 mb-8">
          Explore our initiatives, resources, and stories from around the world.
        </p>
        <a
          href="https://about.google/intl/ALL_pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Visit Google About
        </a>
      </div>
    </section>
  </main>
);

export default BeyondSafari;