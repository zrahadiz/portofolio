import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class Footer extends Component {
    render(){
        return (
            <footer id="footer">
                <div className='bg-gradient-to-t from-slate-700 to-slate-800'>
                    <div className='grid justify-center font-permanentMarker text-xl sm:text-4xl text-teal-300 rotate-3'>
                        <h2>Connect With Me</h2>
                    </div>
                    <div className='2lg:flex items-center mt-8 font-permanentMarker text-2xl'>
                        <a href='https://github.com/zrahadiz' target='_blank' rel='noreferrer' className='flex items-center justify-between 2lg:w-1/4 bg-[#333333] hover:bg-[#202020] px-5 py-8'>
                            <p className='text-[darkgray]'>Github</p>
                            <Icon icon="eva:github-fill" color="darkgray" width={34}/>
                        </a>
                        <a href='https://www.instagram.com/zrahadiz/' target='_blank' rel='noreferrer' className='flex items-center justify-between 2lg:w-1/4 bg-[#feda75] hover:bg-[#d8ba68] px-5 py-8'>
                            <p className='text-[#d62977b0]'>instagram</p>
                            <Icon icon="icon-park-twotone:instagram" color="rgba(214, 41, 119, 0.6901960784313725)" width={34}/>
                        </a>
                        <a href='https://wa.me/628111107244' target='_blank' rel='noreferrer' className='flex items-center justify-between bg-[#5cddce] 2lg:w-1/4 hover:bg-[#4aafa3] px-5 py-8'>
                            <p className='text-[#128c7e]'>whatsapp</p>
                            <Icon icon="ph:whatsapp-logo-duotone" color="#128c7e" width={34}/>
                        </a>
                        <a href='https://www.linkedin.com/in/rahadi-fauzan/' target='_blank' rel='noreferrer' className='flex items-center justify-between 2lg:w-1/4 bg-[#0077b5] hover:bg-[#0e5d88] px-5 py-8'>
                            <p className='text-[#7cc7f0]'>linkedin</p>
                            <Icon icon="ph:linkedin-logo-duotone" color="#7cc7f0" width={34}/>
                        </a>
                    </div>
                    <a href='mailto:rahadifauzan7@gmail.com' target='_blank' rel='noreferrer'>
                        <div className='flex justify-center items-center text-center bg-teal-700 hover:bg-teal-800 p-4 font-audiowide space-x-2'>
                            <p className='text-xl text-teal-400'>EMAIL ME</p>
                            <Icon icon="line-md:email-twotone" color='#2dd4bf' width={24}/>
                        </div>
                    </a>
                    <div className='grid place-content-center bg-black text-white p-3'>
                        <p> © Copyright 2023, Rahadi Fauzan. All Rights Reserved.</p>
                    </div>    
                </div>
            </footer>
        );
    }
}

export default Footer;