import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import Link from 'next/link';
import GithubIcon from './ui/icon/GithubIcon';
import VelogIcon from './ui/icon/VelogIcon';
import EmailIcon from './ui/icon/EmailIcon';


export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Profile Image'
        width={200}
        height={200}
        priority
      />
      <h3 className='my-4 text-base font-medium'>전찬혁</h3>
      <div className='flex justify-center gap-3 mb-10'>
        <Link href='https://github.com/hyukee0205'><GithubIcon /></Link>
        <Link href='mailto:hyukee0205@gmail.com'><EmailIcon /></Link>
        <Link href='https://velog.io/@hyukee0205'><VelogIcon /></Link>
      </div>
    </section>
  );
}

