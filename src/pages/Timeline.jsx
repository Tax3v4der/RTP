

const Timeline = () => {


    return (
    //   <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-sky-400">#</span>Timeline
            </div>
            <div className="line w-2/3 h-px bg-sky-400"></div>
          </div>
          {/* right part the View detailed Timeline  */}
          {/* <div className=" text-white font-medium">
            <a href="">
              <span>View all  &gt;</span>
            </a>
          </div> */}
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12"></div>

       <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Maintenance Technician Intern <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From February 2023 to April 2023
Baxter International, Oued Ellil, La Manouba</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><ul class="list-disc"><li>Troubleshoot and maintain industrial equipment such as electrical and pneumatic systems.</li>
<li>Repair and replace faulty components.</li>
<li>Configure workstations and program machines.</li></ul></p>
     {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg> Download ZIP</a> */}
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Signalization Technician Intern</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From September 2022 to November 2022
        TRANSTU TGM depot/Tunis marine</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"> <ul class="list-disc">
      <li>Supervise traffic lights, barriers, alarms, and switches related to the Tunis metro track system.</li>
      <li>Work on basic relay systems that control signals and switches in the depot from the control tower.</li>
    </ul></p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Maintenance Technician Intern</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From February 2021 to April 2021
        Société Nationale des Chemins de Fer Tunisiens, Fathallah, Ben Arous </time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"><ul class="list-disc">
      <li>Work on electrical parts of diesel generators.</li>
      <li>Installation and regulation of instruments and air conditioning systems.</li>
      <li>Work with temperature and humidity sensors.</li>
      <li>Perform tests and simulations with programmable logic controllers.</li>
    </ul></p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Computer Troubleshooter/Customer Service</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From 2016 to 2020</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"><ul class="list-disc">
      <li>Troubleshoot office computer equipment, such as desktop and laptop computers, printers, smartphones, and their accessories.</li>
      <li>Diagnose technical problems.</li>
      <li>Replacement of faulty parts.</li>
      <li>Installation of software and updates.</li>
      <li>Testing and validation of repaired equipment.</li>
      <li>Installation of software and computer programs.</li>
      <li>Formatting and flashing of hard drives and operating systems.</li>
      <li>Troubleshooting computer and software-related issues.</li>
      <li>Diagnose computer problems and search for solutions online.</li>
      <li>Interact with customers and ensure their satisfaction.</li>
    </ul></p>
    </li>
</ol>
      </div>
    );
  };
  export default Timeline;
  