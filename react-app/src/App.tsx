import './App.css'
import ExpenseList from './expense-tracker/components/ExpenseList'

function App() {
  const expenses = [
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 8.5, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 50, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 63.29, category: 'Utilities' },
  ]

  return (
    <div className='container'>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log('Delete', id)}
      />
    </div>
  )
}

export default App
