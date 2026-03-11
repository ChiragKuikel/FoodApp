import { assets } from '../assets/assets'
import Container from "../components/Container";

const Eighthpage = () => {
  return (
    <section className='z-10 bg-white'>
      <Container className="py-12 sm:py-16">
        <div className='flex flex-col items-center gap-8'>
          <div className='text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight text-center'>
            INTRIGUED?
          </div>
          <div className='w-full max-w-3xl'>
            <img src={assets.home6} alt='' className='w-full' />
            <div className="mt-6 flex justify-center">
              <button className='btn-chat-cta rounded-full font-black text-base sm:text-xl text-black cursor-pointer px-6 py-3'>
                <span className='flex items-center gap-3'>
                  <span className='tracking-tight'>LET&apos;S CHAT</span>
                  <span aria-hidden="true">💬</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Eighthpage