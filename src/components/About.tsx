export function About() {
  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col gap-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row-reverse">
        <img
          src="https://via.assets.so/img.jpg?w=250&h=250&tc=white&bg=#cecece"
          className="size-[250px] text-center"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Paulo Ribeiro</h1>
          <h2 className="text-lg font-semibold text-red-500">Full Stack Developer</h2>
          <p className="font-rubik text-sm leading-6 text-gray-700">
            Hi, I'm a Full Stack Developer based in Portugal. Currently working in the Salesforce
            ecosystem but always looking for new challenges.
            <br /> I am enthusiastic about continuously learning and evolving, seeking opportunities
            to contribute with my skills and expertise toward impactful projects that push the
            boundaries of innovation.
          </p>
          <button className="mt-1 w-fit rounded-xl bg-red-500 p-3 text-left font-rubik text-sm font-medium text-white transition hover:bg-red-500/70">
            Download CV
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Education</h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-red-500">
            Bachelor's and Master's Degree in Computer Science
          </h2>
          <p className="font-rubik text-sm leading-6 text-gray-700">
            I graduated in Computer Science from the University of Minho. During my academic
            journey, I developed a solid foundation in computer science principles, including
            programming languages, algorithms, data structures, software engineering, and computer
            architecture.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Skills</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h2 className="mb-3 text-base font-semibold text-red-500 sm:text-lg">
              Salesforce Development
            </h2>
            <ul className="flex list-inside list-disc flex-col gap-2 font-rubik text-xs text-gray-700 sm:text-sm">
              <li>Salesforce Administration</li>
              <li>Integration</li>
              <li>Apex Programming</li>
              <li>SOQL</li>
              <li>Visualforce Pages</li>
              <li>Javascript</li>
              <li>Lightning Web Components</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h2 className="mb-3 text-base font-semibold text-red-500 sm:text-lg">
                Full Stack Development
              </h2>
              <ul className="flex list-inside list-disc flex-col gap-2 font-rubik text-xs text-gray-700 sm:text-sm">
                <li>Next</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>NodeJS</li>
                <li>Prisma</li>
                <li>Relational Databases (MySQL - PostgreSQL)</li>
                <li>NoSQL Databases (MongoDB)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
