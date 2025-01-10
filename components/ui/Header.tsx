import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
	return (
		<header className="relative bg-transparent">
			{/* 헤더 배경 */}
			<div className="absolute w-full h-80 top-0 left-0 -z-10">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: "#59453c", stopOpacity: "1" }} />
							<stop offset="100%" style={{ stopColor: "#8f3a09", stopOpacity: "1" }} />
						</linearGradient>
					</defs>
					<path
						fill="url(#gradient)"
						d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</div>

			<nav className="flex justify-between items-center p-8 px-4 md:px-[10%] relative z-10">
				{/* 로고와 사이트 이름 */}
				<Link
					href="/"
					className="flex items-center gap-8 no-underline text-gray-300 font-bold tracking-wide uppercase text-2xl"
				>
					<Image
						src={logoImg}
						width={80} // 5rem = 80px
						height={80} // 5rem = 80px
						alt="NextLevel Food Logo"
						className="object-contain drop-shadow-lg"
					/>
					<span className="font-montserrat">NextLevel Food</span>
				</Link>

				{/* 네비게이션 링크 */}
				<ul className="list-none m-0 p-0 flex gap-6 text-xl">
					<li>
						<Link
							href="/meals"
							className="no-underline text-gray-300 font-bold py-2 px-4 rounded-lg bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text hover:text-transparent transition-colors duration-300 antialiased"
						>
							Browse Meals
						</Link>
					</li>
					<li>
						<Link
							href="/community"
							className="no-underline text-gray-300 font-bold py-2 px-4 rounded-lg bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text hover:text-transparent transition-colors duration-300 antialiased"
						>
							Foodies Community
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
