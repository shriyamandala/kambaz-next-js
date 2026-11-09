"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const isNew = aid === "new";
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState(
    isNew ? { ...emptyAssignment, course: cid } : existing ?? { ...emptyAssignment, course: cid },
  );

  const handleSave = () => {
    if (isNew) {
      addAssignment(assignment);
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-4 block w-full rounded border border-neutral-300 px-3 py-1.5"
      />
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        rows={8}
        className="mb-4 block w-full rounded border border-neutral-300 px-3 py-1.5"
      />
      <table className="w-full">
        <tbody>
          <tr>
            <td className="pe-4 pb-4 text-right align-middle" width="120">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td className="pb-4">
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: Number(e.target.value),
                  })
                }
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
              />
            </td>
          </tr>
          <tr>
            <td className="pe-4 pb-4 text-right align-top pt-3" width="120">
              <label>Assign</label>
            </td>
            <td className="pb-4">
              <fieldset className="rounded border border-neutral-300 p-4">
                <label htmlFor="wd-due-date" className="mb-1 block font-bold">
                  Due
                </label>
                <input
                  type="date"
                  id="wd-due-date"
                  value={assignment.due}
                  onChange={(e) =>
                    setAssignment({ ...assignment, due: e.target.value })
                  }
                  className="mb-4 w-full rounded border border-neutral-300 px-3 py-1.5"
                />
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="wd-available-from"
                      className="mb-1 block font-bold"
                    >
                      Available from
                    </label>
                    <input
                      type="date"
                      id="wd-available-from"
                      value={assignment.available}
                      onChange={(e) =>
                        setAssignment({ ...assignment, available: e.target.value })
                      }
                      className="w-full rounded border border-neutral-300 px-3 py-1.5"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="wd-available-until"
                      className="mb-1 block font-bold"
                    >
                      Until
                    </label>
                    <input
                      type="date"
                      id="wd-available-until"
                      value={assignment.availableUntil}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          availableUntil: e.target.value,
                        })
                      }
                      className="w-full rounded border border-neutral-300 px-3 py-1.5"
                    />
                  </div>
                </div>
              </fieldset>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => router.push(`/courses/${cid}/assignments`)}
          id="wd-cancel"
          className="rounded border border-neutral-300 px-4 py-2 text-sm"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
