import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-6 py-5 border-b'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>{"Hyuk"}</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link className='font-semibold' href='/about'>About</Link>
        <Link className='font-semibold' href='/posts'>Posts</Link>
        <Link className='font-semibold' href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}

