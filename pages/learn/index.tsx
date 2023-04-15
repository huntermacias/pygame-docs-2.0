import LearningCard from "../../components/LearningCard";
import card from "../../documentation/card_data"


const LearnPage = () => {
 
  return (
    <div className="py-10 font-mono">
      <div className="container mx-auto">
        <div className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {card.map((card, index) => (
            <div key={index} className="overflow-hidden mb-14 shadow-lg rounded-lg bg-[#0a0a0a] ">
              <LearningCard cards={[card]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;