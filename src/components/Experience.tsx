export function Experience() {
  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col gap-2">
      <h1 className="text-center text-4xl font-bold">Experience</h1>
      <h2 className="text-center text-lg font-semibold text-red-500">
        Here&apos;s a summary of my professional experience
      </h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Salesforce Developer</h3>
        <p className="mt-2 font-rubik font-medium text-gray-600">Accenture | 2021 - Current</p>
        <ul className="mt-2 list-inside list-disc space-y-1 font-rubik text-sm text-gray-700">
          <li>
            Developing custom user interfaces using Visualforce Pages and Lightning Web Components
          </li>
          <li>
            Writing unit tests and performing code reviews to ensure the quality and stability of
            the solutions developed
          </li>
          <li>
            Implementing complex business logic, triggers, batch processes, and integrations with
            external systems using Apex
          </li>
          <li>
            Collaborating with stakeholders to gather and analyze business requirements, translating
            them into technical specifications
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Data Scientist - Internship</h3>
        <p className="mt-2 font-rubik font-medium text-gray-600">Celfocus | 2020 - 2021</p>
        <ul className="mt-2 list-inside list-disc font-rubik text-sm text-gray-700">
          <li>
            Collaborated with the Quality Assurance (QA) team to integrate AI models into existing
            toolsets, developing a plugin to automate the process of identification and
            classification of vulnerabilities in authentication cookies
          </li>
        </ul>
      </div>
    </div>
  )
}
