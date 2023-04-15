import { createClient } from '@supabase/supabase-js'

const api_proj_key = 'https://wsybdgjqnaapuuxwtarc.supabase.co';
const api_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzeWJkZ2pxbmFhcHV1eHd0YXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NDAxNDQsImV4cCI6MTk5NzExNjE0NH0.FAVsMDMtlAZuKj4pEr439z1E2eew1TkysikbRBal3Fg';



export const supabase = createClient(api_proj_key, api_anon_key)



async function fetchCards() {
  const { data: cards, error } = await supabase.from('cards').select('*');
  if (error) {
    console.error(error);
    return [];
  }
  return cards.map((card) => {
    return {
      title: card.title,
      description: card.description,
      shortDesc: card.short_desc,
      imageUrl: card.image_url,
      linkUrl: card.link_url,
      options: card.options.map((option) => {
        return {
          label: option.label,
          link: option.link,
          key: option.key,
        };
      }),
    };
  });
}

export default fetchCards;