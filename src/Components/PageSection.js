import React from 'react';
import { motion } from "framer-motion";

export const PageSection = (props)=>{
    const {sectionRererence, backgroundColor, children, minHeight} = props;
    return <motion.div
        ref={sectionRererence}
        style={{
          minHeight: `${minHeight}`,
          backgroundColor: `${backgroundColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
     {children}
      </motion.div>
}