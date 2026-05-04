type Props = {
  title: string;
  highlight?: string; 
};

export default function SectionTitle({ title, highlight }: Props) {
  if (highlight) {
   
    const parts = title.split(highlight);
    return (
      <h2 className="text-4xl font-bold mb-8 text-center">
        {parts[0]}
        <span className="text-purple-500">{highlight}</span>
        {parts[1]}
      </h2>
    );
  }

  return <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>;
}
