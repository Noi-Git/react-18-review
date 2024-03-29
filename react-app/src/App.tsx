import { useState } from 'react'
import './App.css'
import ExpenseList from './expense-tracker/components/ExpenseList'
import ExpenseFilter from './expense-tracker/components/ExpenseFilter'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 8.5, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 50, category: 'Entertainment' },
    { id: 4, description: 'ddd', amount: 63.29, category: 'Groceries' },
  ])

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses

  return (
    <div className='container'>
      <div className='mt-5 mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  )
}

export default App
