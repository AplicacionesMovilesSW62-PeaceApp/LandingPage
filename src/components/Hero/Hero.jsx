import { Button } from "../Button/Button";
import './Hero.css';

export const Hero = () => {
    return (
        <section id="hero" className="w-full bg-slate-300">
            <div className="container-section hero-content font-poppins flex flex-col gap-0 lg:flex-row lg:content-center" >
                <div className="flex flex-col justify-center gap-8 z-30 py-44 lg:items-center lg:content-center">
                    <h1 className="text-white text-6xl sm:text-5xl font-poppins font-semibold tracking-wide drop-shadow">
                        PeaceApp
                    </h1>
                    <p className="text-slate-100 font-thin tracking-wide text-2xl sm:text-1xl leading-loose drop-shadow">
                        “Your Safety, Our Priority: Building a <br /> Better, Safer Future for Every Citizen"
                    </p>
                    <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 mt-4 lg:items-center lg:content-center">
                        <a href="#about_us"><Button name="Our Team" /></a>
                        <a href="#service"><Button name="Know More" /></a>
                    </div>
                </div>
                <div className="z-30 image-content">
                    <img src="/src/assets/hand-peaceapp_hero.png" alt="Descripción de la imagen" />
                </div>
            </div>
        </section>
    )
}
