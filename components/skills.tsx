'use client';

import Sectionheading from './sectionheading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hook'
import {motion} from 'framer-motion'
import  '@/public/cdnjs/jquery.easypiechart.min.js'
import $ from 'jquery'
import { Progress } from '@material-tailwind/react';


export default function Skills() {
    const {ref,inView} = useSectionInView('Skills',0.3);

    const fadeInAnimationVarient ={
        initial:{
            opacity:0,
            y:100
        },
        animate:(custom:number) => ({
            opacity:1,
            y:0,
            transition:{
                delay:0.05*custom,
            }
        })
    }
    inView && $(function() {
        //create instance
        $('.chart').easyPieChart({
            animate: 1000,
            size: 150,
            barColor: '#0047AB',
            trackColor: '#C8C8C8',
            scaleColor: false,
        });
        
    });


  return (
    <section ref={ref} id='skills'className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
    

        <Sectionheading>my skills</Sectionheading>
        <div  className='flex w-full flex-wrap relative text-center justify-evenly px-10 mx-auto my-10 gap-y-3'>
            <div className=' flex flex-col w-[15rem] float-left'>
                <div className="chart relative flex w-[150px] h-[150px] m-auto mb-6 items-center justify-center" data-percent="95">
                    <span className='absolute'>95%</span>
                </div>
                <span className='font-semibold uppercase text-lg'>HTML/CSS</span>
            </div>
            <div className=' flex flex-col w-[15rem] float-left'>
                <div className="chart relative flex w-[150px] h-[150px] m-auto mb-6 items-center justify-center" data-percent="75">
                    <span className='absolute'>75%</span>
                </div>
                <span className='font-semibold uppercase text-lg'>javascript</span>
            </div>
            <div className=' flex flex-col w-[15rem] float-left'>
                <div className="chart relative flex w-[150px] h-[150px] m-auto mb-6 items-center justify-center" data-percent="85">
                    <span className='absolute'>85%</span>
                </div>
                <span className='font-semibold uppercase text-lg'>react</span>
            </div>
           
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-[50px] p-5 gap-y-4 text-sm">
            <div className='flex flex-col px-3 gap-[2px]'>
                <h3 className='w-full flex px-1 justify-between'>
                    <span className='uppercase'>MOngoDb</span>
                    <span className='font-semibold'>30%</span>
                </h3>
                <Progress value={30} color='indigo' size='sm' placeholder={undefined}/>
            </div>
            <div className='flex flex-col px-3 gap-1'>
                <h3 className='w-full flex px-1 justify-between'>
                    <span className='uppercase'>framer motion</span>
                    <span className='font-semibold'>50%</span>
                </h3>
                <Progress value={50} color="blue-gray" size='sm' placeholder={undefined}/>
            </div> 
            <div className='flex flex-col px-3 gap-1'>
                <h3 className='w-full flex px-1 justify-between'>
                    <span className='uppercase'>node.js</span>
                    <span className='font-semibold'>62%</span>
                </h3>
                <Progress value={62} color="blue" size='sm' placeholder={undefined}/>
            </div> 
            <div className='flex flex-col px-3 gap-1'>
                <h3 className='w-full flex px-1 justify-between'>
                    <span className='uppercase'>tailwind-css</span>
                    <span className='font-semibold'>90%</span>
                </h3>
                <Progress value={90} color="teal" size='sm' placeholder={undefined}/>
            </div> 
            <div className='flex flex-col px-3 gap-1'>
                <h3 className='w-full flex px-1 justify-between'>
                    <span className='uppercase'>python</span>
                    <span className='font-semibold'>50%</span>
                </h3>
                <Progress value={50} color="purple" size='sm' placeholder={undefined}/>
            </div> 
            <div className='flex flex-col px-3 gap-1'>
                <h3 className='w-full flex px-1 justify-between'>
                    <span className='uppercase'>git</span>
                    <span className='font-semibold'>80%</span>
                </h3>
                <Progress value={80} color="cyan" size='sm' placeholder={undefined}/>
            </div>  
        </div>
        
        <ul className='flex justify-center flex-wrap gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill,index)=>(
                    <motion.li className="bg-white dark:bg-gray-500 dark:text-black/90 border border-black/[0.1] rounded-xl px-5 py-3" variants={fadeInAnimationVarient} initial="initial" whileInView='animate' viewport={{once:true}} custom={index} key={index}>
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
