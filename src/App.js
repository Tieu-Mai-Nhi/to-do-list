import {useState} from 'react'

function App() {
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  })
  const [job, setJob] = useState('')
 
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      // Save to local Storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }

  const handleDelete = () => {
    
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Todo</h1>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => 
          <li key={index}>{job}{' '}
          <button onClick={handleDelete}>x</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
