import { supabase } from './supabaseClient.js'

const { data, error } = await supabase
  .from('notes')
  .upsert([
    { title: 'Learn Supabase', content: 'Follow the beginner guide' },
    { title: 'minu' ,content:'hi'},
  ])
  .select()

if (error) {
  console.error('Insert failed:', error.message)
} else {
  console.log('Inserted:', data)
}

