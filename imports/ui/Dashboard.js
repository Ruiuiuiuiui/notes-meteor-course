import React from "react";

import PrivateHeader from "./PrivateHeader";
import NoteList from "./NoteList";
import Editor from "./Editor";

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="page-content">Dashboard page content.</div>
      <NoteList />
      <Editor />
    </div>
  );
};
