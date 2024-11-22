import dynamic from 'next/dynamic';
import React from 'react'
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
import 'suneditor/dist/css/suneditor.min.css';

const EditorComponent = () => {

  const sortedFontOptions = [
    "Arial",
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    "Comic Sans MS",
    "Courier New",
    "Impact",
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Verdana"
  ].sort();

  return (
    <>
      <SunEditor 
        height="200px" 
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
            ["table", "link", "image", "video"],
            ["preview", "print"],
            ["removeFormat"]
          ], 
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          font: sortedFontOptions,
          defaultStyle: 'font-family: Arial; font-size: 16px;',
        }}
        
      />
    </>
  )
}

export default EditorComponent