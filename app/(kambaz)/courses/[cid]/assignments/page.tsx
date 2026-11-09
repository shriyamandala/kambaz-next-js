"use client";

import { useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { FaCaretDown, FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const assignments = allAssignments.filter((a) => a.course === cid);
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pendingAssignment = assignments.find((a) => a._id === pendingDeleteId);

  const confirmDelete = (id: string) => {
    setPendingDeleteId(id);
    dialogRef.current?.showModal();
  };

  const handleConfirm = () => {
    if (pendingDeleteId) deleteAssignment(pendingDeleteId);
    setPendingDeleteId(null);
    dialogRef.current?.close();
  };

  const handleCancel = () => {
    setPendingDeleteId(null);
    dialogRef.current?.close();
  };

  return (
    <div id="wd-assignments">
      <dialog
        ref={dialogRef}
        className="rounded-lg border border-neutral-300 p-6 shadow-lg backdrop:bg-black/40"
      >
        <h3 className="mb-2 text-lg font-semibold">Confirm Delete</h3>
        <p className="mb-4 text-sm">
          Are you sure you want to remove the assignment{" "}
          <strong>{pendingAssignment?.title}</strong>?
        </p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded border px-3 py-1.5 text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            id="wd-confirm-delete-assignment"
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Delete
          </button>
        </div>
      </dialog>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => router.push(`/courses/${cid}/assignments/new`)}
          >
            <FaPlus /> Assignment
          </button>
          <BsThreeDotsVertical className="text-neutral-500" />
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="flex items-center border border-neutral-300 bg-neutral-100 p-3 text-lg font-semibold"
      >
        <BsGripVertical className="me-2 text-xl text-neutral-400" />
        <FaCaretDown className="me-2" />
        <span className="flex-1">ASSIGNMENTS</span>
        <span className="me-3 rounded-full border border-neutral-400 px-3 py-0.5 text-xs font-normal">
          40% of Total
        </span>
        <FaPlus className="me-2 text-sm" />
        <BsThreeDotsVertical className="text-neutral-500" />
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={cid}
            aid={assignment._id}
            title={assignment.title}
            available={assignment.available}
            due={assignment.due}
            points={assignment.points}
            onDelete={() => confirmDelete(assignment._id)}
          />
        ))}
      </ul>
    </div>
  );
}
