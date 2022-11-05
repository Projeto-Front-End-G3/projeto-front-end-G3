import { AnnouncementContext } from '../../contexts/AnnouncementContext';
import { useContext, ReactNode } from 'react';
import { motion } from 'framer-motion';


interface iGlobalLoadingProps {
    children: ReactNode;
}

const spinTransition = {
    loop: Infinity,
    duration: '0.8',
}

const GlobalLoading = ({ children }: iGlobalLoadingProps) => {

    const { globalLoading } = useContext(AnnouncementContext)

    return (
        <>
            {globalLoading ?

                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '90vh',
                }}>
                    <motion.span
                        style={{
                            display: 'block',
                            width: '4rem',
                            height: '4rem',
                            border: '0.3rem solid #d4c9c96e',
                            borderTop: '0.3rem solid #191970',
                            borderRadius: '50%',
                            position: 'absolute',
                            boxSizing: 'border-box',
                            top: '50%',
                            left: '50%'
                        }}
                        animate={{ rotate: 360 }}
                        transition={spinTransition}
                    />
                </div>

                :
                (<>
                    {children}
                </>)
            }
        </>
    )
}

export default GlobalLoading;