import Style from './sideNavbar.module.scss';
import { ReactComponent as DashboardIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as TradeIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as StakingIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as Liquiditycon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as VestingIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as LeaderboardIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as MarketplaceIcon } from '../../../../assets/images/audio-headphones.svg';
import { ReactComponent as LaunchpadIcon } from '../../../../assets/images/audio-headphones.svg';
import mainLogo from'../../../../assets/images/audio-headphones.svg';

const pages = ['Launchpad', 'Marketplace'];
const sideBarPages = [
    { Icon: DashboardIcon, title: 'Dashboard', acitveItem: false },
    { Icon: TradeIcon, title: 'Trade' , acitveItem: false },
    { Icon: StakingIcon, title: 'Staking', acitveItem: true  },
    { Icon: Liquiditycon, title: 'Liquidity', acitveItem: false  },
    { Icon: VestingIcon, title: 'Vesting', acitveItem: false  }
]
const sideBarPages1 = [
    { Icon: LeaderboardIcon, title: 'Leaderboard', acitveItem: false  },
    { Icon: MarketplaceIcon, title: 'Marketplace', acitveItem: false  },
    { Icon: LaunchpadIcon, title: 'Launchpad', acitveItem: false  }
]

const SideNavbar = () => {
    return (
        <div className={Style.sideNavbar}>
            <div className={Style.container}>
                <div>

                    <h6 className={Style.title}>LUART Application</h6>
                    {sideBarPages.map((item) => {
                        return (
                            <div>
                                <a className={`d-flex align-items-center ${Style.item} ${item.acitveItem ? Style.activeItem : ''}`}>
                                    <item.Icon height={20} /> <span className='ms-2'>{item.title}</span>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-5'>

                    <h6 className={Style.title}>Others</h6>
                    {sideBarPages1.map((item) => {
                        return (
                            <div>
                                <a className={`d-flex align-items-center ${Style.item}`}>
                                    <item.Icon height={20} /> <span className='ms-2'>{item.title}</span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}
export default SideNavbar;