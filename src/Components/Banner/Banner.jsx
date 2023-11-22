import BannerPic from "../BannerPic/BannerPic";
import BannerDesc from "../BannerDesc/BannerDesc";
const Banner = () => {
    return (
        <div className=' flex items-center mb-4'>
            <BannerDesc></BannerDesc>
            <BannerPic></BannerPic>

        </div>
    );
};

export default Banner;