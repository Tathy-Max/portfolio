import LineGradient from '../components/shared/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import ContactImg from '../assets/contact-image.jpeg';
import LinkedinIcon from '../assets/linkedin.png';
import WhatsAppIcon from '../assets/whatsapp.png';
import EmailIcon from '../assets/email (1).png';

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contact" className="contact pt-32 pb-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
				className="flex justify-end w-full"
			>
				<div>
					<p className="font-playfair font-semibold text-4xl text-deep-blue">
						<span className="text-white">CONTACT ME</span> TO GET STARTED
					</p>
					<div className="flex md:justify-end my-5">
						<LineGradient width="w-1/2" />
					</div>
				</div>
			</motion.div>

			{/* FORM & IMAGE */}
			<div className="md:flex md:justify-between gap-16 mt-5 basis-1/2">
				<motion.div
					className="flex flex-col gap-7"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="flex items-center p-4 bg-purple-300 z-[-1] md:w-72 sm:flex-col sm:w-full">
						<article className="items-center hover:text-yellow">
							<img className="w-7 h-7" src={WhatsAppIcon} alt="linkedin-link" />
							<h4 className="font-semibold">WhatsApp</h4>
							{/* <h5>tathymax.dev@gmail.com</h5> */}
							<a
								className="text-deep-blue hover:text-yellow"
								href="https://api.whatsapp.com/send?phone=+12269980172"
								target="_blank"
								rel="noreferrer"
							>
								Send me a message
							</a>
						</article>
					</div>
					<div className="flex items-center p-4 bg-purple-300 z-[-1] md:w-72 sm:flex-col sm:w-full">
						<article className="items-center">
							<img className="w-7 h-7" src={EmailIcon} alt="email-link" />
							<h4 className="font-semibold">Email</h4>
							{/* <h5>tathymax.dev@gmail.com</h5> */}
							<a
								className="text-deep-blue hover:text-yellow"
								href="mailto:contato@datasec.com.br"
								target="_blank"
								rel="noreferrer"
							>
								Send me a message
							</a>
						</article>
					</div>
					{/* <img src={ContactImg} alt="contact" /> */}
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className="basis-1/2 mt-10 md:mt-0"
				>
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/3a5c8859417a8e17ba74136a9a7d7e84"
						method="POST"
					>
						<input
							className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
							type="text"
							placeholder="NAME"
							{...register('name', {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.name && (
							<p className="text-red mt-1">
								{errors.name.type === 'required' && 'This field is required.'}
								{errors.name.type === 'maxLength' && 'Max length is 100 char.'}
							</p>
						)}

						<input
							className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
							type="text"
							placeholder="EMAIL"
							{...register('email', {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className="text-red mt-1">
								{errors.email.type === 'required' && 'This field is required.'}
								{errors.email.type === 'pattern' && 'Invalid email address.'}
							</p>
						)}

						<textarea
							className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
							name="message"
							placeholder="MESSAGE"
							rows="4"
							cols="50"
							{...register('message', {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.message && (
							<p className="text-red mt-1">
								{errors.message.type === 'required' &&
									'This field is required.'}
								{errors.message.type === 'maxLength' &&
									'Max length is 2000 char.'}
							</p>
						)}

						<button
							className="p-4 rounded-sm bg-yellow font-semibold text-deep-blue mt-5 hover:bg-gradient-rainblue hover:text-white transition duration-500"
							type="submit"
						>
							SEND ME A MESSAGE
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
