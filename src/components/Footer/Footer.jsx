import Logo from '../../assets/big-logo-peaceapp_darkmode.svg';
import ubicationLogo from '../../assets/ubication-logo.svg';

import FacebookIcon from "../../assets/facebook-icon.svg"
import TwitterIcon from "../../assets/twitter-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"
import LinkedinIcon from "../../assets/linkedin-icon.svg"
import WhatsappIcon from "../../assets/whatsapp-icon.svg"
import YoutubeIcon from "../../assets/youtube-icon.svg"

import { Button } from '../Button/Button';

export const Footer = () => {
    return (
        <section className="bg-footer py-20">
            <div className='mb-20 h-full flex justify-center items-center '>
                <img className='w-64' src={Logo} />
            </div>
            <div className="flex flex-col gap-16 container-footer">
          
                <div className='text-white font-poppins grid grid-auto-rows grid-cols-2 gap-10
                    md:grid-rows-2 md:grid-cols-3 lg:grid-rows-2 lg: lg:grid-cols-5'>
                   
                    <div className="flex flex-col items-start justify-center 
                        md:order-1 lg:order-2 lg:items-center lg:justify-start">
                        <div className="flex flex-col gap-5">
                   
                            <h1 className="text-lg font-light">Fabia Herrera</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center
                        md:order-2 lg:order-1 lg:items-center lg:justify-start">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-lg font-light">Ian Macavilca</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center
                        md:order-3 lg:order-3 lg:items-center lg:justify-center">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-lg font-light">Anatoly Noriega</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center
                        md:order-4 lg:order-4 lg:items-center lg:justify-center">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-lg font-light">Carlos Ochoa</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center
                        md:order-5 lg:order-5 lg:items-center lg:justify-end">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-lg font-light">Arian Rodriguez</h1>
                        </div>  
                    </div>
            
                    
                </div>
            </div>
        </section>
    )
}
