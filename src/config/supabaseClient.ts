import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_SUPAURL as string;
const supabaseKey = import.meta.env.VITE_SUPAKEY as string;
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;