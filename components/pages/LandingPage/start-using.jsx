// import Head from 'next/head';
// import Link from "next/link";
// import Image from 'next/image';
// import 'tailwindcss/tailwind.css'
// import Pic from "./posts/Dashboard.png"
// import { Button} from '@mantine/core';
// import { Header } from '../../organisms/Header';


// export default function Start() {
//   return (
//     <div className="flex-row dark">
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className='flex h-full w-full justify-start items-end flex-row '>
//           <Header/>
//             <div className='h-screen flex justify-center items-center flex-col w-full'>
//               <h1 className='flex italic text-cyan-400 text-6xl p-6'>Create Your Project</h1>
//               <Image class="w-3/6" src={Pic} alt="" width="350px" height="300px"/>
//               <h3 className='text-xl p-8 text-cyan-600'>The best feature the ExamApp offers is no doubt the planning for tasks and executing them perfectly create your project now to fire up your road!</h3>

//               <div class="mb-6">
//                   <label for="Project Name" class="text-3xl text-cyan-700 underline flex justify-center">Project Name</label>
//                   <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
//               </div>

//               <button className='border-2 border-blue-500 text-3xl rounded-md text-blue-400'>Submit</button>
//             </div>

        
//       </main>

//     </div>
//   )
// }



import Head from "next/head"
import Image from "next/image"
import "tailwindcss/tailwind.css"
import Pic from "./Dashboard.png"
import { Header } from "../../organisms/Header"

export default function Start() {
  return (
    <div className="flex-row dark">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex h-full w-full justify-start items-end flex-row ">
        <Header />
        <div className="h-screen flex justify-center items-center flex-col w-full">
          <h1 className="flex italic text-cyan-400 text-6xl p-6">
            Create Your Project
          </h1>
          <Image class="w-3/6" src={Pic} alt="" width="350px" height="300px" />
          <h3 className="text-xl p-8 text-cyan-600">
            The best feature the ExamApp offers is no doubt the planning for
            tasks and executing them perfectly create your project now to fire
            up your road!
          </h3>

          <div class="mb-6">
            <label
              for="Project Name"
              class="text-3xl text-cyan-700 underline flex justify-center"
            >
              Project Name
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button className="border-2 border-blue-500 text-3xl rounded-md text-blue-400">
            Submit
          </button>
        </div>
      </main>
    </div>
  )
}

