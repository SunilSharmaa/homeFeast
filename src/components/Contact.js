let Contact = () => {
  return (
    <div className="mt-20 flex h-96 w-full items-center justify-center">
      <div className="h-full w-80 px-12 py-12 bg-gray-200 rounded-xl">
        <h1 className="text-xl font-semibold">Contact us</h1>
        <form className="flex flex-col gap-y-4 mt-6">
          <input
            className="border border-gray-400 px-2 py-1"
            placeholder="name"
          ></input>
          <input
            className="border border-gray-400 px-2 py-1"
            placeholder="email"
          ></input>
          <input
            className="border border-gray-400 px-2 py-1"
            placeholder="message"
          ></input>

          <button className="self-start bg-green-500 px-4 py-1 text-white rounded">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
