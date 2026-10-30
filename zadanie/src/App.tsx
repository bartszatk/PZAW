import { useState } from 'react';


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Zrobić zakupy', completed: false },
    { id: 2, text: 'Wynieść śmieci', completed: true },
    { id: 3, text: 'Odrobić lekcje', completed: false },
  ]);

  const [nextId, setNextId] = useState(4);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [sortType, setSortType] = useState<'original' | 'alphabetical' | 'status'>('original');

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTaskText.trim() === '') return;
    setTasks([
      ...tasks,
      { id: nextId, text: newTaskText.trim(), completed: false },
    ]);
    setNextId(nextId + 1);
    setNewTaskText('');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortType === 'alphabetical') {
      return a.text.localeCompare(b.text);
    }
    if (sortType === 'status') {
      return Number(a.completed) - Number(b.completed);
    }
    return 0;
  });

  const incompleteCount = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <h1>Moja Lista Zadań</h1>
      
      <h4>Zadania do wykonania: <strong>{incompleteCount}</strong></h4>
      
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Nowe zadanie..."
        />
        <button onClick={addTask}>Dodaj</button>
      </div>

      <div>
        <span>Filtry: </span>
        <button onClick={() => setFilter('all')}>Wszystkie</button>
        <button onClick={() => setFilter('incomplete')}>Niewykonane</button>
        <button onClick={() => setFilter('completed')}>Wykonane</button>
      </div>

      <div>
        <span>Sortowanie: </span>
        <button onClick={() => setSortType('original')}>Oryginalne</button>
        <button onClick={() => setSortType('alphabetical')}>Alfabetycznie</button>
        <button onClick={() => setSortType('status')}>Wg stanu</button>
      </div>

      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
              >
                {task.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}