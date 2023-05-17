import React from 'react'
import { Link } from 'react-router-dom';

import { AppBar, Box, Toolbar } from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='relative'>
        <Toolbar style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 40,
        }}>
          <Link to="https://github.com/Dumopolis"><GitHubIcon /></Link>
          <Link to="https://www.linkedin.com/in/dumopolis/"><LinkedInIcon /></Link>
          <Link to="https://t.me/dumopolis"><TelegramIcon /></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
