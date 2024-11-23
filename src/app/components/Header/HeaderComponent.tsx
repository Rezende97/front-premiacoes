'use client';

import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [value, setValue] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '9px 20px',
          backgroundColor: 'primary.main',
          color: '#ffffff',
          position: 'fixed',  
          top: 0, 
          left: 0,
          right: 0, 
          zIndex: 10, 
        }}
      >
        {/* Logo */}
        <Typography variant="h6" component="div">
          Meu Logo
        </Typography>

        {/* Menu para desktop */}
        <nav>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label="Navegação de abas"
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ffffff',
                },
              }}
            >
              <Tab label="Home" />
              <Tab label="Sobre" />
              <Tab label="Contato" />
            </Tabs>
          </Box>
        </nav>

        {/* Menu para mobile */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton
            aria-label="Abrir menu"
            onClick={toggleMobileMenu}
            sx={{ color: '#ffffff' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Dropdown para menu mobile */}
      {isMobileMenuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '60px',
            right: '10px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: 3,
            zIndex: 10,
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            padding: '10px',
          }}
        >
          <Tab
            label="Home"
            onClick={() => {
              setValue(0);
              setIsMobileMenuOpen(false);
            }}
            sx={{
              color: '#ffffff',
              textAlign: 'left',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
          <Tab
            label="Sobre"
            onClick={() => {
              setValue(1);
              setIsMobileMenuOpen(false);
            }}
            sx={{
              color: '#ffffff',
              textAlign: 'left',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
          <Tab
            label="Contato"
            onClick={() => {
              setValue(2);
              setIsMobileMenuOpen(false);
            }}
            sx={{
              color: '#ffffff',
              textAlign: 'left',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
        </Box>
      )}
    </header>
  );
}
