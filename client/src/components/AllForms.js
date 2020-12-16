import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AllForms() {
//   let history = useHistory();

//   const [formData, setFormData] = useState([]);

//   const [tableData, setTableData] = useState({
//     colums: [
//       "First Name",
//       "Last Name",
//       "Request Type",
//       "Claim Number",
//       "PDF Link",
//     ],
//   });

//   useEffect(() => {
//     const getForms = async () => {
//       const data = await axios.get("api/form");
//       console.log(data);
//       setFormData(data.data);
//       console.log(formData);
//     };
//     getForms();
//   }, []);

//   const handleHomeClick = (event) => {
//     event.preventDefault();
//     history.push("/");
//   };

//   const handleBackClick = (event) => {
//     event.preventDefault();
//     history.goBack();
//   };

//   return (
//     <div class="container">
//       <h2 className="text-center mt-3 mb-3">All RFA Forms</h2>

//       <hr className="mb-4"></hr>
//       <hr></hr>

//       <table class="table table-hover">
//         <thead>
//           <tr>
//             {tableData.colums.map((column, index) => {
//               return <th scope="col">{column}</th>;
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {formData.map((row, index) => {
//             return (
//               <tr>
//                 <td scope="col">{row.Employee.firstName}</td>
//                 <td scope="col"> {row.Employee.lastName}</td>
//                 <td scope="col">{row.requestType}</td>
//                 <td scope="col">{row.Employee.claimNumber}</td>
//                 <td scope="col">
//                 <a target="_blank" href={row.pdfURL} class="text-decoration-none" > Download PDF<svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     class="bi bi-file-earmark-arrow-down-fill"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4a.5.5 0 0 0-1 0v3.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 11.293V7.5z"
//                     ></path>
//                   </svg>
//                 </a>
//                 </td>

                
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div className="row">
//         <div className="col text-center">
//           <button
//             onClick={handleBackClick}
//             type="submit"
//             value="back"
//             class="btn btn-secondary back-button m-3"
//           >
//             {" "}
//             Back{" "}
//           </button>
//           <button
//             onClick={handleHomeClick}
//             type="submit"
//             value="next"
//             class="btn btn-secondary next-button m-3"
//           >
//             {" "}
//             Submit Another Form{" "}
//           </button>
//         </div>
//       </div>
//     </div>
//   );

return (
  <div>Hello</div>
)

}


export default AllForms;
