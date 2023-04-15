import { createClient } from '@supabase/supabase-js'

const api_proj_key = process.env.SUPABASE_PROJ_KEY;
const api_anon_key = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(api_proj_key, api_anon_key)