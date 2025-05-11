import { useEffect, useRef } from 'react';

interface TikTokEmbedProps {
  username: string;
  videoId?: string; // Optional video ID for specific videos
  className?: string;
  embedType?: 'profile' | 'video'; // Type of embed: profile or specific video
}

export const TikTokEmbed = ({ 
  username, 
  videoId, 
  className = '',
  embedType = 'profile'
}: TikTokEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing TikTok embed scripts
    const existingScript = document.getElementById('tiktok-embed-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the TikTok embed script
    const script = document.createElement('script');
    script.id = 'tiktok-embed-script';
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    
    // This is important: The script needs to be loaded after the blockquote element is in the DOM
    document.body.appendChild(script);

    // Force reload the TikTok embed widget
    if (window.TikTokObject) {
      window.TikTokObject = undefined;
    }

    // Clean up on unmount
    return () => {
      if (document.getElementById('tiktok-embed-script')) {
        document.getElementById('tiktok-embed-script')?.remove();
      }
    };
  }, [username, videoId, embedType]);

  // Determine the citation URL based on embed type
  const citeUrl = embedType === 'video' && videoId 
    ? `https://www.tiktok.com/@${username}/video/${videoId}`
    : `https://www.tiktok.com/@${username}`;

  return (
    <div ref={containerRef} className={className}>
      <blockquote 
        className="tiktok-embed" 
        cite={citeUrl}
        data-unique-id={videoId || username}
        data-embed-type={embedType}
        data-embed-id={embedType === 'video' ? videoId : username}
      >
        <section>
          <a href={citeUrl} target="_blank" rel="noopener noreferrer">
            {embedType === 'video' ? 'View TikTok' : `@${username}`}
          </a>
        </section>
      </blockquote>
    </div>
  );
};

// Add this to make TypeScript happy with the TikTokObject property
declare global {
  interface Window {
    TikTokObject: any;
  }
}

export default TikTokEmbed;