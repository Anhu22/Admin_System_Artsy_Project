import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/Settings/PageHeader";
import {
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  Edit,
  X,
  Download,
  CheckCircle,
  Circle,
  BookOpen,
} from "lucide-react";

const mockModules = [
  { id: 1, title: "Module 1 – Intro to Arrays", subject: "DSA", chapter: "Ch 1", test: "Set A", questions: 20, points: 20, paid: "Free", status: "Published", semester: "Sem 1" },
  { id: 2, title: "Module 2 – Linked Lists", subject: "DSA", chapter: "Ch 1", test: "Set B", questions: 25, points: 25, paid: "Paid", status: "Published", semester: "Sem 1" },
  { id: 3, title: "Module 1 – Classes & Objects", subject: "OOP", chapter: "Ch 1", test: null, questions: 0, points: 0, paid: "Free", status: "Draft", semester: "Sem 2" },
  { id: 4, title: "Module 3 – SQL Queries", subject: "DBMS", chapter: "Ch 2", test: "Set C", questions: 30, points: 30, paid: "Paid", status: "Published", semester: "Sem 2" },
  { id: 5, title: "Module 1 – OSI Model", subject: "CN", chapter: "Ch 1", test: "Set A", questions: 15, points: 15, paid: "Free", status: "Pending", semester: "Sem 1" },
];

const ModulesTests = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("All");
  const [subject, setSubject] = useState("All");
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setModules(mockModules);
  }, []);

  useEffect(() => {
    let result = modules;
    if (semester !== "All") result = result.filter(m => m.semester === semester);
    if (subject !== "All") result = result.filter(m => m.subject === subject);
    if (search) {
      const t = search.toLowerCase();
      result = result.filter(m => m.title.toLowerCase().includes(t) || (m.test || "").toLowerCase().includes(t));
    }
    setFiltered(result);
  }, [modules, semester, subject, search]);

  const openContext = (e, item) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
    setSelectedItem(item);
  };

  const closeContext = () => {
    setContextMenu(null);
    setSelectedItem(null);
  };

  const handleEdit = (id) => navigate(`/modules/${id}/edit`);

  return (
    <div className="space-y-6 min-h-screen">
      <PageHeader
        title="Modules & Tests"
        description="Manage modules and linked tests."
        icon={<BookOpen className="h-6 w-6 text-blue-600" />}
      />

      <div className="bg-white rounded-xl border p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search modules..."
              className="pl-10 pr-4 py-2.5 w-full rounded-lg border"
            />
          </div>

          <div className="flex gap-3 items-center">
            <div className="relative">
              <select value={semester} onChange={(e) => setSemester(e.target.value)} className="pl-10 pr-10 py-2.5 rounded-lg border cursor-pointer">
                <option value="All">Semester</option>
                <option value="Sem 1">Sem 1</option>
                <option value="Sem 2">Sem 2</option>
              </select>
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <div className="relative">
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="pl-10 pr-10 py-2.5 rounded-lg border cursor-pointer">
                <option value="All">Subject</option>
                <option value="DSA">DSA</option>
                <option value="OOP">OOP</option>
                <option value="DBMS">DBMS</option>
                <option value="CN">CN</option>
              </select>
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <button onClick={() => { setSemester("All"); setSubject("All"); setSearch(""); }} className="px-3 py-2 rounded-lg border flex items-center gap-2">
              <X className="h-4 w-4" /> Clear
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => navigate("/modules/create")}>
              + Create Module
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4">Module</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Subject</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Chapter</th>
                <th className="text-left px-6 py-4">Test</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Questions</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Points</th>
                <th className="text-left px-6 py-4 hidden md:table-cell">Paid</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.length ? filtered.map(m => (
                <tr key={m.id} className="hover:bg-gray-50" onContextMenu={(e) => openContext(e, m)}>
                  <td className="px-6 py-4">{m.title}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{m.subject}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{m.chapter}</td>
                  <td className="px-6 py-4">
                    {m.test ? <span className="inline-flex items-center px-3 py-1 rounded-lg border text-xs bg-blue-50"><CheckCircle className="w-3 h-3 mr-1" />{m.test}</span> : <span className="text-sm text-gray-400">None</span>}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">{m.questions || "-"}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{m.points || 0}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{m.paid}</td>
                  <td className="px-6 py-4">{m.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(m.id)} className="p-2 border rounded-lg"><Edit className="w-4 h-4" /></button>
                      <button onClick={(e) => openContext(e, m)} className="p-2 border rounded-lg"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="9" className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <Circle className="w-10 h-10 text-gray-300" />
                      <div>No modules found</div>
                      <div className="text-sm text-gray-400">Try modifying filters or create a new module</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing {filtered.length} of {modules.length} modules</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border rounded">Prev</button>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1.5 border rounded">2</button>
            <button className="px-3 py-1.5 border rounded">Next</button>
          </div>
        </div>
      </div>

      {contextMenu && (
        <>
          <div className="fixed z-50 bg-white border rounded shadow py-2" style={{ left: contextMenu.x, top: contextMenu.y }}>
            <button onClick={() => { handleEdit(selectedItem.id); closeContext(); }} className="w-full text-left px-4 py-2 hover:bg-gray-50"><Edit className="w-4 h-4 inline-block mr-2" /> Edit Module</button>
            <button onClick={() => { navigator.clipboard?.writeText(window.location.origin + `/modules/${selectedItem.id}`); closeContext(); }} className="w-full text-left px-4 py-2 hover:bg-gray-50"><Download className="w-4 h-4 inline-block mr-2" /> Copy Link</button>
            <div className="border-t my-1" />
            <button onClick={closeContext} className="w-full text-left px-4 py-2 hover:bg-gray-50">Close</button>
          </div>
          <div className="fixed inset-0 z-40" onClick={closeContext} />
        </>
      )}
    </div>
  );
};

export default ModulesTests;