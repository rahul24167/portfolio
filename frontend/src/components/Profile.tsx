import myAvatar from '../assets/my-images/my-avatar.png'

export const Profile= ()=>{
    return (
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
    );
}