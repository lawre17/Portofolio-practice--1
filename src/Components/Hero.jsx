/** @format */
import arrow from "../assets/arrow.png";
import avator from "../assets/avator.svg";
import logo from "../assets/profile.png";
const Hero = () => {
  return (
    <>
      <div className='flex'>
        <div className='flex h-auto w-full relative'>
          <img src={avator} className='absolute top-0 right-1 h-32 w-32' />
          <img
            src={arrow}
            className='absolute bottom-[55%] left-[58%] h-20 w-20'
          />
          <div className='bg-[#A7F0BA] h-8 p-2 absolute top-[43%] left-[38%]'>
            <p className=' h-0 font-semibold'>Lawrence</p>
          </div>
          <div className='absolute top-[50%] w-full pt-4 px-10 space-y-2'>
            <h5 className='text-center font-bold text-xl'>
              I Create Tailor-Made Software to Match Each Client`s Unique Vision
            </h5>
            <p className='justify-evenly font-medium text-slate-500 text-sm'>
              I specialize in crafting custom software solutions that align
              perfectly with each client’s specific needs and style. Combining
              technical expertise with a meticulous approach, I ensure that
              every project not only functions seamlessly but also reflects the
              client’s unique preferences and goals.
            </p>
          </div>
        </div>
        <div className="flex bg-[url('./assets/blob.svg')] bg-no-repeat bg-center bg-[length:700px_700px] h-[27rem] w-full relative">
          <img src={logo} className='absolute bottom-0 left-[30%]' />
        </div>
      </div>
      <div className='mt-3 w-28 h-10 ml-10'>
        <button className='bg-gray-900  rounded-lg w-full h-full font-medium text-white'>
          Hire me
        </button>
      </div>
      <div className='ml-10 text-left p-2 mt-3'>
        <h5 className='font-bold text-xl'>My development process</h5>
      </div>
      <div className='ml-10 flex mt-5 h-auto w-full'>
        <div className='p-2 flex flex-col space-y-4 w-1/3'>
          <button className='rounded-full w-8 h-8 bg-gradient-to-r from-red-300 to-indigo-500'>
            1
          </button>
          <h6 className='font-semibold text-left '>
            Client-Centered Discovery
          </h6>
          <p className='text-slate-700 font-light text-left'>
            To achieve truly tailored software, I begin by understanding each
            client`s unique vision and requirements. Through detailed
            consultations, I gather insights into their goals, preferences, and
            challenges to ensure that the final solution is not only functional
            but genuinely reflective of their needs.
          </p>
        </div>
        <div className='p-2 flex flex-col space-y-4 w-1/3'>
          <button className='rounded-full w-8 h-8 bg-gradient-to-r from-red-300 to-indigo-500'>
            2
          </button>
          <h6 className='font-semibold text-left '>
            Precision Design and Development
          </h6>
          <p className='text-slate-700 font-light text-left'>
            Next, I meticulously design and develop each component, paying close
            attention to both technical accuracy and aesthetic alignment. This
            stage involves ongoing feedback loops with the client, allowing for
            adjustments that bring the project closer to their exact
            expectations.
          </p>
        </div>
        <div className='p-2 flex flex-col space-y-4 w-1/3'>
          <button className='rounded-full w-8 h-8 bg-gradient-to-r from-red-300 to-indigo-500'>
            3
          </button>
          <h6 className='font-semibold text-left '>
            Thorough Testing and Support
          </h6>
          <p className='text-slate-700 font-light text-left'>
            Finally, I conduct thorough testing and refinement, verifying that
            each aspect meets high standards for quality and usability. After
            deployment, I offer dedicated support and adjustments as needed,
            ensuring long-term satisfaction and effectiveness.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
