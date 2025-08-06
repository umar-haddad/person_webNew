import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Contact({ isDark }) {
  const formRef = useRef(null);

  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const shadow = isDark
    ? "shadow-[8px_8px_20px_rgba(255,255,255,0.1)]"
    : "shadow-[8px_8px_20px_rgba(0,0,0,0.1)]";

  // Custom TextField
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: isDark ? "#90caf9" : "#1976d2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: isDark ? "#90caf9" : "#1976d2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: isDark ? "#555" : "#ccc",
      },
      "&:hover fieldset": {
        borderColor: isDark ? "#aaa" : "#1976d2",
      },
      "&.Mui-focused fieldset": {
        borderColor: isDark ? "#90caf9" : "#1976d2",
      },
      backgroundColor: isDark ? "#1f2937" : "#fff",
      color: isDark ? "#fff" : "#000",
    },
    "& .MuiInputBase-input": {
      color: isDark ? "#fff" : "#000",
    },
  });

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        MySwal.fire({
          title: "Success!",
          text: "Message sent successfully, thank you!",
          icon: "success",
          confirmButtonColor: "#3b82f6",
        });
        formRef.current.reset();
        setTimeout(() => (window.location.href = "/"), 2000);
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (error) {
      MySwal.fire({
        title: "Oops!",
        text: "Failed to send message. Try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div
      className={`min-h-[80vh] pt-20 pb-10 px-4 transition-colors duration-500 ${bgColor}`}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`max-w-lg mx-auto p-8 rounded-2xl ${shadow} border transition-colors duration-500 ${bgColor} ${textColor}`}
      >
        {/* Web3Forms Key */}
        <input
          type="hidden"
          name="access_key"
          value="f8e42ec2-ccfc-48ac-a0a5-d0cf7718df85"
        />
        <input
          type="hidden"
          name="subject"
          value="New Message from Portfolio"
        />

        <h2 className="text-center text-2xl font-semibold font-inter mb-6 tracking-wider">
          Contact Me
        </h2>

        <div className="mb-5">
          <CssTextField
            fullWidth
            required
            id="name"
            name="name"
            label="Name"
            variant="outlined"
          />
        </div>

        <div className="mb-5">
          <CssTextField
            fullWidth
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
          />
        </div>

        <div className="mb-6">
          <CssTextField
            fullWidth
            required
            id="message"
            name="message"
            label="Message"
            multiline
            rows={5}
            variant="outlined"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              borderRadius: 9999,
              backgroundColor: isDark ? "#6b7280" : "#9ca3af",
              "&:hover": {
                backgroundColor: isDark ? "#93c5fd" : "#60a5fa",
              },
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              boxShadow: 2,
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
