import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

function Contact() {

    //  FormHandlingCode
    const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e23c2e82-db85-4276-9fb1-7e3c4583d9cb");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult(" ");
          // alert("Form Submitted Successfully")
          toast.success("Form Submit Successfully")
          event.target.reset();
        } else {
          console.log("Error", data);
         toast.error(data.message)
          setResult("");
        }
      };
    
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden "
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center  text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a Move? Lets Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto  text-gray-600 pt-8">
        <div className="flex flex-wrap text-gray-600  ">
          <div className="w-full md:w-1/2 text-left text-gray-800">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              required
              name="Name"
              className="w-full border border-gray-500 rounded py-3 px-4 mt-2 outline-none   "
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 text-gray-800">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              required
              name="Name"
              className="w-full border border-gray-500 rounded py-3 px-4 mt-2 outline-none "
            />
          </div>
        </div>

        <div className="my-6 text-left text-gray-800   ">
           Message
            <textarea name="Message" placeholder="Message " required id="" className="w-full border-gray-500 rounded py-3 px-4 h-48 resize-none border outline-none "></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded-md">{result ? result : "Send Message"}</button>
      </form>
    </motion.div>
  );
}

export default Contact;
