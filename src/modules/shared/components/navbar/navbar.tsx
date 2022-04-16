import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Style from './navbar.module.scss';
import logo from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as MenuIcon } from '../../../../assets/images/menu.svg';
import { ReactComponent as CrossIcon } from '../../../../assets/images/cross.svg';

const pages = [
    { title: 'Discover', isSelected: false },
    { title: 'Search', isSelected: false },
    { title: 'Try Instaread', isSelected: true },
    { title: 'Login', isSelected: false },
]


const Navbar = ({ handleMobileNavbar }: any) => {
    const [isMenueOpen, setIsMenuOpen] = React.useState(false);

    const handleOpenNavMenu = () => {
        setIsMenuOpen((prev) => !prev);
        handleMobileNavbar(!isMenueOpen);
    }


    return (
        <>
            <AppBar position="static" className={Style.barContainer}>
                <div className='container'>
                    <Toolbar className='mx-5' disableGutters>
                        <Box sx={{ flexGrow: 1 }}>
                            <img src={logo} />
                            <span className={`mt-2 ${Style.logoTitle}`}>Instaread</span>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page,index) => (
                                    <Button
                                        key={index}
                                        // onClick={handleOpenNavMenu}
                                        // sx={{ my: 2, color: 'white', display: 'block' }}
                                        className={`${Style.navItem} ${page.isSelected ? Style.selectedNavItem : ''}`}
                                    >
                                        {page.title}
                                    </Button>
                                ))}

                            </Box>

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                {
                                    isMenueOpen ?
                                        <CrossIcon fill={"black"} /> :
                                        <MenuIcon  fill={"black"}/>
                                }

                            </IconButton>
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
            {
                isMenueOpen &&
                <div className={Style.mobileNavbar}>
                    <div className={Style.container}>
                        <div>

                            {pages.map((item) => {
                                return (
                                    <div>
                                        <a className={`d-flex align-items-center ${Style.item}`}>
                                            <span className='ms-2'>{item.title}</span>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            }
        </>
    );
};
export default Navbar;
