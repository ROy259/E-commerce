import {React,useState} from 'react'

const Home = () => {

  const images = ["./images/hero1.png", "./images/hero2.png", "./images/hero3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };  
  return (
    <>
    <div className=' pt-12 Scroolbar overflow-x-auto flex justify-around gap-20 bg-slate-300   lg:flex lg:justify-around px-2'>
      

        <div className='p-1 '>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/mobile.png" alt="mobiles" />
            <p className='text-[17px] mt-1 font-medium'>Mobiles</p>
        </div>
        <div className='p-1'>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/home.png" alt="home" />
            <p className='text-[17px] mt-1 font-medium'>Home</p>
        </div>
        <div className='p-1'>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/fashion.png" alt="fashion" />
            <p className='text-[17px] mt-1 font-medium'>Fashion</p>
        </div>
        <div className='p-1'>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/tv.png" alt="Tv" />
            <p className='text-[17px] mt-1 font-medium'>Electronincs</p>
        </div>
        <div className='p-1'>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/beauty.png" alt="beauty" />
            <p className='text-[17px] mt-1 font-medium'>Beauty</p>
        </div>
        <div className='p-1'>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/toys.png" alt="Toy" />
            <p className='text-[17px] mt-1 font-medium'>Toys</p>
        </div>
        <div className='p-1'>
            <img className='h-[50px] w-[50px] bg-contain rounded-md' src="./images/grocery.png" alt="grocery" />
            <p className='text-[17px] mt-1 font-medium'>Grocery</p>
        </div>
        
    </div>

{/* The Hero section Begins----->  */}


<div className="slider relative w-full overflow-hidden mt-[1px]">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img 
            key={index}
            className="h-[200px] sm:h-[300px] w-full object-[25%_75%] flex-shrink-0"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">
      <i class="fa-solid fa-less-than"></i>
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">
      <i class="fa-solid fa-greater-than"></i>
      </button>
    </div>


{/* Another section */}
<div className='sm:w-full flex sm:justify-between flex-wrap items-center justify-center sm:flex-wrap  cursor-pointer bg-slate-400 mt-2 p-3 gap-3'>

  <div className='relative hover:scale-105 transition duration-1000 ease-in sm:w-[32%] w-full px-1 h-[400px] '>
    <img className=' w-full h-full object-fill' src="./images/img1.png" alt="img1" />
      <p className='absolute bottom-5 left-32 text-xl text-white pointer-events-none font-medium z-10'>Trousers <span className='block  text-2xl relative right-7'> Starting ₹699</span></p>
  </div>
  <div className=' relative hover:scale-105 transition duration-700 ease-in sm:w-[32%] w-full px-1 h-[400px] '>
    <img className='w-full h-full object-fill' src="./images/img2-dress.png" alt="img1" />
    <p className='absolute bottom-5 left-32 text-xl text-white pointer-events-none font-medium z-10'>Womens's Dresses <span className='block  text-2xl relative left-1'> Starting ₹499</span></p>
  </div>
  <div className=' relative hover:scale-105 transition duration-700 ease-in sm:w-[32%] w-full px-1 h-[400px] '>
    <img className='w-full h-full object-fill' src="./images/img3-tshirt.png" alt="img1" />
    <p className='absolute bottom-5 left-32 text-xl text-white pointer-events-none font-medium z-10'>T-shirts <span className='block  text-2xl right-7 relative'> Starting ₹199</span></p>
  </div>
  <div className=' relative hover:scale-105 transition duration-700 ease-in sm:w-[32%] w-full px-1 h-[400px] '>
    <img className='w-full h-full object-fill ' src="./images/img4-top.png" alt="img1" />
    <p className='absolute bottom-5 left-28 text-xl  text-white pointer-events-none font-medium z-10'>Women's Top <span className='block  text-2xl right-2 relative'> Starting ₹199</span></p>
  </div>
  <div className=' relative hover:scale-105 transition duration-700 ease-in  sm:w-[32%] w-full px-1 h-[400px] '>
    <img className='w-full h-full object-fill' src="./images/img5-tees.png" alt="img1" />
    <p className='absolute bottom-5 left-28 text-xl text-white pointer-events-none font-medium z-10'>Kid's shirts <span className='block  text-2xl right-2 relative'> Starting ₹199</span></p>
  </div>
  <div className='relative hover:scale-105 transition duration-700 ease-in sm:w-[32%] w-full px-1 h-[400px] '>
    <img className='w-full h-full object-fill' src="./images/img2.png" alt="img1" />
    <p className='absolute bottom-5 left-28 text-xl text-white pointer-events-none font-medium z-10'>Kurtas & Kurtis <span className='block  text-2xl right-2 relative'> Starting ₹599</span></p>
  </div>
</div>
</>

  )
}

export default Home
