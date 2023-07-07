import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
const Dashboard = () => {
  const [user, setUser] = useState({});
  const [addNotesOpen, setAddNotesOpen] = useState(false);
  useEffect(() => {
    async function getLogin() {
      const res = await fetch("/api/users/login");
      const user = await res.json();
      setUser(user);
      console.log("in use effect", user);
    }

    getLogin();
  }, []);

  return (
    <div>
      {user?.userName}'s DASHBOARDPAGE
      <button
        onClick={() => {
          console.log(addNotesOpen);
          setAddNotesOpen((open) => {
            return !open;
          });
        }}
      >
        Add notes
      </button>
      STUFF ABOVE
      {addNotesOpen && <AddNote setAddNotesOpen={setAddNotesOpen} />}
      STUFF BELOW
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit
        tellus mauris a diam maecenas sed enim. Arcu risus quis varius quam
        quisque id. Vulputate eu scelerisque felis imperdiet proin. Ut pharetra
        sit amet aliquam id diam maecenas ultricies mi. Risus nullam eget felis
        eget nunc lobortis mattis aliquam faucibus. Id aliquet lectus proin nibh
        nisl condimentum id. Mattis nunc sed blandit libero volutpat sed cras
        ornare. Diam donec adipiscing tristique risus nec feugiat in. Diam donec
        adipiscing tristique risus nec feugiat in. Congue nisi vitae suscipit
        tellus. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Sed
        sed risus pretium quam vulputate. Ac odio tempor orci dapibus ultrices
        in. Lacus laoreet non curabitur gravida arcu ac tortor dignissim
        convallis. Enim praesent elementum facilisis leo vel fringilla est
        ullamcorper. Donec et odio pellentesque diam volutpat commodo. Viverra
        justo nec ultrices dui sapien eget mi proin. Nulla porttitor massa id
        neque aliquam vestibulum morbi blandit cursus. Ut venenatis tellus in
        metus vulputate eu. Porttitor eget dolor morbi non arcu risus quis. Est
        ullamcorper eget nulla facilisi etiam dignissim diam. Quis ipsum
        suspendisse ultrices gravida dictum. Etiam sit amet nisl purus in. Nec
        ullamcorper sit amet risus nullam eget felis eget. Quam quisque id diam
        vel quam elementum pulvinar etiam non. Quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat orci. Leo in vitae turpis massa sed
        elementum tempus egestas sed. Facilisis leo vel fringilla est
        ullamcorper eget nulla facilisi etiam. Amet facilisis magna etiam tempor
        orci eu lobortis. Sed viverra ipsum nunc aliquet. Eu nisl nunc mi ipsum
        faucibus vitae. Tristique sollicitudin nibh sit amet commodo nulla
        facilisi nullam. Cursus mattis molestie a iaculis at. Ut lectus arcu
        bibendum at varius vel pharetra. Placerat vestibulum lectus mauris
        ultrices eros in cursus turpis massa. Blandit libero volutpat sed cras
        ornare arcu dui vivamus arcu. Vitae justo eget magna fermentum iaculis
        eu non diam. Cras fermentum odio eu feugiat pretium nibh ipsum. Lorem
        ipsum dolor sit amet. Lobortis scelerisque fermentum dui faucibus in
        ornare quam viverra orci. Lacinia at quis risus sed. In arcu cursus
        euismod quis viverra nibh cras pulvinar. Sagittis aliquam malesuada
        bibendum arcu vitae elementum curabitur vitae. Enim ut sem viverra
        aliquet eget sit amet. Condimentum id venenatis a condimentum vitae
        sapien. Gravida cum sociis natoque penatibus. Non quam lacus suspendisse
        faucibus interdum. Placerat in egestas erat imperdiet sed. Semper eget
        duis at tellus at. Etiam dignissim diam quis enim. Pharetra pharetra
        massa massa ultricies mi quis hendrerit dolor. Mauris a diam maecenas
        sed enim. Vestibulum sed arcu non odio euismod lacinia at quis risus.
        Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Ut aliquam
        purus sit amet luctus venenatis lectus. Nulla aliquet enim tortor at
        auctor urna nunc id. Facilisis magna etiam tempor orci eu lobortis
        elementum nibh tellus. Lacus luctus accumsan tortor posuere ac ut. Eget
        nunc scelerisque viverra mauris in aliquam. Massa ultricies mi quis
        hendrerit dolor magna eget. Vulputate enim nulla aliquet porttitor
        lacus. Diam volutpat commodo sed egestas egestas fringilla phasellus
        faucibus scelerisque. Nisi lacus sed viverra tellus in hac habitasse
        platea. Morbi quis commodo odio aenean sed adipiscing diam donec.
        Elementum pulvinar etiam non quam. Sem et tortor consequat id porta.
        Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Diam
        sollicitudin tempor id eu nisl nunc. Tristique senectus et netus et
        malesuada. Bibendum enim facilisis gravida neque convallis. Faucibus
        turpis in eu mi bibendum neque egestas. Amet nisl purus in mollis nunc
        sed id semper. Odio morbi quis commodo odio aenean sed adipiscing diam
        donec. Odio pellentesque diam volutpat commodo sed egestas egestas
        fringilla phasellus. Tortor consequat id porta nibh venenatis cras.
        Pharetra sit amet aliquam id diam maecenas ultricies. Interdum
        consectetur libero id faucibus nisl tincidunt. Nisl vel pretium lectus
        quam id leo in vitae. Odio eu feugiat pretium nibh ipsum consequat.
      </div>
    </div>
  );
};

export default Dashboard;
