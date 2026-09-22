import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden rounded-lg">

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="h-[400px] w-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop"
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="h-[400px] w-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop"
                        alt=""
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="h-[400px] w-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>

            {/* One common Shop Now button */}
            <Link
                to="/shop"
                className="absolute bottom-12 left-12 z-10 btn btn-neutral rounded-lg px-7"
            >
                Shop Now
            </Link>

        </div>
    );
};

export default Banner;