import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import { useEffect } from "react";
interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
    useEffect(() => {
        document.title = title;
    }, [title])
    return (
        <>
        <Navbar />
            <title>{title}</title>
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
            </main>
            <Footer />
        </>
    )
}