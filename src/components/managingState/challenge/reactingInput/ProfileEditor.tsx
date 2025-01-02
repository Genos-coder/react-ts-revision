import { ChangeEvent, FormEvent, useState } from "react";

function ProfileEditor() {
  const [edit, setEdit] = useState(false);
  const [person, setPerson] = useState({
    firstName: "Jane",
    lastName: "Jacob",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEdit(false); // Toggle back to view mode after submission
  };

  return (
    <div className="border hover:shadow-md hover:shadow-black border-black p-4 rounded-lg shadow-lg w-2/5">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {/* First Name Field */}
        <div className="flex gap-1">
          <label htmlFor="firstName">First name:</label>
          {edit ? (
            <input
              className="border border-black"
              type="text"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          ) : (
            <p>{person.firstName}</p>
          )}
        </div>

        {/* Last Name Field */}
        <div className="flex gap-1">
          <label htmlFor="lastName">Last name:</label>
          {edit ? (
            <input
              className="border border-black"
              type="text"
              name="lastName"
              value={person.lastName}
              onChange={handleChange}
            />
          ) : (
            <p>{person.lastName}</p>
          )}
        </div>

        {/* Edit and Submit Buttons */}
        {!edit ? (
          <button
            type="button"
            className="border bg-black text-white rounded-lg border-black"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        ) : (
          <button
            type="submit"
            className="border bg-black text-white rounded-lg border-black"
          >
            Submit
          </button>
        )}
      </form>
      <h2 className="my-3">
        Hello {person.firstName} {person.lastName}!
      </h2>
    </div>
  );
}

export default ProfileEditor;

//Error in this component