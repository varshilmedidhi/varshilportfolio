import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const MAX_RESULTS = 10;

interface YouTubeVideo {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

const useYouTubeVideos = (channelId: string | null) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!channelId) {
      setError("No channel ID provided.");
      setLoading(false);
      return;
    }

    const fetchVideos = async () => {
      try {
        // First, get the upload playlist ID for the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
        );
        const channelData = await channelResponse.json();

        if (
          !channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
        ) {
          throw new Error("Could not find channel's uploads playlist");
        }

        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Then, get the videos from the uploads playlist
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          setError("Build videos to showcase.");
        }
      } catch (error) {
        setError("Failed to fetch videos.");
        console.error("Error fetching videos:", error);
      }
      setLoading(false);
    };

    fetchVideos();
  }, [channelId]);

  return { videos, loading, error };
};

export default useYouTubeVideos;
