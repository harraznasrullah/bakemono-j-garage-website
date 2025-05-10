import { useEffect, useRef } from 'react';

interface TikTokEmbedProps {
  username: string;
  className?: string;
}

export const TikTokEmbed = ({ username, className = '' }: TikTokEmbedProps) => {
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
    document.body.appendChild(script);

    // Clean up on unmount
    return () => {
      if (document.getElementById('tiktok-embed-script')) {
        document.getElementById('tiktok-embed-script')?.remove();
      }
    };
  }, [username]);

  return (
    <div ref={containerRef} className={className}>
      <blockquote 
        className="tiktok-embed" 
        cite={`https://www.tiktok.com/@${username}`}
        data-unique-id={username}
      >
        <section>
          <a href={`https://www.tiktok.com/@${username}`} target="_blank" rel="noopener noreferrer">
            @{username}
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;