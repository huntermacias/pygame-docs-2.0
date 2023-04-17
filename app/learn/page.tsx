'use client'
import { useState, useEffect } from "react";
import LearningCard from "../../components/LearningCard";
import { supabase } from '../../lib/supabaseClient';
import { Card, SupabaseCard } from "../../types";

const mapSupabaseCardToCard = (supabaseCard: SupabaseCard): Card => {
  return {
    key: supabaseCard.key,
    title: supabaseCard.title,
    description: supabaseCard.description,
    shortDesc: supabaseCard.short_desc,
    imageUrl: supabaseCard.image_url,
    linkUrl: supabaseCard.link_url,
    options: supabaseCard.options.map((option) => ({
      label: option.label,
      link: option.link,
      shortdescription: option.shortdescription,
    })),
  };
};

const LearnPage = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data: supabaseCards, error } = await supabase.from("pygame_learning_cards").select("*");
        if (error) {
          throw error;
        }
        const cards = supabaseCards.map(mapSupabaseCardToCard);
        setCards(cards);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="container mx-auto py-10 font-mono">
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="overflow-hidden mb-14 shadow-lg rounded-lg bg-[#0a0a0a] ">
            <LearningCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
