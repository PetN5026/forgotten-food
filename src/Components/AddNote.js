import React from "react";

const AddNote = ({ setAddNotesOpen }) => {
  return (
    <>
      This is where you add a note
      <>
        {/* <div
          onClick={() => {
            setAddNotesOpen(false);
          }}
          className="absolute h-full w-screen top-0 left-0"
        ></div> */}{" "}
        <div
          onClick={() => {
            setAddNotesOpen(false);
          }}
          className="opacity-25 fixed inset-0  bg-black"
        ></div>
        {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"> */}
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setAddNotesOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <input
                type="text"
                placeholder="Foods go here"
                className="input input-bordered w-full max-w-xs bg-red-400"
              />
              <input
                type="text"
                placeholder="date place holder"
                className="input input-bordered w-full max-w-xs"
              />
              <textarea
                className="textarea textarea-bordered"
                placeholder="Comments go here"
              ></textarea>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">I</p>
            </div>
            {/*footer*/}
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
          </div>
        </div>
        {/* </div> */}
      </>
    </>
  );
};

export default AddNote;
