import React, { Component } from 'react';
import { Carousel } from 'flowbite-react';

class Experience extends Component {
    render(){
        if(!this.props.data) return null;
    
        const web = this.props.data.projects.web?.map(function (web){
            return (
                <ol className='space-y-5 p-4 rounded-md hover:bg-teal-600/10' key={web.title}>
                    <li>
                        <div className='grid place-items-center w-full'>
                            <Carousel slideInterval={20000}>
                                {web.imgUrl.map(imgUrl => (
                                    <img src={"images/"+imgUrl} alt={web.title} key={imgUrl} className='relative w-9/12 xl:w-6/12'></img>
                                ))}
                            </Carousel>
                            {/* <ImgCarousel/> */}
                            <ul className='flex justify-center mt-3 space-x-2'>
                                {web.projectView.map(projectView => (
                                <a key={projectView} className='bg-blue-400/10 rounded-lg p-1 xs:p-2 w-12 xs:w-24 font-semibold text-xs xs:text-sm text-blue-300 text-center hover:bg-blue-300 hover:text-blue-900' href={projectView.split("|")[1]} target='_blank' rel='noreferrer'><li>{projectView.split("|")[0]}</li></a>
                                ))}
                            </ul>
                        </div>
                        <div className='w-full mt-5'>
                            <h2 className='font-semibold'>{web.title}</h2>
                            <h3 className='text-sm text-slate-300'>{web.status}</h3>
                            <p className=' text-slate-300'>{web.projectDesc}</p>
                            <ul className='flex flex-wrap'>
                                {web.techStack.map(techStack => (
                                <li key={techStack} className='bg-teal-400/10 rounded-lg p-1.5 mr-2 mt-2 font-semibold text-sm text-teal-300 text-center'>{techStack}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ol>
            )
        });

        return (
            <div id="projects" className='scroll-mt-8'>
                <div className='bg-gradient-to-t from-slate-800 to-slate-900 px-5 sm:px-20 py-10 font-quicksand text-white '>
                    <h2 className='mb-3 font-semibold text-lg'>Projects</h2>
                    <div className='space-y-5'>
                        {web}
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;