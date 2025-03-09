import { motion, AnimatePresence } from "framer-motion";
import useYouTubeVideos from "../hooks/useYouTubeVideos";
import Navigation from "../components/Navigation";
import ThreeBackground from "../components/ThreeBackground";
import CustomCursor from "../components/CustomCursor";
import { X } from "lucide-react";
import { useState } from "react";

const YouTubeVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { videos, loading, error } = useYouTubeVideos(
    "UCEvzzUb5bYMuasfN8WVUgGA"
  );

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <ThreeBackground />
      <Navigation />

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              My Video Content
            </h1>
            <p className="text-secondary-foreground/60 max-w-2xl mx-auto">
              Check out my latest project showcase
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto animate-spin" />
              <p className="mt-4 text-secondary-foreground/60">
                Loading videos...
              </p>
            </motion.div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-red-500"
            >
              {error}
            </motion.div>
          )}

          {/* Videos Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.snippet.resourceId.videoId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative p-6 rounded-xl bg-secondary/10 backdrop-blur-sm border border-secondary/10 hover:border-primary/20 transition-colors">
                  <div
                    className="aspect-video mb-4 overflow-hidden rounded-lg cursor-pointer"
                    onClick={() =>
                      setSelectedVideo(video.snippet.resourceId.videoId)
                    }
                  >
                    <div className="relative group">
                      <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg
                            className="w-8 h-8 text-white fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {video.snippet.title}
                  </h2>
                  <p className="text-secondary-foreground/60 text-sm mb-4 line-clamp-3">
                    {video.snippet.description}
                  </p>
                  <button
                    onClick={() =>
                      setSelectedVideo(video.snippet.resourceId.videoId)
                    }
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Watch Video
                    <motion.span
                      className="text-lg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YouTubeVideos;
