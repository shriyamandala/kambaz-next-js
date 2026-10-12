import Link from "next/link";
import { IoClose } from "react-icons/io5";

const field =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";
const rowLabel =
  "pt-2 text-sm text-neutral-800 sm:text-right";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label
          htmlFor="wd-name"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1" className={field} />
      </div>

      <div
        id="wd-description"
        className="mb-6 space-y-3 rounded border border-neutral-300 bg-white p-3 text-sm text-neutral-800"
      >
        <p className="m-0">
          The assignment is{" "}
          <span className="text-red-700">available online</span>
        </p>
        <p className="m-0">
          Submit a link to the landing page of your Web application running on
          Vercel.
        </p>
        <p className="m-0">The landing page should include the following:</p>
        <ul className="m-0 list-disc space-y-1 pl-6">
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kambaz application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p className="m-0">
          The Kambaz application should include a link to navigate back to the
          landing page.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-[160px_1fr]">
        <label htmlFor="wd-points" className={rowLabel}>
          Points
        </label>
        <input id="wd-points" type="number" defaultValue={100} className={field} />

        <label htmlFor="wd-group" className={rowLabel}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className={rowLabel}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={field}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>

        <label htmlFor="wd-submission-type" className={rowLabel}>
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={field}
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mt-4 mb-2 text-sm font-semibold">
            Online Entry Options
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" />
              Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" defaultChecked />
              Website URL
            </label>
            <label
              htmlFor="wd-media-recordings"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-media-recordings" />
              Media Recordings
            </label>
            <label
              htmlFor="wd-student-annotation"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-student-annotation" />
              Student Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" />
              File Uploads
            </label>
          </div>
        </div>

        <span className={rowLabel}>Assign</span>
        <div className="rounded border border-neutral-300 p-4">
          <label
            htmlFor="wd-assign-to"
            className="mb-2 block text-base font-semibold"
          >
            Assign to
          </label>
          <div className="flex items-center gap-2 rounded border border-neutral-300 bg-white px-2 py-2">
            <span className="inline-flex items-center gap-4 rounded bg-neutral-100 px-4 py-1.5 text-sm">
              Everyone
              <IoClose className="text-base" />
            </span>
            <input
              id="wd-assign-to"
              className="min-w-0 flex-1 border-0 py-1 text-sm focus:outline-none"
            />
          </div>

          <label
            htmlFor="wd-due-date"
            className="mt-4 mb-1 block text-sm font-semibold"
          >
            Due
          </label>
          <input type="datetime-local" id="wd-due-date" defaultValue="2024-05-13T23:59" className={field} />

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block text-sm font-semibold"
              >
                Available from
              </label>
              <input type="datetime-local" id="wd-available-from" defaultValue="2024-05-06T00:00" className={field} />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block text-sm font-semibold"
              >
                Until
              </label>
              <input type="datetime-local" id="wd-available-until" className={field} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={4} className={field} />
      </div>

      <hr className="my-6 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
