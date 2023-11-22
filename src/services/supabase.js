import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ercavrntlgmpdqhfdltq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyY2F2cm50bGdtcGRxaGZkbHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2ODY4NzMsImV4cCI6MjAxNjI2Mjg3M30.WVGxv5hKlT41HB_oiQEV0GttfGPZ1jaBBP60tcYkJKY'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

export default supabase;