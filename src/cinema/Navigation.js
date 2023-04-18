import React from "react"
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <header>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button><Link to='/'>Home</Link></Button>
                    <Button><Link to='/news'>News</Link></Button>
                    <Button><Link to='/about'>About</Link></Button>
                    <Button><Link to='/contact'>Contact</Link></Button>
                    <button className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.color,
                            color: theme.backgroundColor,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        {!dark ? 'Dark' : 'Light'} mode
                    </button>
                </ButtonGroup>
            </Box>
        </header>
    )
}