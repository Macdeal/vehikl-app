export interface AdvisorsCardProps {
  imageURL: string;
  name: string;
  position: string;
  socials: string[];
}

const AdvisorsCard = ({
  imageURL,
  name,
  position,
  socials,
}: AdvisorsCardProps) => {

  const socialsData =   socials.map((item)=><a key={item} href="/">{item}</a>);

  return (
    <div className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-lg p-4 lg:p-8">
      <div className="w-60 rounded-md overflow-hidden mb-6">
        <img className="w-full h-full" src={imageURL} alt={name} />
      </div>
      <p className="font-medium mb-1 text-white/60">{name}</p>
      <p className="text-xs uppercase tracking-wider mb-2 text-white/60">{position}</p>
      <div className="flex gap-4 text-orange-500">
        {socialsData}
      </div>
    </div>
  );
};

export default AdvisorsCard;
