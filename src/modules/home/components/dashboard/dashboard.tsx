import Style from "./dashboard.module.scss";
import mainImage from '../../../../assets/images/Astrophysics-for-People-in-a-Hurry-eBook.png'
import { ReactComponent as FolderIcon } from '../../../../assets/images/folder.svg';
import {ReactComponent as Headphone } from '../../../../assets/images/audio-headphones.svg';
import {ReactComponent as NoteIcon } from '../../../../assets/images/note.svg';
import {ReactComponent as ShopingBagIcon } from '../../../../assets/images/shopingBag.svg';
const productList = [
    { Icon: FolderIcon, title: "18 min read" },
    { Icon: Headphone, title: "14 min listen" },
    { Icon: NoteIcon, title: "Add to Library" },
    { Icon: ShopingBagIcon, title: "Buy Book" },
]

const Dashboard = () => {
    return (
        <div className={` d-flex mt-5 container align-items-center ${Style.container}`}>
            <div className={Style.leftContainer}>
                <img src={mainImage} />
            </div>
            <div className={Style.rightContainer}>
                <h5 className={Style.title}>
                    Astrophysics for People in a Hurry’s Summary
                </h5>
                <p className={Style.description}>
                    Key Insights & Analysis
                </p>
                <span className={`${Style.label}`}>
                    Kelly Brogan, MD with Kristin Loberg
                </span>
                <div className={`d-flex align-items-center flex-wrap ${Style.productListContainer}`}>
                    {
                        productList.map((product) => {
                            return (
                                <div>
                                    <product.Icon />
                                    <span className={`${Style.label}`}>{product.title}</span>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={`d-flex mb-5 ${Style.buttonContainer}`}>
                    <button>Business & Finance</button>
                    <button>Business & Finance</button>
                </div>
            </div>
        </div>

    );
}
export default Dashboard;