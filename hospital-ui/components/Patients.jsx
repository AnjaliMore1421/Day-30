// src/components/Patients.jsx
import { useState, useEffect } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Table from "./ui/Table";

export default function Patients() {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleSave = () => {
    if (!name || !age) return;

    if (editingId) {
      setPatients(
        patients.map((p) =>
          p.id === editingId ? { ...p, name, age } : p
        )
      );
    } else {
      setPatients([...patients, { id: Date.now(), name, age }]);
    }

    resetForm();
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const editPatient = (p) => {
    setName(p.name);
    setAge(p.age);
    setEditingId(p.id);
    setOpen(true);
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setEditingId(null);
    setOpen(false);
  };

  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <h2 style={{ margin: 0 }}>Patients</h2>
        <Button onClick={() => setOpen(true)}>+ Add Patient</Button>
      </div>

      {/* Modal */}
      <Modal isOpen={open} onClose={resetForm}>
        <h3>{editingId ? "Edit Patient" : "Add Patient"}</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <Input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />

          <Button onClick={handleSave}>
            {editingId ? "Update" : "Save"}
          </Button>
        </div>
      </Modal>

      {/* Table Card */}
      <div className="card">
        <Table
          columns={["Name", "Age"]}
          data={patients}
          renderActions={(p) => (
            <>
              <Button variant="outline" onClick={() => editPatient(p)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => deletePatient(p.id)}>
                Delete
              </Button>
            </>
          )}
        />
      </div>
    </div>
  );
}