import { format } from "date-fns";
// Let’s say you want to use date-fns (a date formatting library).

/* Even though you’re only using one function, Webpack/Vite might include a large chunk of date-fns in your main bundle.
That slows down the initial load.
*/
const NormalImportTheProblem = () => {
  const today = new Date();
  return <p>Today is {format(today, "MMMM dd, yyyy")}</p>;
}

export default NormalImportTheProblem