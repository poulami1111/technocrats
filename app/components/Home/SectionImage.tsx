import React from "react";
import Image from "next/image";



const SectionWithImage = () => {
    return (
        <div className=" py-16 ">
            <div className="absolute  bg-[rgba(99,102,241,0.4)] w-40 h-40 blur-3xl -z-10  right-10  shadow-[0_0_35px_5px_rgba(255,193,69,0.8)]  "></div>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mb-16">
                <div className="md:w-1/2">
                    <Image
                        width={1400}
                        height={100}
                        src="/images/fitness.jpg"
                        alt="Track Progress"
                        className="rounded-xl shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                        Track your journey to better health!
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Monitor your progress effortlessly, celebrate every milestone and
                        stay inspired with data-driven insights tailored to your goals. Our
                        app keeps you motivated, providing a clear picture of your journey
                        and ensuring you stay on the path to lasting wellness.
                    </p>
                </div>
            </div>
            <div className="absolute  bg-[rgba(99,102,241,0.4)] w-40 h-40 blur-3xl -z-10  left-10  shadow-[0_0_35px_5px_rgba(255,193,69,0.8)]  "></div>
            
            <div className="flex flex-col md:flex-row-reverse items-center justify-center max-w-5xl mx-auto mb-16">
                <div className="md:w-1/2">
                    <Image
                        src="/images/nutrition.png"
                        width={1200}
                        height={100}
                        alt="Detailed Insights"
                        className="rounded-xl shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pr-12 mt-6 md:mt-0 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                        Stay informed with detailed insights!
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Get personalized insights into your health journey, enabling you to
                        make informed decisions. Our app ensures you always have a clear
                        understanding of your progress and areas to improve, empowering you
                        to achieve your goals.
                    </p>
                </div>
            </div>
            <div className="absolute  bg-[rgba(99,102,241,0.4)] w-40 h-40 blur-3xl -z-10  right-10  shadow-[0_0_35px_5px_rgba(255,193,69,0.8)]  "></div>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mb-16">
                <div className="md:w-1/2">
                    <Image
                        width={1600}
                        height={100}
                        src="/images/image3.jpg"
                        alt="Track Progress"
                        className="rounded-xl shadow-md mt-2"
                    />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                        Track your journey to better health!
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Monitor your progress effortlessly, celebrate every milestone and
                        stay inspired with data-driven insights tailored to your goals. Our
                        app keeps you motivated, providing a clear picture of your journey
                        and ensuring you stay on the path to lasting wellness.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionWithImage;
