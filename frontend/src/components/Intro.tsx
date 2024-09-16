import myAvatar from '../assets/my-images/my-avatar.png'
import {Info} from './Info'
export const Intro= ()=>{
    return <div className=" flex flex-col justify-center items-center border-[1px] border-solid border-[#3d3d3d] w-[275px] max-h-max h-full mb-0 pb-12 pt-14 z-1  bg-eerie-black rounded-3xl sticky">

        <div className='flex flex-col justify-center items-center p-0'>
            <div className='bg-gradient-to-t from-[#303030] from-5% to-[#3f3f40] to-95% h-[150px] w-[150px] rounded-3xl justify-center items-center border-[1px] border-solid border-[#3d3d3d]'>
                <img src={myAvatar} alt="" />
            </div>
            <div className='h-[120px] w-[150px] mt-6 mb-0'>
                <h1 className='text-2xl font-medium flex flex-col justify-center items-center mt'>
                    <div>Rahul Kumar</div> 
                    <div>Choudhary</div>
                </h1>
                <div className='h-[28px] w-[150px] mt-3.5 mb-0 text-white bg-[#2b2b2c] rounded-lg text-xs font-normal flex justify-center items-center'>
                    Software Devloper
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center items-center w-[213px] h-[368px] bg-inherit' >
            <div className='bg-[#3f3f40] w-full h-px mt-[30px] py-px'></div>
            <div className='w-full h-[282]'>
                <Info label='EMAIL' value='rahul24167@gmail.com'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                      <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </Info> 
                <Info label='BLOGS'value='blogs.rahul24167'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                      <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
                </Info>
                <Info label="RESUME" value='Download Resum'>           
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                      <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                </Info>
                <Info label="LOCATION" value="Dhanbad,India">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                      <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                </Info>
            </div>
            <div className='flex flex-row justify-center items-center gap-4 mt-8 pb-1 pl-2'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor" className="ionicon s-ion-icon w-[18px] h-[18px]">
                  <title>Logo Linkedin</title>
                  <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z">
                  </path>
                </svg>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor" className="ionicon s-ion-icon w-[18px] h-[18px]">
                  <title>Logo Twitter</title>
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z">
                  </path>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor" className="ionicon s-ion-icon w-[18px] h-[18px]">
                  <title>Logo Github</title>
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z">
                  </path>
                </svg>
              </div>
            </div>
        </div>
    </div>
}