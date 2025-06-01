import {motion} from 'framer-motion';

const LoadingSpinner = () => {
    return (
    <div className="h-screen w-full flex flex-col gap-8 items-center justify-center bg-black p-4">
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: 0.5}}
           className='relative'
        >
            <div className='w-24 h-24 rounded-full border-t border-l-4 border-secondary-purple animate-spin' />
            <motion.div
            animate={{ rotate: 360 }}
            transition={{
               duration: 8,
               reapeat: Infinity,
               ease: 'linear',
            }}
            className='absolute inset-0 flex items-center justify-center'
            >
                <div className='w-16 h-16 rounded-full border-r-4 border-b-4 border-primary-blue' />
            </motion.div>
           <motion.div
           animate={{scale: [1, 1.2, 1]}}
           transition={{
               duration: 2,
               repeat: Infinity,
           }}
           className='absolute inset-0 m-auto w-8 h-8 rounded-full bg-primary-blue/20'
           >
           </motion.div>
        </motion.div>
    </div>
)
}

export default LoadingSpinner