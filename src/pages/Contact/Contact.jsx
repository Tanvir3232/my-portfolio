import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import animationData from '../../assets/images/contact.json';
import SectionTitle from '../../components/SectionTitle';


const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const { name, email, subject, message } = data;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: 'tanvirahmadstudent@gmail.com', // Replace with your email address
      subject: subject,
      message: message,
    };
   
    emailjs.send('service_ogc2psa', 'template_3b4y5pv', templateParams,'u4kuHx4hpfn341v5W')
      .then(() => {
        alert('Your message has been sent successfully!');
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        alert('Oops! An error occurred while sending your message. Please try again later.');
      });

  };

  return (
    <div className="md:mx-16 mx-5 my-5">
      <SectionTitle title="Contact Me" />
      <div className="flex bg-[#00091A] flex-col md:px-12 px-5 py-8 justify-center rounded-xl">
        <h2 className="text-2xl font-bold text-gray-300 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-6">
          Have a question or want to work together? Please feel free to contact me by filling out the form below.
        </p>
        <div className="flex md:flex-row flex-col md:gap-12 gap-5">
          <Lottie
            options={{ animationData }}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
            isStopped={false}
            isPaused={false}
          />

          <form className="md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-200 text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full p-3 border border-gray-300 text-gray-300 bg-transparent rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your name"
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-200 text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true })}
                className="w-full p-3 border border-gray-300 text-gray-300 bg-transparent rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-200 text-lg font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className="w-full p-3 border border-gray-300 text-gray-300 bg-transparent rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Email subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-200 text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: true })}
                rows="4"
                className="w-full p-3 border border-gray-300 text-gray-300 bg-transparent rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your message"
              ></textarea>
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-warning btn-outline btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default Contact;
