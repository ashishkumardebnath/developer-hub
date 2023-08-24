import { TypeAnimation } from "react-type-animation";
import image from '../../../../images/png-transparent-fb-facebook-facebook-logo-social-media-icon.png'
import image1 from '../../../../images/linkedin-social-media-icon-png_71812.jpg'
import image2 from '../../../../images/25231.png'
import ashish from '../../../../images/Ashish12.png'
import bg from '../../../../images/cover12.webp'
import { Link } from "react-router-dom";
// flex items-center justify-center
const Banner = () => {
    return (
        <div className="lg:flex items-center justify-center "
            style={{
                background: `url(${bg})`
            }}
        >
            <div className=" py-16">
                <h1 className="text-5xl font-bold text-white">Hi, I'm Ashish Kumar</h1>
                <TypeAnimation
                    sequence={[
                        'A Frontend Developer',
                        1000
                    ]}

                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', fontWeight: '700', display: 'inline-block', color: 'white' }}
                    repeat={Infinity}
                />
                <p className="mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, illo nemo obcaecati <br /> perspiciatis facere architecto totam, reiciendis accusantium quasi explicabo placeat? <br /> Perspiciatis nisi recusandae,
                    temporibus incidunt nostrum aliquam facilis rerum.</p>

                <div className="mt-7">
                    <button className="btn btn-outline rounded-md btn-success mr-2 font-bold">Hire Me</button>
                    <button className="btn btn-outline rounded-md btn-secondary font-bold">View Portfolio</button>
                </div>

                <div className="mt-10">
                    <Link>
                        <div className="avatar">
                            <div className="w-10 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} />
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="avatar">
                            <div className="w-10 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image1} />
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image2} />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
            <div >
                <img src={ashish} />
            </div>
        </div >
    );
};

export default Banner;