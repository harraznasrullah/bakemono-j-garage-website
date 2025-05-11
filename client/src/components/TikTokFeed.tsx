import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TikTokVideo {
  id: string;
  url: string;
  embed_url: string;
  thumbnail: string;
  description: string;
  date: string;
}

interface TikTokData {
  username: string;
  profile_url: string;
  last_updated: string;
  videos: TikTokVideo[];
}

interface TikTokFeedProps {
  className?: string;
}

const TikTokFeed = ({ className = '' }: TikTokFeedProps) => {
  const [data, setData] = useState<TikTokData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/tiktok_videos.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error('Error fetching TikTok data:', err);
        setError(language === 'en' 
          ? 'Failed to load TikTok videos. Please try again later.' 
          : 'Gagal memuat video TikTok. Sila cuba lagi kemudian.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center min-h-[200px] ${className}`}>
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">
          {language === 'en' ? 'Loading TikTok videos...' : 'Memuatkan video TikTok...'}
        </p>
      </div>
    );
  }

  if (error || !data || !data.videos || data.videos.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg ${className}`}>
        <i className="fas fa-exclamation-circle text-4xl text-gray-400 mb-4"></i>
        <p className="text-center text-gray-600">
          {error || (language === 'en' 
            ? 'No TikTok videos available at the moment.' 
            : 'Tiada video TikTok tersedia pada masa ini.')}
        </p>
        <a 
          href={`https://www.tiktok.com/@${data?.username || 'bakemonojgarage'}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 text-primary hover:underline"
        >
          {language === 'en' ? 'Visit our TikTok page' : 'Lawati halaman TikTok kami'}
        </a>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 gap-6">
        {data.videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-medium truncate">{video.description}</h4>
              <p className="text-sm text-gray-500">{video.date}</p>
            </div>
            <div className="relative pt-[177.77%]">
              <iframe
                src={video.embed_url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
                title={`TikTok video ${video.id}`}
              ></iframe>
            </div>
            <div className="p-4">
              <a 
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                <i className="fab fa-tiktok mr-2"></i>
                {language === 'en' ? 'View on TikTok' : 'Lihat di TikTok'}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          {language === 'en' 
            ? `Last updated: ${data.last_updated}` 
            : `Kemas kini terakhir: ${data.last_updated}`}
        </p>
        <a 
          href={data.profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-primary hover:underline"
        >
          <i className="fab fa-tiktok mr-1"></i>
          {language === 'en' ? 'See more on TikTok' : 'Lihat lebih lanjut di TikTok'}
        </a>
      </div>
    </div>
  );
};

export default TikTokFeed;