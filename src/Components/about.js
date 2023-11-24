import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { Icon } from '@iconify/react';
import ParticlesBg from "particles-bg";

class About extends Component {
    render(){
        if(!this.props.data) return null;

        const name = this.props.data.name;
        const description = this.props.data.description;

        return (
            <div id="about" className='scroll-mt-20'>
                <ParticlesBg color='#352F44' type="lines" num={5} bg={true}/>
                <div className='mt-10 font-quicksand text-white text-center'>
                    <h1 className='font-semibold text-4xl'>{name}</h1>
                    <div className='flex flex-wrap justify-center text-xl space-x-1'>
                        <p>Thrive to be</p>
                        <Typewriter options={{
                            strings: ['Front-end Engineer', 'Back-end Engineer', 'QA Engineer'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </div>
                    <h2 className='mt-5 mx-5 sm:mx-20 lg:mx-60 text-sm xs:text-lg break-words'>{description}</h2>
                </div>
                <div className='mt-5 font-quicksand font-semibold text-slate-200 text-center'>
                    <h2 className='text-sm'>GET IN TOUCH</h2>
                    <ul className='flex justify-center items-center mt-2 space-x-2'>
                        <li className='hover:shadow-2xl hover:shadow-[#4078c0]'>
                            <a href='https://github.com/zrahadiz' target='_blank' rel='noreferrer'><Icon icon="fa-brands:github-square" width={36} color="#4078c0" /></a>
                        </li>
                        <li className='hover:shadow-2xl hover:shadow-[#4078c0]'>
                            <a href='https://www.instagram.com/zrahadiz/' target='_blank' rel='noreferrer'><Icon icon="skill-icons:instagram" width={36}/></a>
                        </li>
                        <li className='hover:shadow-2xl hover:shadow-[#25d366]'>
                            <a href='https://wa.me/628111107244' target='_blank' rel='noreferrer'><Icon icon="fa-brands:whatsapp-square" color="#25d366" width="36" /></a>
                        </li>
                        <li className='hover:shadow-2xl hover:shadow-[#4078c0]'>
                            <a href='https://www.linkedin.com/in/rahadi-fauzan/' target='_blank' rel='noreferrer'><Icon icon="skill-icons:linkedin" width="36" /></a>
                        </li>
                    </ul>
                    <div className='mt-2'>
                        <a
                            href="/documents/CV_Rahadi Fauzan.pdf"
                            download="CV_Rahadi-Fauzan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className='bg-[#4078c0] p-2 rounded-lg hover:bg-[#294161]'>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;