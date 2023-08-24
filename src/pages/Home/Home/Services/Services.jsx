
const Services = () => {
    return (
        <div className="m-20">
            <div className="text-center">
                <h6 className="font-bold text-blue-800">SERVICES</h6>
                <h2 className="text-4xl font-semibold">This is My Expertise, The <br /> Services I'll Provide My Clients</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
                <div className="card  bg-gray-200 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title  text-blue-900 text-2xl">UI & UX Design</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm  text-indigo-900 font-bold bg-gray-300">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card   bg-gray-200 text-primary-content ">
                    <div className="card-body">
                        <h2 className="card-title  text-blue-900 text-2xl">Web Development</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm  text-indigo-900 font-bold bg-gray-300">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-gray-200 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-blue-900 text-2xl">Graphic Design</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm text-indigo-900 font-bold bg-gray-300">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;