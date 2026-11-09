import Link from "next/link";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle, FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid, aid, title, available, due, points, onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  available: string;
  due: string;
  points: number;
  onDelete: () => void;
}) {
  return (
    <li className="wd-assignment-list-item flex items-center border border-neutral-300 border-l-[5px] border-l-green-600 bg-white">
      <BsGripVertical className="mx-2 shrink-0 text-xl text-neutral-400" />
      <FaFileAlt className="me-3 shrink-0 text-xl text-green-700" />
      <div className="flex-1 py-3">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link text-lg font-bold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm">
          <span className="text-red-600">Multiple Modules</span>
          <span className="text-neutral-600">
            {" "}| <strong>Not available until</strong> {available} | <strong>Due</strong> {due} | {points} pts
          </span>
        </div>
      </div>
      <button
        type="button"
        className="shrink-0 px-2 text-red-600"
        onClick={onDelete}
      >
        <FaTrash />
      </button>
      <FaCheckCircle className="mx-1 shrink-0 text-xl text-green-600" />
      <BsThreeDotsVertical className="mx-2 shrink-0 text-neutral-500" />
    </li>
  );
}
