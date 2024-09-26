import MenuDetailsCard from '@/components/MenuDetails/MenuDetailsCard/MenuDetailsCard'
import MenuDetailsTopbar from '@/components/MenuDetails/MenuDetailsTopbar/MenuDetailsTopbar'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{ width: "100%", padding: "0 20px", overflow: "auto" }}>
        {/* TOPBAR */}
        <Box>
            <MenuDetailsTopbar />
        </Box>
        
        {/* MENU DETAILS CONTENT */}
        
        <Box sx={{margin: "16px 0", width: "100%"}}>
          <MenuDetailsCard />
          <MenuDetailsCard />
          <MenuDetailsCard />
        </Box>
    </Box>
  )
}

export default page