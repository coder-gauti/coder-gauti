import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import './main-layout.scss'
import { HomeFilled, MailFilled, UserOutlined, CreditCardFilled } from '@ant-design/icons'
import { ROUTES } from '../utils/common-utils';
import { useNavigate , useLocation} from "react-router";
import { Button } from 'antd'

const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pageVariants = {
      initial: { opacity: 0, y: 50 },  // Start from below
      animate: { opacity: 1, y: 0 },   // Move to the center
      exit: { opacity: 0, y: -50 }     // Move out upwards
    };
  
    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.2
    };
  return (
      <div className="main-layout">
        <div className="content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}  
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="page-content" 
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
        <div className='side-menu'>
            <Button hr onClick={()=> {navigate(ROUTES.HOME)}} className={window.location.pathname === '/home' ? 'active': 'non-active'} shape='circle' icon={<HomeFilled />}/>
            <Button onClick={()=> {navigate(ROUTES.ABOUT)}} className={window.location.pathname === '/about' ? 'active': 'non-active'} shape='circle' icon={<UserOutlined />}/>
            <Button onClick={()=> {navigate(ROUTES.CONTACT)}} className={window.location.pathname === '/contact' ? 'active': 'non-active'} shape='circle' icon={<MailFilled />}/>
            <Button onClick={()=> {navigate(ROUTES.PORTFOLIO)}} className={window.location.pathname === '/portfolio' ? 'active': 'non-active'} shape='circle' icon={<CreditCardFilled />}/>
        </div>
       
      </div>
  )
}

export default MainLayout;
