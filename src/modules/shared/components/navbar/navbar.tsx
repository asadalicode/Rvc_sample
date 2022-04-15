import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Style from './navbar.module.scss';
import logo from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as Wallet } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as MenuIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as CrossIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as DashboardIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as TradeIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as StakingIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as Liquiditycon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as VestingIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as LeaderboardIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as MarketplaceIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as LaunchpadIcon } from '../../../../assets/images/audio-headphones.svg';

const pages = ['Discover', 'Search', 'Try Instaread', 'Login'];
const sideBarPages = [
    { Icon: DashboardIcon, title: 'Discover' },
    { Icon: TradeIcon, title: 'Search' },
    { Icon: StakingIcon, title: 'Try Instaread' },
    { Icon: Liquiditycon, title: 'Login' },
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
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleOpenNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        className={Style.navItem}
                                    >
                                        {page}
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
                                        <CrossIcon fill={"white"} /> :
                                        <MenuIcon />
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

                            <h6 className={Style.title}>LUART Application</h6>
                            {sideBarPages.map((item) => {
                                return (
                                    <div>
                                        <a className={`d-flex align-items-center ${Style.item}`}>
                                           <item.Icon height={20}/> <span className='ms-2'>{item.title}</span>
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
