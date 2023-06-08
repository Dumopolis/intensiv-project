import React from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';


export default function Footer(
  {
    color = 'primary',
    iconColor = "inerhit",
    showGitHubIcon = true,
    showLinkedInIcon = true,
    showTelegramIcon = true,
  }
) {

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position='relative' color={color}>
        <Toolbar style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 40,
        }}>
          {showGitHubIcon && <a href="https://github.com/Dumopolis"><GitHubIcon color={iconColor} /></a>}
          {showLinkedInIcon && <a href="https://www.linkedin.com/in/dumopolis/"><LinkedInIcon color={iconColor} /></a>}
          {showTelegramIcon && <a href="https://t.me/dumopolis"><TelegramIcon color={iconColor} /></a>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
