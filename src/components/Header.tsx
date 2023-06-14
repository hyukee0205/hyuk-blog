import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href='/'>
        <h1>{"Hyuk's Blog"}</h1>
      </Link>
      <nav>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}

