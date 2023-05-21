

const Footer = () => {
    return (
        <div>



            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title font-bold text-3xl"><span className="text-red-600">Motor</span> Mart</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    );
};

export default Footer;