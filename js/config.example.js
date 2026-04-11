/**
 * Supabase runtime config for OneTree Pakistan.
 *
 * HOW TO USE LOCALLY:
 *   cp js/config.example.js js/config.js
 *   Fill in your values in js/config.js
 *   js/config.js is gitignored — your keys will never be committed.
 *
 * IN PRODUCTION (GitHub Actions):
 *   The deploy workflow auto-generates js/config.js from repository secrets.
 *   Add these secrets in: Settings → Secrets → Actions
 *     SUPABASE_URL
 *     SUPABASE_ANON_KEY
 */
window.__ONETREE_SUPABASE__ = {
  url: 'YOUR_SUPABASE_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY'
};
