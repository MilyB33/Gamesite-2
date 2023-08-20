import { TopNavigation } from '@/components';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div>
            <TopNavigation />
            <main>{children}</main>
        </div>
    );
}
