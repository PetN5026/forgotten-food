import React from "react";

const NoteForm = ({ setAddNotesOpen }) => {
  return (
    <>
      <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="exampleInput7">Name</label>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="exampleInput8">Email address</label>
          <input
            type="email"
            className=" border-2 peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
            id="exampleInput8"
            placeholder="Email address"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="exampleFormControlTextarea13">Message</label>
          <textarea
            className="resize-none peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea13"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setAddNotesOpen(false)}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setAddNotesOpen(false)}
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
