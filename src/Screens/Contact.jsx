import { ContactAnimation } from "../Assets/AssetsList";
import ContactForm from "../Components/ContactForm";
import LottieAnimationCard from "../Components/LottieAnimationCard";
import Title from "../Components/Title";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      className="my-10 mt-20  flex justify-center items-center flex-col"
      id="contact"
    >
      <Title text="Contact" id="contact" />
      <div className=" flex justify-center items-center gap-5 flex-col-reverse lg:flex-row  px-10 ">
        <LottieAnimationCard AnimationSrc={ContactAnimation} />
        <ContactForm />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <MdEmail className="h-6 w-6 text-orange-500" />
        </div>
        <a
          href="mailto:vivekpatel2611@gmail.com"
          className="text-black text-xl dark:text-white"
        >
          vivekpatel2611@gmail.com
        </a>
      </div>
      &nbsp;
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <FaSquarePhone className="h-6 w-6 text-orange-500" />
        </div>
        {/* <p className="text-black text-xl dark:text-white">+91 8000 96 63 96</p> */}
        <p className="text-black text-xl dark:text-white">
          +91 8000 <span class="text-orange-500">96</span> 63
          <span class="text-orange-500"> 96</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
