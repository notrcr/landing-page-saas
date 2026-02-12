import { Button } from "../share/Button";
import { Container } from "../share/container";
import { Paragraph } from "../share/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
    return (
        <section className="relative pt-32 lg:pt-36">
            <Container className="flex flex-col lg:flex-row gap-10 lg:gap-10">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl
             bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden">
                    </span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80">
                    </span>
                </div>

                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <h1 className="text-heading-1 font-semibold text-3xl sm:text-4xl lg:text-6xl">
                        Welcome To Business{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            FastTrack
                        </span>
                    </h1>
                    <Paragraph className="mt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolores. Similique quisquam sed esse alias at repellendus asperiores error est earum, minima maxime eum dolores nostrum cupiditate? Dignissimos, rem ab!
                    </Paragraph>
                    <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                            <form action="#" className="py-1.5 pl-3 sm:pl-6 w-full pr-1.5 flex gap-2 sm:gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
                                <span className="min-w-max pr-2 border-r border-box-border hidden sm:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <input type="email" placeholder="Enter your email" className="w-full py-2.5 sm:py-3 outline-none bg-transparent text-sm sm:text-base" />
                                <Button className="min-w-max text-white !px-4 sm:!px-6 !py-2 sm:!py-3 text-sm sm:text-base">
                                    Get Started
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Hero image" width={2350} height={1170} className="lg:w-full lg:h-full object-cover rounded-3xl lg:max-h-none max-h-96" />
                </div>
            </Container>
            <Numbers />
        </section>
    )
}