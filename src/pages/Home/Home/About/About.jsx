import ashish from '../../../../images/ashish123456.png'
const About = () => {
    return (
        <div className='grid lg:grid-cols-2 container'>
            <div className=" flex items-center justify-center bg-red-300 m-24 ">
                <img src={ashish} alt="" />
            </div>
            <div className=" flex items-center justify-center lg:mr-20">
                <div>
                    <div>
                        <button className="btn rounded-md btn-primary mr-3">Primary</button>
                        <button className="btn rounded-md btn-primary mr-3">Primary</button>
                        <button className="btn rounded-md btn-primary">Primary</button>
                    </div>
                    <h1 className='text-5xl  font-semibold mt-6 mb-6'>About Me</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <h3 className='text-3xl font-semibold mt-5 mb-5'>I Do Web Design & Developement since I was 18 Years Old</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </div>
    );
};

export default About;