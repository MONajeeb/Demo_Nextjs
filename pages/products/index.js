import Link from "next/link";

function List() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul>
        <li>
          <Link href="/products/1" replace>
            <a>Product 1</a>
          </Link>
        </li>
        <li>p2</li>
        <li>p3</li>
      </ul>
    </>
  );
}

export default List;
