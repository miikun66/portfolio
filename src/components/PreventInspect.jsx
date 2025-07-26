import { useEffect } from "react";

function PreventInspect() {
  useEffect(() => {
    // Cegah klik kanan
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Cegah kombinasi tombol tertentu
    const handleKeyDown = (e) => {
      // Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, F12
      if (
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // Tidak menampilkan apapun
}

export default PreventInspect;
