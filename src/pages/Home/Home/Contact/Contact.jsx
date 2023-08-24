import cover1 from '../../../../images/dev.jpeg'
const Contact = () => {
    return (
        <div className='grid lg:grid-cols-2'>
            <div className=''>
                <img src={cover1} alt="" />
            </div>
            <div className=''>
                <h2 className="text-3xl font-semibold">Contact Me</h2>
                <div className="grid lg:grid-cols-3 text-center">
                    <div>
                        <p className="font-semibold">My Address</p>
                        <small>198 West 21th Street, Suite 721 New York NY 10016</small>
                    </div>
                    <div>
                        <p className="font-semibold">My Email</p>
                        <small>blueboyashish2020@gmail.com</small>
                    </div>
                    <div>
                        <p className="font-semibold">My Phone</p>
                        <small>018853320**</small>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Name" className="input input-bordered rounded-md input-primary w-full max-w-xs mt-3  " />
                    <input type="text" placeholder="Email" className="input input-bordered rounded-md input-primary w-full max-w-xs " /> <br />
                    <input type="text" placeholder="Subject" className="input input-bordered rounded-md input-info w-full mt-4 mb-4" /> <br />
                    <textarea placeholder="Create a message hare" className="textarea textarea-bordered rounded-md textarea-lg w-full " ></textarea>
                    <button className='btn btn-secondary rounded-md'>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;