function Song() {
    return (
        <div className="flex items-center justify-center flex-wrap">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/6lYdV7rTtv3dVpQ89htlRU?utm_source=generator"
        width="400px"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>
    );
  }
  
  export default Song;
  