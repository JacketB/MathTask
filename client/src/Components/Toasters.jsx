import { Toaster } from "react-hot-toast";
export default function Tosters() {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "#9bc995",
              color: "white",
              width: "50%",
              height: "50px",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "#C84153",
              color: "white",
              width: "50%",
              height: "50px",
            },
          },
        }}
      />
    </>
  );
}
