import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Place your order");
    router.push("/products");
  };

  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <button onClick={handleClick}>Place holder</button>
    </div>
  );
}

export default Home;
