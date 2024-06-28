import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskNo, setTaskNo] = useState(0);

  const addTask = () => {
    if (taskName.trim() === '') return;

    setTaskNo(prevTaskNo => prevTaskNo + 1);
    setTasks(prevTasks => [
      ...prevTasks,
      { id: taskNo + 1, name: taskName, status: 'Processing' }
    ]);
    setTaskName('');
  };

  const completeTask = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: 'Completed' } : task
      )
    );
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className="text-center font-sans p-4">
      <h1 className="bg-purple-500 text-white shadow-md p-4 rounded text-3xl">Task Manager</h1>
      <p className="font-bold text-xl mt-4">Task Name :</p>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="p-2 w-64 shadow-md border border-gray-300 rounded mb-4"
      />
      <button
        id="addTaskButton"
        onClick={addTask}
        className="p-2 w-24 bg-blue-500 text-white font-bold shadow-md transition-all duration-500 ease-in-out hover:shadow-none rounded"
      >
        Add Task
      </button>
      <div className="mt-6">
        <table id="task-list" className="table-auto w-full bg-white shadow-lg rounded">
          <thead>
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id} id={task.id.toString()} className="bg-gray-100 border-b">
                <td id={`t${task.id}`} className="px-4 py-2">{task.name}</td>
                <td className="px-4 py-2">{task.status}</td>
                <td className="px-4 py-2">
                  {task.status === 'Processing' && (
                    <button
                      onClick={() => completeTask(task.id)}
                      className="p-2 bg-green-500 text-white rounded"
                    >
                      Complete Task
                    </button>
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 bg-red-500 text-white rounded"
                  >
                    Delete Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
