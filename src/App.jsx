import React,{useState} from 'react'

const App = () => {
  
  const [activeCategory, setActiveCategory] = useState('WebApps'); // Default category

  const content = {
    WebApps: [
      {
        title: 'Saash',
        link: 'https://saash.vercel.app',
        description: 'Ready to use website for an automation agency',
      },
      {
        title: 'InvestorBuddy',
        link: 'https://investor--buddy.vercel.app/',
        description:
          "Famous Financial guru Ankur Warikoo's course converted into a full-fledged website",
      },
      {
        title: 'StaunchFitness',
        link: 'https://imageeditortusingreactjs.vercel.app/',
        description:
          'A well-delivered website for our first client Gym owner STAUNCH FITNESS',
      },
      {
        title: 'HarshMart',
        link: '/',
        description:
          'Fully Dynamic with Admin Dashboard, a complex yet well-designed Ecommerce Site HarshMart',
      },
    ],
    Plugins: [
      {
        title: 'Plugin A',
        link: '/plugin-a',
        description: 'Description for Plugin A',
      },
      {
        title: 'Plugin B',
        link: '/plugin-b',
        description: 'Description for Plugin B',
      },
      {
        title: 'Plugin B',
        link: '/plugin-b',
        description: 'Description for Plugin B',
      },
      {
        title: 'Plugin B',
        link: '/plugin-b',
        description: 'Description for Plugin B',
      },
      
    ],
    Research: [
      {
        title: 'Research Paper 1',
        link: '/research-paper-1',
        description: 'Description for Research Paper 1',
      },
      {
        title: 'Research Paper 2',
        link: '/research-paper-2',
        description: 'Description for Research Paper 2',
      },
      {
        title: 'Research Paper 2',
        link: '/research-paper-2',
        description: 'Description for Research Paper 2',
      },
      {
        title: 'Research Paper 2',
        link: '/research-paper-2',
        description: 'Description for Research Paper 2',
      },
      
    ],
  };

  return (
    
    <div className='font-semibold flex justify-center items-center bg-[#19191c] text-white'>
      <div>
    <div className='mx-5 sm:mx-3 py-[5vh] w-11/12 flex  justify-between max-w-[800px] sm:-mt-3 sm:items-center gap-5  flex-col sm:flex-row'>
        <div className='text-2xl md:text-3xl  font-bold '>
       Hi ,I'm Harsh Lokhande
       </div>
            <div className='flex flex-row justify-start mx-1.5 sm:justify-center items-center gap-5'>
               <div > <a href='https://www.linkedin.com/in/harshlokhande486/' >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></div>
                
               <div><a href='https://github.com/Harshlokh'>
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
               </div>
               <div><a href=''>
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
               </div>
               <div className='text-gray-custom font-semibold hover:text-white hidden sm:block'>harshlokhande486@gmail.com</div>
               <div className='block sm:hidden '><svg xmlns="http://www.w3.org/2000/svg" className='h-6  ' viewBox="0 0 24 24" fill="white" width="48px" height="48px">
  <path d="M12 13.2L3.2 7.2V18c0 .55.45 1 1 1h15.6c.55 0 1-.45 1-1V7.2L12 13.2zm0-2.4L21.6 4H2.4L12 10.8zm-9.6-.6L12 14.4 21.6 10.2v7.8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V10.2z"/>
</svg>
</div>
           </div>

       </div>
       
        <div className='mx-10 flex justify-start  items-center text-gray-custom -mt-6 sm:-mt-5'>
              <ul className='list-disc'>
                <li className='mt-2' >I'm a full-stack engineer from india.</li>
                <li className='mt-2'>Currently exploring MERN and nestjs</li>
                <li className='mt-2' >Worked with few startups,<a href='https://www.linkedin.com/in/harshlokhande486/' className='  text-white'> read experience</a></li>
                <li className='mt-2'>love creating content for <a href='https://www.linkedin.com/in/harshlokhande486/' className='  text-white'>linkedin</a></li>
                <li className='mt-2'>Let's talk how we can work together!</li> 
              </ul>
          </div>
        
          <div className="mt-7">
      {/* Category Buttons */}
      <div className="flex justify-start mx-5 items-center gap-3 mb-3">
        {['WebApps', 'Plugins', 'Research'].map((category) => (
          <button
            key={category}
            className={`sm:w-auto w-[100px] text-sm rounded-[40px] border px-4 py-2 ${
              activeCategory === category
                ? 'bg-gray-300 text-black'
                : 'border-gray-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="mx-5 space-y-2">
        {content[activeCategory].map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:gap-2"
          >
            <h1 className="text-white hover:text-yellow-300">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title} -
              </a>
            </h1>
            <p className="text-gray-custom">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

           {/* Writings */}

        <div className='mt-4 mx-5'>
           <h1 className='text-2xl font-bold mb-4'>Writings</h1>
           <p className='text-gray-custom'>Script to accept all invites on Linkedin</p>
           <p className='text-gray-custom'>Light and Dark Mode in React Native</p>
        </div>
       
         {/* Extra Works */}
  
         <div className="mt-5 mb-6 flex flex-col items-start mx-5 ">
  <h1 className="text-2xl font-bold mb-4">Why Hire Me</h1>
  <div className="flex items-center gap-3 mb-4">
    <img
      className="h-7 w-7 rounded-full"
      src="https://thumbs.dreamstime.com/b/blue-technology-background-abstract-digital-tech-circle-copy-space-blue-technology-background-abstract-digital-tech-circle-340998157.jpg"
      alt="Hackathons"
    />
    <p className="text-gray-custom text-sm sm:text-base">
     <font className="text-white"> Won</font> 2 Hackathons in 2024
    </p>
  </div>
  <div className="flex items-center gap-3 mb-4">
    <img
      className="h-7 w-7 rounded-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWE3XRCu6fCTnf2SDNF3nKagOjMo-_tbdONg&s"
      alt="Certifications"
    />
    <p className="text-gray-custom text-sm sm:text-base">
    <font className="text-white"> Certifications </font> in MERN, JAVA (SPRING MVC, SPRING BOOT), and Client
      Management
    </p>
  </div>
  <div className="flex items-center gap-3 mb-4">
    <img
      className="h-7 w-7 rounded-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe-lzpfJuF1Ua3T8wHUuLuxaPExO98Wjr9jVKTn1615oVgdcaYzn7Ie-pq4qFJ7wzifA&usqp=CAU"
      alt="Internships"
    />
    <p className="text-gray-custom text-sm sm:text-base">
      Well worsed in developing <font className="text-white"> Eccommerce Applications </font> along with a speciality in <font className="text-white"> designing </font> any website within some time.</p>
  </div>
</div>

         
     
          </div>
    </div>

     
 
       
    
  )
}

export default App