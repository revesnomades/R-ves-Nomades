// assets/js/supabaseClient.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://qxrxwgrgjvesevjkjmry.supabase.co";

// ⚠️ Mets ici ta clé ANON publique (Supabase > Settings > API > anon public)
// Elle commence souvent par "eyJ..."
const SUPABASE_ANON_KEY = "COLLE_ICI_TA_CLE_ANON";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
