// "use client";
// import { Box, OutlinedInput } from "@mui/material";
// import React, { useState } from "react";

// const OTPInput = () => {
//   const [otp, setOTP] = useState(["", "", "", ""]);

//   const handleInput = () => {};

//   return (
//     <Box
//       component="div"
//       className={"otp-container"}
//       sx={{
//         my: 4,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 2,
//       }}
//     >
//       {otp.map((item) => {
//         return (
//           <OutlinedInput
//             autoFocus={true}
//             sx={{ height: "60px", width: "60px" }}
//             onChange={() => handleInput()}
//             type="number"
//             inputProps={{ maxLength: 1 }}
//           />
//         );
//       })}
//     </Box>
//   );
// };

// export default OTPInput;
