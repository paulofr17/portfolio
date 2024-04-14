import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-2">
      <h1 className="text-center text-4xl font-bold">Contact</h1>
      <h2 className="text-center text-lg font-semibold text-red-500">
        Reach out to me using one of the following links
      </h2>
      <div className="my-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
        <a
          href="mailto:paulofr17@gmail.com"
          className="flex flex-col items-center rounded-lg bg-white p-6 text-center drop-shadow-md"
        >
          <MdOutlineEmail size={52} className="mb-4 text-red-600" />
          <p className="mb-2 font-semibold">Email</p>
          <p className="font-rubik text-sm text-gray-700 sm:text-base">paulofr17@gmail.com</p>
        </a>
        <a
          href="https://linkedin.com/in/paulo-ribeiro17/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg bg-white p-6 text-center drop-shadow-md"
        >
          <FaLinkedin size={52} className="mb-4 text-sky-700" />
          <p className="mb-2 font-semibold">LinkedIn</p>
          <p className="font-rubik text-sm text-gray-700 sm:text-base">
            linkedin.com/in/paulo-ribeiro17
          </p>
        </a>
        <a
          href="https://github.com/paulofr17/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg bg-white p-6 text-center drop-shadow-md"
        >
          <FaGithub size={52} className="mb-4 text-black" />
          <p className="mb-2 font-semibold">GitHub</p>
          <p className="font-rubik text-sm text-gray-700 sm:text-base">github.com/paulofr17</p>
        </a>
      </div>
    </div>
  )
}
