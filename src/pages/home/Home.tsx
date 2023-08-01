import home from '../../assets/home2.png'
function Home() {
    return (
        <>
        <div className=" bg-gradient-to-b from-[#F0A08E] to-[#EFEAE9] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-[#F0A08E] py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={home} alt="" className='w-2/3 mt-20' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;