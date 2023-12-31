import React from "react";
import NoteForm from "./NoteForm";
const AddNote = ({ setAddNotesOpen, user }) => {
  return (
    <>
      <div className="fixed w-screen h-screen">
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
              <h3 className="text-3xl font-semibold">Add Note</h3>
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
              <NoteForm setAddNotesOpen={setAddNotesOpen} user={user} />
              <p className="my-4 text-slate-500 text-lg leading-relaxed">I</p>
            </div>
            {/*footer*/}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AddNote;
