import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";

const images = Array.from({ length: 16 }, (_, i) => ({
  src: `/portfolio/${i + 1}.png`,
  alt: `Portfolio Image ${i + 1}`,
  caption: [
    "Team photo at the regional championship",
    "Robot design brainstorming session",
    "Programming the autonomous routine",
    "Pit setup at state competition",
    "CAD model of our drivetrain",
    "Testing the intake mechanism",
    "Alliance partners celebrating a win",
    "Our custom 3D-printed parts",
    "Sensor calibration during practice",
    "Team huddle before a match",
    "Wiring the control system",
    "Field testing our new arm design",
    "Engineering notebook documentation",
    "Community STEM outreach event",
    "Robot reveal day",
    "Season wrap-up celebration",
  ][i],
}));

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = useCallback(() => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null)), []);
  const goPrev = useCallback(() => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null)), []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goNext, goPrev]);

  return (
    <section id="gallery" className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <Camera className="w-3.5 h-3.5" /> Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Team <span className="gradient-text">Gallery</span>
          </h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Behind the scenes moments from competitions, builds, and team events.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onClick={() => openLightbox(i)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                i === 0 || i === 5 || i === 10
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white">{image.caption}</p>
                </div>
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center text-white/70 mt-4 text-sm">
                {images[selectedIndex].caption}
                <span className="text-white/40 ml-3">
                  {selectedIndex + 1} / {images.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
