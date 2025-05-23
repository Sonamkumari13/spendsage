import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabaseBrowserClient = createBrowserClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
        schema: 'public',
    },
});