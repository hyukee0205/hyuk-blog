import Link from 'next/link';
import DarkMode from './tailwind/DarkMode';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-[#f7f7f7] dark:bg-[#1c1c1c] flex justify-between items-center px-6 py-5 border-b dark:border-b-darkSecond'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>{"Hyuk"}</h1>
      </Link>
      <nav className='flex gap-4 items-center'>
        <Link className='font-semibold' href='/about'>About</Link>
        <Link className='font-semibold' href='/posts'>Posts</Link>
        <Link className='font-semibold' href='/contact'>Contact</Link>
        <DarkMode />
      </nav>
    </header>
  );
}

