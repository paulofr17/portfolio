import { motion } from 'framer-motion'
import type { Project } from 'models/types'
import { useEffect, useRef, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'

export function Project({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current === null) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasScrolled(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.6, opacity: 0.6 }}
      animate={hasScrolled ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
      className={`mt-6 flex flex-col-reverse gap-6 md:mt-8 ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="my-auto flex-1">
        <img alt={project.name} src={project.image} className="w-full rounded-lg" />
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col gap-3 text-pretty text-center md:max-w-sm md:justify-evenly md:gap-4">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="pb-1 font-rubik text-sm text-gray-700">{project.description}</p>
        <div className="flex justify-center gap-2 text-sm font-semibold min-[500px]:gap-4">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          {project.github && (
            <a
              target="_blank"
              href={project.github}
              className="flex items-center gap-1 rounded-md border border-black/70 px-3 py-2 font-rubik text-sm font-medium transition-colors duration-300 hover:bg-black hover:text-white"
              rel="noreferrer"
            >
              <span>Code</span>
              <AiFillGithub size={22} />
            </a>
          )}
          <a
            target="_blank"
            href={project.liveView}
            className="flex items-center gap-[6px] rounded-md bg-red-500 px-3 py-2 font-rubik text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400"
            rel="noreferrer"
          >
            <span>Live View</span>
            <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
