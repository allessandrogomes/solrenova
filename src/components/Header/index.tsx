'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import style from './styles.module.scss'
import GetQuoteButton from '../shared/GetQuoteButton'
import Image from 'next/image'
import { Link } from 'react-scroll'

const drawerWidth = 240

const navItems = [
    {
        text: "Início",
        offset: -80,
        to: "inicio"
    },
    {
        text: "Diferenciais",
        offset: -150,
        to: "diferenciais"
    },
    {
        text: "Serviços",
        offset: -150,
        to: "servicos"
    },
    {
        text: "Projetos",
        offset: -150,
        to: "projetos"
    },
    {
        text: "Sobre Nós",
        offset: -150,
        to: "sobre"
    },
]

export default function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [isClosing, setIsClosing] = React.useState(false)

    const handleDrawerClose = () => {
        setIsClosing(true)
        setMobileOpen(false)
    }

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false)
    }

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen)
        }
    }

    const drawer = (
        <Box sx={{ minHeight: "400px", height: "100%", backgroundColor: "#192655", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
                <Image style={{ width: "150px", height: "80px" }} src="/images/logo.webp" width={666} height={375} alt="Logo SolRenova" />
            </Toolbar>
            <nav className={style.nav}>
                <ul className={style.ulNavbar}>
                    {navItems.map(item => <li key={item.text}><Link style={{ display: 'block', height: '26px' }} to={item.to} spy smooth duration={500} offset={item.offset}>{item.text}</Link></li>)}
                </ul>
            </nav>
            <GetQuoteButton />
        </Box>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                sx={{
                    backgroundColor: "#192655",
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "80px",
                    position: "fixed",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Image style={{ width: "150px", height: "80px" }} priority src="/images/logo.webp" width={666} height={375} alt="Logo SolRenova" />
                <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <nav>
                        <ul className={style.ulNavbar}>
                            {navItems.map(item => <li key={item.text}><Link style={{ display: 'block', height: '26px' }} to={item.to} spy smooth duration={500} offset={item.offset}>{item.text}</Link></li>)}
                        </ul>
                    </nav>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <GetQuoteButton />
                </Box>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}
