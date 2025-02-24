import React, { useEffect, useState } from "react";

const HtmlToJsx = ({ filepath }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch(`/${filepath}`)
      .then((response) => response.text())
      .then((html) => {
        // กรองเฉพาะ `<body>` และลบ `<html>` กับ `<head>` ออก
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bodyContent = doc.body.innerHTML; // เอาเฉพาะ `<body>`
        setHtmlContent(bodyContent);
      })
      .catch((error) => console.error("Error loading HTML:", error));
  }, [filepath]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlToJsx;
