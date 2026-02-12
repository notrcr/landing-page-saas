import { Container } from "../share/container"
import logo from "../../assets/icon.svg"
import { NavItem } from "../share/NavItem"
import { BtnLink } from "../share/BtnLink"
import { useThemeStore } from "../../store/ThemeStore"
const NavItems = [
    { href: "", text: "Home" },
    { href: "", text: "Features" },
    { href: "", text: "Pricing" },
    { href: "", text: "About" },
    { href: "", text: "Contact" },
]
export const Navbar = () => {
    const { toggleTheme, theme} = useThemeStore()
    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <Container>
                <nav className="w-full flex justify-between items-center gap-6 relative">
                    {/*Logo*/}
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="" className="w-10 h-10" />
                            <div className="inline-flex text-lg text-heading-1 font-semibold text-heading-1">
                                FastTrack
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full 
                                    left-0 lg:static lg:top-0 lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
                    >
                        <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3
                         text-lg text-heading-2 w-full lg:justify-center lg:items-center"
                        >
                            {NavItems.map((item, key) => (
                                <NavItem key={key} href={item.href} text={item.text} />
                            ))}
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                            <BtnLink text="Get Started" href="#cta" className="" /> </div>
                    </div>
                    <div className="min-w-max flex items-center gap-x-3">
                        <button onClick={toggleTheme} className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer">
                            {theme === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            )}    
                        </button>

                    </div>

                </nav>

            </Container>
        </header>
    )
}