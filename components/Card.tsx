interface Props {
  link: string;
  title: string;
  children: string;
}

function Card({ link, title, children }: Props) {
  return (
    <a
      href={link}
      className="block rounded-lg border border-zinc-700 p-8 transition-colors hover:border-fuchsia-400 hover:text-fuchsia-400"
    >
      <h2 className="mb-2 text-xl font-bold">{title} &rarr;</h2>
      <p>{children}</p>
    </a>
  );
}

export default Card;
