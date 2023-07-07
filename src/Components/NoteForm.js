import React, { useRef } from "react";

const NoteForm = ({ setAddNotesOpen, user }) => {
  const foodsRef = useRef("");
  const commentRef = useRef("");
  const dateRef = useRef("");

  async function createNote() {
    console.log(
      foodsRef.current.value,
      commentRef.current.value,
      dateRef.current.value,
      user._id
    );

    try {
      fetch("/api/notes/create", {
        method: "POST",
        body: JSON.stringify({
          food: foodsRef.current.value,
          comments: commentRef.current.value,
          date: dateRef.current.value,
          userId: user._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="foodForm">Food</label>
          <input
            ref={foodsRef}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="foodForm"
            placeholder="Food"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="randomForm">Email address</label>
          <input
            type="email"
            className=" border-2 peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
            id="randomForm"
            placeholder="Email address"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="textareaForm">Message</label>
          <textarea
            ref={commentRef}
            className="resize-none peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="textareaForm"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <label for="dateForm">Date</label>
          <input
            ref={dateRef}
            type={"date"}
            className=" border-2 peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
            id="dateForm"
            placeholder="Email address"
          />
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
            onClick={() => {
              setAddNotesOpen(false);
              createNote();
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
