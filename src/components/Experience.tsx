export function Experience() {
  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col gap-2">
      <h1 className="text-center text-4xl font-bold">Experience</h1>
      <h2 className="text-center text-lg font-semibold text-red-500">
        Here's a summary of my professional experience
      </h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Salesforce Developer</h3>
        <p className="mt-2 font-rubik font-medium text-gray-600">Accenture | 2021 - Current</p>
        <ul className="mt-2 list-inside list-disc font-rubik text-sm text-gray-700">
          <li>
            Designing and implementing custom applications, features, and functionalities using
            Apex, Visualforce, and Lightning components
          </li>
          <li>
            Strong understanding of Salesforce development tools, a proficiency in programming
            languages like Apex and JavaScript, along with a deep comprehension of Salesforce
            architecture and database management
          </li>
          <li>
            Collaborating with stakeholders to gather and analyze business requirements, translating
            them into technical specifications for Salesforce solutions
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Data Scientist - Internship</h3>
        <p className="mt-2 font-rubik font-medium text-gray-600">Celfocus | 2020 - 2021</p>
        <ul className="mt-2 list-inside list-disc font-rubik text-sm text-gray-700">
          <li>
            Collaborated with the Quality Assurance (QA) team to enhance vulnerability analysis
            methodologies by seamlessly integrating AI models into their existing toolsets
          </li>
          <li>
            Conducted comprehensive dataset analysis aimed at uncovering patterns and correlations
            to refine our AI model to yield enhanced and more precise results
          </li>
        </ul>
      </div>
    </div>
  );
}
