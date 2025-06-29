import React from 'react'
import { Link, redirect } from 'react-router'
import { loginWithGoogle } from '~/appwrite/auth'
import { account } from '~/appwrite/client';

// export async function clientLoader(){
//   try{
//     const user = await account.get();
//     if(!user.$id) return redirect('/');
//   }catch(error){
//     console.log('Error fetching user', error)
//   }
// }

const signIn = () => {
  return (
    <main className='auth'>
      <section className='size-full glassmorphism flex-center px-5'>
        <div className="signIn_card">
          <header className='header'>
            <Link to='/'>
              <img src="https://img.icons8.com/ios/200/feeding-chicken.png" alt="logo" className='bg-red-400 rounded-full size-[40px]' />
            </Link>
            <h1 className='text-3xl font-bold text-red-400 uppercase'>Troth</h1>

            <article className='text-red-400 border-red-400 border-3'>
              <h2 className='text-xl font-semibold text-center capitalize'>Begin your trek</h2>
              <p className='text-sm text-center !leading-6'>Sign in with Google to manage your treks and activity seamlessly</p>
            </article>

            <button className='bg-blue-400' onClick={loginWithGoogle}>
              <img src='https://img.icons8.com/ios/50/google-logo--v1.png' alt="Google Icon" className='size-7' />
              <span className='text-sm font-semibold'>Sign in with Google</span>
            </button>
          </header>
        </div>
      </section>
    </main>
  )
}

export default signIn