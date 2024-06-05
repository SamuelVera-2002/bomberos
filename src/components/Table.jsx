export default function Table(){
    return(

<div className="px-28 overflow-x-auto mb-10">
  <h1>Table Example</h1>
  <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm rounded shadow">
    <thead className="ltr:text-left rtl:text-right bg-red-600">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr className="text-center">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Samuel Vera</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/2002</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr>

      <tr className="text-center">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jeremy Raga</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1999</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
      </tr>

      <tr className="text-center">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Orlando Pacheco</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$80,000</td>
      </tr>
    </tbody>
  </table>
</div>

    )
}