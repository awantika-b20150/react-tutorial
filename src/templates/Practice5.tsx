import React from 'react';
import { useToDoList } from '../hooks/useToDoList';
import UserInput from '../components/Input';

const Practice5: React.FC = () => {
  const {todos,isAllSelected,task,setTask,addTask,deleteTask,selectAll,toggleCheckbox,deleteSelected} = useToDoList();
  
  return (
    <div className="m-auto flex flex-col gap-4...">
      <UserInput value={task} onChange={(e) => setTask(e.target.value)} onClick={addTask} />
      <div className="mb-4">
        {todos.length > 0 ? (
          <table className="w-full table-auto border-collapse mt-8 text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xl border-b-2 border-gray-300 py-2 px-4 bg-gray-100">
              <tr>
                <th className="relative text-xl font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={selectAll}
                  />
                  {todos.some(todo => todo.isChecked) && (
                    <button
                      onClick={deleteSelected}
                      className="absolute top-[-50px] px-2 py-1 w-16 h-8 text-xs bg-red-500 text-white rounded-md"
                    >
                      一括削除
                    </button>
                  )}
                </th>
                <th>登録日</th>
                <th>内容</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id} className="border-b border-r py-2 px-4">
                  <td className="border-b border-r py-2 px-4">
                    <input
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={() => toggleCheckbox(todo.id)}
                    />
                  </td>
                  <td className="border-b border-r py-2 px-4">{todo.todayDate}</td>
                  <td className="border-b border-r py-2 px-4">{todo.taskName}</td>
                  <td className="border-b py-2 px-4">
                    <button
                      onClick={() => deleteTask(todo.id)}
                      className="px-2 py-1 bg-gray-500 text-white rounded-md text-xs"
                    >
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Practice5;