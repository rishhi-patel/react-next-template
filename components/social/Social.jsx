import Link from "next/link";

const Social = ({ items = [] }) => {
  return (
    <>
      {items?.map(([Item, url], i) => (
        <Link key={i} href={url}>
          <Item />
        </Link>
      ))}
    </>
  );
};

export default Social;
