import Link from "next/link";
import Head from "next/head";

const MainLayout = ({children, title= 'DevelopsToday blog Task'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="keywords" content="DevelopsToday, blog, next, react, redux, javascript, yesha"/>
        <meta name="description" content="this is blog created to Develops today by Yesha"/>
        <meta charSet="utf-8"/>
      </Head>
      <nav>
        <Link href={"/"}><a>Home</a></Link>
        <Link href={"/posts/new"}><a>Create new post</a></Link>
      </nav>
      <main>
        {children}
      </main>

      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: left;
            align-items: center;
            height: 60px;
            background: #111111;
            padding: 15px;
          }

          a {
            margin-right: 10px;
            color: white;
          }
        `}
      </style>
    </>
  )
}

export default MainLayout;
