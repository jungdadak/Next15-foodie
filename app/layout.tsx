// app/layout.jsx 또는 pages/_app.jsx (Next.js 버전에 따라 다름)
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/ui/Header";
export const metadata = {
	title: "NextLevel Food",
	description: "Delicious meals, shared by a food-loving community.",
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="relative">
				<Header />
				{children}
			</body>
		</html>
	);
}
