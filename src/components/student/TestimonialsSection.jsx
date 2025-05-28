import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
    return (
        <div className='container'>
            <div className='section_heading'>
                <h2 className='section_title'>Testimonials</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae mollitia qui? Nulla reiciendis distinctio ut omnis, reprehenderit aut sed!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 lg:mt-10'>
                {
                    dummyTestimonial.map((testimonial, index) => (
                        <>
                        <div key={index} className='text-sm text-left border border-gray-500 rounded-lg bg-white dark:bg-slate-800 shadow-[0px_4px_15px_0px] shadow-black/20 dark:shadow-white/20 overflow-hidden'>
                            <div className='bg-gray-500/10 '>
                                <div className='flex items-center gap-3 p-4 bg-gray-300 dark:bg-gray-700'>
                                    <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full'/>
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className='p-5 pb-7 space-y-3'>
                                    <div className='flex items-center gap-0.5'>
                                        {[...Array(5)].map((_, i) => (
                                            <>
                                            <img key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt="" />
                                            </>
                                        ))}
                                    </div>
                                    <p className='dark:gray-text-400'>{testimonial.feedback}</p>
                                    <a href='#' className='block text-accent'>Read More</a>
                                </div>
                            </div>
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default TestimonialsSection;