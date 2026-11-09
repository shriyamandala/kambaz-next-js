"use client";

import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import ModulesControls from "./ModuleControls";
import Module from "./Module";

export default function Modules() {
  const { cid } = useParams();
  const allModules = useModulesStore((state) => state.modules);
  const modules = allModules.filter((m) => m.course === cid);

  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
