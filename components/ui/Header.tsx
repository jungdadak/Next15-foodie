import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import HeaderBg from './main-header-bg';
import NavLink from '../nav-link';

export default function MainHeader() {
  return (
    <header className="relative bg-transparent">
      <nav className="flex justify-between items-center p-8 px-4 md:px-[10%] relative z-10">
        {/* 배경 */}
        <HeaderBg />

        {/* 로고와 사이트 이름 */}
        <Link
          href="/"
          className="flex items-center gap-4 md:gap-8 no-underline text-gray-300 font-bold tracking-wide uppercase flex-shrink min-w-0"
        >
          <Image
            src={logoImg}
            width={60}
            height={60}
            alt="NextLevel Food Logo"
            className="object-contain drop-shadow-lg md:w-[80px] md:h-[80px] flex-shrink-0"
            priority
          />
          <span className="font-montserrat text-sm sm:text-lg md:text-2xl truncate">
            NextLevel Food
          </span>
        </Link>

        {/* 네비게이션 링크 */}
        <ul className="list-none m-0 p-0 flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-xl flex-shrink min-w-0">
          {/* Browse Meals 링크 */}
          <li className="flex-shrink min-w-0"></li>
          <NavLink href={'/meals'}>Browse Meals</NavLink>
          {/* Foodies Community 링크 */}
          <li className="flex-shrink min-w-0">
            <NavLink href={'/community'}>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
