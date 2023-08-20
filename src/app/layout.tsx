import '@/scss/main.scss';
import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';

const chakra_petch = Chakra_Petch({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Home',
    description: 'Site about games',
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={chakra_petch.className}>{children}</body>
        </html>
    );
}
