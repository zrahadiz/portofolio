import React, { Component } from 'react';

class Experience extends Component {
    render(){
        if(!this.props.data) return null;

        const experience = this.props.data.resume.experience?.map(function (experience){
            return (
                <ol key={experience.roleAtCompany}>
                    <li className='xl:flex xl:grid-cols-2 xl:gap-20'>
                        <div className='xl:w-2/12'>
                            <h2 className='font-semibold mb-2'>{experience.period}</h2>
                        </div>
                        <div className='w-full space-y-1'>
                            <h2 className='font-semibold'>{experience.roleAtCompany}</h2>
                            <h3 className='text-sm text-slate-300'>{experience.status}</h3>
                            <p className=' text-slate-300'>{experience.jobDesc}</p>
                        </div>
                    </li>
                </ol>
            )
        });

        return (
            <div id="experience" className='scroll-mt-8'>
                <div className='bg-gradient-to-t from-slate-900 to-navBg mt-10 px-5 sm:px-20 py-10 font-quicksand text-white '>
                    <h2 className='mb-3 font-semibold text-lg'>Experience</h2>
                    <div className='space-y-5'>
                        {experience}
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;