import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import "./RequestsPage.css";

export default function RequestsPage() {

  const [requests, setRequests] = useState([
    {
      id: 1,
      patient: "Nimal Perera",
      type: "Kidney Donation",
      hospital: "Colombo General Hospital",
      status: "Pending",
      category: "",
      rejectNote: "",
    },
    {
      id: 2,
      patient: "Kavindi Silva",
      type: "Blood Request",
      hospital: "Kandy Hospital",
      status: "Pending",
      category: "",
      rejectNote: "",
    },
  ]);

  // CATEGORY CHANGE
  const handleCategoryChange = (id, value) => {

    const updated = requests.map((req) =>
      req.id === id
        ? { ...req, category: value }
        : req
    );

    setRequests(updated);
  };

  // APPROVE REQUEST
  const approveRequest = (id, category) => {

    if (!category) {
      alert("Please select category first");
      return;
    }

    const confirmApprove = window.confirm(
      `Approve this request as ${category}?`
    );

    if (confirmApprove) {

      const updated = requests.map((req) =>
        req.id === id
          ? {
              ...req,
              status: "Approved",
            }
          : req
      );

      setRequests(updated);
    }
  };

  // REJECT REQUEST
  const rejectRequest = (id) => {

    const note = prompt("Enter rejection reason");

    if (!note) {
      alert("Rejection reason required");
      return;
    }

    const confirmReject = window.confirm(
      "Are you sure you want to reject this request?"
    );

    if (confirmReject) {

      const updated = requests.map((req) =>
        req.id === id
          ? {
              ...req,
              status: "Rejected",
              rejectNote: note,
            }
          : req
      );

      setRequests(updated);
    }
  };

  return (

    <div className="requestsPage">

      <AdminNavbar />

      <div className="requestsContainer">

        <div className="topSection">
          <h1>Request Management</h1>
          <p>
            Verify, approve, categorize, or reject medical requests
          </p>
        </div>

        {/* REQUEST LIST */}
        <div className="requestGrid">

          {requests.map((req) => (

            <div className="requestCard" key={req.id}>

              <div className="statusBadge">
                {req.status}
              </div>

              <h2>{req.patient}</h2>

              <p>
                <strong>Request:</strong> {req.type}
              </p>

              <p>
                <strong>Hospital:</strong> {req.hospital}
              </p>

              {/* CATEGORY SELECT */}
              <div className="categoryBox">

                <label>Select Category</label>

                <select
                  value={req.category}
                  onChange={(e) =>
                    handleCategoryChange(
                      req.id,
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Choose Category
                  </option>

                  <option value="Critical">
                    Critical
                  </option>

                  <option value="Normal">
                    Normal
                  </option>

                  <option value="Urgent">
                    Urgent
                  </option>

                </select>

              </div>

              {/* SHOW CATEGORY */}
              {req.status === "Approved" && (
                <div className="approvedCategory">
                  Approved as: {req.category}
                </div>
              )}

              {/* SHOW REJECT NOTE */}
              {req.status === "Rejected" && (
                <div className="rejectNote">
                  Rejected Reason: {req.rejectNote}
                </div>
              )}

              {/* BUTTONS */}
              <div className="btnGroup">

                <button
                  className="approveBtn"
                  onClick={() =>
                    approveRequest(
                      req.id,
                      req.category
                    )
                  }
                >
                  Approve
                </button>

                <button
                  className="rejectBtn"
                  onClick={() =>
                    rejectRequest(req.id)
                  }
                >
                  Reject
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}