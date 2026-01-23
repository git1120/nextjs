import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import FadeIn from './motion/FadeIn'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
            <div className="container">
                <section>
                    <div className="pb-16 pt-2 md:pb-24 lg:pb-36 lg:pt-24">
                        <div className="relative  flex-col lg:block">
                            <div className="flex flex-col items-center text-center">
                                <FadeIn>
                                    <h1 className="mt-8  text-balance text-4xl font-medium md:text-5xl lg:mt-16 xl:text-6xl">Najeeb Ahmad Group of Companies
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={0.1}>
                                    <p className="mt-6 max-w-3xl text-center text-lg font-medium leading-relaxed text-body-color md:mt-8 md:text-xl">
                                        A Trusted Supplier of Premium Afghan Dry Fruits, Nuts & Grapes, Backed by Reliable Logistics
                                    </p>
                                </FadeIn>
                                <FadeIn delay={0.2}>
                                    <div className="mt-10">
                                        <Link
                                            href="#"
                                            className="rounded bg-[#3F7171] px-6 py-2 text-base font-medium text-white hover:bg-[#356161] transition"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="group relative ">
                        <FadeIn y={12}>
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/1.webp"
                                        alt="Nvidia Logo"
                                        height="20"
                                        width="200"
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/2.webp"
                                        alt="Column Logo"
                                        height="16"
                                        width="200"
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/3.webp"
                                        alt="GitHub Logo"
                                        height="16"
                                        width="200"
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/4.webp"
                                        alt="Nike Logo"
                                        height="20"
                                        width="200"
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/5.webp"
                                        alt="Lemon Squeezy Logo"
                                        height="20"
                                        width="200"
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/6.webp"
                                        alt="Laravel Logo"
                                        height="16"
                                        width="200"
                                    />
                                </div>
                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/3.webp"
                                        alt="Lilly Logo"
                                        height="28"
                                        width="200"
                                    />
                                </div>

                                <div className="flex">
                                    <Image
                                        className="mx-auto h-64 w-fit dark:invert"
                                        src="/images/dry-fruits/4.webp"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="200"
                                    />
                                </div>
                            </InfiniteSlider>
                        </FadeIn>
                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </section>
            </div >
        </section >
    )
}
