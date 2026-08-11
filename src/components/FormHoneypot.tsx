/** Hidden field for basic bot filtering - must stay empty for real users. */
const FormHoneypot = () => (
  <input
    type="text"
    name="_gotcha"
    tabIndex={-1}
    autoComplete="off"
    aria-hidden
    className="pointer-events-none absolute h-0 w-0 opacity-0"
  />
);

export default FormHoneypot;
