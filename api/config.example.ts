// Example configuration file
// Copy this to config.ts and fill in your actual credentials
// ⚠️ DO NOT commit config.ts to Git if it contains real credentials!

export const config = {
  supabase: {
    url: 'YOUR_SUPABASE_URL_HERE', // e.g., 'https://xxxxx.supabase.co'
    anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE', // Get from Supabase dashboard
  },
  spotify: {
    clientId: 'YOUR_SPOTIFY_CLIENT_ID_HERE', // Get from Spotify Developer Dashboard
    clientSecret: 'YOUR_SPOTIFY_CLIENT_SECRET_HERE', // Get from Spotify Developer Dashboard
    guestRedirectUri: 'https://qrate-mvp.vercel.app/guest', // Production URL
    djRedirectUri: 'https://qrate-mvp.vercel.app/dj/spotify/callback', // Production URL
  },
};

